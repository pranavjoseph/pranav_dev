function ContactPage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
                    Get in Touch 📬
                </h1>
                <p className="text-gray-600 mb-8 text-center">
                    Have a question or want to work together? Fill out the form below.
                </p>

                <form
                    action="https://formspree.io/f/your-form-id"  // 👈 replace with Formspree or backend endpoint
                    method="POST"
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="_replyto"
                            required
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );


}
export default ContactPage;