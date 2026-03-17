import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">Page not found</p>

      <Link to="/" className="px-4 py-2 bg-black text-white rounded-md">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
