import { BsBuildings } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { IoFastFoodOutline, IoSchoolOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { PiDesktopTower } from "react-icons/pi";


const Categories = () => {
    return (
        <div className="lg:w-9/12 w-full mx-auto p-7 flex items-center justify-center absolute -bottom-24 lg:left-40 gap-7 bg-white rounded-2xl border shadow-xl lg:overflow-x-hidden overflow-auto">
            <div className="cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out rounded-xl p-5 bg-teal-50 w-fit flex flex-col items-center text-lg">
                <PiDesktopTower className="text-4xl" />
                <h2>Technology</h2>
            </div>
            <div className="cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out rounded-xl p-5 bg-teal-50 w-fit flex flex-col items-center text-lg">
                <IoFastFoodOutline className="text-4xl" />
                <h2>Food & Beverage</h2>
            </div>
            <div className="cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out rounded-xl p-5 bg-teal-50 w-fit flex flex-col items-center text-lg">
                <BsBuildings className="text-4xl" />
                <h2>Logistics</h2>
            </div>
            <div className="cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out rounded-xl p-5 bg-teal-50 w-fit flex flex-col items-center text-lg">
                <IoSchoolOutline className="text-4xl" />
                <h2>Education</h2>
            </div>
            <div className="cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out rounded-xl p-5 bg-teal-50 w-fit flex flex-col items-center text-lg">
                <MdOutlineCleaningServices className="text-4xl" />
                <h2>Cleaning</h2>
            </div>
            <div className="cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out rounded-xl p-5 bg-teal-50 w-fit flex flex-col items-center text-lg">
                <GiTeacher className="text-4xl" />
                <h2>Personal Training</h2>
            </div>
        </div>
    );
};

export default Categories;