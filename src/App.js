
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import IndexTwo from './pages/index-two';
import IndexThree from './pages/index-three';
import AboutUs from './pages/aboutus';
import Services from './pages/services';
import Blog from './pages/blogs';
import BlogDetails from './pages/blog-detail';
import ContactUs from './pages/contactus';
import PortfolioModernTwo from './pages/portfolio-modern-two';
import PortfolioModernThree from './pages/portfolio-modern-three';
import PortfolioModernFour from './pages/portfolio-modern-four';
import PortfolioModernFive from './pages/portfolio-modern-five';
import PortfolioModernSix from './pages/portfolio-modern-six';
import ClassicTwo from './pages/classic-two';
import ClassicThree from './pages/classic-three';
import ClassicFour from './pages/classic-four';
import ClassicFive from './pages/classic-five';
import ClassicSix from './pages/classic-six';
import CreativeTwo from './pages/creative-two';
import CreativeThree from './pages/creative-three';
import CreativeFour from './pages/creative-four';
import CreativeFive from './pages/creative-five';
import CreativeSix from './pages/creative-six';
import MasonryTwo from './pages/masonry-two';
import MasonryThree from './pages/masonry-three';
import MasonryFour from './pages/masonry-four';
import MasonryFive from './pages/masonry-five';
import MasonrySix from './pages/masonry-six';
import DetailsOne from './pages/portfolio-detail-one';
import DetailTwo from './pages/portfolio-detail-two';
import DetailsThree from './pages/portfolio-detail-three';
import DetailsFour from './pages/portfolio-detail-four';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/index-two' element={<IndexTwo/>}/>
        <Route path='/index-three' element={<IndexThree/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/blog-detail' element={<BlogDetails/>}/>
        <Route path='/blog-detail/:id' element={<BlogDetails/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/portfolio-modern-two' element={<PortfolioModernTwo/>}/>
        <Route path='/portfolio-modern-three' element={<PortfolioModernThree/>}/>
        <Route path='/portfolio-modern-four' element={<PortfolioModernFour/>}/>
        <Route path='/portfolio-modern-five' element={<PortfolioModernFive/>}/>
        <Route path='/portfolio-modern-six' element={<PortfolioModernSix/>}/>
        <Route path='/portfolio-classic-two' element={<ClassicTwo/>}/>
        <Route path='/portfolio-classic-three' element={<ClassicThree/>}/>
        <Route path='/portfolio-classic-four' element={<ClassicFour/>}/>
        <Route path='/portfolio-classic-five' element={<ClassicFive/>}/>
        <Route path='/portfolio-classic-six' element={<ClassicSix/>}/>
        <Route path='/portfolio-creative-two' element={<CreativeTwo/>}/>
        <Route path='/portfolio-creative-three' element={<CreativeThree/>}/>
        <Route path='/portfolio-creative-four' element={<CreativeFour/>}/>
        <Route path='/portfolio-creative-five' element={<CreativeFive/>}/>
        <Route path='/portfolio-creative-six' element={<CreativeSix/>}/>
        <Route path='/portfolio-masonry-two' element={<MasonryTwo/>}/>
        <Route path='/portfolio-masonry-two' element={<MasonryTwo/>}/>
        <Route path='/portfolio-masonry-three' element={<MasonryThree/>}/>
        <Route path='/portfolio-masonry-four' element={<MasonryFour/>}/>
        <Route path='/portfolio-masonry-five' element={<MasonryFive/>}/>
        <Route path='/portfolio-masonry-six' element={<MasonrySix/>}/>
        <Route path='/portfolio-detail-one' element={<DetailsOne/>}/>
        <Route path='/portfolio-detail-two' element={<DetailTwo/>}/>
        <Route path='/portfolio-detail-three' element={<DetailsThree/>}/>
        <Route path='/portfolio-detail-four' element={<DetailsFour/>}/>
      </Routes>
    </div>
  );
}

export default App;
