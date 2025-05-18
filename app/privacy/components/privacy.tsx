export const metadata = {
  title: "Privacy Policy - Safari Adventures",
  description: "Learn how Safari Adventures handles your personal data and protects your privacy.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-lg">Your Data, Our Commitment</p>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="prose prose-lg max-w-none text-gray-800 space-y-8">
          <h2>1. Introduction</h2>
          <p>
            At Safari Adventures, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you book a tour or interact with our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect the following types of information:
            - <strong>Personal Information:</strong> Name, email address, phone number, passport details, and payment information provided during booking.
            - <strong>Travel Preferences:</strong> Dietary restrictions, special requests, and travel dates.
            - <strong>Technical Data:</strong> IP address, browser type, and cookies for website functionality and analytics.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information to:
            - Process and manage your tour bookings.
            - Communicate with you about your travel plans and updates.
            - Improve our services and personalize your experience.
            - Comply with legal obligations and protect against fraud.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share it with:
            - Third-party service providers (e.g., hotels, transport companies) to fulfill your booking.
            - Legal authorities if required by law.
            - Business partners with your consent for promotional offers.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data, including encryption and secure servers. However, no online transmission is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
            - Access, correct, or delete your personal data.
            - Object to processing or request data portability.
            - Withdraw consent at any time by contacting us at [support@safariadventures.com].
          </p>

          <h2>7. Cookies and Tracking</h2>
          <p>
            We use cookies to enhance your browsing experience and analyze website usage. You can manage cookie preferences through your browser settings.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The latest version will be posted here with an updated "Last Updated" date: May 18, 2025, 06:17 PM EAT.
          </p>
        </section>
      </main>
    </div>
  );
}