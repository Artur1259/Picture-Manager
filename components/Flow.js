import { useState } from "react";
import ChooseFlow from "./ChooseFlow";
import StepsFind from "./StepsFind";
import StepsHide from "./StepsHide";

const Flow = () => {
    const [flow, setFlow] = useState(null);
    const ChosenFlow = flow === "find" ? StepsFind : StepsHide;

    return (
        <main className="relative">
            <div className="absolute top-0 pt-4 w-full bg-gradient-to-b opacity-50 border-b border-solid border-gray-900"></div>
            <div className="py-32 container xl:max-w-screen-xl mx-auto px-8">
                <noscript>
                    <div className="mb-32 bg-gradient-to-b from-white to-white p-8 -mx-8 sm:-mx-4 sm:rounded-lg shadow-lg">
                        PictureManager requires JavaScript to hide and find files
                        within images!
                    </div>
                </noscript>
                <ChooseFlow onChoice={setFlow} />
            </div>
            <ChosenFlow />
            {/* <div className="absolute bottom-0 pt-32 w-full bg-gradient-to-t from-gray-200 to-gray-100 opacity-10"></div> */}
        </main>
    );
};

export default Flow;
