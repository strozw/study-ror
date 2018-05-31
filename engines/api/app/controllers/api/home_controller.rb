# frozen_string_literal: true

require_dependency "api/application_controller"

module Api
  class HomeController < ApplicationController
    def index
      @p = Graph::Person.find_by(name: "Tom Hanks")
      render json: @p
    end
  end
end
