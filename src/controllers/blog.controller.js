import Blog from "../models/blog.model.js";

const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const result = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong",
    });
  }
};
const allBlog = async (_, res) => {
  console.log("I am here!");

  const blogs = await Blog.find();
  try {
    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong",
    });
  }
};
const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong",
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, img, description, short_description } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        category,
        img,
        description,
        short_description,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong",
    });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong",
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
