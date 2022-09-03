import type { FC } from 'src/types/fc';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Layout: FC = (props) => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Layout;
