class CreateFriendships < ActiveRecord::Migration[6.1]
  def change
    create_table :friendships do |t|
      t.integer :user_id
      t.integer :friend_id
      t.integer :meeting_reminder_interval
      t.integer :meeting_max
      t.integer :communication_reminder_interval
      t.integer :communication_max
      t.integer :friendship_score

      t.timestamps
    end
  end
end
