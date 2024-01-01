import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch"; 
import { useTitle } from "../hooks/useTitle";

export const Search = ({api}) => {
  const[SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const { data:movies } = useFetch(api, queryTerm);

  useTitle(`Search for '${queryTerm}'`);
 
  return (
    <main className="justify-start">
      <section>
        <p className=" max-w-7xl mx-auto flex justify-start flex-wrap text-3xl text-gray-700 dark:text-white">{ movies.length===0 ? `No Result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          )) }
        </div>
      </section>
    </main>
  )
}
