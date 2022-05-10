class FriendshipSerializer < ActiveModel::Serializer
  attributes :id,
             :friendship_score,
             :status,
             :is_need_attention?,
             :communication_status,
             :meeting_status

  belongs_to :friend
end
