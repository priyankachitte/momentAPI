module.exports = mongoose => {
    const Users = mongoose.model(
      "users",
      mongoose.Schema(
        {
          firstName: String,
          lastname: String,
          mobile: String,
          email: String,
          city: String,
          password: String,
          createdAt: Date,
          updatedAt: Date
        },
        { timestamps: true }
      )
    );
  
    return Users;
  };
