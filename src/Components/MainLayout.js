import NavBar from './NavBar';
import DynamicSlider from './DynamicSlider';
import Body from './Body';
import Footer from './Footer';

function MainLayout() {
    return (
      <>
        <NavBar/>
        <DynamicSlider />
        <Body />
        <Footer />
      </>
    );
}

export default MainLayout;
