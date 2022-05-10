class GroupsController < ApplicationController

    def index 
        groups = Group.where(user_id: session[:user_id])
        render json: groups
    end

    def create 
        group = Group.create!(user_id: session[:user_id], group_name: params[:group_name])
        render json: group
    end

    def destroy
        Group.find(params[:id]).destroy
        head :no_content
    end

end
