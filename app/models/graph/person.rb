# frozen_string_literal: true

class Graph::Person
  include Neo4j::ActiveNode

  self.mapped_label_name = 'Person'

  property :name, type: String
  property :born, type: Date

  has_many :out, :acted_movies, model_class: "Graph::Movie", rel_class: "Graph::ActedIn"
  #has_many :out, :acted_movies, model_class: "Graph::Movie", rel_class: "Graph::ActedIn"
  #has_many :out, :directed_movies, model_class: "Graph::Movie", rel_class: "Graph::Directed"
  #has_many :out, :reviewed_movies, model_class: "Graph::Movie", rel_class: "Graph::Reviewed"
  #has_many :out, :produced_movies, model_class: "Graph::Movie", rel_class: "Graph::Produced"
  #has_many :out, :wrote_movies, model_class: "Graph::Movie", rel_class: "Graph::Wrote"
end
