import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronDown, 
  MessageCircle,
  Calendar,
  Users,
  CheckCircle2,
  Heart,
  Award,
  Home,
  School,
  Accessibility
} from 'lucide-react';

// --- Types ---

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Instalaciones', href: '#facilities' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className={`h-8 w-8 ${scrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`font-brand text-2xl ${scrolled ? 'text-primary' : 'text-white'}`}>Pegaso Andaluz</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Reservar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark"
              >
                Reservar Visita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJYSAVDkAGxNz_-SWi_IDTt1qipeR-f56CLN3H3YBpF44Hw2XbgjLan8bmqGNVfwIqBDvwvAIhhaOSdi3W_ZzAK2lNbzwAHT1jyHznr8sOctt4CGDcXvzG-I3m3NEFsGFQec2nFyxWtDf4aZ-DOEM5xnvwXf3MdVUPx9ho2ZarfIQOiqp9-MqXr-Y2GlbZPGGYlnezqC2rtto5Z_vME7AvwOjE43Ie-Y2aBMrigPQEu9MSh-Gr3GvCLexZpCcyGbfDu9xKHyDyHks" 
          alt="Caballo andaluz en el parque" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-widest uppercase">
            Centro Ecuestre Premium
          </span>
          <h1 className="font-brand text-6xl md:text-8xl text-primary mb-4 drop-shadow-lg">
            Pegaso Andaluz
          </h1>
          <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 leading-tight drop-shadow-md">
            El arte del caballo, <br/>
            <span className="italic font-light text-gray-200">en todas sus formas.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Experimente la elegancia y la pasión de la tradición ecuestre andaluza en un entorno natural incomparable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              Descubrir Servicios
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, image }: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="p-2 bg-primary/90 rounded-lg inline-block mb-2">
          {icon}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
        Más información <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
      </a>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Rutas Ecuestres",
      description: "Explora los más de 35 km de rutas autorizadas por la Ribera del Guadaíra. Una experiencia única de turismo activo en Sevilla.",
      icon: <MapPin size={20} className="text-white" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsnZxwJruTx0uK45aS3_-nmH0Y_DWc9Lu94-CcPf2dHamqIEGeTmt1EiVM-w4e8GF0ONLR6S3XPgElHsaZ9QhRX5zCfSGihsaANkklAD9pzy5BlYuJBEh8tmQCQyPbGjGGr3fl90K-B3aItG3nhdwljLaT0aewQNJfMpGiibLdp0AXKffCm_ZpIGLUxIwzaCi9k6wdcMBZB1L1RrXXsA4Gcy2PzpgqLxUlFpy4kDQ8Ak5HMVsU_1b8PjcXezsxsVNHvyH8Y5Nv0aM"
    },
    {
      title: "Hípica Inclusiva",
      description: "Centro adaptado para personas con diversidad funcional. Contamos con monitores titulados y equipamiento especial (grúas y monturas adaptadas).",
      icon: <Accessibility size={20} className="text-white" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO_NKdpVZA9Ib_Yl3xIZ-4k27YXJp_nguLqWKIUEa79sviCyCix8LLl-vi_U-M9u2Wx86vyftg0MpHfHuCom4LOc7RVkx-8OAdgw5IhttyULziCxHyVo4fdXnC_rSvxeHqQUbJCFWOXbrTaxLW0YcedOJVYLbf-6U3D0FSrtd7gxWP5AsSIqFRNgSI562QGmuPJk7fdzaPH9JAt_aVSXCHuJkqIwVMwx8xMP4uZWOq5J1LZhzJD1iwR1-BKhduB4CBHGTb0bgcyGU"
    },
    {
      title: "Escuela de Equitación",
      description: "Clases para todos los niveles basadas en el bienestar animal y la seguridad. Desde iniciación hasta alta escuela.",
      icon: <School size={20} className="text-white" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpQlqQnDSLR6crSqKoYL6GH2jMW8ZpN55v3kOqWVtjX72zVvtvG11YpgokvYAm7ZtX2FDnG5ZTo-euuT__FZQ2vhOnz1aOwsCveHtehLh0tj7Zzi9lMz_RGUc6VjQ0LoXM7vGwYkRu3IaLzavL_EKE_BfvqDCAI6JRNKYDTIuDZLkl8hg-5ZKyBc00JfeQiC_qTEWmDJrIM9uGxCmi48n2N_LEar-tHsLhB7IQ5CxEUrE1MKZedMdIIW0SpaeCT0wjWNKMwKbvkwg"
    },
    {
      title: "Aula-Establo",
      description: "Un espacio educativo donde aprender sobre etología, cuidados y la vida diaria del caballo en un entorno natural.",
      icon: <Home size={20} className="text-white" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9wrcTynfKFvgPy3NBkGzzsQFqHh6ltAVmdPILUeuzV_OHcUNYV4J5m8EkCNBntg1bt62QTE18BsqRMBq7JTP6EQFwpZcXamnIaK6OmZuFEDoUZQYtb9w49QkBhGkrMkPD1F7E_fVmOro86JbAWBfjDSYcKCz2weh0lKzbv4ZKXYwQDuNCYOOXTrnFl9Pfl2eCNnGsuJ7rFgNJOADvCVdvY26eD-DKWL7NVvS3PturmZawfG-E6oQVyvMZxQ4uJmGPcfVpm1CdWxA"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Nuestros Servicios</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-2">Experiencias Únicas</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ofrecemos una experiencia ecuestre completa, adaptada tanto para jinetes principiantes como para profesionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Instalaciones</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Un Entorno Privilegiado</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Nuestras instalaciones están diseñadas pensando en el bienestar del caballo y la comodidad del jinete.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-1" />
                <span className="text-gray-700">Pista profesional de 1.200m² con suelo técnico.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-1" />
                <span className="text-gray-700">Boxes amplios y ventilados con bebederos automáticos.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-1" />
                <span className="text-gray-700">Entorno natural con acceso directo al Parque Oromana.</span>
              </li>
            </ul>
            <a href="#contact" className="px-6 py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
              Ven a conocernos
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtXhOQvvERc94Ob9CMW0NwYAb7jkngVViKWfb33YFcKJnsswpHV0RmKhvfF_wFXIxNnd3nEi5wmEiC0Uq2fbQzb4bc4GbFQQEcBuAXDn9iz5A0NCfaZoiOy5aPAdMEaRw4GUabX8XOf9FPySwLc1dD6cjRxV-qHHVp9fXIqU3LPu4k3JADI5Lw1Gxz4xLz0wp3l1yZG0tGBjuJU9jzsqOtOGRT1MuTnz1u2_d06CRePBJVlFdlEGhFwCZjTdzBbn2yvfx1866Zjec" 
              alt="Pista de equitación" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9wrcTynfKFvgPy3NBkGzzsQFqHh6ltAVmdPILUeuzV_OHcUNYV4J5m8EkCNBntg1bt62QTE18BsqRMBq7JTP6EQFwpZcXamnIaK6OmZuFEDoUZQYtb9w49QkBhGkrMkPD1F7E_fVmOro86JbAWBfjDSYcKCz2weh0lKzbv4ZKXYwQDuNCYOOXTrnFl9Pfl2eCNnGsuJ7rFgNJOADvCVdvY26eD-DKWL7NVvS3PturmZawfG-E6oQVyvMZxQ4uJmGPcfVpm1CdWxA" 
              alt="Boxes" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-3xl z-0"></div>
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwW9XOND9eZK_cld6Bhafg6MoEe1Vkq9Q-yGGaQCt-7CRJqarXVJBom_Q5UuYYOjfulCO5p_0XtpM_ww6KmJ_reN69eN-ipRPvX9IQSKKlWPkjWX-78BTqs_zlPtgDXRdjS8OERJmlcgZkH2Q0Ho-uifLXbo-YnC90xuFw2TWUzikw3p778dHJ2SYk5Ex_K5kpkb5VXvwSwSSLdOtmFjIqz_TS_OGhsZb69YdyurIMuoetr8foEACM-A4QxXBpUEwAXIzi2iMFhAo" 
               alt="Pablo Ortega con caballo" 
               className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[500px]"
             />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Nuestra Filosofía</h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En <span className="text-primary font-bold">Pegaso Andaluz</span>, creemos que la equitación es más que un deporte; es un diálogo silencioso entre dos seres vivos.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Fundado por <strong>Pablo Ortega</strong>, nuestro centro nace de la pasión por preservar la pureza de la doma clásica y fomentar una conexión profunda y respetuosa con el animal, lo que llamamos la <em>"Conexión Pegaso"</em>.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="text-primary text-3xl" />
                <div>
                  <h4 className="font-bold text-gray-900">Excelencia</h4>
                  <p className="text-sm text-gray-500">Instructores certificados.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-primary text-3xl" />
                <div>
                  <h4 className="font-bold text-gray-900">Bienestar</h4>
                  <p className="text-sm text-gray-500">Cuidado integral 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingBanner = () => {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-serif text-3xl font-bold mb-2">Tarifas Informativas</h3>
          <p className="text-white/90 text-lg">
            Rutas desde <span className="font-bold text-2xl bg-white/20 px-2 rounded">20€/hora</span>. Consulta nuestros bonos mensuales.
          </p>
        </div>
        <a 
          href="#contact" 
          className="px-8 py-3 bg-white text-primary rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Consultar Precios
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    activity: 'Ruta Ecuestre',
    people: '2',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    alert('Gracias por tu interés. Te contactaremos por WhatsApp con el presupuesto.');
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Reserva tu Experiencia</h2>
            <p className="text-gray-600 mb-8">Rellena este formulario y te enviaremos un presupuesto personalizado por WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Actividad Deseada</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white text-gray-900 focus:ring-primary focus:border-primary"
                  value={formData.activity}
                  onChange={(e) => setFormData({...formData, activity: e.target.value})}
                >
                  <option>Ruta Ecuestre</option>
                  <option>Clase de Equitación</option>
                  <option>Hípica Inclusiva</option>
                  <option>Visita Aula-Establo</option>
                  <option>Pupilaje</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Número de Personas</label>
                  <input 
                    type="number" 
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white text-gray-900 focus:ring-primary focus:border-primary"
                    value={formData.people}
                    onChange={(e) => setFormData({...formData, people: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Preferida</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border-gray-300 bg-white text-gray-900 focus:ring-primary focus:border-primary"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-lg shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Solicitar Presupuesto
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Avenida de Portugal, s/n<br/>18000, Andalucía, España</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Teléfono / WhatsApp</h4>
                  <p className="text-gray-600">+34 652 924 742</p>
                  <p className="text-sm text-primary mt-1">Atención personalizada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Horario</h4>
                  <p className="text-gray-600">Mar - Dom: 08:00 - 20:00<br/>Lunes: Cerrado (Descanso)</p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md bg-gray-200 relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARxmNimAr4_HawyPR7vBNu8inhKW3j1WOvSUsis0-JMPFM7_Do1gbqj67CVml3i1KEwS-G07nxCkPExHOdvztk9-9lbna2ZxqZydVMNrDAY9HtqSFMmbZ8NybY0Cwhm9ZJTAhZo7VHMBPEQOncqrpNocC2gT2gjJn5IhCYj7AqdlOCNSJMFZsqldxmCH8ByP0_b-CU6bj6tYWaDz53AvtYyidFwKr5RSIMy0WhjLwJP_P5OIUM5KDzXKl3l3Q2KjvgskqIS-EnDF8" 
                alt="Mapa Ubicación" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <MapPin className="text-primary" size={20} />
                  <span className="font-bold text-gray-900">Pegaso Andaluz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="text-primary h-8 w-8" />
              <span className="font-brand text-2xl">Pegaso Andaluz</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Centro ecuestre dedicado a la excelencia, el respeto animal y la tradición andaluza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Suscríbete para recibir noticias de nuestros eventos.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-3 py-2 rounded-l bg-gray-800 border-none text-white focus:ring-1 focus:ring-primary text-sm"
              />
              <button className="bg-primary px-4 py-2 rounded-r hover:bg-primary-dark text-white">
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Pegaso Andaluz. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-1">
            <span>Diseñado con pasión ecuestre</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/34652924742" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Consultar disponibilidad
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Facilities />
      <About />
      <PricingBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
