class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # GET /me
  def show
    if params[:id]
      user = User.find(params[:id])
      render json: user
    else
      render json: @current_user
    end
  end

  # PATCH /users/:id
  def update
    @current_user.update!(user_params)
    render json: @current_user, status: :accepted
  end

  private

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :email,
      :phone_number,
      :image_url,
      :password,
      :password_confirmation
    )
  end
end
