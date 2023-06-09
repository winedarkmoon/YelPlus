import { connect } from "react-redux";
import BizIndex from "./index";
import { fetchYelpData } from '../../utils/api.js';

const mapStateToProps = state => {
    return {
        businesses: state.businesses.businesses || [],
    };
};

const mapDispatchToProps = dispatch => ({
    fetchYelpData: (term, location, price) => dispatch(fetchYelpData(term, location, price)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BizIndex);