
class Graph::produced
  include Neo4j::ActiveRel

  type "PRODUCED"
  from_class "Graph::Person"
  to_class "Graph::Movie"
end
