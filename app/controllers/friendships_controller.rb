class FriendshipsController < ApplicationController

    def create 
        friendship = @current_user.friendships.create!(friendship_params)

        render json: friendship, status: :created
    end


    private 

    def friendship_params
        params.permit(
            :friend_id,
            :meeting_reminder_interval,
            :meeting_max,
            :communication_reminder_interval,
            :communication_max
        )
    end
end
