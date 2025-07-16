import React from 'react';

const ProjectGridSection = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden pb-16 px-4">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 z-0">
                {[
                    {
                        pos: { top: '20%', left: '60%' },
                        gradient: 'circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%',
                        anim: 'bounce-x',
                        opacity: 'opacity-80',
                    },
                    {
                        pos: { top: '40%', left: '45%' },
                        gradient: 'circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%',
                        anim: 'bounce-y',
                        opacity: 'opacity-80',
                    },
                    {
                        pos: { top: '40%', left: '25%' },
                        gradient: 'circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%',
                        anim: 'bounce-diagonal',
                        opacity: 'opacity-70',
                    },
                    {
                        pos: { top: '50%', left: '5%' },
                        gradient: 'circle at 60% 60%, #0B3C5D 0%, #1B263B 70%, transparent 90%',
                        anim: 'bounce-x',
                        opacity: 'opacity-70',
                    },
                ].map((blob, i) => (
                    <div
                        key={i}
                        className={`absolute w-[400px] h-[400px] rounded-full blur-sm ${blob.opacity} animate-${blob.anim}`}
                        style={{
                            background: `radial-gradient(${blob.gradient})`,
                            ...blob.pos,
                        }}
                    />
                ))}
            </div>

            {/* 🔥 Overlay - z-10 */}
            <div className="absolute inset-0 z-10 backdrop-blur-2xl bg-white/30" />

            {/* 3×2 Grid */}
            <div className="relative z-10 grid grid-cols-3 grid-rows-2 gap-4 max-w-7xl mx-auto">
                {/* 1. Top‑left: large image */}
                <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
                    <img
                        src="/services/img6.png"
                        alt="Project 1"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 2. Top‑right: Image + Text (02. Erecting…) */}
                <div className="col-span-1 row-span-1 bg-transparent flex flex-col overflow-hidden">
                    <img
                        src="/services/img7.png"
                        alt="Project 2"
                        className="w-full h-1/2 object-cover"
                    />
                    <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold mb-4 text-black">
                            02. ERECTING & COMMISSIONING FOR PSA PLANTS
                        </h3>
                        <p className="text-base font-medium text-black mb-4">
                            We are known for Precision‑Built Gas Solutions, from blueprint to first‑breath – we engineer certainty.
                        </p>
                        <ul className="list-disc list-inside text-base font-medium text-black space-y-2">
                            <li>Custom site drawings for seamless integration</li>
                            <li>360° commissioning: leak tests, automation calibration, staff training</li>
                            <li>95% on‑time delivery rate with 24/7 remote monitoring support</li>
                        </ul>
                        <p className="mt-4 text-sm font-semibold text-gray-800">
                            Audience: Mining, pharma, energy firms
                        </p>
                    </div>
                </div>

                {/* 3. Bottom‑left: Text block just below top image */}
                <div className="col-span-2 row-span-1 bg-transparent flex flex-col justify-start">
                    <div className="p-6">
                        <h3 className="text-2xl font-extrabold text-black mb-4">
                            01. TURN‑KEY PROJECTS FOR PLANT RELOCATION
                        </h3>
                        <p className="text-base text-black font-medium mb-4">
                            We are Global Plant Shift Masters who understand that – “Your plant moves, Your production doesn’t.”
                        </p>
                        <ul className="list-disc list-inside text-sm text-black font-medium space-y-2">
                            <li>End‑to‑end relocation of ASU/PSA plants across borders</li>
                            <li>Zero‑downtime strategy with pre‑mobilization planning & modular dismantling</li>
                            <li>Compliance with international safety/logistics standards (ISO, CE)</li>
                        </ul>
                        <p className="mt-4 text-sm text-black font-semibold">
                            Audience: Industrial gas manufacturers expanding or restructuring globally
                        </p>
                    </div>
                </div>

                {/* 4. Bottom‑right: Image + Text (03. Liquid Bottling…) */}
                <div className="col-span-1 row-span-1 bg-transparent p-6 flex flex-col justify-center">
                    <img
                        src="/services/img8.png"
                        alt="Project 3"
                        className="w-full h-1/2 object-cover"
                    />
                    <div className="p-6 flex-1">
                        <h3 className="text-lg font-bold mb-2">03. LIQUID BOTTLING PLANT COMMISSIONING</h3>
                        <p className="text-xs text-black font-medium mb-4">
                            Your liquid Gold, bottled perfectly, where cryogenic safety meets distributing brilliance.
                        </p> 
                        <ul className="list-disc list-inside text-sm text-black font-medium space-y-2">
                            <li>End‑to‑end relocation of ASU/PSA plants across borders</li>
                            <li>Zero‑downtime strategy with pre‑mobilization planning & modular dismantling</li>
                            <li>Compliance with international safety/logistics standards (ISO, CE)</li>
                        </ul>
                        <p className="mt-4 text-sm text-black font-semibold">
                            Audience: Industrial gas manufacturers expanding or restructuring globally
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA TEXT SECTION */}
            <div className="relative z-10 mx-auto px-20">
                <p className="text-2xl md:text-4xl font-bold leading-relaxed" style={{ color: '#5FC9D8' }}>
                    Ready to Optimize Every Step of Your Gas Plant Journey?
                    <br />
                    <span className="text-xl md:text-2xl font-medium" style={{ color: '#5FC9D8' }}>
                        Relocate confidently with a free ASU Plant Audit, launch faster with our PSA Plant Quiz,
                        and bottle smarter with a complimentary Bottling Plant Safety Check.
                        <br />
                        <br />
                        <strong className="uppercase tracking-wider" style={{ color: '#5FC9D8' }}>
                            TAKE THE QUIZZES, UNLOCK INSIGHTS, AND POWER UP YOUR OPERATIONS TODAY.
                        </strong>
                    </span>
                </p>
            </div>
        </section>
    );
};

export default ProjectGridSection;
