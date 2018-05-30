$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "api/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "api"
  s.version     = Api::VERSION
  s.authors     = ["strozw"]
  s.email       = ["sxtxrxoxzxw@gmail.com"]
  s.homepage    = ""
  s.summary     = "Summary of Api."
  s.description = "Description of Api."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.2.0"

  s.add_development_dependency "sqlite3"
end
