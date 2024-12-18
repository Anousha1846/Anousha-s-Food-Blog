import React from "react";

const ContactPage = () => {
  return (
    <div className=" text-darkBrown min-h-screen flex flex-col justify-center py-16 px-6 md:px-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-deepRed mb-4">Contact Us</h1>
        <p className="text-lg font-mono text-mutedOlive max-w-2xl mx-auto">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
      </header>

      {/* Contact Form Section */}
      <div className="w-4xl md:mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-mutedOlive">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 mt-2 border border-lightTan rounded-md focus:outline-none focus:ring-2 focus:ring-deepRed"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-mutedOlive">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 mt-2 border border-lightTan rounded-md focus:outline-none focus:ring-2 focus:ring-deepRed"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-lg font-medium text-mutedOlive">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full p-3 mt-2 border border-lightTan rounded-md focus:outline-none focus:ring-2 focus:ring-deepRed"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-deepRed text-white font-semibold rounded-md hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>



      {/* Footer Section */}
      <footer className="mt-16 text-center text-mutedOlive text-lg">
        <p>&copy; 2024 Anousha Food Blogs. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
