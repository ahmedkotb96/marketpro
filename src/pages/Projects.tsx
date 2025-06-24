import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      title: t('projects.items.ecommerce.title'),
      client: t('projects.items.ecommerce.client'),
      category: t('projects.items.ecommerce.category'),
      description: t('projects.items.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#', // Placeholder for link
    },
    {
      title: t('projects.items.branding.title'),
      client: t('projects.items.branding.client'),
      category: t('projects.items.branding.category'),
      description: t('projects.items.branding.description'),
      image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#', // Placeholder for link
    },
    {
      title: t('projects.items.social.title'),
      client: t('projects.items.social.client'),
      category: t('projects.items.social.category'),
      description: t('projects.items.social.description'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#', // Placeholder for link
    },
    {
      title: t('projects.items.seo.title'),
      client: t('projects.items.seo.client'),
      category: t('projects.items.seo.category'),
      description: t('projects.items.seo.description'),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#', // Placeholder for link
    },
    {
      title: t('projects.items.content.title'),
      client: t('projects.items.content.client'),
      category: t('projects.items.content.category'),
      description: t('projects.items.content.description'),
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#', // Placeholder for link
    },
    {
      title: t('projects.items.automation.title'),
      client: t('projects.items.automation.client'),
      category: t('projects.items.automation.category'),
      description: t('projects.items.automation.description'),
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#', // Placeholder for link
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>{t('projects.meta.title')}</title>
        <meta name="description" content={t('projects.meta.description')} />
      </Helmet>

      <main className="pt-20">
        {/* Header */}
        <section className="text-center py-20 sm:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 dark:text-white">
              {t('projects.header.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300">
              {t('projects.header.subtitle')}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700/50">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Client: {project.client}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                    <span className="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 group-hover:underline">
                      {t('projects.view_project')} <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">{t('projects.cta.title')}</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              {t('projects.cta.subtitle')}
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105">
                {t('projects.cta.button')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects; 