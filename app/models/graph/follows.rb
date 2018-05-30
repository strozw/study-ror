# frozen_string_literal: true

class Graph::Follows
  include Neo4j::ActiveRel

  from_class Graph::Person
  to_class Graph::Person
end
