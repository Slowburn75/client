import type { FC } from "react";

const Contact: FC = () => {
    return (
        <section className="relative pt-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex items-start gap-8 mb-10">
                    <h2 className="inline-block bg-primary text-2xl rounded-md px-4 py-2 font-bold">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 max-w-xl">
                        Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs</p>
                </div>

                <div className="mx-auto max-w-6xl rounded-2xl bg-gray-50 shadow-sm px-6 md:px-12 pr-0 md:pr-0 py-10 flex flex-col md:flex-row items-start gap-10">
                    <div className="flex-1">
                        <div className="flex gap-6 mb-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="contactType"
                                    defaultChecked
                                    className="peer hidden"
                                />
                                <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center peer-checked:border-lime-400">
                                    <span className="w-2 h-2 bg-primary rounded-full peer-checked:block hidden"></span>
                                </span>
                                <span className="text-gray-700">Say Hi</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="contactType" className="peer hidden" />
                                <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center peer-checked:border-lime-400">
                                    <span className="w-2 h-2 bg-primary rounded-full peer-checked:block hidden"></span>
                                </span>
                                <span className="text-gray-700">Get a Quote</span>
                            </label>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-lg bg-white border border-black px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-lime-300 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full rounded-lg bg-white border border-black px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-lime-300 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Message<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    placeholder="Message"
                                    required
                                    rows={4}
                                    className="w-full rounded-lg bg-white border border-black px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-lime-300 outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white rounded-lg px-6 py-3 font-medium hover:bg-gray-900 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="flex-1 h-full overflow-hidden">
                        <img src="/img/contact.png" alt="Contact Illustration" className="transform translate-x-1/2" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;