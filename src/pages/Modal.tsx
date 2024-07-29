import { useEffect} from 'react';
import Portal, { createContainer } from './Portal';

const MODAL_CONTAINER_ID = 'modal-container-id';
type modalFlag = { isMounted: boolean }

const Modal = (props: modalFlag) => {
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
                            onClick={() => Telegram.WebApp.openTelegramLink('https://t.me/openspaceaim')}
                            >Подписаться</button>
                        </div>
                    </div>
                </div>
            </Portal>)
            : null
    );
};

export default Modal;