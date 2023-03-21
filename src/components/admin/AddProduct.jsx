import { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: 'null',
    category: '',
    desc: '',
    brand: '',
    imgUrl: '',
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleImageChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-slate-700/80 text-white mx-52 mt-5 text-center p-3 rounded-xl">
      <h1>Add a new product</h1>
      <form action="">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="product name"
            className="input input-bordered text-black w-full mx-auto"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Price</span>
          </label>
          <input
            type="number"
            placeholder="product price"
            className="input input-bordered text-black w-full mx-auto"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Category</span>
          </label>
          <select
            className="select w-full max-w-xs text-gray-600"
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option disabled selected>
              Select a product category
            </option>
            <option>MEN</option>
            <option>WOMEN</option>
            <option>CHILDREN</option>
            <option>GIFTS SET</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Brand</span>
          </label>
          <input
            type="text"
            placeholder="product brand"
            className="input input-bordered text-black w-full mx-auto"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Image</span>
          </label>
          <input
            type="file"
            accept="image/*"
            name="imgUrl"
            required
            value={product.imgUrl}
            onChange={(e) => handleImageChange(e)}
            className="file-input w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Description</span>
          </label>
          <textarea
            name="desc"
            value={product.desc}
            required
            className="textarea w-full"
            placeholder="Describe the product"
          ></textarea>
        </div>
        <button className="w-full mt-4">Add Product</button>
      </form>
    </div>
  );
}
export default AddProduct;
