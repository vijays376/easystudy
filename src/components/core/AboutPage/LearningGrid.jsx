import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone from Anywhere",
    description:
      "EasyStudy partners with 275+ top universities and industry leaders to provide accessible, affordable, and job-ready online education to learners worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Industry-Relevant Curriculum",
    description:
      "Our curriculum is carefully designed to align with industry standards, ensuring you gain the skills employers seek.",
  },
  {
    order: 2,
    heading: "Innovative Learning Methods",
    description:
      "We use interactive courses, hands-on projects, and real-world case studies to make learning engaging and effective.",
  },
  {
    order: 3,
    heading: "Get Certified",
    description:
      "Earn recognized certificates upon course completion to showcase your expertise and enhance your career prospects.",
  },
  {
    order: 4,
    heading: "Instant Feedback",
    description:
      "Our AI-powered auto-grading system provides instant feedback to help you learn and improve efficiently.",
  },
  {
    order: 5,
    heading: "Job-Ready Skills",
    description:
      "Gain practical skills with real-world projects and career support to transition smoothly into the workforce.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1         //odd
                ? "bg-blue-100 h-[294px]"
                : card.order % 2 === 0     //even
                ? "bg-blue-200 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}     //start from 2nd col
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold text-black">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-700 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-black text-lg font-medium">{card.heading}</h1>

                <p className="text-richblack-700 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;