class User < ApplicationRecord
    has_secure_password
    
    has_many :interactions
    has_many :friends, through: :interactions
    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships
end
