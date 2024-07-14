import React, { useState } from "react";

const Form = ({ text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("https://accredian-backend-task-zax6.onrender.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, course }),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          handleModal();
        } else {
          console.error("Error submitting form:", await response.text());
        }
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!course) newErrors.course = "Course is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    return newErrors;
  };

  return (
    <>
      <button
        className="font-medium text-xl rounded-lg bg-accredian-blue px-10 py-4 text-white"
        onClick={handleModal}
      >
        {text}
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter friend's name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter friend's email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Course Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Referred Course Name"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
                {errors.course && (
                  <p className="text-red-500 text-xs mt-1">{errors.course}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={handleModal}
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
