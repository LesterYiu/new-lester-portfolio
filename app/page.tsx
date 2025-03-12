import { draftMode } from "next/headers";
import { getHomePage } from "@/lib/api";


export default async function Page() {
  const { isEnabled } = draftMode();
  const results = await getHomePage(isEnabled);
  console.log(results)

  return (
    <div className="container mx-auto px-5">

    </div>
  );
}
