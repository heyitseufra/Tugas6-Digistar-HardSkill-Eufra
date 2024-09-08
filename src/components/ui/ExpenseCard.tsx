import { MdOutlinePayments } from "react-icons/md";  
import Button from "./Button";  
import React from "react";  

type ExpenseCardProps = {  
  category: string;  
  date: string;  
  amount: number;  
  icon: React.ReactNode;  
  bgColor: string; // Tambahkan prop bgColor  
};  

const ExpenseCard: React.FC<ExpenseCardProps> = ({  
  category,  
  date,  
  amount,  
  icon,  
  bgColor, // Ambil prop bgColor  
}) => {  
  return (  
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md">  
      <div  
        className={`flex items-center justify-center flex-shrink-0 w-12 h-12 ${bgColor} rounded-lg`}  
      >  
        {icon} {/* Tampilkan ikon di sini */}  
      </div>  
      <div className="flex items-center justify-between w-full ml-4">  
        <div>  
          <p className="text-lg font-medium text-black">{category}</p>  
          <p className="text-darkgray">{date}</p>  
        </div>  
        <div className="flex items-center gap-2">  
          <p className="mr-8 font-bold text-black">${amount}</p>  
          <Button variant="edit" />  
          <Button variant="delete" />  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ExpenseCard;
