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
                    <div className={`fixed w-[307px] h-[179px] bg-white z-200 modalActive rounded-[30px]`}>
                        <div className='ralative w-full h-full p-[30px] flex-col text-center'>
                            <h2 className='text-black mb-4'>
                                Планета недоступна, если ты не подписан на наш канал
                            </h2>
                            <button type="button" 
                            className="relative h-[60px] w-[247px] rounded-[15px] bg-[#4A74B9] text-[20px] transition delay-200 active:bg-[#7C95BF]"
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