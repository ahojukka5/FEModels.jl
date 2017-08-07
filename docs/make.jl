# This file is a part of JuliaFEM.
# License is MIT: see https://github.com/JuliaFEM/FEModels.jl/blob/master/LICENSE

using Documenter, FEModels

makedocs(modules=[FEModels],
         format = :html,
         sitename = "FEModels.jl",
         pages = [
                  "Introduction" => "index.md",
                  "API" => "api.md"
                 ])
