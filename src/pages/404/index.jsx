import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
            <h1 className="text-7xl font-extrabold text-blue-800 mb-4 animate-bounce">
                🤖 404
            </h1>
            <p className="text-2xl text-gray-700 mb-2">
                Oops! This page took the wrong turn in the codebase.
            </p>
            <p className="text-gray-500 mb-6 max-w-md">
                Maybe it was a <span className="font-mono">null</span> reference… or just a typo 😅
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-800 text-white rounded-xl shadow-lg hover:bg-blue-900 transition"
            >
                ⬅️ Back to Home
            </Link>
        </div>)
}
export default PageNotFound