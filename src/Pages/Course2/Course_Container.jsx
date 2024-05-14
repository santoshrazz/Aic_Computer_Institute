import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Check_ICon from "../../Components/Check_ICon";
import ButtonComp from "../../Components/ButtonComp";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const courseData = [
  {
    name: "DCA",
    Desc: "Diploma in computer Application",
    Duration: "6 Month",
  },
  {
    name: "ADCA",
    Desc: "Advance Diploma in computer Application",
    Duration: "1 Year",
  },
  {
    name: "Tally",
    Desc: "Diploma in computer Application",
    Duration: "4 Month",
  },
  {
    name: "DTP",
    Desc: "Desktop Publication",
    Duration: "6 Month",
  },
  {
    name: "English Typing",
    Desc: "English Typing with all popular fonts",
    Duration: "6 Month",
  },
  {
    name: "Hindi Typing",
    Desc: "Hindi Typing with all popular fonts",
    Duration: "6 Month",
  },
];
export default function Course_Container() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".course_Div", {
      y: 300,
      opacity: 0,
      delay: 1,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".course_Div",
        start: "top 220%",
        scrub: 2,
      },
    });
  });

  return (
    <>
      <div className="certificate flex flex-col items-center justify-center">
        <h4 className=" mt-4  border-w font-extrabold text-5xl font-Roboto">
          Get Certified In Following Courses
        </h4>
        <p className=" w-1/2 h-1 bg-yellow-500"></p>
      </div>
      <div className="mainCourseDiv grid p-4 grid-cols-1 place-content-center place-items-center md:grid-cols-3">
        {courseData.map((ele, ind) => (
          <Card
            color="gray"
            variant="gradient"
            className="w-full m-2 max-w-[20rem] p-8 cursor-pointer course_Div"
            key={ind}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                {ele.Desc}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">{ele.name}</span>
              </Typography>
              <p className="text-white">Duration :{ele.Duration}</p>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <Check_ICon />
                  </span>
                  <Typography className="font-normal">
                    Fundamental of Computer
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <Check_ICon />
                  </span>
                  <Typography className="font-normal">Ms Window</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <Check_ICon />
                  </span>
                  <Typography className="font-normal">Ms Word</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <Check_ICon />
                  </span>
                  <Typography className="font-normal">Ms Excel</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <Check_ICon />
                  </span>
                  <Typography className="font-normal">Ms Access</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <Check_ICon />
                  </span>
                  <Typography className="font-normal">HTML</Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0 text-center">
              <ButtonComp text="Book Demo" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
