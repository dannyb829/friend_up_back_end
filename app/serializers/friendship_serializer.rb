class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id, :meeting_reminder_interval, :meeting_max, :communication_reminder_interval, :communication_max, :friendship_score
end
