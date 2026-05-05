import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-charcoal">
      <h1 className="text-4xl font-bold mb-8">{t('privacy.title')}</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.responsible')}</h2>
          <p className="text-gray-dark mb-2">Solon Digital</p>
          <p className="text-gray-dark mb-2">Tenerife, Spain</p>
          <p className="text-gray-dark mb-2">Email: info@solondigital.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.data_collection')}</h2>
          <p className="text-gray-dark mb-4">{t('privacy.collection_intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-dark">
            <li>{t('privacy.data_name')}</li>
            <li>{t('privacy.data_email')}</li>
            <li>{t('privacy.data_phone')}</li>
            <li>{t('privacy.data_ip')}</li>
            <li>{t('privacy.data_forms')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.data_purpose')}</h2>
          <p className="text-gray-dark mb-4">{t('privacy.purpose_intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-dark">
            <li>{t('privacy.purpose_contact')}</li>
            <li>{t('privacy.purpose_services')}</li>
            <li>{t('privacy.purpose_improvement')}</li>
            <li>{t('privacy.purpose_marketing')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.retention')}</h2>
          <p className="text-gray-dark">{t('privacy.retention_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.data_sharing')}</h2>
          <p className="text-gray-dark">{t('privacy.sharing_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.cookies')}</h2>
          <p className="text-gray-dark">{t('privacy.cookies_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.user_rights')}</h2>
          <p className="text-gray-dark mb-4">{t('privacy.rights_intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-dark">
            <li>{t('privacy.right_access')}</li>
            <li>{t('privacy.right_modify')}</li>
            <li>{t('privacy.right_object')}</li>
          </ul>
          <p className="text-gray-dark mt-4">{t('privacy.rights_contact')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.security')}</h2>
          <p className="text-gray-dark">{t('privacy.security_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue">{t('privacy.changes')}</h2>
          <p className="text-gray-dark">{t('privacy.changes_text')}</p>
        </section>
      </div>
    </div>
  );
}
