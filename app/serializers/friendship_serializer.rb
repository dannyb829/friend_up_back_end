class FriendshipSerializer < ActiveModel::Serializer
  attributes :id,
             :friendship_score,
             :status,
             :is_need_attention?,
             :communication_status,
             :meeting_status,
             :days_since_communication,
             :days_since_meeting,
             :friend

  # belongs_to :friend
end
