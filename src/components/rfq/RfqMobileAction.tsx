"use client";

import { useState } from "react";
import Button from "@/components/Button";
import QuoteForm from "./QuoteForm";
import { rfqContent } from "@/data/rfq";

const RfqMobileAction = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="lg:hidden w-full">
      <Button
        type="button"
        variant="none"
        onClick={() => setShowForm((prev) => !prev)}
        className="rounded-lg bg-white px-8 py-3 text-blue-600 font-medium shadow-sm hover:bg-slate-50"
        aria-expanded={showForm}
        aria-controls="rfq-form-mobile"
      >
        {rfqContent.submitLabel}
      </Button>

      {showForm && (
        <QuoteForm id="rfq-form-mobile" className="mt-4 shadow-md" />
      )}
    </div>
  );
};

export default RfqMobileAction;
