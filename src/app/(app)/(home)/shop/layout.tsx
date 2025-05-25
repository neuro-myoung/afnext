import { SearchFilters } from "./seach-filters";


interface Props {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
    <SearchFilters />
        { children }
    </div>
  )
}

export default Layout;