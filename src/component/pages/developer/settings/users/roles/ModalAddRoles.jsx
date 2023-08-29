import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";
import Modal from "../../../../../partials/structure/modal";

const ModalAddRoles = ({ setIsShow }) => {
  const handleClose = () => setIsShow(false);
  return (
    <>
      <Modal>
        <div className="modal__header relative">
          <h3> Role </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body min-h-[30vh]">
          <div className="form__wrap">
            <label htmlFor="">Role</label>
            <input type="text" />
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span className="error-show">*required</span>
          </div>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent ">
            Add
            <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddRoles;
