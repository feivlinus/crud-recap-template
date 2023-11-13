import mongoose from "mongoose";

const { Schema } = mongoose;

//Zutaten-Liste-Schema
const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String, // Sie könnten auch einen spezielleren Typ für Mengen verwenden, je nach Anforderungen
    required: true,
  },
});

//Rezept-Schema
//beinhaltet Zutaten-Liste-Schema
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [ingredientSchema], // Ein Array von Zutatenobjekten
    required: true,
  },
  preparationTime: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
