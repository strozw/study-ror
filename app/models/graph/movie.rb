# frozen_string_literal: true

class Graph::Movie
  include Neo4j::ActiveNode

  self.mapped_label_name = "Movie"
  id_property :neo_id

  property :title, type: String
  property :tagline, type: String
  property :released, type: Date


  has_many :in, :actors, model_class: "Graph::Person", rel_class: "Graph::ActedIn"
  has_many :in, :directors, model_class: "Graph::Person", rel_class: "Graph::Directed"
  has_many :in, :reviewers, model_class: "Graph::Person", rel_class: "Graph::Reviewed"
  has_many :in, :producers, model_class: "Graph::Person", rel_class: "Graph::Produced"
  has_many :in, :writers, model_class: "Graph::Person", rel_class: "Graph::Wrote"
end
