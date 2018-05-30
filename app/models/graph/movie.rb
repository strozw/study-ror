# frozen_string_literal: true

class Graph::Movie
  include Neo4j::ActiveNode
  property :title, type: String
  property :tagline, type: String
  property :released, type: Date
end
