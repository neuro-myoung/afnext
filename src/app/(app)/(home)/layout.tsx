import { Navbar } from "./_components/Navbar/Navbar";
import { Footer } from "./_components/Footer/Footer";

interface Props {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout;