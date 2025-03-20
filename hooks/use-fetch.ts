import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { onboardingSchema } from "@/lib/schema";


const useFetch = (cb: (...args: any) => Promise<any>) => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);



  const func = async (...args: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      return response;
    } catch (error: any) {
      setError(error);
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, func, setData };
}

export default useFetch;
