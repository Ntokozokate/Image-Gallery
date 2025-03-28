import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="grid grid-cols-2 gap-8 mx-auto mt-32 items-center "
      style={{ backgroundColor: "#e6e6e6" }}
    >
      <div className="container px-8">
        <h1
          className="text-7xl font-bold text-gray-700"
          style={{ fontSize: "4em" }}
        >
          404
        </h1>
        <h2 className="text-7xl font-bold m-10"> Ooops... Page Not Found!</h2>
        <p className=" text-gray-900 text-lg mt-5">
          {" "}
          <br />
          We're sorry, the page you are looking for isn't available. Please go
          back to the home page!
        </p>
        <button className=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ">
          Go Home
        </button>
      </div>
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/592/original/error-img.png?1743199495"
        alt=""
        className="w-full h-auto rounded shadow-xl "
      />
    </div>
  );
};

export default ErrorPage;
