import Header from "../Header";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="bg-gray-50">
      <Header/>
      <main className="bg-gray-900">{children}</main>
      {/*<Footer/>*/}
    </div>
  )
}

export default Layout;
