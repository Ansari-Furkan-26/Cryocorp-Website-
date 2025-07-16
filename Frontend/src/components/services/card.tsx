import React from 'react';

const CardGrid = () => {
    const cards = [
        {
            title: 'PSA Oxygen Plant',
            content: '(93–95% purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img2.png',
        },
        {
            title: 'PSA Nitorgen Plant',
            content: '(93–95% purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img2.png',
        },
        {
            title: 'ASU Oxygen Plant',
            content: '(99%+ purity Oxygen from Air) with technicians & spares support',
            image: '/services/img3.png',
        },
        {
            title: 'ASU Nitrogen Plant',
            content: '(99%+ purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img3.png',
        },
        {
            title: 'Acetylene Plant',
            content: ' (Storing and Distribution) of Industrial Gases  with technicians & spares support',
            image: '/services/img4.png',
        },
        {
            title: 'Liquid Bottling Unit',
            content: ' (Storing and Distribution) of Industrial Gases  with technicians & spares support',
            image: '/services/img4.png',
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
                        top: '10%',
                        left: '25%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-y blur-sm"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
                        top: '30%',
                        left: '45%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-diagonal blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
                        top: '30%',
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
                    className="absolute w-[400px] h-[400px] rounded-full opacity-50 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
                        top: '110%',
                        left: '25%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-50 animate-bounce-y blur-sm"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
                        top: '130%',
                        left: '45%',
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

            {/* Card Grid Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-[800px]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-2xl border border-white rounded-lg overflow-hidden w-full h-[475px] transition-transform hover:scale-[1.02]"
                    >
                        <div className="p-5">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                {card.title}
                            </h2>
                            <p className="text-slate-600 pt-[100px]">{card.content}</p>
                        </div>
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-[300px] object-cover "
                        />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardGrid;
