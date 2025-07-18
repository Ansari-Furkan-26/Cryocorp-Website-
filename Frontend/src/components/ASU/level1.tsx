import React from 'react';

const IndustrialDiagram: React.FC = () => {
    return (
        <div id='level-2' className="bg-white p-4 shadow-lg">
            {/* Header Text */}
            <div className="mb-6 max-w-4xl mx-auto border-l-2 border-blue-600 pl-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                    At CryoCorp, our <strong>ASU (Air Separation Unit) Plants</strong> transform atmospheric air into high-purity industrial gases
                    through a precise and highly efficient cryogenic process. It starts with compressing and cooling the air,
                    followed by advanced purification to remove moisture, oil, and CO₂. The purified air is then chilled to
                    cryogenic temperatures and sent into distillation columns, where oxygen and nitrogen are separated based
                    on their unique boiling points.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                    Behind the scenes, a carefully engineered system of air compressors, heat exchangers, expansion engines,
                    and insulated cold boxes work seamlessly to ensure reliability and safety. From automated controls to liquid
                    oxygen pumps and cylinder filling stations, every step is designed for performance, precision, and long-term
                    operational ease.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                    This is the science of air—delivered with CryoCorp's commitment to quality and innovation.
                </p>
            </div>

            {/* Level 2 Badge */}
            <div className="mb-4 max-w-4xl mx-auto">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 text-sm font-semibold rounded">
                    LEVEL 2
                </span>
            </div>

            {/* Industrial Diagram - Full Width */}
            <div className="w-full">
                <img
                    src="/ASU/asu5.png"
                    alt="ASU Industrial Process Diagram"
                    className="w-full h-auto rounded-lg border border-gray-200  "
                />
            </div>
        </div>
    );
};

export default IndustrialDiagram;
