import React, { useState } from "react";
// import CoursesComp from "./CoursesComp";
// import { TPimages } from "../../../../assets";
// import { coursesData } from "../../../../utils/coursesData";
import TestimonialCarousel from "./TestimonialCarousel";
import { Button } from "../../../../components";

const Testimonial = () => {
  //   const [courseCategories, setCourseCategories] = useState(coursesData);
  //   const [isCategory, setIsCategory] = useState("All Categories");

  //   const initialCategory = [
  //     {
  //       id: 1,
  //       category: "All Categories",
  //     },
  //     {
  //       id: 2,
  //       category: "Design",
  //     },
  //     {
  //       id: 3,
  //       category: "Development",
  //     },
  //     {
  //       id: 4,
  //       category: "Marketing",
  //     },
  //   ];

  //   const handleFilterCategories = (category) => {
  //     setIsCategory(category);
  //     if (category !== "All Categories") {
  //       const newCategory = coursesData.filter((currentData) => {
  //         return currentData.category === category;
  //       });
  //       setCourseCategories(newCategory);
  //     } else {
  //       setCourseCategories(coursesData);
  //     }
  //   };

  return (
    <div className="relative flex flex-col w-full h-full bg-[#F8F9FC] pb-8">
      <div className="flex flex-col items-center pt-12 px-5 md:px-20 xl:px-32 mb-8 md:mb-11">
        <h4 className="text-[24px] md:text-[42px] font-black text-[#000F24] text-center z-[2] capitalize">
          what our clients are saying
        </h4>
        <p className="capitalize text-[8px] md:text-[16px] leading-4 text-[#A2A2A2] font-medium text-center max-w-[280px] md:max-w-[530px] z-[2]">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <div className="grid grid-flow-col overflow-y-auto gap-5 px-5 pb-9 no-scrollbar">
        {/* <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>

        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p>
        <p>llllllllllllllllllllllllllllllllllll</p> */}
        {/* <p>llllllllllllllllllllllllllllllllllll</p> */}
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
        <TestimonialCarousel />
      </div>
      {/* <Navigation
        initialCategory={initialCategory}
        handleClick={handleFilterCategories}
        isCategory={isCategory}
      /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-7">
        {courseCategories?.map((data) => (
          <div className="max-w-[770px] self-center m-auto" key={data.id}>
            <CoursesComp {...data} />
          </div>
        ))}
      </div> */}
      <div className="w-full">
        <Button className="max-w-[209px] m-auto capitalize" variant="full-blue">
          explore all courses
        </Button>
      </div>
    </div>
  );
};

export default Testimonial;
