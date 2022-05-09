class CreateGroupFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :group_friends do |t|
      t.integer :group_id
      t.integer :friend_id

      t.timestamps
    end
  end
end
