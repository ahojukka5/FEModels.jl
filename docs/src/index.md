# FEModels.jl documentation

```@contents
```

FEModels.jl is a simple interface to make it easy to fetch finite element meshes
and models from `JuliaFEM/FEModels` repository.

## Installing and testing package

```julia
Pkg.add("FEModels")
```

## Usage example

Give model name (directory name in repository) and mesh name (without .gz):

```julia
fn = fe_download("block-and-cylinder", "mesh_sparse.inp")
```

Then you should have extracted model in `block-and-cylinder/mesh_sparse.inp`.
`fn` is filename to mesh file which can then be read e.g. using `AbaqusReader.jl`:

```julia
using AbaqusReader
mesh = abaqus_read_mesh(fn)
```

## Contibuting

Contributors are needed. Todo:

* list all models in repository
* possibility to upload models or automate upload process somehow

