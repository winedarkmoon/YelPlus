class Api::SessionsController < ApplicationController
  def show
    if current_user
      render "api/users/show"
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:credential],
      params[:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: { errors: ["The provided credentials were invalid."] }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      logout
      render json: { message: "Logged out successfully" }, status: :ok
    else
      render json: { errors: ["Nobody signed in"] }, status: :not_found
    end
  end
end
