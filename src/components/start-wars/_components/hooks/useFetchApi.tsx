import { useState, useEffect } from "react";

const useFetchApi = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

    const fetchCharacters = async () => {
      try {
        const res = await fetch(
          "https://starwars-databank-server.vercel.app/api/v1/characters",
        );
        const data = await res.json();

        setCharacters(data?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

  // const fetchCharacters = () => {
  //   fetch("https://starwars-databank-server.vercel.app/api/v1/characters")
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data?.data || []))
  //     .catch((err) => setError(err instanceof Error ? err : new Error(String(err))))
  //     .finally(() => setLoading(false));
  // };

  return { characters, loading, error };
};

export default useFetchApi;
