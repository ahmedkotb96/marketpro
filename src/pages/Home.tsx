import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Rocket, PenSquare, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('home.services.items.digitalMarketing.title'),
      description: t('home.services.items.digitalMarketing.description'),
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: t('home.services.items.contentStrategy.title'),
      description: t('home.services.items.contentStrategy.description'),
      icon: <PenSquare className="w-8 h-8" />,
    },
    {
      title: t('home.services.items.seoOptimization.title'),
      description: t('home.services.items.seoOptimization.description'),
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: t('home.services.items.socialMedia.title'),
      description: t('home.services.items.socialMedia.description'),
      icon: <MessageSquare className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      name: t('home.testimonials.john.name'),
      role: t('home.testimonials.john.role'),
      quote: t('home.testimonials.john.content'),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: t('home.testimonials.sarah.name'),
      role: t('home.testimonials.sarah.role'),
      quote: t('home.testimonials.sarah.content'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  const stats = [
    { label: t('home.stats.clients'), value: '500+' },
    { label: t('home.stats.retention'), value: '95%' },
    { label: t('home.stats.projects'), value: '1000+' },
    { label: t('home.stats.support'), value: '24/7' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>MarketPro</title>
        <meta name="description" content={t('home.meta.description')} />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative text-center py-24 sm:py-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6 text-gray-200">
              {t('home.hero.subtitle')}
            </p>
            <div className="mt-10">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
              >
                {t('home.hero.cta')}
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">
              {t('home.services.title')}
            </h2>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              {t('home.services.subtitle')}
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700/50"
              >
                <div className="inline-flex justify-center items-center text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-gray-800 rounded-full p-4 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                <div className="mt-2 text-gray-500 dark:text-gray-400 tracking-wide uppercase text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700/50"
              >
                <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">"<p>{testimonial.quote}</p>"</blockquote>
                <figcaption className="mt-6 flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 dark:bg-primary-700">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center sm:py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-primary-200">
              {t('home.cta.subtitle')}
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                {t('home.cta.button')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 