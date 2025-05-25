import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

interface Props {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout;