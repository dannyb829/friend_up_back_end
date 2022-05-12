class FriendSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :email,
             :phone_number,
             :image_url,
             :description,
             :friendships,
             :group_names
end
