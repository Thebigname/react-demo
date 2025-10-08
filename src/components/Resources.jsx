import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resources = () => {
  const [search, setSearch] = useState("");
  const [filteredResources, setFilteredResources] = useState([]);

  const resources = [
    {
      title: "Developer Documentation",
      description:
        "Comprehensive guides and API references to help you start working faster.",
      link: "#",
    },
    {
      title: "Community Forum",
      description:
        "Join discussions, share insights, and collaborate with other developers.",
      link: "#",
    },
    {
      title: "Tutorial Videos",
      description:
        "Step-by-step tutorials to help you understand and build projects effectively.",
      link: "#",
    },
    {
      title: "Blog & Updates",
      description:
        "Stay updated with the latest company news, features, and developer stories.",
      link: "#",
    },
    {
      title: "API Status",
      description:
        "Check our API uptime, latency, and performance metrics in real-time.",
      link: "#",
    },
    {
      title: "Help Center",
      description:
        "Quick answers and troubleshooting for common technical and account issues.",
      link: "#",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setFilteredResources(resources);
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    setFilteredResources(
      resources.filter(
        (res) =>
          res.title.toLowerCase().includes(lowerSearch) ||
          res.description.toLowerCase().includes(lowerSearch)
      )
    );
  }, [search]);

  return (
    <div className=" text-white min-h-screen py-16 px-6 md:px-20">
      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">
          Resources
        </h1>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Everything you need to make the most out of our platform — learn, build, and connect.
        </p>
      </header>

      {/* SEARCH BAR */}
      <div
        className="flex justify-center mb-14"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 lg:w-1/2 bg-gray-900 border border-gray-800 focus:border-[#00df9a] rounded-xl px-5 py-3 text-gray-300 placeholder-gray-500 outline-none transition-all duration-300"
        />
      </div>

      {/* RESOURCE CARDS */}
      <section
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
      >
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <div
              key={index}
              className="bg-indigo border border-gray-800 p-8 rounded-2xl hover:border-[#00df9a] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#00df9a]">
                {resource.title}
              </h3>
              <p className="text-gray-400 mb-6">{resource.description}</p>
              <a
                href={resource.link}
                className="text-[#00df9a] hover:text-green-600 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))
        ) : (
          <p
            className="text-center text-gray-500 col-span-full text-lg"
            data-aos="fade-up"
          >
            No resources found matching your search.
          </p>
        )}
      </section>

    </div>
  );
};

export default Resources;
