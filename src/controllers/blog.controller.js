import mongoose from "mongoose";
import Blog from "../models/blog.model.js";

const createBlog = async (req, res) => {
  try {
    const { title, category, description, short_description } = JSON.parse(
      req.body.data
    );
    console.log("Data", req.body.data);
    const img = req.file.path;
    console.log("Image: ", img);

    let data = await Blog.create({
      title,
      category,
      description,
      short_description,
      img,
    });
    res.status(200).json({
      success: true,
      message: "Blog created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Blog Get All with Pagination

const allBlog = async (req, res) => {
  try {
    // let pageNo = Number(req.params.pageNo);
    // let perPage = Number(req.params.perPage);

    // let skipRow = (pageNo - 1) * perPage;

    // let sortStage = { createdAt: -1 };
    // let facetStage = {
    //   $facet: {
    //     totalCount: [{ $count: "count" }],
    //     blogs: [
    //       { $sort: sortStage },
    //       { $skip: skipRow },
    //       { $limit: perPage },
    //       {
    //         $project: {
    //           title: 1,
    //           img: 1,
    //           category: 1,
    //           description: 1,
    //           short_description: 1,
    //         },
    //       },
    //     ],
    //   },
    // };

    let blogs = await Blog.find();

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Blog Get Single
const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Blog.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "blogID",
          as: "comments",
        },
      },
      {
        $project: {
          title: 1,
          img: 1,
          category: 1,
          description: 1,
          sortDescription: 1,
          createdAt: 1,
          comments: 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Blog update single
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, category, description, sortDescription } = req.body;

    let data = await Blog.findByIdAndUpdate(
      id,
      { title, img, category, description, sortDescription },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Blog delete single
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

const blogControllers = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};
export default blogControllers;
