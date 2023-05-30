import React, { useState } from "react";

export default function EditData() {
  const [formData, setFormData] = useState("");
  const handleOnChangeForm = (e) => {
    console.log("Edit ---->", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              value={formData["name"] || ""}
              onChange={handleOnChangeForm}
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
            <input
              value={formData["address"] || ""}
              onChange={handleOnChangeForm}
              type="text"
              name="address"
              id="address"
              className="form-control"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
