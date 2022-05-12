class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :image_url,
             :friends_needing_attention

  has_many :friendships
  has_many :interactions
end
