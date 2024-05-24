import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <div className="text-center py-10 bg-slate-200 text-xl font-semibold max-md:text-sm">
      {t('footer.copyright', { year })} go tour Business Tour.{' '}
      {t('footer.allRightsReserved')}
    </div>
  )
}
