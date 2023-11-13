import styled from "styled-components";
import Link from "next/link";

const RecipeCard = styled.div`
  position: relative;
  overflow: hidden;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
`;

const RecipeTitle = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  color: #fff;
  font-size: 18px;
`;

const RecipeCardHover = styled(RecipeCard)`
  &:hover ${RecipeImage} {
    transform: scale(1.1);
  }
`;

const Recipe = ({ apiData }) => {
  //   {
  //     apiData.map((recipe) => (
  //       <>
  //         <ul>
  //           <li key={recipe._id}>Name: {recipe.title}</li>
  //           <li key={recipe._id}>Zubreitungszeit: {recipe.preparationTime}</li>
  //           <li key={recipe._id}>ImageUrl: {recipe.imageUrl}</li>
  //           <p>Zutaten</p>
  //           <ul>
  //             {recipe.ingredients.map((ingredient) => (
  //               <li key={ingredient._id}>
  //                 {ingredient.quantity} - {ingredient.name}
  //               </li>
  //             ))}
  //           </ul>
  //         </ul>
  //       </>
  //     ));
  //   }

  return (
    <>
      <RecipeCardHover>
        <Link href={`/${apiData._id}`}>
          <RecipeImage src={apiData.imageUrl} alt={apiData.title} />
          <RecipeTitle>{apiData.title}</RecipeTitle>
        </Link>
      </RecipeCardHover>
      <p>{apiData.preparationTime} minutes</p>
      <ul>
        {apiData.ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipe;
