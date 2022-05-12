class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :image_url,
             :friends_needing_attention,
             :interactions

  has_many :friendships
  has_many :groups

  def interactions
    object.interactions.order(date: :desc)
  end
end
