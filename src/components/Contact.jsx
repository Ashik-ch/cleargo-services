import "./contact.scss";

const Contact = () => {


    return (
        <>


            {/* Register Section */}
            <section id="register" className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Register for a Service</h2>
                        <p className="mb-4">
                            It's easy to book a cleaning — just fill out the form and click submit.
                            Our team will get back to you promptly!
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Quick response</strong> and flexible scheduling</li>
                            <li><strong>Your data</strong> is secure with us</li>
                            <li><strong>You will receive</strong> confirmation via call or WhatsApp</li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="h-4 w-4" required />
                                <span className="text-sm">
                                    I agree to the{" "}
                                    <a href="/privacy-policy" className="underline">
                                        Privacy Policy
                                    </a>{" "}
                                    and{" "}
                                    <a href="/terms-conditions" className="underline">
                                        Terms & Conditions
                                    </a>
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                REGISTER
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
