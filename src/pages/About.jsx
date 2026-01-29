import { motion } from 'framer-motion'

const missionVision = [
  {
    title: 'Our Mission',
    desc: 'To provide affordable, durable LPG gas irons that empower professionals and households with reliable pressing solutions.',
    icon: '🎯',
  },
  {
    title: 'Our Vision',
    desc: 'To be the most trusted name in LPG gas irons across India and beyond, known for quality and value.',
    icon: '👁️',
  },
]

const qualityPoints = [
  'Rigorous testing at every production stage',
  'Use of premium materials for longevity',
  'Compliance with safety standards',
  'Dedicated quality assurance team',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1920&q=80"
          alt="NewGoldTech manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Building trust through quality and affordability since day one.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            NewGoldTech was founded with a simple belief: every laundry professional and home
            deserves access to reliable, efficient LPG gas irons without paying a premium. We saw
            a gap in the market — quality irons were either too expensive or too fragile for
            daily use.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Today, we design and manufacture irons that combine durability, performance, and
            affordability. From small ironing shops to large laundries, our products are trusted
            where it matters most. We are committed to continuous improvement and customer
            satisfaction at every step.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Mission & Vision
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {missionVision.map((card) => (
              <motion.div
                key={card.title}
                variants={item}
                className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100"
              >
                <span className="text-5xl mb-4 block">{card.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manufacturing & Quality
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Our manufacturing process is built around quality control at every stage. From
              raw material selection to final packaging, we ensure that each NewGoldTech iron
              meets the high standards our customers expect.
            </p>
            <ul className="space-y-3">
              {qualityPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src="https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?w=800&q=80"
              alt="Quality manufacturing"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
