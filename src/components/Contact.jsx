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
      console.log(data);
      setResult("❌ Something went wrong.");
    }
  };
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-duration="800"
      className="min-h-screen bg-slate-900 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div
            data-aos="zoom-in-right"
            data-aos-duration="800"
            className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-3xl text-white font-bold mb-6">
              Let's Connect 👋
            </h3>

            <p className="text-slate-300 leading-8 mb-8">
              I'm always open to discussing new opportunities, freelance
              projects, or simply connecting with other developers.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-white">harivishnu6300@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-2xl" />
                <span className="text-white">+91 6300862630</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span className="text-white">Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form
            onSubmit={onSubmit}
            data-aos="zoom-in-left"
            data-aos-duration="800"
            className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-500"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full mb-5 p-4 rounded-lg bg-slate-700 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full mb-5 p-4 rounded-lg bg-slate-700 text-white outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full mb-5 p-4 rounded-lg bg-slate-700 text-white outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg text-white font-bold transition duration-300"
            >
              Send Message
            </button>
            <p className="text-center text-cyan-400 mt-4">{result}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
