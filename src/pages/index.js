
import Home01 from './Home01';
import Home02 from './Home02';
import Home03 from './Home03';
import HomeOnePage from './HomeOnePage';
import AboutUs from './AboutUs';
import Collections from './Collections';
import Team from './Team';
import RoadMap from './RoadMap';
import OurMission from './OurMission';
import BlogList from './BlogList';
import BlogGrid from './BlogGrid';
import BlogSingle from './BlogSingle';
import FAQ from './FAQ';
import Contact from './Contact';

const routes = [
  { path: '/', component: <Home01 />},
  { path: '/home-02', component: <Home02 />},
  { path: '/home-03', component: <Home03 />},
  { path: '/home-one-page', component: <HomeOnePage />},
  { path: '/about', component: <AboutUs />},
  { path: '/collections', component: <Collections />},
  { path: '/team', component: <Team />},
  { path: '/road-map', component: <RoadMap />},
  { path: '/our-mission', component: <OurMission />},
  { path: '/blog-list', component: <BlogList />},
  { path: '/blog-grid', component: <BlogGrid />},
  { path: '/blog-single', component: <BlogSingle />},
  { path: '/faq', component: <FAQ />},
  { path: '/contact', component: <Contact />},
]

export default routes;