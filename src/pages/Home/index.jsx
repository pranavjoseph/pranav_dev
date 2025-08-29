import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";

function HomePage() {
    const { theme, toggleTheme } = useTheme();

    function redirectToLinkedIn() {
        window.open("https://www.linkedin.com/in/pranav-joseph/", "_blank");
    }

    return (
        <>
            {/* Dark Mode Toggle Button - Fixed top right */}
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 z-50 p-3 rounded-full dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl"
                aria-label="Toggle dark mode"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Main Content */}
            <header className="flex flex-col justify-center items-center h-screen text-center bg-white dark:bg-gray-800 transition-colors duration-300">
                <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200 mb-4 cursor-pointer">
                    Hello, I'm Pranav Joseph <span role="img" aria-label="waving hand" className="inline-block animate-wave origin-[70%_70%]">👋</span>
                </h1>
                <Link to="/contact" >
                    <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
                        Software Developer | Tech Enthusiast | Future Dad <span className="animate-pulse">❤️</span>
                    </p>
                </Link>
            </header>
        </>
    )
}

export default HomePage