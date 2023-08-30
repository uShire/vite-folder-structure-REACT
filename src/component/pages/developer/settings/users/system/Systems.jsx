import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import SystemsTable from "./SystemsTable";
import ModalAddSystems from "./ModalAddSystems";

const Systems = () => {
  const [isShow, setIsShow] = React.useState(false);
  const handleAddSystems = () => setIsShow(true);
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
            <h1>Systems</h1>
            <button
              className="btn btn--acent btn--sm"
              onClick={handleAddSystems}
            >
              Add
            </button>
          </div>
          <SystemsTable />
        </main>
      </section>
      {isShow && <ModalAddSystems setIsShow={setIsShow} />}
    </>
  );
};

export default Systems;
