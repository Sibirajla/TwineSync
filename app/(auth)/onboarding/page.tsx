import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";



async function Page() {
  return (
    <main>
      <h1 className='head-text'>Onboarding</h1>
    </main>
  );
}

export default Page;
