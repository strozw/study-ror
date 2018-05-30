# frozen_string_literal: true

class Graph::ActedIn
  include Neo4j::ActiveRel

  type "ACTED_IN"
  from_class "Graph::Person"
  to_class "Graph::Movie"

  property :roles
end
