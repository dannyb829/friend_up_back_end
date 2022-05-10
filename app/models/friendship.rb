class Friendship < ApplicationRecord
    belongs_to :user 
    belongs_to :friend

    # validate :singular_friendship

    # def singular_friendship
    #     render json: { error: "Friendship already established" }, status: 422 unless
    # end

end
