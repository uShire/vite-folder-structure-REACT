import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";
import Modal from "../../../../../partials/structure/modal";

const ModalAddSystems = ({ setIsShow, itemEdit, setItemEdit }) => {
  const handleClose = () => {
    setItemEdit([]);
    setIsShow(false);
  };
  return (
    <>
      <Modal>
        <div className="modal__header relative">
          <h3> Systems </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body min-h-[30vh]">
          <div className="form__wrap">
            <label htmlFor="">
              <Systems></Systems>
            </label>
            <input type="text" value={itemEdit ? itemEdit.name : ""} />
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={itemEdit ? itemEdit.description : ""}
            ></textarea>
            <span className="error-show">*required</span>
          </div>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent ">
            {itemEdit.length === 0 ? "Add" : "Save"} <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddSystems;
