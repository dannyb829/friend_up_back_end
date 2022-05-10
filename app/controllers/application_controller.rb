class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :authorize

  private

  def authorize
    @current_user = user.find_by(id: session[:user_id])

    unless @current_user
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  def record_not_found
    render json: { error: "#{controller_name.classify} not found" }, status: 404
  end

  def record_invalid(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: 422
  end
end
