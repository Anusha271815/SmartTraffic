import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Terms and Conditions
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using the Traffic Saathi platform (the "Platform"), you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions (the "Terms"). If you do not agree with
            these Terms, you are strictly prohibited from using the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of the Platform</h2>
          <p className="text-gray-700 leading-relaxed">
            Users shall use the Platform solely for lawful purposes. Any attempt
            to interfere with, disrupt, or misuse the Platform is strictly
            prohibited and may result in legal action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            Users are responsible for maintaining the confidentiality of their
            account credentials and are liable for all activities conducted under
            their accounts. Unauthorized access or sharing of credentials is
            prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            All content, software, logos, trademarks, and proprietary information
            available on the Platform are the exclusive property of Traffic Saathi
            and are protected by applicable intellectual property laws. Any
            unauthorized reproduction, distribution, or commercial use is strictly
            prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            The Platform is provided on an "as-is" and "as available" basis. Traffic
            Saathi shall not be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from the use of the
            Platform, including but not limited to data loss, system errors, or
            operational interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Privacy and Data Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            Personal information collected through the Platform is subject to our
            Privacy Policy. Users consent to the collection, use, and processing
            of their data as outlined in the Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Modification of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            Traffic Saathi reserves the right to modify these Terms at any time.
            Continued use of the Platform constitutes acceptance of the revised
            Terms. Users are encouraged to review the Terms periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the
            laws of India. Any disputes arising from or in connection with the
            Platform shall be subject to the exclusive jurisdiction of the courts
            located in New Delhi, India.
          </p>
        </section>

        <section>
          <p className="text-gray-700 leading-relaxed mt-4">
            By using the Traffic Saathi Platform, you acknowledge that you have
            read, understood, and agree to these Terms and Conditions in their
            entirety.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Terms;

