import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { db, storage } from '../../firebase/config';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { deleteObject, ref } from 'firebase/storage';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { STORE_PRODUCTS } from '../../redux/features/productSlice';

const ViewProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setIsLoading(true);

    try {
      const productsRef = collection(db, 'products');
      const q = query(productsRef, orderBy('createdAt', 'desc'));

      onSnapshot(q, (snapshot) => {
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(allProducts);
        setIsLoading(false);
        dispatch(
          STORE_PRODUCTS({
            products: allProducts,
          })
        );
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const confirmDelete = (id, imgUrl) => {
    Notiflix.Confirm.show(
      'Delete Product',
      'Are you sure you want to delete this product?',
      'Delete',
      'Cancel',
      function okCb() {
        deleteProduct(id, imgUrl);
      },
      function cancelCb() {
        console.log('Delete Cancelled');
      },
      {
        width: '320px',
        borderRadius: '8px',
        titleColor: 'red',
        okButtonBackground: 'red',
        cssAnimationStyle: 'zoom',
        // etc...
      }
    );
  };

  const deleteProduct = async (id, imgUrl) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      const storageRef = ref(storage, imgUrl);
      await deleteObject(storageRef);
      toast.success('product deleted successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="overflow-x-auto w-full ml-11">
        <h2 className="text-lg p-2 font-semibold text-center"> All Products</h2>
        {products.length === 0 ? (
          <p>No product found</p>
        ) : (
          <table className="table table-zebra w-full">
            <tr>
              <th className=" text-base font-semibold">S/N</th>
              <th className=" text-base font-semibold">Image</th>
              <th className=" text-base font-semibold">Name</th>
              <th className=" text-base font-semibold">Category</th>
              <th className=" text-base font-semibold">Price</th>
              <th className=" text-base font-semibold">Actions</th>
              <th className=" text-base font-semibold">Actions</th>
            </tr>
            {products.map((product, index) => {
              const { id, name, price, imgUrl, category } = product;
              return (
                <tr key={id}>
                  <td className="text-base font-semibold">{index + 1}</td>
                  <td>
                    <img
                      className=" w-20 h-20 rounded-md "
                      src={imgUrl}
                      alt={name}
                    />
                  </td>
                  <td className="text-lg font-semibold">{name}</td>
                  <td className="text-lg font-semibold">{category}</td>
                  <td className="">
                    <p className="flex items-center text-lg font-semibold">
                      <TbCurrencyNaira className="mt-1" size={20} />
                      {price}
                    </p>
                  </td>
                  <td>
                    <Link
                      className="flex items-center text-lg font-semibold"
                      to={`/admin/add-product/${id}`}
                    >
                      <FaEdit /> Edit
                    </Link>
                  </td>
                  <td>
                    <span
                      onClick={() => confirmDelete(id, imgUrl)}
                      className="flex items-center text-red-500 text-lg font-semibold cursor-pointer"
                    >
                      <FaTrashAlt className="text-red-500 text-lg font-semibold" />
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default ViewProducts;
