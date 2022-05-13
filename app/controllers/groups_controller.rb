class GroupsController < ApplicationController
  before_action :find_group, only: %i[update destroy]

  def index
    groups = Group.where(user_id: session[:user_id])
    render json: groups
  end

  def create
    group = @current_user.groups.create!(group_params)
    render json: @current_user, status: :created
  end

  # PATCH /groups/:id
  def update
    @group.update!(group_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /groups/:id
  def destroy
    @group.destroy

    render json: @current_user, status: :accepted
  end

  private

  # permissible params to be used by create/update
  def group_params
    params.permit(:group_name)
  end

  # set instance variable for show/update/destroy
  def find_group
    @group = Group.find(params[:id])
  end
end
