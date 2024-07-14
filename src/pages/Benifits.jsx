import React from "react";
import Table from "../components/Table";
import Form from "../components/Form";

const Benifits = () => {
  const something = [
    "all program",
    "product management",
    "strategy & leadership",
    "buiness management",
    "fintech",
    "senior management",
    "data science",
    "digital transformation",
    "business analytics",
  ];
  const columns = [
    { Header: "Program", accessor: "program" },
    { Header: "Referrar Bonus", accessor: "referrar" },
    { Header: "Referee Bonus", accessor: "referee" },
  ];

  const data = [
    {
      program: "Professional Certificate Program in Product Management",
      referrar: "$ 5,000",
      referee: "$ 3,000",
    },
    {
      program: "PG Certificate Program in Strategic Product Management",
      referrar: "$ 9,000",
      referee: "$ 11,000",
    },
    {
      program: "Executive Program in Data Driven Product Management",
      referrar: "$ 10,000",
      referee: "$ 10,000",
    },
    {
      program:
        "Executive Program in Product Management and Digital Transformation",
      referrar: "$ 5000",
      referee: "$ 10,000",
    },
    {
      program: "Executive Program in Product Management",
      referrar: "$ 5000",
      referee: "$ 10,000",
    },
    {
      program: "Advanced Certification in Product Management",
      referrar: "$ 5000",
      referee: "$ 10,000",
    },
    {
      program: "Executive Program in Product Management and Project Management",
      referrar: "$ 10,000",
      referee: "$ 10,000",
    },
  ];
  return (
    <section className="flex flex-col justify-around">
      <h1 className="text-6xl font-semibold text-center mt-10">
        What are <span className="text-accredian-blue">Referral Benifits?</span>
      </h1>
      <div className="mx-16 my-14 flex justify-center gap-10 items-center">
        <div>
          <ul className="max-w-xs uppercase flex flex-col shadow-lg">
            {something.map((item) => (
              <li className="inline-flex items-center justify-between gap-x-3 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-accredian-blue hover:text-white transition-colors">
                {item}
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-4/6">
          <Table columns={columns} data={data} />
        </div>
      </div>
      <div className="self-center mb-10">
        <Form text="Refer Now" />
      </div>
    </section>
  );
};

export default Benifits;
