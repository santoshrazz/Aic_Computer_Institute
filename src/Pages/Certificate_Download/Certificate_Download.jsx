import React, { useCallback, useRef } from 'react'
import CertificateImage from '../../Assets/Certificate.jpg'
import { toPng } from 'html-to-image';
const Certificate_Download = () => {
    const ref = useRef(null);
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])
    return (
        <div className="min-h-screen  relative bg-red-500 w-full" ref={ref}>
            <div className="img"><img src={CertificateImage} className="" alt="Certificate" /></div>
            <p className="font-bold registration absolute top-14 left-56 text-xl">12/ADCA/23/SARB/30669</p>
            <p className="font-bold serial absolute top-14 right-24 text-xl">45678</p>
            <p className="font-bold Name absolute top-[480px] left-[450px] text-xl sm:text-lg md:text-xl lg:text-2xl">SANTOSH KUMAR</p>
            <p className="font-bold father absolute top-[550px] left-[450px] text-xl sm:text-lg md:text-xl lg:text-2xl">BHAIRAV YADAV</p>
            <p className="font-bold course absolute top-[610px] left-[550px] text-xl sm:text-lg md:text-xl lg:text-2xl">HINDI TYPING</p>
            <p className="font-bold center absolute top-[680px] left-[250px] text-xl sm:text-lg md:text-xl lg:text-2xl">AIC SARAI BHAGALPUR</p>
            <p className="font-bold c_duration absolute top-[740px] left-[250px] text-xl sm:text-lg md:text-xl lg:text-2xl">12 Months</p>
            <p className="font-bold speed absolute top-[740px] left-[950px] text-xl sm:text-lg md:text-xl lg:text-2xl">84 WPM</p>
            <p className="font-bold doi absolute top-[940px] left-[250px] text-xl sm:text-lg md:text-xl lg:text-2xl">12/4/2023</p>
            <p className="font-bold speed absolute top-[970px] left-[250px] text-xl sm:text-lg md:text-xl lg:text-2xl">BHAGALPUR</p>
            <button className=' bg-deep-orange-800 m-10 text-white' onClick={onButtonClick}>Download</button>
        </div>

    )
}

export default Certificate_Download
