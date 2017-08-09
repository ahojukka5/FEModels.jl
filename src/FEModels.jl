# This file is a part of JuliaFEM
# License is MIT: see https://github.com/JuliaFEM/FEModels.jl/blob/master/LICENSE

module FEModels

using GZip

"""
    fe_download(model, mesh)

Download finite element mesh from FEModels repository.
"""
function fe_download(model, mesh, version)
#   url = "https://github.com/JuliaFEM/FEModels/blob/$version/$model/$mesh.gz?raw=true"
    url = "https://raw.githubusercontent.com/JuliaFEM/FEModels/$version/$model/$mesh.gz"
    isdir(model) || mkdir(model)
    local_file = joinpath(model, mesh)
    local_file_packed = "$local_file.gz"
    download(url, local_file_packed)
    fh_packed = GZip.open(local_file_packed)
    data = read(fh_packed)
    close(fh_packed)
    fh_unpacked = open(local_file, "w")
    write(fh_unpacked, data)
    close(fh_unpacked)
    return local_file
end

"""
    fe_list()

List all finite element models / meshes in FEModels repository.
"""
function fe_list()
    error("Not implemented.")
end

export fe_download

end
