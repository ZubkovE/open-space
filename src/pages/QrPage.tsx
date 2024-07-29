import qrImage from "../assets/qr-code.svg"


const QrPage = () => {

    return (
        <>
            <div className="flex flex-col justify-center h-screen load-page">
                <h2 className="text-center text-2xl">**Заглушка**</h2>
                <img src={qrImage} alt="qr-code" />
            </div>
        
        </>

    )

}

export default QrPage;