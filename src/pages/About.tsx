import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('about.values.items.innovation.title'),
      description: t('about.values.items.innovation.description'),
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: t('about.values.items.resultsDriven.title'),
      description: t('about.values.items.resultsDriven.description'),
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: t('about.values.items.collaboration.title'),
      description: t('about.values.items.collaboration.description'),
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: t('about.values.items.integrity.title'),
      description: t('about.values.items.integrity.description'),
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const team = [
      {
        name: t('about.team.sarah.name'),
        role: t('about.team.sarah.role'),
        bio: t('about.team.sarah.bio'),
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: t('about.team.michael.name'),
        role: t('about.team.michael.role'),
        bio: t('about.team.michael.bio'),
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: t('about.team.emily.name'),
        role: t('about.team.emily.role'),
        bio: t('about.team.emily.bio'),
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: t('about.team.david.name'),
        role: t('about.team.david.role'),
        bio: t('about.team.david.bio'),
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center py-20 sm:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 dark:text-white">
              {t('about.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">{t('about.story.title')}</h2>
              <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our team collaborating"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">{t('about.values.title')}</h2>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="inline-flex justify-center items-center text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-gray-700 rounded-full p-4 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">{t('about.team.title')}</h2>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About; 