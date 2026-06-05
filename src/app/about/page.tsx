'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/footer';

const highlights = ['Shipping, logistics & supply chain management', 'Energy consulting & infrastructure development', 'Digital & investment banking solutions', 'Polymer distribution for manufacturing', 'Digital health & telemedicine services', 'Property management & real estate development'];

const milestones = [
  { year: '2001', title: 'GIZE PLC Founded', description: 'Gizeshwork Tessema founded GIZE PLC in Addis Ababa, establishing a shipping and logistics firm that would grow into a multinational business powerhouse.' },
  { year: '2014', title: 'UN Global Recognition', description: 'Represented Ethiopia at the Women Empowerment Principles Annual Event at UN HQ and spoke at the 2nd Business and Investment Forum in Vienna before UN Secretary-General Ban Ki-Moon.' },
  { year: '2016', title: 'Harvard Business School', description: 'Selected for the Achieving Breakthrough Excellency Executive Education Program at Harvard Business School, positioning Ethiopia as a business case study country.' },
  { year: '2019', title: 'Energy & Digital Expansion', description: 'Secured MoU with IPDC for renewable energy projects. Selected as one of 100 CEOs globally by Accenture for the UN Business Action for the Decade report.' },
  { year: '2024', title: 'Digital Health & Real Estate', description: 'Launched telemedicine services in 100+ underserved locations using Starlink and initiated development of 20+ parking facilities with EV charging stations.' },
];

const values = [
  { title: 'Excellence', description: 'We pursue world-class standards across every division — from logistics to digital health — delivering solutions that exceed expectations.', icon: '\u2B50' },
  { title: 'Sustainability', description: 'We promote renewable energy, environmentally friendly business solutions, and sustainable development practices across all operations.', icon: '\U0001F33F' },
  { title: 'Ethics', description: 'Our business practices are guided by integrity and transparency, recognized globally through our UN Global Compact membership.', icon: '\u2705' },
  { title: 'Innovation', description: 'From digital banking to telemedicine powered by Starlink, we leverage cutting-edge technology to transform industries and communities.', icon: '\U0001F4A1' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="bg-gize-navy pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">Who We Are</span><div className="h-[2px] w-12 bg-gize-orange" /></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">About <span className="text-gize-orange">Gize PLC</span></h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">A globally recognized private limited company headquartered in Addis Ababa, Ethiopia — leading in shipping, logistics, energy, digital banking, and beyond.</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-red font-semibold uppercase tracking-[0.2em] text-sm">Our Story</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gize-navy mb-6 leading-tight">Building Bridges Across Continents</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Founded in 2001 by Gizeshwork Tessema, GIZE PLC began as a shipping and logistics firm in Addis Ababa with a bold vision: to transform how goods and services move across Ethiopia and beyond.</p>
                <p>Over two decades later, GIZE PLC has evolved into a diversified multinational business powerhouse operating across six key sectors: shipping &amp; logistics, energy consulting, digital &amp; investment banking, polymer distribution, digital health &amp; telemedicine, and real estate development.</p>
                <p>With a commitment to excellence, sustainability, and ethical business practices, the company has successfully facilitated major infrastructure projects, optimized supply chains, and supported international trade — contributing significantly to Ethiopia&apos;s economic growth.</p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div><div className="text-3xl font-bold text-gize-red">25+</div><div className="text-sm text-gray-500 mt-1">Years Experience</div></div>
                <div><div className="text-3xl font-bold text-gize-orange">50+</div><div className="text-sm text-gray-500 mt-1">Countries Served</div></div>
                <div><div className="text-3xl font-bold text-gize-navy">10K+</div><div className="text-sm text-gray-500 mt-1">Shipments/Year</div></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <div className="absolute inset-0 bg-gize-navy" />
                <Image src="/images/containers-aerial.jpg" alt="Gize PLC terminal operations" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gize-navy/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="bg-gize-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <div className="bg-gize-navy rounded-2xl overflow-hidden">
                <div className="relative h-80 sm:h-96">
                  <div className="absolute inset-0 bg-gize-navy" />
                  <Image src="/images/ceo-portrait.jpg" alt="Gizeshwork Tessema" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gize-navy via-transparent to-transparent" />
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="text-white text-2xl sm:text-3xl font-bold">Gizeshwork Tessema</h3>
                  <p className="text-gize-orange font-medium text-sm uppercase tracking-wider mt-2 mb-5">CEO & Founder, Gize PLC</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">One of Ethiopia&apos;s most influential entrepreneurs, Gizeshwork Tessema has led GIZE PLC to become a multinational business powerhouse. With a background in Business Management from Addis Ababa University and executive training from Harvard Business School, she is a recognized expert in logistics, supply chain management, and business strategy.</p>
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <p className="text-white/40 text-xs uppercase tracking-wider font-semibold">Key Credentials</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded">Harvard Business School</span>
                      <span className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded">UN Global Compact</span>
                      <span className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded">World Bank Reporter</span>
                      <span className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded">Accenture CEO Panel</span>
                      <span className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded">GERD Board Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-red font-semibold uppercase tracking-[0.2em] text-sm">Leadership</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gize-navy mb-6 leading-tight">A Visionary Leader Driving Change</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>&ldquo;When I started GIZE PLC, I saw an opportunity to transform how goods move across Africa and beyond. Our continent has immense potential — and logistics is the backbone that unlocks it,&rdquo; says Gizeshwork Tessema.</p>
                <p>One of Ethiopia&apos;s most influential entrepreneurs, Gizeshwork has led GIZE PLC to become a multinational business powerhouse. With a background in Business Management from Addis Ababa University and executive training from Harvard Business School, she is a recognized expert in logistics, supply chain management, and business strategy.</p>
                <p>Her leadership focuses on expanding Ethiopia&apos;s logistics and infrastructure sectors, promoting sustainable development and international trade, empowering women in business and technology, and driving innovation in digital health, banking, and energy solutions.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="text-gize-red flex-shrink-0" size={18} /><span className="text-gray-700 text-sm font-medium">{item}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gize-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-gize-orange font-semibold uppercase tracking-[0.25em] text-sm">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gize-red py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Join the hundreds of businesses that trust Gize PLC with their logistics needs.</p>
          <Link href="/contact"><Button className="bg-white text-gize-navy hover:bg-white/90 px-10 py-3.5 font-bold uppercase tracking-wide rounded-none h-auto text-base">Get In Touch <ArrowRight size={18} className="ml-2" /></Button></Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
