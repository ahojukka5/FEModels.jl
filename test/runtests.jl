# This file is a part of JuliaFEM
# License is MIT: see https://github.com/JuliaFEM/FEModels.jl/blob/master/LICENSE

using Base.Test
using FEModels

@testset "download file" begin
    fn = fe_download("block-and-cylinder", "mesh_sparse.inp", "50dbcbbcf4504c1a8746bc2a0655b69de4604276")
    @test isfile(fn)
end
