class FriendsController < ApplicationController
    before_action :find_friend, only: [:show]

    def show
        render json: @friend
    end


    private

    def find_friend
        @friend = Friend.find(params[:id])
    end

end
