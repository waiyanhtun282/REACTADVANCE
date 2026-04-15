import { useEffect, useState } from "react";

type UseQueryType<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

const baseURL = "https://reqres.in/api/";
export function useQuery<T = unknown>(endpoint: string): UseQueryType<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        setIsLoading(true);
        const response = await fetch(baseURL + endpoint, {
          headers: {
            "x-api-key":
              "pub_2c64ba05b9c400043d0b67cd5850ef14a984ee78b228fb6386e28b0f79163f12", // ✅ required API key
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        // console.log("Result:", result);
        setData(result);
        // console.log(data)
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}
