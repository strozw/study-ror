# frozen_string_literal: true

Rails.application.routes.draw do
  root "root#index"
  mount Api::Engine => "/api"
end
