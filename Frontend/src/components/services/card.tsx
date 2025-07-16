import React from 'react';

const CardGrid = () => {
    const cards = [
        {
            title: 'PSA Oxygen Plant',
            content: '(93–95% purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img2.png',
            back: 'Keep your PSA Oxygen Plant compliant, efficient, and always delivering high-purity oxygen. With AMC, get scheduled service for smooth operation. Upgrade to CMC for full coverage—parts, repairs, and emergency support. No downtime. No surprise costs. Just reliable performance, 24/7.',
        },
        {
            title: 'PSA Nitrogen Plant',
            content: '(93–95% purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img2.png',
            back: 'Keep your PSA Nitrogen Plant running at peak efficiency, always. AMC offers routine maintenance to minimize interruptions. CMC gives you full coverage—parts, repairs, and expert support. No unplanned stoppages. No hidden costs. Just nonstop performance. Engineered for businesses that can’t afford downtime.',
        },
        {
            title: 'ASU Oxygen Plant',
            content: '(99%+ purity Oxygen from Air) with technicians & spares support',
            image: '/services/img3.png',
            back: 'Maximize uptime and regulatory compliance for your ASU Oxygen Plant with specialized maintenance and relocation services. From advanced diagnostics to critical spares, our team ensures seamless, ultra-high purity oxygen production. Need to relocate? We have done it—successfully shifted a live plant from Nashik to Yemen, including export, erection, and commissioning support. Whether it’s routine servicing or a full-scale move, we keep your operations uninterrupted and future-ready.',
        },
        {
            title: 'ASU Nitrogen Plant',
            content: '(99%+ purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img3.png',
            back: 'Guarantee consistent, high-purity nitrogen output with proactive maintenance and rapid-response troubleshooting. Our AMC/CMC services include skilled technical support and spare parts management, reducing the risk of costly failures and keeping your plant running at optimal performance.',
        },
        {
            title: 'Acetylene Plant',
            content: '(Storing and Distribution) of Industrial Gases with technicians & spares support',
            image: '/services/img4.png',
            back: 'Stay safe and compliant with dedicated maintenance for your Acetylene Plant, where reliability and safety are paramount. Our contracts provide expert inspections, preventive care, and immediate access to spares—helping you avoid hazardous breakdowns and maintain smooth, continuous operations.',
        },
        {
            title: 'Liquid Bottling Unit',
            content: '(Storing and Distribution) of Industrial Gases with technicians & spares support',
            image: '/services/img4.png',
            back: 'Protect your bottling operations with tailored maintenance contracts that cover the complex needs of liquid gas storage and distribution systems. With expert technicians and timely spares, you minimize risks of leaks, contamination, or supply chain disruptions, ensuring safe and reliable gas delivery for your customers.',
        },
    ];

    return (
        <section className="relative min-h-[200vh] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden py-16 px-4 flex items-center justify-center">
            {/* Animated Background Blobs (Twice across height) */}
            <div className="absolute inset-0 z-0">
                {/* Set 1 */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
                        top: '5%',
                        left: '30%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-y blur-sm"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, #0B3C5D 0%, #1B263B 60%, transparent 80%)`,
                        top: '30%',
                        left: '5%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-diagonal blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
                        top: '40%',
                        right: '10%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
                        top: '60%',
                        left: '55%',
                    }}
                />

                {/* Set 2 - for lower half */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-50 animate-bounce-y blur-sm"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
                        top: '70%',
                        left: '75%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-50 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
                        top: '40%',
                        left: '25%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-40 animate-bounce-diagonal blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
                        top: '130%',
                        right: '10%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-40 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
                        top: '160%',
                        left: '55%',
                    }}
                />
            </div>

            {/* 🔥 Overlay - z-10 */}
            <div className="absolute inset-0 z-10 backdrop-blur-2xl bg-white/30" />

            {/* Card Grid Content */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-[800px] [perspective:1200px]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[475px] [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]"
                    >
                        {/* Front Side */}
                        <div className="absolute inset-0 bg-white shadow-2xl border border-white rounded-2xl overflow-hidden [backface-visibility:hidden]">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-slate-800 mb-2">{card.title}</h2>
                                <p className="text-slate-600 pt-[200px]">{card.content}</p>
                            </div>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-[300px]"
                            />
                        </div>

                       {/* Back Side */}
                        <div
                        className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center"
                        style={{ backgroundImage: `url(${card.image})` }}
                        >
                        {/* Optional dark overlay for contrast */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Title - top-left */}
                        <h2 className="absolute top-6 left-6 text-2xl font-bold text-gray-200 z-10">
                            {card.title}
                        </h2>

                        {/* Content - bottom-left */}
                        <p className="absolute bottom-6 left-6 text-gray-200 z-10 w-3/4">
                            {card.back}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardGrid;