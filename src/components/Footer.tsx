import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: '#', icon: FaFacebookF, label: 'Facebook' },
    { href: '#', icon: FaTwitter, label: 'Twitter' },
    { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
  ];

  const footerSections = [
    {
      title: t('footer.quickLinks.title'),
      links: [
        { href: '/', label: t('footer.quickLinks.home') },
        { href: '/about', label: t('footer.quickLinks.about') },
        { href: '/projects', label: t('footer.quickLinks.projects') },
        { href: '/contact', label: t('footer.quickLinks.contact') },
      ],
    },
    {
      title: t('footer.services.title'),
      links: [
        { href: '#', label: t('footer.services.digitalMarketing') },
        { href: '#', label: t('footer.services.contentStrategy') },
        { href: '#', label: t('footer.services.seoOptimization') },
        { href: '#', label: t('footer.services.socialMedia') },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold font-poppins text-primary-600 dark:text-primary-400">
              MarketPro
            </Link>
            <p className="mt-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{t('footer.contactUs.title')}</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('footer.contactUs.address') }} />
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                <a href={`tel:${t('footer.contactUs.phone')}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {t('footer.contactUs.phone')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                <a href={`mailto:${t('footer.contactUs.email')}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {t('footer.contactUs.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 