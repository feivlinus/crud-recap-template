import useSWR from "swr";
import LoadingAnimation from "@/components/LoadingAnimation";
import Recipe from "@/components/Recipe";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`api/services/${id}`);

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

      <Recipe apiData={data}></Recipe>
    </>
  );
}
