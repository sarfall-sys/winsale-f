import React, { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import Table from "../../components/Table";
import AddButton from "../../components/AddButton";

function Products() {
  const { products, loading, error, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "category_id", label: "Category" },
    { key: "stock", label: "Stock" },
    { key: "sale_price", label: "Sale Price" },
    { key: "cost_price", label: "Cost Price" },
  ];
  const handleAddSale = () => {
    navigate("/create-sale");
  };

  const handleEdit = () => {
    // TODO: Implement edit logic
  };

  const handleDelete = () => {
    // TODO: Implement delete logic
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 justify-between flex flex-col bg-bg-light dark:bg-bg-dark min-h-screen">
      <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
        <header className="m-2">
          <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">
            Products
          </h2>
        </header>

        <div className="m-2">
          <AddButton onClick={handleAddSale} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table
          columns={columns}
          data={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Products;
