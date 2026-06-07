"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import { rfqContent } from "@/data/rfq";

const fieldClass =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

interface QuoteFormProps {
  className?: string;
  id?: string;
}

const QuoteForm = ({ className = "", id }: QuoteFormProps) => {
  const [item, setItem] = useState("");
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState<string>(rfqContent.quantityUnits[0]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setItem("");
    setDetails("");
    setQuantity("");
    setUnit(rfqContent.quantityUnits[0]);
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`rounded-lg bg-white p-5 sm:p-6 shadow-lg ${className}`}
    >
      <h3 className="text-col-title font-bold text-slate-800 mb-4">
        {rfqContent.formTitle}
      </h3>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="What item you need?"
          className={fieldClass}
          required
        />

        <textarea
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Type more details"
          rows={4}
          className={`${fieldClass} resize-none min-h-[100px]`}
        />

        <div className="grid grid-cols-[1fr_auto] gap-3">
          <input
            type="number"
            name="quantity"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className={fieldClass}
            required
          />
          <select
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className={`${fieldClass} min-w-[88px] cursor-pointer`}
            aria-label="Quantity unit"
          >
            {rfqContent.quantityUnits.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto rounded-lg px-8 py-3 mt-1"
        >
          {rfqContent.submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;
