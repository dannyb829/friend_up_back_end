class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :authorize

  private

  def authorize
    render json: { error: "Not authorized" }, status: 401 unless User.find_by(id: session[:user_id])
  end

  def record_not_found
    render json: {error: "#{controller_name.classify} not found"}, status: 404
  end

  def record_invalid(invalid)
    render json: {error: invalid}, status: 422
  end

end
