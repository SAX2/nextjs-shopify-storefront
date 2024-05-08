"use client";

// import { updateItemQuantityCart } from "@/lib/shopify/queries"; // shopify
import { MinusIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductQuantity = ({
  itemId,
  quantity: productQuantity,
}: {
  itemId: string;
  quantity: number;
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setQuantity(productQuantity);
  }, [productQuantity]);

  useEffect(() => {
    if (productQuantity === quantity) return;

    setDisabled(true);

    const updateQuantityCartLine = async () => {
      if (quantity === 0) return;

      // shopify
      
      // const { data, error } = await updateItemQuantityCart({cartId, itemId, quantity: quantity.toString()}); // shopify
      // if (error) return; // shopify
      // router.refresh(); // shopfiy

      // provitional


      return console.log(`updated total quantity is: ${quantity}`);
    };

    updateQuantityCartLine();
    setDisabled(false);
  }, [quantity]);

  const buttonStyle =
    "p-2 border border-black/5 hover:border-black/10 hover:bg-gray-100 transition-colors w-9 h-9 flex items-center justify-center";

  return (
    <div className="flex gap-1">
      <button
        onClick={() =>
          setQuantity((prevState) =>
            prevState > 0 ? prevState - 1 : prevState
          )
        }
        className={buttonStyle}
        disabled={disabled}
      >
        <MinusIcon width={16} height={16} />
      </button>
      <p className="p-2 border border-black/5 text-sm font-medium w-9 h-9 flex items-center justify-center select-none">
        {quantity}
      </p>
      <button
        onClick={() => setQuantity((prevState) => prevState + 1)}
        className={buttonStyle}
        disabled={disabled}
      >
        <PlusIcon width={16} height={16} />
      </button>
    </div>
  );
};

export default ProductQuantity;
