import friensIcon from "../assets/icon-1.svg"
import copyIcon from "../assets/copy-icon.svg"
import React from "react"
import Modal from "./Modal"


const ruText = '👆Твое приглашение здесь\n' +
    '\n' +
    'Заходи в Open Space AI!'

const copyTextToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Текст успешно скопирован в буфер обмена!');
    } catch (err) {
        console.error('Ошибка:', err);
    }
};

const MainPage = () => {
    const [isCopied, setIsCopied] = React.useState(false);
    const [isMounted, setMounted] = React.useState(false);
    //const [progressLevel, setProgressLevel] = React.useState(2);

    React.useEffect(() => {
        // setTimeout(()=> setCount(count + 1), 5000)
        setTimeout(() => setMounted(true), 30000)
    }, [])

    return (
        <>
            <Modal {... { isMounted }} />
            <div className="main-page h-full flex flex-col items-center px-[10px]">
                <h1 className="text-3xl mt-[16px]">МОЯ ПЛАНЕТА</h1>
                <div className="flex flex-col items-center relative">
                    <h2 className="min-w-[300px] text-2xl text-start"> 100 000 </h2>
                    <div className="min-w-[300px] border-2 rounded-r-[30px] rounded-bl-[30px] h-[108px] px-[30px] pt-[24px]">
                        <div className="flex justify-between">
                            <h1 className="h-max">УРОВЕНЬ <span className="font-['Cydre']">2</span></h1>
                            <div className="flex h-max align-center">
                                <img src={friensIcon} className="" />
                                <div className="text-[18px]">
                                    10
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-white overflow-hidden rounded-r-[30px] rounded-bl-[30px] h-[20px] mt-[5px]">
                            <span className={`block rounded-r-[30px] h-full bg-white w-1/5`}></span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center relative bottom-[20px] z-1">
                    <div className="planet rounded-full h-[210px] w-[210px]">
                    </div>
                </div>
                <div className="flex flex-col items-center relative bottom-[12px]">
                    <div className="text-center leading-4 text-sm max-w-[300px]">
                        Приглашай друзей! Чем больше друзей вы пригласите, тем выше будет уровень вашей планеты
                    </div>
                    <div className="min-w-[300px] invite-friends-block mt-[5px] border-0 rounded-r-[20px] rounded-bl-[20px] h-[116px] px-[30px] pt-[20px]">
                        <button className={`border-b-2 text-sm bg-transparent w-full text-start flex justify-between h-max overflow-hidden px-1 transition delay-200 ${isCopied ? ("border-[#81B94A] text-[#81B94A]") : ("border-[#A8A8A8] text-[#A8A8A8]")}`}
                            onClick={() => {
                                copyTextToClipboard(`https://t.me/OpenSpaceAI_bot?start=${Telegram.WebApp.initDataUnsafe.user?.username}`);
                                setIsCopied(true);
                                setTimeout(() => { setIsCopied(false) }, 3000);
                            }}>
                            <div className="truncate">
                                {isCopied ? ("Скопировано") : (
                                    `OpenSpaceAI_bot?start=${Telegram.WebApp.initDataUnsafe.user?.username}`
                                )}
                            </div>
                            <img src={copyIcon} className={`transition delay-200 ${isCopied ? "green-copy" : "gray-copy"}`} />
                        </button>
                        <div className="leading-[17.6px] text-sm mt-[5px]">Повышение уровня: <br />
                            5 приглашенных друзей</div>
                    </div>
                    <button
                        type="button"
                        className="relative bottom-[26px] h-[50px] w-[230px] rounded-[15px] bg-[#4A74B9] text-base transition delay-200 active:bg-[#7C95BF]"
                        onClick={() => { Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=https://t.me/OpenSpaceAI_bot?start=${Telegram.WebApp.initDataUnsafe.user?.username}&text=${encodeURI(ruText)}`) }}
                    >Пригласить друзей</button>
                </div>
            </div>
        </>
    )
}


export default MainPage;