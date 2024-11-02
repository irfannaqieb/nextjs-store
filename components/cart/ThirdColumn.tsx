"use client";
import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { useToast } from "@/hooks/use-toast";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAmount = async (value: number) => {
    setIsLoading(true);
    toast({ description: "Calculating..." });

    // Communicate with the database
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });

    // Update the local value
    setAmount(value);
    toast({ description: result.message });
    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmount}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
