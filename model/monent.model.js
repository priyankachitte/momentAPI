module.exports = mongoose => {
    const Moments = mongoose.model(
      "moment",
      mongoose.Schema(
        {
          title: String,
          userId: String,
          images: Array,
          tags: Array,
          comment: String,
          createdAt: Date,
          updatedAt: Date
        },
        { timestamps: true }
      )
    );
  
    return Moments;
  };
