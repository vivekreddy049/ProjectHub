/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { Project } from "@/types/Project";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Card = ({ title, description, image, github }: Project) => {
    return (
        <motion.div>
            <Tilt tiltReverse={true} tiltMaxAngleX={30} tiltMaxAngleY={30} gyroscope={true} scale={1.05} transitionSpeed={1500}
            >
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <img className="rounded-t-lg"
                            src={image}
                            onError={(e: any) => {
                                e.target.onerror = null;
                                e.target.src = "/logo.png"
                            }}
                            alt="" width={400} height={250} />
                    </Link>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 sm:text-2xl text-base font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className="mb-3 font-normal sm:text-base text-sm text-gray-700 dark:text-gray-400 text-ellipsis overflow-auto">{description}</p>
                        <a href={github} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            view github
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
}

export default Card;