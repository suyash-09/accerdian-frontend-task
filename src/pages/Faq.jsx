import React from "react";

const Faq = () => {
  const data = [
    {
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      question: "What is the minimum system configuration required?",
      answer: "loreum ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-5xl font-semibold text-center mt-5">
        Frequently Asked <span className="text-accredian-blue">Question?</span>
      </h1>
      <div class="grid md:grid-cols-5 gap-10 mt-10">
        <div class="md:col-span-2">
          <div class="flex flex-col gap-3">
            {["Eligibility", "How to Use?", "Terms & Conditions"].map(
              (item, index) => (
                <button
                  key={index}
                  className="p-3 font-medium border-neutral-700 border text-lg rounded-lg hover:bg-white hover:shadow-lg hover:text-accredian-blue transition-all"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>

        <div class="md:col-span-3">
          <div className="space-y-4">
            {data.map((item, index) => (
              <details
                className="group [&_summary::-webkit-details-marker]:hidden"
                key={index}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">{item.question}</h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
