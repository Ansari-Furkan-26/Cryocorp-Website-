import React from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapProps {
    center?: { lat: number; lng: number };
    zoom?: number;
    markers?: Array<{
        position: { lat: number; lng: number };
        title: string;
        info?: string;
    }>;
}

const GoogleMap: React.FC<GoogleMapProps> = () => {
    return (
        <div className="relative">
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '300px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120667.7995971361!2d72.72969831640624!3d19.06950800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16.1!3m3!1m2!1s0x3be7c9397b25be19%3A0x6a192cd643eb0b0a!2sGoogle%20Mumbai!5e0!3m2!1sen!2sin!4v1751453744099!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Mumbai Location"
                />
            </div>
        </div>
    );
};

export default GoogleMap;