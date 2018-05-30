# frozen_string_literal: true

require_dependency "api/application_controller"

module Api
  class HomeController < ApplicationController
    def index
      render json: {}
    end
  end
end
