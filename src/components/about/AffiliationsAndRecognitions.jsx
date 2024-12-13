import React from 'react';

const AffiliationsAndRecognitions = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="">
          <h1 className="text-3xl font-bold ">Affiliations and Recognitions</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="bg-gray-50 py-16 px-6 lg:px-[9%] md:[8%]">
        {/* Accrediting Bodies */}
        <div className="mb-16">
          <h4 className="text-3xl font-semibold mb-6 text-center text-[#85132c]">
            Accrediting Bodies & Partnerships
          </h4>
          <div className="flex flex-wrap justify-center gap-[5.4rem]">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg w-72 h-80"
              >
                <img
                  src={`https://via.placeholder.com/150`} // Replace with your actual image URL
                  alt={`Accrediting Body ${item}`}
                  className="w-32 h-32 object-contain mb-4"
                />
                <p className="text-lg text-gray-600">
                  Accrediting Body {item} - Description of the body and its role.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div>
          <h4 className="text-3xl font-semibold text-[#85132c] mb-6 text-center">
            Certifications & Awards
          </h4>
          <div className="flex flex-wrap justify-center gap-[5.4rem]">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg w-72 h-80"
              >
                <img
                  src={`https://via.placeholder.com/150`} // Replace with your actual image URL
                  alt={`Award ${item}`}
                  className="w-32 h-32 object-contain mb-4"
                />
                <p className="text-lg text-gray-600">
                  Award {item} - Description of the award and its significance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AffiliationsAndRecognitions;
