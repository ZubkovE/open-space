import { CSSProperties } from "react";
import { MoonLoader } from "react-spinners";
const override: CSSProperties = {
    display: "block",
    margin: "100% auto",
};

const LoadPage = () => {
    
    return (
        <div className="load-page h-full">
            <h1 className='w-[206px] h-[120px] leading-[40px] text-[42px] ml-[30px] pt-[80px]'>OPEN SPACE AI</h1>
            <MoonLoader
                cssOverride={override}
                color="#4A74B9"
                loading={true}
            />
        </div>
    )
}

export default LoadPage;