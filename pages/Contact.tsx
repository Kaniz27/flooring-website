
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { CONTACT_ADDRESS, CONTACT_PHONE, CONTACT_EMAIL, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Connect With Us</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Have a question or looking for a custom quote? Reach out to us today. Our team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="bg-purple-900 text-white p-10 rounded-[40px] space-y-8 flex flex-col justify-between">
              <h3 className="text-2xl font-bold">Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-purple-200 text-sm leading-relaxed">{CONTACT_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold">Call / WhatsApp</h4>
                    <p className="text-purple-200 text-sm">{CONTACT_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Address</h4>
                    <p className="text-purple-200 text-sm break-all">{CONTACT_EMAIL}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all"><FaFacebook /></a>
                <a href={WHATSAPP_LINK} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all"><FaWhatsapp /></a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all"><FaEnvelope /></a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
              
              {isSent ? (
                <div className="bg-green-50 border border-green-100 text-green-700 p-8 rounded-3xl text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                    <FaPaperPlane />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSent(false)} 
                    className="mt-6 font-bold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all outline-none"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+971 50..."
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all outline-none"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all outline-none"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all outline-none resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all active:scale-[0.98] shadow-lg shadow-purple-100 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    <FaPaperPlane className={isSubmitting ? 'animate-bounce' : ''} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Find Us on Map</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>
          <div className="h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl border border-white">
            <iframe
              title="Contact Page Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115546.99222441955!2d55.26359052028169!3d25.174828362615462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6063b715694d%3A0xc34a06584f18d533!2sDragon%20Mart!5e0!3m2!1sen!2sae!4v1709193421253!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://maps.google.com/?q=Dragon+Mart+1+Dubai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-8 py-4 rounded-2xl font-bold shadow-md hover:shadow-lg transition-all border border-slate-100 inline-block"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
