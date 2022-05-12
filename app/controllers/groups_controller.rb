class GroupsController < ApplicationController
  before_action :find_group, only: %i[update]

  def index
    groups = Group.where(user_id: session[:user_id])
    render json: groups
  end

  def create
    group =
      Group.create!(user_id: session[:user_id], group_name: params[:group_name])
    render json: group
  end

  # PATCH /groups/:id
  def update
    @group.update!(group_params)
    render json: @current_user, status: :accepted
  end

  def destroy
    Group.find(params[:id]).destroy
    head :no_content
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
