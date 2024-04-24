import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaUserGraduate } from "react-icons/fa";

export default function View_Student() {
  return (
    <div className="flex justify-around items-center w-full flex-wrap h-screen scroll-auto">
      <Card className="mt-6 w-60 md:w-96">
        <CardHeader className="w-1/2 m-auto">
          <FaUserGraduate className=" m-auto w-1/2 text-6xl" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center text-2xl"
          >
            Karan Kumar
            <Typography
              variant="a"
              color="blue-gray"
              className="mb-2 text-center"
            >
              santoshrajbgp11@gmail.com
            </Typography>
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Button>Email</Button>
          <Button>Call</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
