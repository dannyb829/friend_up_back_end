class Friend < ApplicationRecord
    has_many :friendships, dependent: :destroy
    has_many :users, through: :friendships
    has_many :interactions
    has_many :users, through: :interactions
    has_many :group_friends
    has_many :groups, through: :group_friends
end
