import useSWR from "swr";
import LoadingAnimation from "@/components/LoadingAnimation";
import RecipeGallery from "@/components/RecipeGallery";

export default function HomePage() {
  const { data, isLoading } = useSWR("api/services");

  if (!data || isLoading) {
    return (
      <>
        <LoadingAnimation></LoadingAnimation>
      </>
    );
  }

  return (
    <>
      <h1>Look at my Recipes</h1>

      <RecipeGallery apiData={data}></RecipeGallery>
      {/* {data.map((recipe) => (
        <>
          <ul>
            <li key={recipe._id}>Name: {recipe.title}</li>
            <li key={recipe._id}>Zubreitungszeit: {recipe.preparationTime}</li>
            <li key={recipe._id}>ImageUrl: {recipe.imageUrl}</li>
            <p>Zutaten</p>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient._id}>
                  {ingredient.quantity} - {ingredient.name}
                </li>
              ))}
            </ul>
          </ul>
        </>
      ))} */}
    </>
  );
}
