class InteractionsController < ApplicationController
  before_action :find_interaction, only: %i[update destroy]

  def index
    interactions = Interaction.where(user_id: session[:user_id])
    render json: interactions
  end

  # POST /interactions
  def create
    new_interaction = @current_user.interactions.create!(interaction_params)
    render json: @current_user, status: :created
  end

  # PATCH /interactions/:id
  def update
    @interaction.update!(interaction_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /interactions/:id
  def destroy
    @interaction.destroy

    render json: @current_user, status: :accepted
  end

  private

  # set instance variable for show/update/destroy
  def find_interaction
    @interaction = Interaction.find(params[:id])
  end

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
