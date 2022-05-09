class GroupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_name
end
