
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">00 HOME</NavLink>
          <NavLink to="destinations">01 DESTINATIONS</NavLink>
          <NavLink to="crew">02 CREW</NavLink>
          <NavLink to="technology">03 TECHNOLOGY</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};
export default RootLayout;