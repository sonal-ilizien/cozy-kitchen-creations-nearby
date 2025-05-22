
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChefHat, Check } from 'lucide-react';

const ApplyNow: React.FC = () => {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    experience: '',
    specialties: '',
    kitchenPhotos: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form data logic would go here
    console.log('Form submitted:', formData);
    nextStep();
  };

  const benefits = [
    "Earn ₹15,000 - ₹60,000 per month cooking meals you love",
    "Set your own schedule and work from home",
    "Share your family recipes and culinary heritage",
    "Build a loyal customer base and reputation",
    "Free food safety training and certification",
    "Supportive cook community and dedicated support team"
  ];

  const requirements = [
    "Valid ID and address proof",
    "Kitchen that meets our safety standards",
    "Passion for cooking and consistency",
    "Reliable internet connection",
    "Smartphone for order management",
    "Ability to purchase ingredients upfront (reimbursed through sales)"
  ];

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          {step === 1 && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4">
                  <ChefHat className="h-10 w-10 text-orange-500" />
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-brown-600">Become a HomePlate Chef</h1>
                <p className="text-lg text-brown-400 mt-4 max-w-2xl mx-auto">
                  Share your culinary skills, earn income, and build a following while cooking from the comfort of your home.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h2 className="text-xl font-semibold text-brown-600 mb-4">Benefits of Cooking with HomePlate</h2>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-brown-500">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h2 className="text-xl font-semibold text-brown-600 mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex">
                        <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-brown-500">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Button onClick={nextStep} className="btn-primary px-12">Get Started</Button>
                <p className="mt-4 text-brown-400">Already applied? <Link to="/login" className="text-orange-500">Sign in</Link></p>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-display font-semibold text-brown-600 mb-2">Personal Information</h2>
                  <p className="text-brown-400">Tell us about yourself so we can get to know you better</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-brown-500 mb-1">First Name</label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-brown-500 mb-1">Last Name</label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brown-500 mb-1">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brown-500 mb-1">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-brown-500 mb-1">Address</label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-brown-500 mb-1">City</label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-brown-500 mb-1">State</label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-brown-500 mb-1">ZIP Code</label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="button" className="btn-primary" onClick={nextStep}>
                        Next
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-display font-semibold text-brown-600 mb-2">Cooking Experience</h2>
                  <p className="text-brown-400">Tell us about your culinary background and specialties</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-brown-500 mb-1">
                        Cooking Experience
                      </label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Tell us about your cooking background, any culinary training or relevant experience..."
                        value={formData.experience}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="specialties" className="block text-sm font-medium text-brown-500 mb-1">
                        Cooking Specialties
                      </label>
                      <Textarea
                        id="specialties"
                        name="specialties"
                        placeholder="What cuisines or dishes do you specialize in? Any signature dishes?"
                        value={formData.specialties}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-brown-500 mb-1">
                        Kitchen Photos (Optional)
                      </label>
                      <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <div className="text-brown-500">
                          <p>Drag and drop some photos of your kitchen here, or click to select files</p>
                          <p className="text-xs mt-1">(Max 5 photos, 10MB each)</p>
                        </div>
                        <Input
                          type="file"
                          className="mt-4 mx-auto"
                          accept="image/*"
                          multiple
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="submit" className="btn-primary">
                        Submit Application
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-display font-semibold text-brown-600 mb-4">Application Submitted!</h2>
                <p className="text-brown-500 mb-6">
                  Thank you for applying to be a HomePlate chef. We've received your application and will review it within 2-3 business days.
                </p>
                <p className="text-brown-500 mb-8">
                  We'll send you an email at {formData.email} with next steps, including scheduling a virtual kitchen inspection.
                </p>
                <Button as={Link} to="/" className="btn-primary">Back to Homepage</Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyNow;
