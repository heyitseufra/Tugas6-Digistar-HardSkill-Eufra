import { MdAccountBalanceWallet } from "react-icons/md";  
import { FaUtensils, FaTshirt, FaMoneyBillWave, FaGift } from "react-icons/fa";  
import Button from "./ui/Button";  
import ExpenseCard from "./ui/ExpenseCard";  

function Content() {  
  return (  
    <div className="px-10 py-4">  
      <div className="flex items-center justify-between mb-8">  
        <div className="flex items-center gap-4">  
          <MdAccountBalanceWallet className="text-blue" size={40} />  
          <div className="flex flex-col">  
            <h2 className="text-2xl font-semibold text-blue">Home Wallet</h2>  
            <p className="text-sm font-medium text-darkgray">  
              Change default wallet  
            </p>  
          </div>  
        </div>  
        <Button label="Add Transaction" variant="add" />  
      </div>  
      <div className="flex items-center gap-4 mb-8">  
        <Button label="Group By" variant="filter" />  
        <Button label="Dates" variant="filter-active" />  
        <Button label="Flow Type" variant="filter" /> 
        <Button label="Types" variant="filter" />
        <Button label="Sample" variant="filter" /> 
        <Button label="Extended" variant="filter" />   
      </div>  
      <div className="flex items-center justify-between mb-6">  
        <h6 className="text-lg font-semibold">July 1st, 2024</h6>  
        <div className="flex items-center gap-10 text-darkgray">  
          <p>Number of transactions: 04</p>  
          <p>Value: $7408.00</p>  
        </div>  
      </div>  
      <div className="flex flex-col gap-4">  
        <ExpenseCard   
          category="Restaurant & Cafe"   
          date="May 19th, 2024"   
          amount={99.00}   
          icon={<FaUtensils className="text-white-500" size={24} />}   
          bgColor="bg-orange" // Set custom background color  
        />  
        <ExpenseCard   
          category="Clothes & Shopping"   
          date="May 20th, 2024"   
          amount={2357}   
          icon={<FaTshirt className="text-white-500" size={24} />}   
          bgColor="bg-blue" // Set custom background color  
        />  
        <ExpenseCard   
          category="Credits & Loans"   
          date="May 21st, 2024"   
          amount={4867}   
          icon={<FaMoneyBillWave className="text-white-500" size={24} />}   
          bgColor="bg-green" // Set custom background color  
        />  
        <ExpenseCard   
          category="Gift Card"   
          date="May 23rd, 2024"   
          amount={85.00}   
          icon={<FaGift className="text-white-500" size={24} />}   
          bgColor="bg-red" // Set custom background color  
        />  
      </div>  
    </div>  
  );  
}  

export default Content;
