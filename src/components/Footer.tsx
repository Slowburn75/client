import type { FC } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer: FC = () => {
    return (
        <section className="relative pt-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 bg-black py-6 rounded-t-3xl">
                <div className="flex items-start gap-8 mb-10">
                    <nav className="container  mx-auto flex items-center justify-between px-6 py-4">
                        {/* Logo */}
                        <div className="text-xl font-bold">
                            <span className="text-white">✦ Positivus</span>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center space-x-8 font-medium text-white">
                            <li className="hover:text-black cursor-pointer">About us</li>
                            <li className="hover:text-black cursor-pointer">Services</li>
                            <li className="hover:text-black cursor-pointer">Use Cases</li>
                            <li className="hover:text-black cursor-pointer">Pricing</li>
                            <li className="hover:text-black cursor-pointer">Blog</li>
                        </ul>

                        {/* Contact Button */}
                        <div className="hidden md:block">
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-white hover:text-primary transition"><Linkedin /></a>
                                <a href="#" className="text-white hover:text-primary transition"><Facebook /></a>
                                <a href="#" className="text-white hover:text-primary transition"><Twitter /></a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="flex">
                    <div className="flex-1 p-6 md-6">
                        <h3 className="inline-block bg-primary text-md rounded-md px-2 py-2 font-bold">
                        Contact Us</h3>
                        <ul className="space-y-2 text-white pt-3">
                            <li><a href="#services" className="hover:text-primary transition">Email: info@positivus.com</a></li>
                            <li><a href="#about" className="hover:text-primary transition">Phone: 555-567-8901</a></li>
                            <li><a href="#team" className="hover:text-primary transition">Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</a></li>
                        </ul>
                    </div>
                    <div className="flex gap-6 border w-200 rounded-3xl border-white">
                            <div className="flex w-full max-w-sm items-center gap-2">
                            <input type="email" placeholder="Email"  className="border border-white rounded px-3 py-2 w-full text-white" />
                            <Button className="bg-primary text-black w-150"  type="submit" variant="outline">
                                Subscribe to news
                            </Button>
                            </div>
                    </div>
                </div>
                      <div className="border-t border-gray-700 mt-8 py-6 text-left text-white text-sm">
        © {new Date().getFullYear()} Positivus. All rights reserved.
      </div>
            </div>
        </section>
    );
}
export default Footer;