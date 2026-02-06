import useSale from "../../hooks/useSale";
import { useEffect } from "react";
import Table from "../../components/Table";
import AddButton from "../../components/AddButton";
import { useNavigate } from "react-router";
function Sales() {
  const { sales, loading, error, fetchSales } = useSale();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSales();
  }, []);

  const columns = [
    { key: "id", label: "ID" },
    { key: "product_id", label: "Product Name" },
    { key: "quantity", label: "Quantity" },
    { key: "total_price", label: "Total Price" },
    { key: "sale_date", label: "Sale Date" },
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
            Sales
          </h2>
        </header>

        <div className="m-2">
          <AddButton onClick={handleAddSale} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table
          columns={columns}
          data={sales}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Sales;
