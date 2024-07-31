import friensIcon from "../assets/icon-1.svg"
import copyIcon from "../assets/copy-icon.svg"
import React, { CSSProperties } from "react"
import Modal from "./Modal"
import { checkSubscribe } from "../api/user/user.service"
import { modalFlag } from "../api/models/modalType"
import { MainPageInterface } from "../api/models/mainPageInterface"


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

const tgData = Telegram.WebApp.initDataUnsafe;

const MainPage = (props: MainPageInterface) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);
    const [isMember, setIsMember] = React.useState<number>();
    const [progressLevel, setProgressLevel] = React.useState<CSSProperties>();

    const checkMember = async () => {
        const member = await checkSubscribe(props.user?.telegramId)
        setIsMember(member)
    }

    React.useEffect(() => {
        if (props) {
            const progressCSS = {
                width: (props?.user.invitedFriends - props?.user.levelStart) / (props?.user.levelTarget - props?.user.levelStart) * 100 + "%"
            }
            setProgressLevel(progressCSS)
        }
    }, [])

    React.useEffect(() => {

        checkMember();
        if (isMember === 0) {
            setIsMounted(true)
        } else {
            setIsMounted(false)
        }
    }, [isMember])
    return (
        <>
            <Modal {... { isMounted, isMember, checkMember } as modalFlag} />
            <div className="main-page h-screen flex flex-col items-center">
                <h1 className="text-3xl mt-[3vh]">МОЯ ПЛАНЕТА</h1>
                <div className="flex flex-col items-center relative">
                    <h2 className="min-w-[300px] text-2xl text-start"> {props?.user.coinBalance} </h2>
                    <div className="min-w-[300px] border-2 rounded-r-[30px] rounded-bl-[30px] h-[17vh] px-[30px] pt-[3vh]">
                        <div className="flex justify-between">
                            <h1 className="h-max">УРОВЕНЬ <span className="font-['Cydre']">{props?.user.level}</span></h1>
                            <div className="flex h-max align-center">
                                <img src={friensIcon} className="" />
                                <div className="text-[18px]">
                                    {props?.user.invitedFriends}
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-white overflow-hidden rounded-r-[30px] rounded-bl-[30px] h-[3vh] mt-[1vh]">
                            <span className={`block rounded-r-[30px] h-full bg-white`} style={progressLevel}></span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center relative bottom-[3vh] z-1">
                    <div className="planet rounded-full h-[36vh] w-[36vh] z-2 overflow-hidden">
                        <img src={props.urlPlanet} alt="" className="z-1 w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col items-center relative bottom-[12px]">
                    <div className="text-center leading-4 text-sm max-w-[300px]">
                        Приглашай друзей! Чем больше друзей вы пригласите, тем выше будет уровень вашей планеты
                    </div>
                    <div className="min-w-[300px] invite-friends-block mt-[1vh] border-0 rounded-r-[20px] rounded-bl-[20px] h-[18vh] px-[30px] pt-[3vh]">
                        <button className={`border-b-2 text-sm bg-transparent w-full text-start flex justify-between h-max overflow-hidden px-1 transition delay-200 ${isCopied ? ("border-[#81B94A] text-[#81B94A]") : ("border-[#A8A8A8] text-[#A8A8A8]")}`}
                            onClick={() => {
                                copyTextToClipboard(`https://t.me/OpenSpaceAI_bot?start=${tgData.user?.username ? tgData.user?.username : tgData.user?.id}`);
                                setIsCopied(true);
                                setTimeout(() => { setIsCopied(false) }, 3000);
                            }}>
                            <div className="truncate">
                                {isCopied ? ("Скопировано") : (
                                    `OpenSpaceAI_bot?start=${tgData.user?.username ? tgData.user?.username : tgData.user?.id}`
                                )}
                            </div>
                            <img src={copyIcon} className={`transition delay-200 ${isCopied ? "green-copy" : "gray-copy"}`} />
                        </button>
                        <div className="leading-[17.6px] text-sm mt-[1vh]">Повышение уровня: <br />
                            5 приглашенных друзей</div>
                    </div>
                    <button
                        type="button"
                        className="relative bottom-[4vh] h-[8vh] w-[230px] rounded-[15px] bg-[#4A74B9] text-base transition delay-200 active:bg-[#7C95BF]"
                        onClick={() => { Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=https://t.me/OpenSpaceAI_bot?start=${tgData.user?.username ? tgData.user?.username : tgData.user?.id}&text=${encodeURI(ruText)}`) }}
                    >Пригласить друзей</button>
                </div>
            </div>
        </>
    )
}


export default MainPage;