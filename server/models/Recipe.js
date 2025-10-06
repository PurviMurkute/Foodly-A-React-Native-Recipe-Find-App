import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  title: String,
  image: String,
  recipeId: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Recipe = model("Recipe", recipeSchema);

export default Recipe;