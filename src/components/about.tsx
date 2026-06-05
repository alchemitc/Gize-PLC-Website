'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Shipping, logistics & supply chain management',
  'Energy consulting & infrastructure development',
  'Digital & investment banking solutions',
  'Polymer distribution for manufacturing',
  'Digital health & telemedicine services',
  'Property management & real estate development',
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-gize-red rounded-2xl p-8 sm:p-12 lg:p-16 mb-16 lg:mb-20 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/60 font-semibold uppercase tracking-[0.25em] text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
                About Gize PLC
              </h2>
              <p className="text-white/85 text-base leading-relaxed mb-4">
                GIZE PLC is a globally recognized private limited company headquartered 
                in Addis Ababa, Ethiopia. Founded in 2001 by Gizeshwork Tessema, the 
                company has established itself as a leader in shipping, logistics, energy 
                consulting, infrastructure development, digital banking, investment banking, 
                and polymer distribution.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                With a commitment to excellence, sustainability, and ethical business 
                practices, GIZE PLC has successfully facilitated major infrastructure 
                projects, optimized supply chains, and supported international trade, 
                contributing to Ethiopia&apos;s economic growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-xl overflow-hidden h-80">
                <Image
                  src="/images/containers-aerial.jpg"
                  alt="Shipping containers at Gize terminal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gize-navy/20" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* CEO Profile + Highlights */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gize-navy rounded-2xl overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="Gizeshwork Tessema"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gize-navy via-transparent to-transparent" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-white text-2xl font-bold">Gizeshwork Tessema</h3>
                <p className="text-gize-orange font-medium text-sm uppercase tracking-wider mt-1 mb-4">
                  CEO & Founder, Gize PLC
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  One of Ethiopia&apos;s most influential entrepreneurs, Gizeshwork Tessema has 
                  led GIZE PLC to become a multinational business powerhouse. With a background 
                  in Business Management from Addis Ababa University and executive training 
                  from Harvard Business School, she is a recognized expert in logistics, supply 
                  chain management, and business strategy.
                </p>
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

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gize-orange" />
              <span className="text-gize-red font-semibold uppercase tracking-[0.2em] text-sm">
                Why Gize
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gize-navy mb-4">
              Six divisions, one commitment to excellence
            </h3>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl">
              From shipping and logistics to energy consulting, digital banking, polymer 
              distribution, telemedicine, and real estate — GIZE PLC delivers world-class 
              solutions across every sector we serve.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gize-light transition-colors duration-300"
                >
                  <CheckCircle2 className="text-gize-red flex-shrink-0" size={20} />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
