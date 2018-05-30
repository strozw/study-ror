# frozen_string_literal: true

class Graph::Reviewed
  include Neo4j::ActiveRel

  from_class Graph::Person
  to_class Graph::Movie

  property :summary, type: String
  property :rating, type: Integer
end
