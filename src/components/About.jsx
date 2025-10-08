import React, { useEffect, useState } from "react";
import { BarChart3, Cpu, Rocket, Users, Zap, TrendingUp, Database } from "lucide-react";
import ana from '../assets/ana.jpg'

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [counts, setCounts] = useState({ users: 0, resources: 0, clients: 0, countries: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Growing with Data Analytics",
    "Fast, Flexible Financing for SaaS",
    "Empowering Businesses through Insight",
    "This webisite was built with so much ❤️❤️❤️ by THE BIG NAME"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[typewriterIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentPhrase.length) {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 60 : 80);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, typewriterIndex]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // CountUp animation
  useEffect(() => {
    setIsVisible(true);
    const targets = { users: 25000, resources: 1200, clients: 340, countries: 98 };
    const duration = 3000;
    const steps = 60;
    const stepTime = duration / steps;

    const interval = setInterval(() => {
      setCounts((prev) => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(targets).forEach((key) => {
          const increment = targets[key] / steps;
          const newValue = Math.min(prev[key] + increment, targets[key]);
          newCounts[key] = Math.floor(newValue);
          if (newValue < targets[key]) allComplete = false;
        });

        if (allComplete) clearInterval(interval);
        return newCounts;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

 

  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Real-Time Processing",
      desc: "Process millions of data points per second with sub-100ms latency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Predictive Analytics",
      desc: "ML-powered forecasting to predict trends before they happen",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Integration",
      desc: "Connect 200+ data sources with zero-config API integrations",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <div className=" text-gray-200 min-h-screen py-16 px-6 md:px-20">
      {/* HEADER */}
      <header className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
          React Analytics
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-6 h-12 flex items-center justify-center">
          {typewriterText}<span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          At React Analytics, we help businesses unlock the power of data —
          transforming raw insights into actionable growth strategies. Our
          platform empowers startups, enterprises, and SaaS companies to monitor
          performance, optimize customer engagement, and maximize revenue across
          B2B and B2C platforms.
        </p>
      </header>

      {/* STORY */}
      <section className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Our Story</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Born from a simple question — "How can data drive human creativity?"
            — React Analytics started as a small project focused on simplifying
            analytics for creators and developers. Today, we empower thousands
            of users to visualize metrics that matter, offering scalable
            solutions for SaaS, fintech, and global enterprises.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We believe in one thing: data should be beautiful, insightful, and
            fast. With a commitment to innovation, we blend performance,
            storytelling, and technology to redefine how businesses grow.
          </p>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
          <img className="rounded-2xl shadow-lg border border-gray-800"
            src={ana}
            alt="Data analytics dashboard"
        
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto mb-24">
        <h3 className={`text-3xl font-bold text-center text-white mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          What Drives Us
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <BarChart3 className="text-[#00df9a] w-10 h-10 mb-3" />,
              title: "Data-First Mindset",
              desc: "Every decision starts with measurable insight and ends with growth.",
            },
            {
              icon: <Rocket className="text-[#00df9a] w-10 h-10 mb-3" />,
              title: "Innovation",
              desc: "We embrace change and constantly push the boundaries of technology.",
            },
            {
              icon: <Cpu className="text-[#00df9a] w-10 h-10 mb-3" />,
              title: "Efficiency",
              desc: "Speed and scalability drive every feature we build for modern teams.",
            },
            {
              icon: <Users className="text-[#00df9a] w-10 h-10 mb-3" />,
              title: "Community",
              desc: "We're powered by people — developers, analysts, and dreamers alike.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className={` border border-[#00df9a] p-8 rounded-2xl hover:border-[#00df9a] transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {value.icon}
              <h4 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h4>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className={`max-w-[1600px] mx-auto text-center mb-24 py-16 border border-[#00df9a] p-40 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h3 className="text-3xl font-bold mb-10 text-white">
          Our Growing Impact
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { key: 'users', label: "Active Users" },
            { key: 'resources', label: "Resources Downloaded" },
            { key: 'clients', label: "Enterprise Clients" },
            { key: 'countries', label: "Countries Reached" },
          ].map((metric, i) => (
            <div
              key={i}
              className="p-4  rounded-xl border border-gray-800 hover:border-indigo-500 transition duration-300 transform hover:scale-105"
              style={{ transitionDelay: `${i * 10000}ms` }}
            >
              <h4 className="text-5xl font-extrabold text-[#00df9a] mb-3">
                {counts[metric.key].toLocaleString()}+
              </h4>
              <p className="text-gray-400 text-lg">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE VISUAL FEATURES SECTION */}
      <section className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          Built for Performance
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 transform ${
                  activeFeature === idx
                    ? 'bg-gradient-to-r ' + feature.color + ' shadow-2xl scale-105'
                    : ' border border-gray-800 hover:border-[#00df9a] hover:scale-102'
                }`}
              >
                <div className={`flex items-start gap-4 ${activeFeature === idx ? 'text-white' : 'text-gray-400'}`}>
                  <div className={activeFeature === idx ? 'text-white' : 'text-[#00df9a]'}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${activeFeature === idx ? 'text-white' : 'text-white'}`}>
                      {feature.title}
                    </h4>
                    <p className={activeFeature === idx ? 'text-white/90' : 'text-gray-400'}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Animated Visual */}
          <div className="relative h-96  rounded-2xl border border-gray-800 overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Floating data visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 rounded-full border-4 transition-all duration-1000 ${
                      activeFeature === i ? 'scale-100 opacity-100' : 'scale-75 opacity-30'
                    }`}
                    style={{
                      borderColor: activeFeature === i 
                        ? i === 0 ? '#f59e0b' : i === 1 ? '#10b981' : '#6366f1'
                        : '#374151',
                      animation: activeFeature === i ? `pulse-ring-${i} 2s ease-in-out infinite` : 'none'
                    }}
                  />
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center shadow-2xl transition-all duration-500`}>
                    <div className="text-white">
                      {features[activeFeature].icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`text-center border border-[#00df9a] rounded-2xl py-20 px-8 max-w-5xl mx-auto shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h3 className="text-3xl font-bold mb-4 text-white">
          Start Growing with React Analytics
        </h3>
        <p className="text-gray-400 mb-8 text-lg">
          Fast, flexible, and built for the future of data-driven decisions.
          Join hundreds of teams already transforming insights into impact.
        </p>
        <button className="bg-green-700 hover:bg-[#00df9a] transition text-white font-semibold py-3 px-8 rounded-lg text-lg transform hover:scale-105">
          Start Your Journey →
        </button>
      </section>

    
      <style>{`
        @keyframes pulse-ring-0 {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes pulse-ring-1 {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.4; }
        }
        @keyframes pulse-ring-2 {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default About;