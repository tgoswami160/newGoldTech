import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'NewGoldTech Pro 2000',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
    features: ['2L water capacity', 'Quick heat-up', 'Ergonomic handle', 'Sturdy soleplate'],
    price: '₹2,499',
    bestFor: 'Home & small shops',
  },
  {
    id: 2,
    name: 'NewGoldTech Elite 3000',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['3L capacity', 'Steam burst', 'Non-stick soleplate', 'Auto shut-off'],
    price: '₹3,299',
    bestFor: 'Medium laundry businesses',
  },
  {
    id: 3,
    name: 'NewGoldTech Commercial',
    image: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?w=600&q=80',
    features: ['Heavy duty build', 'All-day use', '2-year warranty', 'Spare parts support'],
    price: '₹4,499',
    bestFor: 'Large laundries & hotels',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Page header */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Professional LPG gas irons built for durability, efficiency, and value.
          </motion.p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={cardItem}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
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
                <span className="text-sm font-medium text-brand-600">{product.bestFor}</span>
                <h2 className="text-2xl font-semibold text-gray-900 mt-1 mb-3">{product.name}</h2>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-brand-600 font-bold text-xl mb-5">{product.price}</p>
                <Link
                  to="/contact"
                  className="block w-full py-3 text-center bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.div>
  )
}
