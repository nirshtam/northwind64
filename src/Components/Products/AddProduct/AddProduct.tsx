import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";
import css from "./AddProduct.module.css";

const AddProduct: React.FunctionComponent = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ProductModel>({
    defaultValues: {
      name: "No Product for you!",
    },
  });
  const history = useHistory();

  const isChecked = watch("id");
  async function addProduct(product: ProductModel) {
    try {
      const response = await axios.post<ProductModel>(
        globals.productUrl,
        ProductModel.convertToFormData(product)
      );
      console.log(response.data);
      alert("Product added successfully.");
      reset();
      history.push("/products");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="add-product-container box">
      <h1>Add Product</h1>
      <form className={css.addProductForm} onSubmit={handleSubmit(addProduct)}>
        <div>
          <label htmlFor="pName">Name:</label>
          <input
            id="pName"
            {...register("name", {
              required: true,
              maxLength: 30,
              minLength: 2,
            })}
            placeholder="Enter here the product name"
          />
          {errors.name?.type === "required" && (
            <span className={css.error}>Name is required.</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className={css.error}>Min length is 2 charcters.</span>
          )}
          {errors.name?.type === "maxLength" && (
            <span className={css.error}>Max length is 30 charcters.</span>
          )}
        </div>
        <div>
          <label htmlFor="pUnitPrice">Price:</label>
          <input
            id="pUnitPrice"
            type="number"
            {...register("unitPrice", { required: true, valueAsNumber: true })}
          />
          {errors.unitPrice?.type === "required" && (
            <span className={css.error}>Price is required.</span>
          )}
        </div>
        <div>
          <label htmlFor="pStock">Stocks:</label>
          <input
            id="pStock"
            type="number"
            {...register("unitsInStock", {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.unitsInStock?.type === "required" && (
            <span className={css.error}>Stocks is required.</span>
          )}
        </div>
        <div>
          <label htmlFor="newsletter">
            <input type="checkbox" {...register("id")} /> Would like to get
            emails
          </label>
        </div>
        {isChecked && <p>No problem sir!</p>}
        <div>
          <input type="submit" value="Add!" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
