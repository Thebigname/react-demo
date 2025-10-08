import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className=" text-gray-200 min-h-screen flex flex-col justify-center py-16 px-6 md:px-20">
      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or a
          project idea — let’s connect.
        </p>
      </header>

      {/* CONTACT GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* CONTACT INFO */}
        <div className="space-y-8 bg-green-700/30 border border-[#00df9a] rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Contact Information
          </h2>
          <div className="flex items-center space-x-4">
            <Mail className="text-[#00df9a]" />
            <span>hello@yourcompany.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-[#00df9a]" />
            <span>+234 800 123 4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-[#00df9a]" />
            <span>Lagos, Nigeria</span>
          </div>

          <p className="text-white text-sm mt-8">
            Our team typically replies within 24 hours.
          </p>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-green-700/30 border border-[#00df9a] rounded-2xl p-10 shadow-lg space-y-6"
        >
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your full name"
              className="w-full p-3 bg-green-700/20 border border-[#00df9a] rounded-lg text-gray-200 outline-none focus:border-indigo-500 transition"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="w-full p-3 bg-green-700/20 border border-[#00df9a]  rounded-lg text-gray-200 outline-none focus:border-indigo-500 transition"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 bg-green-700/20 border border-[#00df9a]  rounded-lg text-gray-200 outline-none focus:border-indigo-500 transition"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-[#00df9a] transition text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-400 text-center mt-3">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
