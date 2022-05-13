class FriendshipSerializer < ActiveModel::Serializer
  attributes :id,
             :friendship_score,
             :status,
             :is_need_attention?,
             :communication_status,
             :meeting_status,
             :friend,
             :last_communication_date,
             :last_meeting_date,
             :meeting_reminder_interval,
             :meeting_max,
             :communication_reminder_interval,
             :communication_max,
             :groups,
             :user,
             :group_names

  def groups
    object.friend.groups.where(user_id: user)
  end

  # # belongs_to :friend, include: :groups
  def user
    object.user.id
  end
end
