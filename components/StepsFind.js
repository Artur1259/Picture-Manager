import { useState } from "react";
import FormFiles from "./FormFiles";
import FormPassword from "./FormPassword";
import ProgressButton from "./ProgressButton";
import FindWorker from "../workers/Find.worker";

const StepsFind = () => {
    const [image, setImage] = useState([]);
    const [password, setPassword] = useState("");
    const [finding, setFinding] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);

    const findFiles = () => {
        setFinding(true);
        const worker = new FindWorker();

        worker.onmessage = ({ data: { progress, result } }) => {
            setProgress(progress);
            setResult(result);
        };

        worker.postMessage({
            image,
            password,
        });
    };

    return (
        <form id="form" className="grid gap-32 py-32 container xl:max-w-screen-xl mx-auto px-8">
            <div>
                <p className="mb-8">
                Ավելացրեք այն պատկերը, որից ցանկանում եք վերականգնել ֆայլերը
                </p>
                <FormFiles
                    type="նկար"
                    accept="image/*"
                    files={image}
                    setFiles={setImage}
                />
            </div>
            <div>
                <p className="mb-8">
                    Մուտքագրեք ֆայլերը թաքցնելու համար օգտագործվող գաղտնաբառը{" "}
                    <span className="text-gray-400"></span>
                </p>
                <FormPassword value={password} onChange={setPassword} />
            </div>
            <div>
                <ProgressButton
                    onClick={findFiles}
                    progress={progress}
                    download={result && URL.createObjectURL(result)}
                >
                    {result
                        ? "Ներբեռնել ֆայլերը"
                        : finding
                        ? "Finding files..."
                        : "Պատկերի ներսում ֆայլերի որոնում"}
                </ProgressButton>
            </div>
        </form>
    );
};

export default StepsFind;
