import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import OthersTable from "./OthersTable";
import ModalAddOthers from "./ModalAddOthers";

const Others = () => {
  const [isShow, setIsShow] = React.useState(false);
  const handleAddOthers = () => setIsShow(true);
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Others</h1>
            <button
              className="btn btn--acent btn--sm"
              onClick={handleAddOthers}
            >
              Add
            </button>
          </div>
          <OthersTable />
        </main>
      </section>
      {isShow && <ModalAddOthers setIsShow={setIsShow} />}
    </>
  );
};

export default Others;
