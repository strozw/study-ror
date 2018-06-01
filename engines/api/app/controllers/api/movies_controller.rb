require_dependency "api/application_controller"

module Api
  class MoviesController < ApplicationController
    def index
      @movies = Graph::Movie.all
      render json: @movies
    end

    def show
    end
  end
end
