function HomePage() {

    function redirectToLinkedIn() {
        window.open("https://www.linkedin.com/in/pranav-joseph/", "_blank");
    }

    return (
        <>
            <header className="flex flex-col justify-center items-center h-screen text-center bg-gray-50" onClick={redirectToLinkedIn}>
                <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
                    Hello, I'm Pranav Joseph 👋
                </h1>
                <p className="text-xl text-gray-600">
                    Software Developer | Tech Enthusiast | Future Dad ❤️
                </p>
            </header>
        </>

    )
}

export default HomePage