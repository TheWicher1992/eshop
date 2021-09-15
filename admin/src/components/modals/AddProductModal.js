import React, { useState } from "react";
import axios from "axios";
const AddProductModal = ({ id }) => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    setFile(image.name);

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data: filePath } = await axios.post(
        "/api/uploads/product-image",
        formData,
        config
      );

      await setFilePath(filePath);
      console.log(filePath);
    } catch (err) {
      if (err.response.data.error === "FILE_TYPE_ERROR") {
        setUploadError("File selected is not image");
      }
    }
    setUploading(false);
  };
  return (
    <div className="modal fade" id={id}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add a new Product</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control outline-danger" />
                  <div className="form-text text-danger">
                    This field cannot be empty
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Brand</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="product-description"
                    rows="8"
                  ></textarea>
                </div>
              </div>
              <div className="col">
                {uploading && "Uploading..."}
                {uploadError !== "" && (
                  <p className="text-danger">{uploadError}</p>
                )}
                {!uploading && (
                  <img
                    className="img img-fluid mb-2"
                    src={filePath ? filePath : "/images/placeholder.png"}
                    alt=""
                  />
                )}
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      {file ? file : "Choose file"}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12 mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="product-description"
                  rows="4"
                ></textarea>
              </div>
            </div> */}
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
