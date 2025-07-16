import React, { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

const FAQ_DATA: Record<string, FAQ[]> = {
    Products: [
        {
            question: 'What types of industrial gas plants and equipment does CryoCorp O2 LLP offer?',
            answer: 'We offer a comprehensive range of industrial gas solutions including Air Separation Units (ASU) for producing high-purity Oxygen and Nitrogen, with capacities ranging from 80 cu.m to 400 cu.m for plants and 45-600 cu.m/hr generally. We also provide PSA Oxygen and Nitrogen Plants in partnership with Summits Hygronics. Our offerings extend to Acetylene Plants available in 45 cu.m/hr and 100 cu.m/hr capacities, and Liquid Refilling Bottling Plants for gases like Oxygen, Nitrogen, Argon, CO2, and Hydrogen. Additionally, we supply over 9,000 related spare parts, accessories, and ancillaries.',
        },
        {
            question: 'What types of spare parts can I source from CryoCorp? ',
            answer: 'AMC (Annual Maintenance Contract) typically involves scheduled, preventive maintenance to keep your plant running efficiently. CMC (Critical Maintenance Consultancy) focuses on troubleshooting breakdowns, critical problem resolution, performance optimization, and urgent interventions for issues like purity deviations, leaks, or decomposition risks.',
        },
        {
            question: 'Are your products compatible with different plant makes? ',
            answer: 'Yes, we handle ORG, NOx, KVK & Universal plants & compressors. We offer Air Separation Unit spares compatible with Sanghi, KVK, Universal, and OxyPlant brands or makes of plants. Our maintenance services for Acetylene plants cover Sanghi Oversees, KVK, and Universal Boschi makes.'
        },
        {
            question: 'Do you offer customized solutions? ',
            answer: 'Yes, CryoCorp O2 LLP holds expertise in customized manufacturing and can tailor our solutions to fit your specific operational needs and scalability plans. Custom parts, like acetylene stabilizers, can be manufactured, typically requiring a 6–8 week lead time. We also offer customized manifolds under our Cryo Corp brand.'
        },
        {
            question: 'How quickly can I get a quotation for my product requirement?',
            answer: 'Most quotations are generated within 1–2 business days. For complex or customized requests, it might take 3–5 days as we ensure accuracy in specifications and pricing. You can reach out via email at admin@cryocorp.co.in, ashish@cryocorp.in, ea@cryocorp.in, or WhatsApp on 9004759939.'
        }
    ],
    Services: [
        {
            question: 'What types of services does CryoCorp offer for industrial gas plants? ',
            answer: 'We offer a comprehensive suite of services including Annual Maintenance Contracts (AMC) and Critical Maintenance Consultancy (CMC) for ASU Oxygen, ASU Nitrogen, PSA Oxygen, PSA Nitrogen, Acetylene, and Liquid Bottling Plants. We also undertake Projects such as the turnkey relocation of existing ASU or PSA plants to another location in India and/or abroad, erection and commissioning with site drawings of new PSA Oxygen and PSA Nitrogen Plants, and commissioning of Liquid Bottling Plants.',
        },
        {
            question: 'What is the difference between AMC and CMC? ',
            answer: 'AMC (Annual Maintenance Contract) typically involves scheduled, preventive maintenance to keep your plant running efficiently. CMC (Critical Maintenance Consultancy) focuses on troubleshooting breakdowns, critical problem resolution, performance optimization, and urgent interventions for issues like purity deviations, leaks, or decomposition risks.',
        },
        {
            question: 'Do you provide technical support and training? ',
            answer: 'Yes, we offer skilled technician support, including both on-site and remote assistance for quick troubleshooting and rapid issue resolution. We also provide custom training sessions for your in-house teams to improve operational efficiency and plant maintenance practices.'
        },
        {
            question: 'Can you assist with the installation and commissioning of new plants?',
            answer: 'Yes, we provide installation, commissioning, and maintenance support for our ASU plants. We offer specialized commissioning services for Liquid Bottling Units, ensuring precise installation, accurate calibration, system testing, and safety compliance as per PESO standards. For new PSA Oxygen and Nitrogen Plants, we provide erection and commissioning services with site drawings.'
        },
        {
            question: 'How does your service ensure minimal downtime?',
            answer: 'Our services are designed with a focus on reducing downtime and maintaining uninterrupted operations. We offer quick response and resolution with fast response times. For critical issues like PSA Oxygen purity recovery, we aim for 24-hour resolution. Our preventative approach emphasizes preventing costly breakdowns.'
        }
    ],
    Maintenance: [
        {
            question: 'Why is regular maintenance crucial for my industrial gas plant?',
            answer: 'Regular maintenance is essential for ensuring a consistent and reliable gas supply, preventing unplanned downtime and production delays. It helps in optimizing plant operations for maximum efficiency and minimizing energy consumption, and extending the equipment lifespan. This is vital for cost-effective production. For Acetylene plants, meticulous maintenance is critical due to the gass highly flammable nature to prevent severe safety incidents and production halts.',
        },
        {
            question: 'What is typically included in your plant maintenance services?',
            answer: 'Our maintenance services cover a wide range of activities depending on the plant type and contract, including preventive maintenance, production log analysis, performance optimization, troubleshooting breakdowns, adsorbent bed maintenance, valve calibration, VPSA cycle optimization, emergency response for solvent leaks or pressure fluctuations, immediate intervention for acetylene decomposition risks, and urgent stabilizer retrofits. We also provide access to high-quality spare parts for reliable replacements.',
        },
        {
            question: 'How often should maintenance be performed on PSA Nitrogen Plants?',
            answer: 'As per the guidelines for our PSA Nitrogen Plants AMC services, 3 visits are required in a year.',
        },
        {
            question: 'How quickly can CryoCorp respond to critical maintenance issues?',
            answer: ' We offer quick response times to minimize production losses and disruptions. For critical issues like PSA Oxygen purity recovery, we aim for 24-hour resolution. We also offer emergency response for issues such as solvent leaks or acetylene decomposition risks.',
        },
        {
            question: 'Do you use advanced techniques for maintenance and troubleshooting?',
            answer: ' Yes, our services include ML-powered root-cause analysis for precise diagnostics. We also utilize AI-driven process audits to ensure strict compliance with purity standards in ASU Oxygen plants, and AI-driven pressure monitoring for explosion-risk mitigation in Acetylene plants. Our ML-powered catalog aids in selecting the correct spares for reliable maintenance.',
        },
    ],
    'Export Process': [
        {
            question: 'Which countries does CryoCorp O2 LLP export to? ',
            answer: 'We are an Export Company with expertise in trading and exporting spares and machinery of Indian-made Oxygen Plants to the global south. Our products have reached over 450 clients in 25 countries in Africa, South America, Asia, and the Middle East. We are also well positioned to service new markets.',
        },
        {
            question: 'How does CryoCorp ensure timely delivery for export orders? ',
            answer: 'We understand the importance of ensuring timely delivery of spare parts and machinery to fulfill timely shipping and ensure your client retention. Quick delivery is a key aspect of our spare parts supply service.',
        },
        {
            question: 'Can CryoCorp assist with customs and logistics for exports? ',
            answer: 'Yes, we cooperate with your team in navigating customs procedures and international logistics.',
        },
        {
            question: 'What payment terms are available for international clients? ',
            answer: ' We offer quick response times to minimize production losses and disruptions. For critical issues like PSA Oxygen purity recovery, we aim for 24-hour resolution. We also offer emergency response for issues such as solvent leaks or acetylene decomposition risks.',
        },
        {
            question: 'How can CryoCorp ensure the quality and authenticity of parts and machinery for export? ',
            answer: 'We provide genuine and high-quality products. We offer test certificates wherever applicable, which helps instill trust regarding the quality and authenticity of parts and machinery. Our own brand, Cryo Corp, is a registered trademark that instills a seal of trust and genuine OEM quality spares. The company holds expertise in customized and outsourced manufacturing, trading, and exports',
        },
    ],
};

const FaqSection: React.FC = () => {
    const tabs = Object.keys(FAQ_DATA);
    const [activeTab, setActiveTab] = useState<string>('Products');
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    return (
        <section className="w-full min-h-screen bg-white py-24 px-6 pt-36">
            <div className="max-w-4xl mx-auto">
                {/* --- ORIGINAL INTRO --- */}
                <h2
                    className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                    style={{ color: '#5FC9D8' }}
                >
                    Frequently asked questions
                </h2>
                <p className="text-lg md:text-xl text-[#28585E] mb-12">
                    Clarity leads to confidence — and we’re here to offer both.
                    <br />
                    At CryoCorp, transparency is at the core of how we operate. This FAQ section is designed
                    to give you direct insights and clear information, so you always feel informed and
                    empowered.
                </p>
                {/* <nav className="space-y-4 mb-16">
          {tabs.map((item) => (
            <button
              key={item}
              className="text-lg font-medium text-gray-300 hover:text-gray-600 transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </nav> */}

                {/* --- NEW TAB + ACCORDION BELOW --- */}
                <div className="border-t pt-8">
                    {/* Tabs */}
                    <div className="flex space-x-6 border-b pb-4 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenQuestion(null);
                                }}
                                className={`pb-2 text-lg font-semibold transition-colors ${activeTab === tab
                                    ? 'border-b-4 border-[#5FC9D8] text-[#5FC9D8]'
                                    : 'border-b-4 border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Accordion */}
                    {activeTab && (
                        <div className="space-y-4">
                            {FAQ_DATA[activeTab].map((faq) => (
                                <div key={faq.question} className="border rounded-lg overflow-hidden">
                                    <button
                                        onClick={() =>
                                            setOpenQuestion((prev) =>
                                                prev === faq.question ? null : faq.question
                                            )
                                        }
                                        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                                    >
                                        <span className="font-medium">{faq.question}</span>
                                        <span className="ml-2">
                                            {openQuestion === faq.question ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openQuestion === faq.question && (
                                        <div className="px-4 py-3 bg-white text-gray-700">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};


export default FaqSection 