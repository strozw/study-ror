# frozen_string_literal: true

FactoryBot.define do
  factory :graph_person, class: "Graph::Person" do
    name "MyString"
    born "2018-05-31"
  end
end
