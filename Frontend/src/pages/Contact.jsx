import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully");
        setForm({ fname: "", lname: "", email: "", number: "", message: "" });
      } else {
        setStatus("Something went wrong");
      }
    } catch (err) {
      setStatus("Server Error");
    }
  };

  return (
    <div className="h-vw p-6 md:p-12 flex flex-col lg:flex-row gap-8 justify-center items-center mt-30">
      <div className="w-full lg:w-1/4 text-white flex flex-col items-center lg:items-start text-center lg:text-left">
        <img className="w-full max-w-xs mb-4" src="/images/Lokacioni.png" />
        <p className="text-lg md:text-xl">
          The doors are always open. Until they’re not.
        </p>
      </div>

      <div className="w-full lg:w-1/3 bg-white p-6 ">
        <h1 className="text-2xl md:text-3xl font-bold">Send Us A Message</h1>
        <p className="mt-4 text-sm md:text-base">
          Please fill in this form to get in touch with us.
        </p>

        <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="bg-gray-100 p-2 rounded w-full"
              name="fname"
              value={form.fName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              className="bg-gray-100 p-2 rounded w-full"
              name="lname"
              value={form.lName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="bg-gray-100 p-2 rounded w-full"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            <input
              className="bg-gray-100 p-2 rounded w-full"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <textarea
            className="w-full bg-gray-100 rounded p-3"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
          />

          <button className="mt-2 bg-zinc-950 p-2 w-full md:w-32 rounded text-white hover:bg-red-500 transition">
            Submit
          </button>

          <p>{status}</p>
        </form>
      </div>

      <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl mb-4">Contact</h1>
        <p className="mt-2">
          Get in touch with us regarding programs, collaborations, partnerships,
          or use of the space.
        </p>
        <p className="mt-3">Email: info@futjangjyre.org</p>
        <p className="mt-3">
          Phone: +383 49 157 351 Available on WhatsApp & Viber
        </p>
        <p className="mt-3">Address: Adem Voca 20 Mitrovicë 40000 Kosovo</p>
        <p className="mt-3">We aim to respond within 24–48 hours.</p>
      </div>
    </div>
  );
}

export default Contact;
