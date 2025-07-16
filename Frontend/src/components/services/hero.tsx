import React from 'react';
import { MessageCircle, Phone, User } from "lucide-react";

const Hero = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex pt-24 w-full">
            {/* Left Column - Main Content */}
            <div className="flex-[3] p-12">
                <div className="mb-8 pt-24">
                    <p className="text-gray-500 text-sm mb-2">Services & Projects</p>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Services</h1>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At Cryo Corp, we deliver comprehensive solutions for industrial gas plant owners, specializing in ASU, Oxygen, Nitrogen, and Acetylene systems.
                        We offer end-to-end services, from expert plant installation and commissioning to annual maintenance contracts, refurbishment, and upgradation.
                        Our team is committed to maximizing your plant’s performance with on-site troubleshooting, reliable spare parts supply, operator training, and consultancy for optimization and safety.

                    </p>
                </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="flex-[1] w-full bg-gray-50 p-8 border-l border-gray-200">
                <div className="space-y-6">
                    <div className="text-left pt-12">
                        <p className="text-xs text-black mb-2 font-extrabold">CRITICAL MANAGEMENT</p>
                        <p className="text-xs text-black font-extrabold">CONSULTANCY (CMC)</p>
                    </div>

                    <div className="space-y-3 pt-28">
                        {[
                            "PSA OXYGEN PLANT",
                            "PSA NITROGEN PLANT",
                            "ASU OXYGEN PLANT",
                            "ASU NITROGEN PLANT",
                            "ACETYLENE PLANT",
                            "LIQUID BOTTLING UNIT",
                        ].map((item) => (
                            <div key={item} className="flex items-center justify-between py-2 border-b border-gray-100 ">
                                <span className="text-sm font-medium text-gray-500">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
