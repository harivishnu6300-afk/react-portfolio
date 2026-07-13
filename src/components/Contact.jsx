import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "15ca94c4-cc89-40d3-9ce2-691dd851ac8c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-slate-900 py-20 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-14"
        >
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left */}
          <div
            className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/30 transition duration-500"
          >
            <h3 className="text-3xl text-white font-bold mb-6">
              Let's Connect 👋
            </h3>

            <p className="text-slate-300 leading-8 mb-8">
              I'm always open to discussing new opportunities,
              freelance projects, or connecting with developers.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-white break-all">
                  harivishnu6300@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-2xl" />
                <span className="text-white">
                  +91 6300862630
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span className="text-white">
                  Andhra Pradesh, India
                </span>
              </div>

            </div>
          </div>

          {/* Right */}
          <form
            onSubmit={onSubmit}
            className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/30 transition duration-500"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full mb-5 p-4 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full mb-5 p-4 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="5"
              name="message"
              required
              placeholder="Your Message"
              className="w-full mb-5 p-4 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg text-white font-bold transition"
            >
              Send Message
            </button>

            <p className="text-center text-cyan-400 mt-4">
              {result}
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;