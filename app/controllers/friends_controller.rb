class FriendsController < ApplicationController
    before_action :find_friend, only: [:show, :update]

    def create 
        friend = Friend.create!(friend_params)
        params[:groups].each { |group| GroupFriend.create!(group: Group.find_by!(group_name:group), friend: friend)}
        render json: friend, status: :created
    end

    def update 
        @friend.update!(friend_params)
        render json: @current_user
    end

    def show 
        render json: @friend
    end
    
    private

    def find_friend
        @friend = Friend.find(params[:id])
    end

    def friend_params
        params.permit(
            :first_name, 
            :last_name, 
            :email, 
            :phone_number, 
            :image_url, 
            :description
        )
    end

end
