class Friend < ApplicationRecord
  has_many :friendships, dependent: :destroy
  has_many :users, through: :friendships
  has_many :interactions, dependent: :destroy

  # i do not feel that there is a need for the second
  # has many users being that that relatioship
  # is already created above. not to mention the possible conflict
  # within active record
  # has_many :users, through: :interactions
  has_many :group_friends, dependent: :destroy
  has_many :groups, through: :group_friends

  def most_recent_communication_date
    communication = interactions.where(in_person?: false).order(:date).last
    communication ? communication.date.to_date : nil
  end

  def most_recent_meeting_date
    meeting = interactions.where(in_person?: true).order(:date).last
    meeting ? meeting.date.to_date : nil
  end

  def group_names
    groups.pluck { |g| g.group_name }
  end
end
