class AddDetailsToIntetractions < ActiveRecord::Migration[6.1]
  def change
    add_column :interactions, :user_id, :integer
    add_column :interactions, :friend_id, :integer
    add_column :interactions, :in_person?, :boolean
    add_column :interactions, :date, :datetime
    add_column :interactions, :score, :float
    add_column :interactions, :location_or_method, :string
    add_column :interactions, :description, :string
  end
end
