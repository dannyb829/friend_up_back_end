class FriendsController < ApplicationController
  before_action :find_friend, only: %i[show update destroy]

  def create
    friend = Friend.create!(friend_params)
    params[:groups].each do |group|
      GroupFriend.create!(
        group: Group.find_by!(group_name: group),
        friend: friend
      )
    end
    render json: friend, status: :created
  end

  def update
    @friend.update!(friend_params)
    @friend.friendships.find_by!(user: @current_user).update!(friendship_params)

    # create new group_friend if adding new group
    params[:groups].each do |name|
      if !@friend.groups.pluck(:group_name).include?(name)
        @friend.group_friends.create!(
          group_id: Group.find_by(group_name: name).id
        )
      end
    end

    #destroy existing group_friends that are no longer listed
    @friend.group_friends.each do |gf|
      gf.destroy if !params[:groups].include?(gf.group.group_name)
    end

    render json: @current_user
  end

  def show
    render json: @friend
  end

  # DELETE /friends/:id
  def destroy
    @friend.destroy

    render json: @current_user, status: :accepted
  end

  private

  def find_friend
    @friend = Friend.find(params[:id])
  end

  def all_params
    params.permit(
      :first_name,
      :last_name,
      :email,
      :phone_number,
      :image_url,
      :description,
      :communication_reminder_interval,
      :communication_max,
      :meeting_reminder_interval,
      :meeting_max
    )
  end

  def friend_params
    all_params.slice(
      :first_name,
      :last_name,
      :email,
      :phone_number,
      :image_url,
      :description
    )
  end

  def friendship_params
    all_params.slice(
      :communication_reminder_interval,
      :communication_max,
      :meeting_reminder_interval,
      :meeting_max
    )
  end
end
