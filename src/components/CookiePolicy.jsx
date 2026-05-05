import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-charcoal">
      <h1 className="text-4xl font-bold mb-8">{t('cookies.title')}</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.intro_title')}</h2>
          <p className="text-gray-dark">{t('cookies.intro_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.what_are')}</h2>
          <p className="text-gray-dark">{t('cookies.what_are_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.why_use')}</h2>
          <p className="text-gray-dark mb-4">{t('cookies.why_use_text')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-dark">
            <li>{t('cookies.why_improve')}</li>
            <li>{t('cookies.why_analyze')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.types')}</h2>
          <p className="text-gray-dark mb-4">{t('cookies.types_intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-dark">
            <li><strong>{t('cookies.type_essential')}:</strong> {t('cookies.type_essential_text')}</li>
            <li><strong>{t('cookies.type_analytics')}:</strong> {t('cookies.type_analytics_text')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.consent')}</h2>
          <p className="text-gray-dark">{t('cookies.consent_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.manage')}</h2>
          <p className="text-gray-dark">{t('cookies.manage_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('cookies.contact')}</h2>
          <p className="text-gray-dark">{t('cookies.contact_text')}</p>
        </section>
      </div>
    </div>
  );
}
