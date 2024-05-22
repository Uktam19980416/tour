import Slider from './Slider'
import { useTranslation } from 'react-i18next'
function Slides() {
  const { t } = useTranslation()
  const slides = [
    {
      city: t('city.name'),
      country: t('city.country'),
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: t('city2.name'),
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: t('city3.name'),
      country: t('city3.country'),
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: t('city4.name'),
      country: t('city4.country'),
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: t('city5.name'),
      country: t('city5.country'),
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ]
  return (
    <div className="max-md:w-full">
      <Slider slides={slides} />
    </div>
  )
}

export default Slides
