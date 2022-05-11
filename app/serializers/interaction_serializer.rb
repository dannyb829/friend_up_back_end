class InteractionSerializer < ActiveModel::Serializer
  attributes :id, 
            :friend_id, 
            :in_person?, 
            :date, 
            :score, 
            :location_or_method,
            :description
end
