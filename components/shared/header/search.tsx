import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";

//const categories = ['All', 'Electronics', 'Clothing', 'Home', 'Beauty', 'Sports', 'Toys', 'Other'];
// const categories = ['Men', 'Women', 'Kids', 'Accessories', 'Home', 'Beauty', 'Sports', 'Toys', 'Smartphones', 'Laptops', 'Computers', 'Books', 'Other']; //TODO: Add more categories
const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty & Personal Care',
     'Health & Household', 'Grocery & Gourmet Food', 'Baby Products', 'Toys & Games', 'Sports & Outdoors', 
     'Automotive', 'Tools & Home Improvement', 'Pet Supplies', 'Office Products', 'Books & Media',
     'Digital Products', 'Industrial & Scientific', 'Handmade/Artisan', 'Seasonal & Holiday']
export default async function Search() {
  return (
    <form action={"/search"} method="GET" className="flex items-stretch h-8">
        <Select name="category" defaultValue="all" >
            <SelectTrigger  className="w-auto bg-gray-100 h-full dark:border-gray-200  text-black border-r rounded-r-none rounded-l-md">
                <SelectValue placeholder="All" />        
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectItem value="all">All</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Input className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
        placeholder={`Search Site ${APP_NAME}`} name="q" type="search"/>
        <button type="submit" className="bg-primary text-primary-foreground rounded-s-none rounded-e-md h-full px-3 py-4 flex items-center"><SearchIcon className="w-6 h-6"/></button>
    </form>
  );
}