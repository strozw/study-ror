require_dependency "api/application_controller"

module Api
  class PersonController < ApplicationController
    def index

      @person = Graph::Person.all
      render json: @person
    end

    def show
    end
  end
end
