import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db, storage } from '../../firebase/config';
import Loading from '../Loading';

const initialState = {
  name: '',
  imageURL: '',
  price: 0,
  category: '',
  brand: '',
  desc: '',
};

function AddProduct() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [product, setProduct] = useState({
    ...initialState,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({
            ...product,
            imgUrl: downloadURL,
          });
          toast.success('image successfully uploaded');
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Add a new document with a generated id.
      const docRef = addDoc(collection(db, 'products'), {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        desc: product.desc,
        brand: product.brand,
        imgUrl: product.imgUrl,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setProduct({ ...initialState });
      navigate('/admin/view-products');

      toast.success('product uploaded successfully');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="w-full bg-slate-700/80 text-white mx-20 mt-5 text-center p-3 rounded-xl">
        <h1>Add a new product</h1>
        <form onSubmit={addProduct}>
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
            <label className="label">Product Image</label>
            <input
              type="file"
              accept="images/*"
              placeholder="product image"
              name="image"
              onChange={handleImageChange}
              className="input input-bordered text-black p-2"
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
              className="textarea w-full text-gray-600"
              placeholder="Describe the product"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className="w-full mt-4">Add Product</button>
        </form>
      </div>
    </>
  );
}
export default AddProduct;
