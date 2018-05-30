# frozen_string_literal: true

FactoryBot.define do
  factory :graph_movie, class: "Graph::Movie" do
    title "MyString"
    tagline "MyString"
    released "2018-05-31"
  end
end
