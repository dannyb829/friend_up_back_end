class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend

  def days_since_communication
    if friend.most_recent_communication_date
      (Date.today - friend.most_recent_communication_date).to_i
    else
      '-'
    end
  end

  def days_since_meeting
    if friend.most_recent_meeting_date
      (Date.today - friend.most_recent_meeting_date).to_i
    else
      '-'
    end
  end

  def communication_status
    if friend.most_recent_communication_date
      days_since = (Date.today - friend.most_recent_communication_date).to_i

      case true
      when days_since > communication_max
        return 'poor'
      when days_since >= communication_reminder_interval
        return 'warning'
      else
        return 'good'
      end
    else
      'warning'
    end
  end

  def meeting_status
    if friend.most_recent_meeting_date
      days_since = (Date.today - friend.most_recent_meeting_date).to_i

      case true
      when days_since > meeting_max
        return 'poor'
      when days_since >= meeting_reminder_interval
        return 'warning'
      else
        return 'good'
      end
    else
      'warning'
    end
  end

  def status
    if (communication_status == 'poor' || meeting_status == 'poor')
      return 'poor'
    elsif (communication_status == 'waring' || meeting_status == 'warning')
      return 'warning'
    else
      return 'good'
    end
  end

  def is_need_attention?
    return self.status != 'good'
  end

  def group_names
    return friend.groups.pluck(:group_name)
  end
end
