import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const Alert = withReactContent(Swal);

const AddProductModal = ({ id }) => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("Nikon");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const [errors, setErrors] = useState(null);

  const clearInputs = () => {
    setName("");
    setDescription("");
    setFilePath("");
    setFile(null);
  };

  const validateInputs = () => {
    const errs = {};
    if (name === "") errs.name = "This field must not be empty.";
    if (description === "") errs.description = "This field must not be empty.";
    if (!filePath) errs.image = "Please select and upload an image first.";

    Object.keys(errs).length !== 0 && setErrors(errs);

    return Object.keys(errs).length === 0;
  };

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

  const handleSaveProduct = async () => {
    try {
      const validationResult = validateInputs();
      if (validationResult) {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        await axios.post(
          "/api/products",
          {
            name,
            category,
            description,
            brand,
            image: filePath,
            countInStock,
            price,
          },
          config
        );

        clearInputs();

        Alert.fire({
          title: "Product created successfuly!",
          icon: "success",
        });
      }
    } catch (err) {}
  };

  return (
    <div
      className="modal fade"
      data-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      id={id}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
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
              <div className="col-8">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`form-control ${errors?.name && "is-invalid"}`}
                  />
                  {errors && (
                    <div className="form-text text-danger">{errors?.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Brand</label>
                  <select
                    className="custom-select"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="Nikon">Nikon</option>
                    <option value="Sony">Sony</option>
                    <option value="Cannon">Cannon</option>
                  </select>
                  {/* <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="form-control"
                  /> */}
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="custom-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Shirts">Shirts</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className={`form-control ${errors?.price && "is-invalid"}`}
                  />
                  {errors && (
                    <div className="form-text text-danger">{errors?.price}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    value={countInStock}
                    onChange={(e) => setCountInStock(Number(e.target.value))}
                    className={`form-control ${errors?.stock && "is-invalid"}`}
                  />
                  {errors && (
                    <div className="form-text text-danger">{errors?.stock}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`form-control ${
                      errors?.description && "is-invalid"
                    }`}
                    id="product-description"
                    rows="4"
                  ></textarea>
                  {errors && (
                    <div className="form-text text-danger">{errors?.name}</div>
                  )}
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
                  {errors && (
                    <div className="form-text text-danger">{errors?.image}</div>
                  )}
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
            <button
              onClick={handleSaveProduct}
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
