# frozen_string_literal: true

Rails.application.routes.draw do
  mount Api::Engine => "/api"

  root "root#index"
  get "/*path", to: "root#index"
end
