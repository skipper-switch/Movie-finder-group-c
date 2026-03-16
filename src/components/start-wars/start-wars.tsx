import useFetchApi from "./_components/hooks/useFetchApi";
import StartwarsCard from "./_components/startwars-card";

const StartWars = () => {

    const { characters, loading, error} = useFetchApi()



    console.log("char", characters)

    if(loading) return <div className="flex items-center justify-center">Loading...</div>
    if(error) return <div>Error: {error.message}</div>
  

  return (
    <div className="grid place-items-center gap-5">
      <h1 className="text-2xl text-blue-500">Star Wars Characters</h1>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {
           characters.map((char: any, index: number) => (
            <div key={index}>
                <StartwarsCard {...char} />
        
            </div>

           ))
        }
        
      </div>
    </div>
  );
};

export default StartWars;
