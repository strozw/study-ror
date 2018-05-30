# frozen_string_literal: true

class Graph::Wrote
  include Neo4j::ActiveRel

  type "WROTE"
  from_class "Graph::Person"
  to_class "Graph::Movie"
end
