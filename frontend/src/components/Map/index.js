import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import './Map.css';
class MapBox extends React.Component {
    map = null;
    constructor(props) {
        super(props);
        this.state = {
            markers: []
        }
    }
    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-117.16, 32.71], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
    }

    componentWillUnmount() {
        // Remove all popups
        Object.values(this.state.markers).forEach(({ marker, popup }) => {
            popup.remove();
            marker.remove();
        });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.coordinates !== this.props.coordinates && this.props.coordinates) {
            const { longitude, latitude } = this.props.coordinates;
            this.map.setCenter([longitude, latitude]);
        }


        if (prevProps.businesses !== this.props.businesses && this.props.businesses) {
            // Remove old markers
            Object.values(this.state.markers).forEach(({ marker }) => marker.remove());
            // Clear markers object
            this.setState({ markers: {} });

            let coordinatesArray = [];
            let markers = {};
            this.props.businesses.forEach(business => {
                const { latitude, longitude } = business.coordinates;
                coordinatesArray.push([longitude, latitude]);

                // Create a new marker
                const marker = new mapboxgl.Marker()
                    .setLngLat([longitude, latitude])
                    .addTo(this.map);
                const popup = new mapboxgl.Popup({ offset: [0, -15] })
                    .setLngLat([longitude, latitude])
                    .setHTML(`<h1>${business.name}</h1>`);

                marker.getElement().addEventListener('mouseenter', () => {
                    this.map.getCanvas().style.cursor = 'pointer';
                    popup.addTo(this.map);
                });

                marker.getElement().addEventListener('mouseleave', () => {
                    this.map.getCanvas().style.cursor = '';
                    popup.remove();
                });

                markers[business.id] = { marker, popup }; // Store marker and popup with business id
            });

            this.setState({ markers }); // Update state with marker and popup info


            // Determine bounding box and fit map to these bounds
            if (coordinatesArray.length > 0) {
                const lats = coordinatesArray.map(coord => coord[1]);
                const lngs = coordinatesArray.map(coord => coord[0]);
                const bounds = [
                    [Math.min(...lngs), Math.min(...lats)], // southwest coordinates
                    [Math.max(...lngs), Math.max(...lats)]  // northeast coordinates
                ];
                this.map.fitBounds(bounds, { padding: 50 });
            }
        }

        // If hovered item has changed, update popups accordingly
        if (prevProps.hoveredItem !== this.props.hoveredItem) {
            // If there was previously a hovered item, remove its popup
            if (prevProps.hoveredItem && this.state.markers[prevProps.hoveredItem]) {
                this.state.markers[prevProps.hoveredItem].popup.remove();
            }

            // If there is currently a hovered item, show its popup
            if (this.props.hoveredItem && this.state.markers[this.props.hoveredItem]) {
                this.state.markers[this.props.hoveredItem].popup.addTo(this.map);
            }
        }
    }

    render() {
        return (
            <div ref={el => this.mapContainer = el} className='map' />
        );
    }
}

export default MapBox;
