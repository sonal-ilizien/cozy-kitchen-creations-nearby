
import React from 'react';
import { ShieldCheck, Award, Leaf } from 'lucide-react';

const QualityAssurance: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-green-500" />,
      title: "Quality & Hygiene Assurance",
      description: "All cooks undergo strict verification and their kitchens must pass our rigorous hygiene inspection. Regular audits ensure continuous compliance."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "Certified Cooks",
      description: "Our cooks are trained in food safety and handling protocols. They receive certification only after demonstrating their expertise and commitment to quality."
    },
    {
      icon: <Leaf className="h-12 w-12 text-emerald-500" />,
      title: "Eco-friendly Packaging Promise",
      description: "We're committed to sustainability with our eco-friendly packaging options. All containers are biodegradable or recyclable."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Trust Commitments</h2>
        <p className="section-subtitle">We prioritize your health and safety with our comprehensive quality assurance practices</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-beige-50 to-white p-6 rounded-2xl shadow-md border border-beige-100"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brown-600 text-center">{feature.title}</h3>
              <p className="text-brown-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-beige-100 p-6 md:p-10 rounded-2xl">
          <h3 className="text-2xl font-semibold text-brown-600 mb-6 text-center">Our Verification Process</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-500 font-semibold">1</span>
              </div>
              <h4 className="font-medium text-brown-600 text-center mb-2">Background Check</h4>
              <p className="text-sm text-brown-500 text-center">Thorough verification of cook's identity and background</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-500 font-semibold">2</span>
              </div>
              <h4 className="font-medium text-brown-600 text-center mb-2">Kitchen Inspection</h4>
              <p className="text-sm text-brown-500 text-center">On-site visit to verify cleanliness and proper facilities</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-500 font-semibold">3</span>
              </div>
              <h4 className="font-medium text-brown-600 text-center mb-2">Food Safety Training</h4>
              <p className="text-sm text-brown-500 text-center">Mandatory training on proper food handling and storage</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-500 font-semibold">4</span>
              </div>
              <h4 className="font-medium text-brown-600 text-center mb-2">Regular Audits</h4>
              <p className="text-sm text-brown-500 text-center">Ongoing inspections to maintain our high standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
