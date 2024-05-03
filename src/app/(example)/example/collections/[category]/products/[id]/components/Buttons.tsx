import React from 'react'

const Button = ({ type }: { type: 'bag' | 'checkout' | 'sold-out' }) => {
  return (
    <>
      {type === "sold-out" && (
        <button
          className="w-full border border-black font-semibold p-4 bg-gray-100"
          disabled
        >
          SOLD OUT
        </button>
      )}
      {type === "bag" && <AddToBag />}
      {type === "checkout" && <Checkout />}
    </>
  );
}

const AddToBag = () => {
  return (
    <button className="w-full text-white bg-black font-semibold p-4 text-center">
      ADD TO BAG
    </button>
  );
}

const Checkout = () => {
  return (
    <button className="w-full border border-black font-semibold p-4">
      CHECKOUT
    </button>
  );
}

export default Button