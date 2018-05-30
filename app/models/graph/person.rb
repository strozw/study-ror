# frozen_string_literal: true

class Graph::Person
  include Neo4j::ActiveNode
  property :name, type: String
  property :born, type: Date
end
