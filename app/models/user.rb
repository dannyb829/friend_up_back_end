class User < ApplicationRecord
    has_secure_password
    
    has_many :interactions
    # has_many :friends, through: :interactions
    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships
    has_many :groups


    validates_format_of :email, :with => /\A[^@,\s]+@[^@,\s]+\.[^@,\s]+\z/
    validates :first_name, presence: true
    validates :last_name, presence: true
end
