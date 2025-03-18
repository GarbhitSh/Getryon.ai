"use client"
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data: any) => {
        // Handle form submit
    };

    return (
        <footer className="border-t bg-white z-10 relative dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-4 gap-8">
                    {/* Newsletter Section */}
                    <div className="border-b py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16 col-span-1">
                        <h3 className="text-2xl font-medium">Join Our Newsletter</h3>
                        <p className="mt-4 max-w-lg">
                            Stay updated with our latest features, updates, and offers.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full">
                            <Input
                                {...register('email', { required: true })}
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Button type="submit">Sign Up</Button>
                        </form>
                    </div>

                    {/* Product Links */}
                    <div className="py-8 lg:py-16 lg:pe-16 col-span-1">
                        <h4 className="font-medium text-xl mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="transition hover:opacity-75">Features</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Pricing</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Documentation</a></li>
                            <li><a href="#" className="transition hover:opacity-75">API</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="py-8 lg:py-16 col-span-1">
                        <h4 className="font-medium text-xl mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="transition hover:opacity-75">About Us</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Careers</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Blog</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Partners</a></li>
                        </ul>
                    </div>

                    {/* Resources and Social Links */}
                    <div className="py-8 lg:py-16 col-span-1">
                        <h4 className="font-medium text-xl mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="transition hover:opacity-75">Community</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Support</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Status</a></li>
                            <li><a href="#" className="transition hover:opacity-75">Contact</a></li>
                        </ul>

                        <h4 className="font-medium text-xl mt-8 mb-4">Social</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://twitter.com" className="transition hover:opacity-75">
                                    <FaTwitter size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" className="transition hover:opacity-75">
                                    <FaInstagram size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com" className="transition hover:opacity-75">
                                    <FaYoutube size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t pt-6 text-center">
                    <ul className="flex justify-center space-x-4 text-xs">
                        <li><a href="#" className="transition hover:opacity-75">Terms & Conditions</a></li>
                        <li><a href="#" className="transition hover:opacity-75">Privacy Policy</a></li>
                    </ul>
                    <p className="mt-4 text-xs">&copy; 2024 InstaTryOn.ai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
