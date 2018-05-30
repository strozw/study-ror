# frozen_string_literal: true

class Graph::ActedIn
  include Neo4j::ActiveRel

  from_class Graph::Person
  to_class Graph::Movie

  property :roles
end
