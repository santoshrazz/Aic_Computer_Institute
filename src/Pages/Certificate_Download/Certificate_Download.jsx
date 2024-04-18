import React, { useCallback, useRef } from "react";
import CertificateImage from "../../Assets/Certificate.jpg";
import { toPng } from "html-to-image";
import { useLocation } from "react-router-dom";
const Certificate_Download = () => {
  const ref = useRef(null);

  // useLocation hook to get data from check_certificate component
  const location = useLocation();
  console.log(location.state);
  if (!location.state) {
    return (
      <h2>
        Unable to download certificate go to <a href="/">Home</a>
      </h2>
    );
  }
  // Funtion for download certificate
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <>
      <div className=" scroll-auto  relative w-[200vh]" ref={ref}>
        <div className="img">
          <img src={CertificateImage} className="" alt="Certificate" />
        </div>
        <p className="font-bold registration absolute top-[6%] left-[17%] text-xl">
          {location.state?.RegistrationNumber}
        </p>
        <p className="font-bold serial absolute top-[5%] right-[6%] text-xl">
          {location.state?.SerialNumber}
        </p>
        <p className="font-bold Name absolute top-[47%] left-[38%]  text-2xl">
          {location.state?.name}
        </p>
        <p className="font-bold father absolute top-[53%] left-[38%]  text-2xl">
          {location.state?.fatherName}
        </p>
        <p className="font-bold course absolute top-[60%] left-[40%]  text-2xl">
          {location.state?.course}
        </p>
        <p className="font-bold center absolute top-[65%] left-[22%]  text-2xl">
          {location.state?.frenchise}
        </p>
        <p className="font-bold c_duration absolute top-[72%] left-[22%]  text-2xl">
          12 Months
        </p>
        <p className="font-bold speed absolute top-[72%] right-[20%]  text-2xl">
          {location.state?.percentage}
        </p>
        <p className="font-bold doi absolute bottom-[5%] left-[20%]  text-2xl">
          {location.state?.DateOfIssue?.slice(0, 10)}
        </p>
        <p className="font-bold speed absolute  bottom-[2%] left-[20%]  text-2xl">
          {location.state?.place}
        </p>
      </div>
      <div className="button flex justify-center items-center ">
        <button
          className=" bg-blue-gray-500 p-4 text-white rounded-lg font-body"
          onClick={onButtonClick}
        >
          Download Certificate
        </button>
      </div>
    </>
  );
};

export default Certificate_Download;
