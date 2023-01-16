import URL_API from '../shared/constants';

const findAllProducts = async () => {
  const request = await fetch(`${URL_API}/products/findAll`);
  const response = await request.json();
  return response;
};

const findProductsById = async (id) => {
  const productId = parseInt(id, 11);
  const request = await fetch(`${URL_API}/products/findById/${productId}`);
  const response = await request.json();
  return response;
};

const findProductsByName = async (name) => {
  const productName = name.toUpperCase();
  const request = await fetch(`${URL_API}/products/findByName/${productName}`);
  const response = await request.json();
  return response;
};

const findProductsByGroup = async (group) => {
  const productGroup = group.toUpperCase();
  const request = await fetch(`${URL_API}/products/findByGroup/${productGroup}`);
  const response = await request.json();
  return response;
};

const findProductsBySubGroup = async (subgroup) => {
  const productSubGroup = subgroup.toUpperCase();
  const request = await fetch(`${URL_API}/products/findBySubGroup/${productSubGroup}`);
  const response = await request.json();
  return response;
};

const findProductsByBrand = async (brand) => {
  const productBrand = brand.toUpperCase();
  const request = await fetch(`${URL_API}/products/findByBrand/${productBrand}`);
  const response = await request.json();
  return response;
};

const findProductsByFurnisher = async (furnisher) => {
  const productFurnisher = furnisher.toUpperCase();
  const request = await fetch(`${URL_API}/products/findByFurnisher/${productFurnisher}`);
  const response = await request.json();
  return response;
};

export {
  findAllProducts,
  findProductsById,
  findProductsByName,
  findProductsByGroup,
  findProductsBySubGroup,
  findProductsByBrand,
  findProductsByFurnisher,
};
