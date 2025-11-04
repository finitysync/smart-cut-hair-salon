import { Hero } from '../components/01_Hero';
import { ServicesOverview } from '../components/02_ServicesOverview';
import { LiveConsultant } from '../components/03_LiveConsultant';
import { FeaturedServices } from '../components/04_FeaturedServices';
import { BridalStudio } from '../components/05_BridalStudio';
import { Mission } from '../components/06_Mission';
import { Academy } from '../components/07_Academy';
import { Statistics } from '../components/08_Statistics';
import { HomeCTA } from '../components/09_HomeCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <LiveConsultant />
      <FeaturedServices />
      <BridalStudio />
      <Mission />
      <Academy />
      <Statistics />
      <HomeCTA />
    </>
  );
}
