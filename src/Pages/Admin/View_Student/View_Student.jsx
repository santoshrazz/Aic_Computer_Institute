import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaUserGraduate } from "react-icons/fa";
import SpinnerComp from "../../../Components/Loadin_Button/SpinnerComp";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function View_Student() {
  // Hook to store result
  const [result, setResult] = useState([]);

  // const deleteRequest Funtion
  const deleteRequest = async (id) => {
    try {
      const response = await axios.delete(`/students/deleteSingleRequest${id}`);
      if (response.data) {
        console.log(response.data);
        notify(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Notify Function
  const notify = (msg) => toast(msg);

  // Function to get data from Server
  const getData = async () => {
    const response = await axios.get("/students/getAllRequest");
    return response.data;
  };

  // UseQuery hook to get data
  const { data, isError, isLoading, error, isSuccess } = useQuery({
    queryKey: ["getStudentRequest"],
    queryFn: getData,
    staleTime: 30000,
  });

  useEffect(() => {
    if (isSuccess) {
      setResult(data.response);
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return <SpinnerComp />;
  }
  if (isError) {
    notify(error.message);
  }
  if (isError) {
    return <h1>Error While Fetching Data</h1>;
  }
  return (
    <div className="flex justify-around items-center w-full flex-wrap h-screen scroll-auto">
      <ToastContainer />
      {result?.map((ele) => (
        <Card className="mt-6 md:w-96" key={ele._id}>
          <CardHeader className="w-1/2 m-auto">
            <FaUserGraduate className=" m-auto w-1/2 text-6xl" />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center text-2xl"
            >
              {ele?.name}
              <Typography
                variant="paragraph"
                as="a"
                color="blue-gray"
                className="mb-2 text-center"
              >
                {ele?.email} |{ele?.phone}
              </Typography>
            </Typography>
            <Typography>{ele?.message}</Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between flex-wrap">
            <Button>
              <Link to={`mailto:${ele.email}`}>Email</Link>
            </Button>
            <Button variant="outlined">
              <Link to={`tel:${ele.phone}`}>Call</Link>
            </Button>
            <Button onClick={() => deleteRequest(ele._id)}>Delete</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
