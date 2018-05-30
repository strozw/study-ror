class Graph::Directed
  include Neo4j::ActiveRel

  from_class Graph::Person
  to_class Graph::Movie
end
