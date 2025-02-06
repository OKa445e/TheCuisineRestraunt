import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!!</h1>
        <h2 className="text-2xl text-gray-800 mb-6">Something went wrong</h2>
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md border-l-4 border-yellow-500 mb-6">
          <h3 className="text-xl">
            <strong>{err.status}</strong>: {err.statusText}
          </h3>
        </div>
        <p className="text-gray-600">
          We're sorry for the inconvenience. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
