import connect from "@/db/connect";
import Recipe from "@/db/Models/Recipe";

export default async function handler(request, response) {
  //Datenbankverbindung
  await connect();

  if (request.method === "GET") {
    const recipes = await Recipe.find();
    response.status(200).json(recipes);
  }
}
