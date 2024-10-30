import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define an enum to distinguish between different modes of the component
export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}
// SingleProduct mode
type SelectProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: (value: number) => void;
};

// Cart item mode
type SelectCartItemAmountProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => Promise<void>;
  isLoading: boolean;
};

function SelectProductAmount(
  props: SelectProductAmountProps | SelectCartItemAmountProps
) {
  const { mode, amount, setAmount } = props;
  const cartItem = mode === Mode.CartItem; // check if in cart item mode
  return (
    <>
      <h4 className="mb-2">Amount:</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
        disabled={cartItem ? props.isLoading : false}
      >
        <SelectTrigger className={cartItem ? "w-[100px]" : "w-[150px]"}>
          <SelectValue placeholder={amount} />
          <SelectContent>
            {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
              const selectValue = (index + 1).toString();
              return (
                <SelectItem key={selectValue} value={selectValue}>
                  {selectValue}
                </SelectItem>
              );
            })}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </>
  );
}
export default SelectProductAmount;
