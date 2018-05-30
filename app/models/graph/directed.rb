class Graph::Directed
  include Neo4j::ActiveRel

  type "DIRECTED"
  from_class "Graph::Person"
  to_class "Graph::Movie"
end
