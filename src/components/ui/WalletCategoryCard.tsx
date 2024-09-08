import React from "react";
import { FaWallet } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import Button from "./Button";

type CardVariant = "wallet" | "category";

interface WalletCategoryCardProps {
  title: string;
  amount: number;
  variant: CardVariant;
  bgColor: string; // Tambahkan prop bgColor
}

const WalletCategoryCard: React.FC<WalletCategoryCardProps> = ({
  title,
  amount,
  variant,
  bgColor, // Ambil prop bgColor
}) => {
  const Icon = variant === "wallet" ? FaWallet : BiSolidCategory;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div
          className={`w-10 h-10 ${bgColor} flex items-center justify-center rounded-lg`}
        >
          <Icon className="text-white" size={24} />
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-darkgray">${amount.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="edit" />
        <Button variant="delete" />
      </div>
    </div>
  );
};

export default WalletCategoryCard;
