class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image_url

  has_many :friendships
end
