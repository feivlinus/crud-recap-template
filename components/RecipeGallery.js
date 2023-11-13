import styled from "styled-components";
import Link from "next/link";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

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

export default function RecipeGallery({ apiData }) {
  return (
    <GalleryContainer>
      {apiData.map((recipe) => (
        <>
          <RecipeCardHover>
            <Link href={`/${recipe._id}`}>
              <RecipeImage src={recipe.imageUrl} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
            </Link>
          </RecipeCardHover>
        </>
      ))}
    </GalleryContainer>
  );
}
