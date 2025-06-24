import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'digital-marketing',
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);
    setFormStatus('submitting');

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'digital-marketing',
      });
      setTimeout(() => setFormStatus(null), 4000);
    }, 2000);
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
      </Helmet>

      <main className="pt-20">
        {/* Header */}
        <section className="text-center py-20 sm:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 dark:text-white">
              {t('contact.header.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300">
              {t('contact.header.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.location.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('contact.info.location.address') }} />
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.contact.title')}</h3>
                      <a href="tel:+201001924076" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">+201001924076</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.contact.email')}</h3>
                      <a href="mailto:ahmedabdelhakiem96@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">ahmedabdelhakiem96@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.hours.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{t('contact.info.hours.weekdays')}</p>
                      <p className="text-gray-600 dark:text-gray-400">{t('contact.info.hours.weekend')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">{t('Our social media platforms')}</h3>
                <div className="flex space-x-8">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 sm:p-12 shadow-lg">
              <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-2">{t('contact.form.title')}</h2>
              <br />              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.form.name')}</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.form.email')}</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.form.company')}</label>
                  <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.form.phone')}</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.form.service')}</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition">
                    <option value="digital-marketing">{t('contact.form.services.digital')}</option>
                    <option value="content-creation">{t('contact.form.services.content')}</option>
                    <option value="seo-optimization">{t('contact.form.services.seo')}</option>
                    <option value="web-development">{t('contact.form.services.web')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.form.message')}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105">
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </button>
                </div>
                {formStatus && (
                  <div className={`mt-4 text-center p-3 rounded-lg text-sm ${formStatus === 'success' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'}`}>
                    {formStatus === 'success' && t('contact.form.success')}
                    {formStatus === 'error' && t('contact.form.error')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;