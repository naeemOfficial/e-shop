import React from 'react';

interface ServiceDetailsProps {
    serviceName: string;
    description: string;
    rate: string;
    serviceFeatures: string;
    image: string; // Add image prop
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
    serviceName,
    description,
    rate,
    serviceFeatures,
    image, // Destructure image prop
}) => {
    return (
        <div>
            <h1>{serviceName}</h1>
            <img src={image} alt={serviceName} />
            <p>Description: {description}</p>
            <p>Rate: {rate}</p>
            <p>Service Features: {serviceFeatures}</p>
        </div>
    );
};

export default ServiceDetails;
