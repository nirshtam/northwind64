class ProductModel {
  public id: number = 0;
  public name: string = "";
  public unitPrice: number = 0;
  public unitsInStock: number = 0;

  public static convertToFormData(product: ProductModel): FormData {
    const myFormData = new FormData();
    myFormData.append("name", product.name);
    myFormData.append("unitPrice", product.unitPrice.toString());
    myFormData.append("unitsInStock", product.unitsInStock.toString());
    return myFormData;
  }
}

export default ProductModel;
