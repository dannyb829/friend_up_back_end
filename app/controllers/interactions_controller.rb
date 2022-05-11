class InteractionsController < ApplicationController

    def index 
        interactions = Interaction.where(user_id: session[:user_id])
        render json: interactions
    end
end
