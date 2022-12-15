import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Create
export const create = async(req, res) => {
    try{
        const{
            title,
            director,
            genre,
            plot
        } = req.body
        const createMovie = await prisma.movie.create({
            data:{
                title,
                director,
                genre,
                plot
            }
        })
        //return new movie
        return res.status(201).json({
            data: createMovie,
            info: "Movie Added"
        });
    } catch (err) {
        console.log(err);
    }
}

//Read and search
export const readAll = async(req, res) => {
    try{
        const findAll = await prisma.movie.findMany({});
        return res.json(findAll);
    } catch(err) {
        return res.json({
            error: err.message
        })
    }
}

//Details
export const readOne = async(req, res) => {
    try{
        const { id } = req.params
        const findOne = await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })
        return res.json(findOne)
    } catch (err) {
        console.log(err);
        return res.json({
            info: "Cannot read this movie info",
            error: err.message
        })
    }
}

//Update
export const update = async(req, res) => {
    try{
        const { id } = req.params
        const {
            title,
            director,
            genre,
            plot
        } = req.body;
        const updateMovie = await prisma.movie.update({
            where: {
                id: Number(id),
            },
            data: {
                title: title,
                director: director,
                genre: genre,
                plot: plot
            },
        })
        return res.json(updateMovie)
    } catch(err) {
        console.log(err);
        return res.json({
            info: "Cannot update movie info",
            error: err.message
        })
    }
}

//Delete
export const deleteOne = async(req, res) => {
    try{
        const { id } = req.params
        const deleteMovie = await prisma.movie.delete({
            where: {
                id: Number(id),
            },
        })
        return res.json({
            info: "Product successfully deleted",
            data: deleteMovie
        })
    } catch(err) {
        console.log(err.message);
        return res.json({
            info: "Movie has been already deleted",
        })
    }
}