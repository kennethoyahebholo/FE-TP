import React, { useState } from "react";
import CoursesComp from "./CoursesComp";
import { TPimages } from "../../../../assets";
import { coursesData } from "../../../../utils/coursesData";
import Navigation from "./Navigation";
import { Button } from "../../../../components";

const PopularCourses = () => {
  const [courseCategories, setCourseCategories] = useState(coursesData);
  const [isCategory, setIsCategory] = useState("All Categories");

  const initialCategory = [
    {
      id: 1,
      category: "All Categories",
    },
    {
      id: 2,
      category: "Design",
    },
    {
      id: 3,
      category: "Development",
    },
    {
      id: 4,
      category: "Marketing",
    },
  ];

  const handleFilterCategories = (category) => {
    setIsCategory(category);
    if (category !== "All Categories") {
      const newCategory = coursesData.filter((currentData) => {
        return currentData.category === category;
      });
      setCourseCategories(newCategory);
    } else {
      setCourseCategories(coursesData);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-full lg:min-h-screen bg-[##000000] py-12 px-5 md:px-20 xl:px-32">
      <div className="absolute top-[20px] left-[10px] md:top-[150px] md:left-[90px] z-[1]">
        <img src={TPimages.CourseVector} alt="" className="w-[90%]" />
      </div>
      <div className="flex flex-col items-center mb-12">
        <h4 className="text-[42px] font-black text-[#000F24] text-center z-[2] capitalize">
          browse our popular courses
        </h4>
        <p className="capitalize text-base text-[#A2A2A2] font-medium text-center max-w-[530px] z-[2]">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <Navigation
        initialCategory={initialCategory}
        handleClick={handleFilterCategories}
        isCategory={isCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-7">
        {courseCategories?.map((data) => (
          <div className="max-w-[770px] self-center m-auto" key={data.id}>
            <CoursesComp {...data} />
          </div>
        ))}
      </div>
      <div className="w-full">
        <Button className="max-w-[209px] m-auto capitalize" variant="full-blue">
          explore all courses
        </Button>
      </div>
    </div>
  );
};

export default PopularCourses;
