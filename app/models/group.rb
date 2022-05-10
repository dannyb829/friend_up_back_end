class Group < ApplicationRecord
    belongs_to :user 
    has_many :group_friends
    has_many :friends, through: :group_friends

    validates :group_name, presence: true
end
