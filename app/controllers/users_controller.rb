class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: 422
        end
    end

    def show
        if params[:id]
        user = User.find_by(id: params[:id])
            render json: user
        else
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok 
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end   
    end 
    end


    private

    def user_params
        params.permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end

end
