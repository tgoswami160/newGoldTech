import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1920&q=80',
    title: 'NewGoldTech — Powering Perfect Pressing',
    subtitle: 'Affordable. Durable. Professional.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    title: 'Built for Professionals',
    subtitle: 'Trusted by ironing shops worldwide.',
  },
  {
    image: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?w=1920&q=80',
    title: 'Efficiency Meets Reliability',
    subtitle: 'LPG gas powered. Cost-effective.',
  },
]

const whyChooseUs = [
  { icon: '🔥', title: 'High Performance Heating', desc: 'Rapid heat-up for faster ironing.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Quality without breaking the bank.' },
  { icon: '🛡️', title: 'Durable Build', desc: 'Engineered to last years.' },
  { icon: '⛽', title: 'LPG Gas Efficiency', desc: 'Lower running costs than electric.' },
  { icon: '✓', title: 'Trusted by Professionals', desc: 'Preferred by laundry businesses.' },
  { icon: '🔒', title: 'Safe & Reliable', desc: 'Certified and tested for safety.' },
]

const products = [
  {
    id: 1,
    name: 'NewGoldTech Pro 2000',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
    features: ['2L capacity', 'Quick heat', 'Ergonomic handle'],
    price: '₹2,499',
  },
  {
    id: 2,
    name: 'NewGoldTech Elite 3000',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['3L capacity', 'Steam burst', 'Non-stick soleplate'],
    price: '₹3,299',
  },
  {
    id: 3,
    name: 'NewGoldTech Commercial',
    image: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?w=600&q=80',
    features: ['Heavy duty', 'All-day use', 'Warranty 2 years'],
    price: '₹4,499',
  },
]

const team = [
  { name: 'Anand Kumar Sharma', role: 'CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Sandeep Rajput', role: 'CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Neeraj Kumar Sharma', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'},
  { name: 'Sanju', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'},
]

const usageImages = [
  { url: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80', alt: 'Professional ironing' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Home use' },
  { url: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?w=600&q=80', alt: 'Laundry shop' },
]

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Carousel */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroIndex].image}
              alt="NewGoldTech LPG Iron"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {heroSlides[heroIndex].title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                {heroSlides[heroIndex].subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/products"
                  className="px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/20 backdrop-blur border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === heroIndex ? 'bg-white w-8' : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Affordability Meets Excellence */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affordability Meets Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            At NewGoldTech, we believe every professional and home deserves a reliable LPG gas iron
            without the premium price tag. Our irons are built with the same attention to quality
            that businesses demand — durable, efficient, and ready for heavy use.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usageImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <SectionWrapper>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Our Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Professional LPG gas irons built for durability and efficiency.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg overflow-hidden border border-gray-100 group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <ul className="text-gray-600 text-sm space-y-1 mb-4">
                  {product.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <p className="text-brand-600 font-bold text-lg mb-4">{product.price}</p>
                <Link
                  to="/products"
                  className="block w-full py-3 text-center bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            View all products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Meet the people behind NewGoldTech.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-soft overflow-hidden text-center"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-brand-600 font-medium mb-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function SectionWrapper({ children }) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </section>
  )
}

