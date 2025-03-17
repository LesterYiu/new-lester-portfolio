import { draftMode } from "next/headers";
import { getHomePage } from "@/lib/api";


export default async function Page() {
	const { isEnabled } = draftMode();
	const results = await getHomePage(isEnabled);
	// console.log(results)

	return (
		<div className="bg-gradient-to-b from-green to-white w-full h-[200vh]">

		</div>
	);
}
