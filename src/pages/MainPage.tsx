import friensIcon from "../assets/icon-1.svg"
import planetPng from "../assets/image planet.png"
import copyIcon from "../assets/copy-icon.svg"
import React from "react"
import Modal from "./Modal"


const ruText = '👆Твое приглашение здесь\n' +
    '\n' +
    'Я дарю тебе Домик Хомяка 🎁🛖🐹. Забери его сейчас и стань одним из первых участников самой горячей build-to-earn игры в Telegram — CITY Holder 🏠. Будь одним из первых и пригласи своих друзей 👨‍🦱👳‍♂️🧔‍♂️🙎‍♀️👩‍🍳.\n' +
    '\n' +
    '🎁 Забери бесплатно Домик Хомяка 🐹\n' +
    '🦸‍♂️ Построй свой Дом Друзей\n' +
    '🔥 3 уровня реферальной программы'

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
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
        // setTimeout(()=> setCount(count + 1), 5000)
        setTimeout(() => setMounted(true), 5000)
    }, [count])

    return (
        <>
            <Modal {... { isMounted }} />
            <div className="main-page h-full flex-col item-center">
                <h1 className="text-[32px] pt-[30px] text-center">МОЯ ПЛАНЕТА</h1>
                <h2 className="pl-[30px] mt-[8px] text-[32px]"> 100 000 </h2>
                <div className="border-2 mx-[30px] rounded-r-[30px] rounded-bl-[30px] h-[108px] px-[30px] pt-[26px]">
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
                        <span className={`block rounded-r-[30px] h-full bg-white ${"w-" + count +"/5"}`}></span>
                    </div>
                </div>
                <img src={planetPng} className="relative -top-[12px] left-[65px] z-1" />
                <div className="flex-col mt-[6px] mx-[30px] items-end">
                    <div className="text-center">
                        Приглашай друзей! Чем больше друзей вы пригласите, тем выше будет уровень вашей планеты
                    </div>
                    <div className="mt-[10px] border-0 drop-shadow-[0_0_30px_rgba(30,30,30,1)] bg-gradient-to-b from-[#FFFFFF4D] to-[#0000004D] rounded-r-[20px] rounded-bl-[20px] h-[126px] px-[30px] pt-[20px]">
                        <button className={`border-b-2 bg-transparent w-full text-start flex justify-between h-max overflow-hidden px-1 transition delay-200 ${isCopied ? ("border-[#81B94A] text-[#81B94A]") : ("border-[#A8A8A8] text-[#A8A8A8]")}`}
                            onClick={() => {
                                copyTextToClipboard(`https://t.me/OpenSpaceAI_bot?start=${Telegram.WebApp.initDataUnsafe.user?.username}`);
                                setIsCopied(true);
                                setTimeout(() => { setIsCopied(false) }, 3000)
                            }}>
                            {isCopied ? ("Скопировано") : (
                                `OpenSpaceAI_bot?start=${Telegram.WebApp.initDataUnsafe.user?.username}`
                            )}
                            <img src={copyIcon} className={`transition delay-200 ${isCopied ? "green-copy" : "gray-copy"}`} />
                        </button>
                        <div className="leading-[17.6px] mt-[10px]">Повышение уровня: <br />
                            5 приглашенных друзей</div>
                    </div>
                    <div className="text-center">
                        <button 
                        type="button" 
                        className="relative h-[60px] m-auto w-[265px] -top-[24px] rounded-[15px] bg-[#4A74B9] text-[20px] transition delay-200 active:bg-[#7C95BF]"
                        onClick={() => {Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=https://t.me/OpenSpaceAI_bot?start=${Telegram.WebApp.initDataUnsafe.user?.username}&text=${encodeURI(ruText)}`)}}
                        >Пригласить друзей</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MainPage;