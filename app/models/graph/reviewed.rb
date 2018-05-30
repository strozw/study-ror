# frozen_string_literal: true

class Graph::Reviewed
  include Neo4j::ActiveRel

  type "REVIEWED"
  from_class "Graph::Person"
  to_class "Graph::Movie"

  property :summary, type: String
  property :rating, type: Integer
end
