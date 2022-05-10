class Friend < ApplicationRecord
    has_many :friendships, dependent: :destroy
    has_many :users, through: :friendships
    has_many :interactions
    # i do not feel that there is a need for the second 
    # has many users being that that relatioship
    # is already created above. not to mention the possible conflict
    # within active record
    # has_many :users, through: :interactions
    has_many :group_friends
    has_many :groups, through: :group_friends
end
