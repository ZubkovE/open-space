import { CSSProperties } from "react";
import { MoonLoader } from "react-spinners";
const override: CSSProperties = {
    display: "block",
};

const LoadPage = () => {

    return (
        <div className="load-page h-screen">
            <h1 className='w-[50vw] leading-[40px] text-[42px] ml-[30px] pt-[60px]'>OPEN SPACE AI</h1>
            <div className="fixed top-0 flex items-center justify-center h-screen w-screen">
                <span><MoonLoader
                    cssOverride={override}
                    color="#4A74B9"
                    loading={true}
                />
                </span>
            </div>
        </div>
    )
}

export default LoadPage;