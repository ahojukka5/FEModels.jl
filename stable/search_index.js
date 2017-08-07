var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#FEModels.jl-documentation-1",
    "page": "Introduction",
    "title": "FEModels.jl documentation",
    "category": "section",
    "text": "FEModels.jl is a simple interface to make it easy to fetch finite element meshes and models from JuliaFEM/FEModels repository."
},

{
    "location": "index.html#Installing-and-testing-package-1",
    "page": "Introduction",
    "title": "Installing and testing package",
    "category": "section",
    "text": "Pkg.add(\"FEModels\")"
},

{
    "location": "index.html#Usage-example-1",
    "page": "Introduction",
    "title": "Usage example",
    "category": "section",
    "text": "Give model name (directory name in repository) and mesh name (without .gz):fn = fe_download(\"block-and-cylinder\", \"mesh_sparse.inp\")Then you should have extracted model in block-and-cylinder/mesh_sparse.inp. fn is filename to mesh file which can then be read e.g. using AbaqusReader.jl:using AbaqusReader\nmesh = abaqus_read_mesh(fn)"
},

{
    "location": "index.html#Contibuting-1",
    "page": "Introduction",
    "title": "Contibuting",
    "category": "section",
    "text": "Contributors are needed. Todo:list all models in repository\npossibility to upload models or automate upload process somehow"
},

{
    "location": "api.html#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#API-documentation-1",
    "page": "API",
    "title": "API documentation",
    "category": "section",
    "text": ""
},

{
    "location": "api.html#FEModels.fe_download-Tuple{Any,Any}",
    "page": "API",
    "title": "FEModels.fe_download",
    "category": "Method",
    "text": "fe_download(model, mesh)\n\nDownload finite element mesh from FEModels repository.\n\n\n\n"
},

{
    "location": "api.html#FEModels.fe_list-Tuple{}",
    "page": "API",
    "title": "FEModels.fe_list",
    "category": "Method",
    "text": "fe_list()\n\nList all finite element models / meshes in FEModels repository.\n\n\n\n"
},

{
    "location": "api.html#Index-1",
    "page": "API",
    "title": "Index",
    "category": "section",
    "text": "DocTestSetup = quote\n    using FEModels\nendModules = [FEModels]"
},

]}
