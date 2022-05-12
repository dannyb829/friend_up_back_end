class FriendSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :email,
             :phone_number,
             :image_url,
             :description,
             :friendships,
             :groups
    # has_many :groups
    def groups
      object.groups
    end
end
