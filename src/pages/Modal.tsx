import { useEffect, useState } from 'react';
import Portal, { createContainer } from './Portal';
import { modalFlag } from '../api/models/modalType';

const MODAL_CONTAINER_ID = 'modal-container-id';


const Modal = (props: modalFlag) => {
    const [isClcked, setIsClicked] = useState<boolean>()
    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
    }, []);

    return (
        props.isMounted
            ? (<Portal id={MODAL_CONTAINER_ID}>
                <div className='fixed flex-col flex-nowrap top-0 w-full h-full bg-[#1E1E1ECC]'>
                    <div className={`fixed w-[300px] h-[26vh] bg-white z-200 modalActive rounded-[30px]`}>
                        <div className='ralative w-full h-full p-[20px] flex flex-col items-center justify-between'>
                            <h2 className='text-black text-base mb-2 text-center'>
                                Планета недоступна, если ты не подписан на наш канал
                            </h2>
                            <button type="button"
                                className="relative text-base h-[10vh] w-[247px] rounded-[15px] bg-[#4A74B9] transition delay-200 active:bg-[#7C95BF]"
                                onClick={() => {
                                    if (isClcked) {
                                        props.checkMember();
                                        if (props.isMember !== 0) {
                                            setIsClicked(false);
                                        }
                                    } else {
                                        setIsClicked(true);
                                        Telegram.WebApp.openTelegramLink('https://t.me/openspaceaim');
                                    }
                                }}
                            >{isClcked ? ("Проверить подписку") : ("Подписаться")}</button>
                        </div>
                    </div>
                </div>
            </Portal>)
            : null
    );
};

export default Modal;