import { Ship, Warehouse, Truck, Zap, Building2, HeartPulse, Banknote, Package } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  stats: { stat: string; label: string };
}

export const allServices: Service[] = [
  {
    slug: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping, Logistics & Supply Chain',
    shortDescription: 'Freight forwarding, ship chartering, and multimodal transport solutions for international and local projects.',
    fullDescription:
      'GIZE PLC specializes in freight forwarding, ship chartering, and multimodal transport solutions to ensure seamless delivery of goods for international and local projects. We have successfully managed procurement and logistics for major construction projects with Dragados J&P, CCC, BHEL, DIAGO Brewery, and Kajima. Our expertise extends to road construction material supply, shipping for Korean Government-led projects, airport development logistics, and comprehensive supply chain management for Frontier Energy and OGS.',
    image: '/images/ocean-shipping.jpg',
    features: ['Freight Forwarding & Ship Chartering', 'Multimodal Transport Solutions', 'Procurement for Major Construction Projects', 'Customs Documentation & Compliance', 'Vehicle & Equipment Supply', 'Real-time Shipment Tracking'],
    stats: { stat: '25+', label: 'Years of Logistics Expertise' },
  },
  {
    slug: 'energy-consulting',
    icon: Zap,
    title: 'Energy Consulting & Infrastructure',
    shortDescription: 'Supporting renewable energy and construction projects through strategic advisory and PPP models.',
    fullDescription:
      'GIZE PLC plays a pivotal role in Ethiopia\'s energy and infrastructure landscape by supporting renewable energy and construction projects. We have led the development of solar PV, wind, and small hydro projects through Unsolicited Bid PPP models. Our team secured an MoU with the Industrial Parks Development Corporation of Ethiopia (IPDC) for renewable energy development, and provides strategic advisory on obtaining PPAs, permits, and implementation agreements for energy projects. We also played a key role in resource mobilization for the Grand Ethiopian Renaissance Dam (GERD).',
    image: '/images/containers-aerial.jpg',
    features: ['Solar PV, Wind & Small Hydro Development', 'Unsolicited Bid PPP Models', 'MoU with IPDC for Renewable Energy', 'PPA & Permit Advisory', 'GERD Resource Mobilization', 'Strategic Energy Project Advisory'],
    stats: { stat: '4+', label: 'Renewable Energy Projects' },
  },
  {
    slug: 'digital-banking',
    icon: Banknote,
    title: 'Digital & Investment Banking',
    shortDescription: 'Pioneering digital banking solutions and investment consulting for financial institutions.',
    fullDescription:
      'GIZE PLC is a pioneer in digital banking solutions, having led initiatives including the development of a Payment Switch System (PSS) for Awash Bank, Nib Bank, and Hibret Bank. We provide consulting on investment banking and financial technology innovations, and support international financial institutions with strategic investment insights. Our team brings deep expertise in payment infrastructure, financial technology strategy, and regulatory compliance to help banks modernize their operations.',
    image: '/images/case-study-1.jpg',
    features: ['Payment Switch System Development', 'Investment Banking Consulting', 'Financial Technology Innovation', 'Strategic Investment Insights', 'Banking Infrastructure Modernization', 'Regulatory Compliance Advisory'],
    stats: { stat: '3+', label: 'Banks Served with PSS' },
  },
  {
    slug: 'polymer-distribution',
    icon: Package,
    title: 'Polymer Distribution',
    shortDescription: 'High-quality polymer materials and credit facilities for Ethiopia\'s plastic manufacturing industry.',
    fullDescription:
      'GIZE PLC supplies high-quality polymer materials and offers credit facilities to Ethiopia\'s plastic manufacturing industry. The company partners with international suppliers to ensure competitive pricing and quality assurance. Our distribution network is built on strong relationships with global polymer manufacturers, enabling us to provide reliable supply chains and flexible financing options that support the growth of Ethiopia\'s manufacturing sector.',
    image: '/images/warehousing.jpg',
    features: ['High-Quality Polymer Supply', 'Credit Facilities for Manufacturers', 'International Supplier Partnerships', 'Competitive Pricing', 'Quality Assurance', 'Reliable Distribution Network'],
    stats: { stat: '100+', label: 'Manufacturers Served' },
  },
  {
    slug: 'digital-health',
    icon: HeartPulse,
    title: 'Digital Health & Telemedicine',
    shortDescription: 'Telemedicine solutions for rural communities in Africa using Starlink connectivity.',
    fullDescription:
      'GIZE PLC is at the forefront of healthcare innovation, developing telemedicine solutions for rural communities in Africa. We are establishing telemedicine services in over 100 underserved locations, using Starlink for internet access to connect doctors and patients remotely. Our initiatives focus on maternal health and emergency medical support, and we are actively seeking grant funding to scale the initiative across Ethiopia and Africa. This work represents our commitment to using technology to bridge healthcare gaps.',
    image: '/images/case-study-2.jpg',
    features: ['Telemedicine in 100+ Underserved Locations', 'Starlink-Powered Connectivity', 'Maternal Health Programs', 'Emergency Medical Support', 'Rural Healthcare Access', 'Grant-Funded Scaling Initiatives'],
    stats: { stat: '100+', label: 'Telemedicine Locations' },
  },
  {
    slug: 'real-estate',
    icon: Building2,
    title: 'Property Management & Real Estate',
    shortDescription: 'Large-scale real estate projects including parking facilities with EV charging stations.',
    fullDescription:
      'GIZE PLC is engaged in large-scale real estate projects, including the development of 20+ buildings as parking facilities with EV charging stations. We are seeking $130 million in equity financing for real estate expansion and exploring partnerships for modern urban infrastructure projects. Our real estate division combines innovative design with sustainable development practices, creating modern urban spaces that serve the growing needs of Addis Ababa and beyond.',
    image: '/images/about-warehouse.jpg',
    features: ['20+ Parking Facilities with EV Charging', '$130M Equity Financing Pipeline', 'Modern Urban Infrastructure', 'Sustainable Development Practices', 'Strategic Partnership Exploration', 'Commercial & Mixed-Use Development'],
    stats: { stat: '20+', label: 'Buildings in Development' },
  },
  {
    slug: 'customs-brokerage',
    icon: Warehouse,
    title: 'Customs Brokerage',
    shortDescription: 'Expert customs clearance and regulatory compliance support.',
    fullDescription:
      'Navigating customs regulations can be complex and time-consuming. Our licensed customs brokers handle all aspects of import and export clearance, ensuring your shipments comply with local and international trade regulations. We manage documentation, tariff classification, duty optimization, and liaise with customs authorities on your behalf.',
    image: '/images/logistics-truck.jpg',
    features: ['Import & Export Clearance', 'Tariff Classification & Optimization', 'Trade Compliance Advisory', 'Documentation Management', 'Duty Drawback Services', 'Free Trade Zone Processing'],
    stats: { stat: '98%', label: 'Clearance Success Rate' },
  },
  {
    slug: 'supply-chain-consulting',
    icon: Truck,
    title: 'Supply Chain Consulting',
    shortDescription: 'Strategic logistics optimization for maximum efficiency.',
    fullDescription:
      'Our supply chain consulting team brings decades of industry expertise to help you design, optimize, and manage your logistics operations. From network design and route optimization to warehouse layout and technology integration, we identify inefficiencies and implement data-driven solutions that deliver measurable results.',
    image: '/images/hero-port.jpg',
    features: ['Network Design & Optimization', 'Route Planning & Analysis', 'Technology Integration (ERP, TMS)', 'Cost Reduction Strategies', 'Performance Benchmarking', 'Sustainability Roadmaps'],
    stats: { stat: '30%', label: 'Avg. Cost Savings' },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
