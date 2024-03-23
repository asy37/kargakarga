"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const App = () => {
  const router = useRouter()
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      const stringfiyData = JSON.stringify(data.user);
      const token = JSON.parse(stringfiyData)?.id
      localStorage.setItem('token',token )
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [data,router]);
  return null;
};

export default App;
