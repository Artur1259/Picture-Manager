import { useState } from "react";
import FormFiles from "./FormFiles";
import FormRange from "./FormRange";
import FormPassword from "./FormPassword";
import ProgressButton from "./ProgressButton";
import HideWorker from "../workers/Hide.worker";

const StepsHide = () => {
    const [image, setImage] = useState([]);
    const [files, setFiles] = useState([]);
    const [compression, setCompression] = useState(9);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hiding, setHiding] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);

    const hideFiles = () => {
        setHiding(true);
        const worker = new HideWorker();
        worker.onmessage = ({ data: { progress, result } }) => {
            console.log(result);
            setProgress(progress);
            setResult(result);
        };
        worker.postMessage({
            image,
            files,
            compression,
            password,
        });
    };

    return (
        <>
        <div className="w-full bg-gray-600 border-b border-solid border-gray-900 mb-10"></div>
        <form id="form" className="grid gap-32 py-32 container xl:max-w-screen-xl mx-auto px-8">
            <div>
                <p className="mb-8">
                Ավելացրեք այն պատկերը, որի ներսում ցանկանում եք թաքցնել ֆայլերը
                </p>
                <FormFiles
                    type="նկար"
                    accept="image/*"
                    files={image}
                    setFiles={setImage}
                />  
            </div>
            <div>
                <p className="mb-8">Ավելացրեք այն ֆայլերը, որոնք ցանկանում եք թաքցնել</p>
                <FormFiles multiple type="ֆայլ" files={files} setFiles={setFiles} />
            </div>
            <div>
                <p className="mb-8">Ընտրեք սեղմման մակարդակը</p>
                <FormRange
                    min={0}
                    max={9}
                    step={1}
                    value={compression}
                    onChange={setCompression}
                />
            </div>
            <div>
                <p className="mb-8">
                Ընտրեք և հաստատեք գաղտնաբառը{" "}
                    {/* <span className="text-gray-400">(optional)</span> */}
                </p>
                <FormPassword
                    value={password}
                    confirm={confirmPassword}
                    onChange={setPassword}
                    onConfirm={setConfirmPassword}
                    valid={password === confirmPassword}
                />
            </div>
            <div>
                <ProgressButton
                    onClick={hideFiles}
                    progress={progress}
                    download={result && URL.createObjectURL(result)}
                >
                    {result
                        ? "Ներբեռնել"
                        : hiding
                        ? "Թաքցնել ֆայլը..."
                        : "Թաքցնել ֆայլը պատկերի մեջ"}
                </ProgressButton>
            </div>
        </form>
        </>
    );
};

export default StepsHide;
