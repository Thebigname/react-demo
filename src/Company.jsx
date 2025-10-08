import { motion } from 'framer-motion'
import gp from './assets/gp.png'
import { Users, Code2, TrendingUp, ShieldCheck, Cpu } from 'lucide-react'


export default function Company() {
  return (
    <div className="min-h-screen text-white px-6 py-16">
      {/* Team Section */}
      <section className="text-center mb-24">
       <h1 className='text-5xl font-bold mb-6 text-white'>Meet The Team</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          We’re a team of passionate innovators, engineers, and creators driving growth through data and design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { name: 'Patrick Godspower', role: 'CEO & Founder' , image: gp  },
            { name: 'Michael Lee', role: 'CTO & Product Lead' },
            { name: 'Amara Okafor', role: 'Lead Developer' },
            { name: 'Daniel Reed', role: 'Head of Design' }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className=" border border-gray-800 rounded-2xl p-6 hover:border-green-400 transition-all shadow-md hover:shadow-green-400/10"
            >
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-700"
                />
              ) : (
                // Fallback gradient if no image is provided
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              )}
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center">
        <h1 className='text-5xl font-bold mb-6 text-white'>What We Do</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          We provide scalable, data-driven solutions that empower SaaS companies to grow smarter and faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <TrendingUp className="w-10 h-10 text-green-400" />,
              title: 'Analytics & Insights',
              text: 'Unlock real-time insights and performance metrics to make informed decisions.'
            },
            {
              icon: <Code2 className="w-10 h-10 text-blue-400" />,
              title: 'Custom SaaS Development',
              text: 'We build scalable, modern SaaS platforms tailored to your business needs.'
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-teal-400" />,
              title: 'Security & Compliance',
              text: 'Ensure your platform is secure, compliant, and protected with our modern security stack.'
            },
            {
              icon: <Cpu className="w-10 h-10 text-purple-400" />,
              title: 'Automation Tools',
              text: 'Reduce manual workflows with smart automation solutions for your business.'
            },
            {
              icon: <Users className="w-10 h-10 text-pink-400" />,
              title: 'Collaboration Systems',
              text: 'Empower your team with seamless collaboration and data-sharing tools.'
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-yellow-400" />,
              title: 'Growth Optimization',
              text: 'Leverage data-backed strategies to enhance user acquisition and retention.'
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className=" border border-gray-800 rounded-2xl p-8 hover:border-green-400 transition-all shadow-md hover:shadow-green-400/10 flex flex-col items-center text-center space-y-4"
            >
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-500">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
