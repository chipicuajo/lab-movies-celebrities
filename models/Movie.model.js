const { Schema, model } = require("mongoose");
require("./Celebrity.model");

const modelSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [
      {
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Movie = model("Movie", modelSchema);

module.exports = Movie;
