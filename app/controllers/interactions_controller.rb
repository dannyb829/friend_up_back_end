class InteractionsController < ApplicationController
  def index
    interactions = Interaction.where(user_id: session[:user_id])
    render json: interactions
  end

  # POST /interactions
  def create
    new_interaction = @current_user.interactions.create!(interaction_params)
    render json: @current_user, status: :created
  end

  private

  # permissible params to be used by create/update
  def interaction_params
    params.permit(
      :friend_id,
      :in_person?,
      :date,
      :score,
      :location_or_method,
      :description
    )
  end
end
