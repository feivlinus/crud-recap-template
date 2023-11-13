import connect from "@/db/connect";
import Recipe from "@/db/Models/Recipe";

export default async function handler(request, response) {
  //Datenbankverbindung
  await connect();

  if (request.method === "GET") {
    const recipe = await Recipe.findById(request.query.id);

    if (!recipe) {
      response.status(404).json({ message: "Not found." });
    }

    response.status(200).json(recipe);
  }
}
