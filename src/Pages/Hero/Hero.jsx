"use client";
import React from "react";
import { ContainerScroll } from "./Ui/Container_Scroll";
import C_Image from '../../Assets/Computer_Image.jpg'
export default function Hero() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                users={users}
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Unlock Education At  <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Aic Computer Institute
                            </span>
                        </h1>
                    </>
                }
            />
        </div>
    );
}

export const users = [
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },
    {
        name: "DCA",
        designation: "Diploma in Computer Application",
        image: C_Image,
        badge: "6 Months",
    },



];
