import { ImageObj } from "../utility/types";

interface FeatureObj {
    title : string;
    description : string;
    image : ImageObj
}

export const Feature = ({ title, description, image } : FeatureObj) => {

    return (

		<div
			{
				...{
					className : 'relative h-[400px] md:h-[500px] bg-cover w-full bg-bottom border rounded-2xl'
				}
			}
		>
			<div className="relative z-20 max-w-screen-lg m-auto w-full h-full text-white space-y-4 p-6 text-center">
                { image &&
                    <img className="select-none pointer-events-none" src={ image?.url } alt="" />
                }
				{ title &&
                    <h2 className="font-jost text-2xl text-black text-left font-medium whitespace-break-spaces">
                        { title }
                    </h2>
				}
				{ description &&
                    <p className="font-jost text-md text-left text-black">
                        { description }
                    </p>
				}
			</div>
			{/* <div className="z-10 absolute top-0 left-0 w-full h-full bg-black opacity-50 mix-blend-multiply"/> */}
		</div>

    );

}

export default Feature;