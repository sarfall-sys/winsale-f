import { useEffect } from "react";
import Form from "../../components/Form";
import useSale from "../../hooks/useSale";
export default function CreateSale() {
  const { createSale } = useSale();

  const handleSubmit = (data) => {
    createSale(data);
  };

  const fields = [
    { label: "Product", name: "name", type: "text" },
    { label: "Amount", name: "amount", type: "number" },
    { label: "Date", name: "date", type: "date" },
  ];

  return (
    <div className="p-2 bg-bg-light dark:bg-bg-dark min-h-screen flex justify-center items-start">
      <Form onSubmit={handleSubmit} isEdit={false} fields={fields} />
    </div>
  );
}
