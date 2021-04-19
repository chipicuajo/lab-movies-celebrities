const { Schema, model } = require("mongoose");

const modelSchema = new Schema(
  {
    name: String,
    occupation: {
      type: String,
      enum: ["actor", "singer", "comedian", "unknown"],
    },
    catchPhrase: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Celebrity = model("Celebrity", modelSchema);

module.exports = Celebrity;
