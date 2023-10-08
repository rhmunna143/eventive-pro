

function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-pink-600 w-24 h-24 mx-auto mb-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                <h1 className="text-3xl font-semibold text-gray-700 mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-500">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default NotFound;