import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Products from "./components/Products";
import Men from "./components/Men";
import Women from "./components/Women";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";

// ADMIN
import Admin from './components/Admin';
import MenClothingAdmin from './components/Admin/MenClothingAdmin';
import MenShoesAdmin from './components/Admin/MenShoesAdmin';
import WomenDressesAdmin from './components/Admin/WomenDressesAdmin';
import WomenShoesAdmin from './components/Admin/WomenShoesAdmin';
import AcceessoriesAdmin from './components/Admin/AccessoriesAdmin';




// the grand children imports too
import MenClothing from "./components/Men/Clothing";
import MenShoes from "./components/Men/Shoes";
import WomenDresses from "./components/Women/Dresses";
import WomenShoes from "./components/Women/Shoes";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        {/* these routes are grand children router... lol */}
        <Route path="/men/clothing" component={MenClothing} />
        <Route path="/men/shoes" component={MenShoes} />
        <Route path="/women/dresses" component={WomenDresses} />
        <Route path="/women/shoes" component={WomenShoes} />

          {/* these are the primary routes */}
        <Route exact path="/" component={Products} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/cart" component={Cart} />


        {/* ********THESE ROUTES ARE ADMIN ROUTES*********** */}
        <Route path="/admin" component={Admin} />
        <Route path="/menclothingadmin" component={MenClothingAdmin} />
        <Route path="/menshoesadmin" component={MenShoesAdmin} />
        <Route path="/womendressesadmin" component={WomenDressesAdmin} />
        <Route path="/womenshoesadmin" component={WomenShoesAdmin} />
        <Route path="/accessoriesadmin" component={AcceessoriesAdmin} />

        
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
