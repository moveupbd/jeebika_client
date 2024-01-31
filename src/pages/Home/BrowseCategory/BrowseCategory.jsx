import { useState } from "react";

const BrowseCategory = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Dummy data for categories
  const [categories, setCategories] = useState([
    { id: 1, name: "Accounting/Finance", jobCount: 415 },
    { id: 2, name: "Bank/Non-Bank Fin. Institution", jobCount: 103 },
    { id: 3, name: "Supply Chain/Procurement", jobCount: 125 },
    { id: 4, name: "Education/Training", jobCount: 371 },
    { id: 5, name: "Engineer/Architects", jobCount: 414 },
    { id: 6, name: "Garments/Textile", jobCount: 535 },
    { id: 7, name: "HR/Org. Development", jobCount: 189 },
    { id: 8, name: "Gen Mgt/Admin", jobCount: 179 },
    { id: 9, name: "Design/Creative", jobCount: 145 },
    { id: 10, name: "Production/Operation", jobCount: 133 },
    { id: 11, name: "Hospitality/Travel/Tourism", jobCount: 158 },
    { id: 12, name: "Commercial", jobCount: 79 },
    { id: 13, name: "Beauty Care/Health & Fitness", jobCount: 22 },
    { id: 14, name: "IT & Telecommunication", jobCount: 475 },
    { id: 15, name: "Marketing/Sales", jobCount: 1154 },
    { id: 16, name: "Customer Service/Call Centre", jobCount: 182 },
    { id: 17, name: "Media/Ad./Event Mgt.", jobCount: 142 },
    { id: 18, name: "Medical/Pharma", jobCount: 266 },
    { id: 19, name: "Agro (Plant/Animal/Fisheries)", jobCount: 91 },
    { id: 20, name: "NGO/Development", jobCount: 284 },
    { id: 21, name: "Research/Consultancy", jobCount: 39 },
    { id: 22, name: "Receptionist/PS", jobCount: 97 },
    { id: 23, name: "Data Entry/Operator/BPO", jobCount: 70 },
    { id: 24, name: "Driving/Motor Technician", jobCount: 17 },
    { id: 25, name: "Security/Support Service", jobCount: 33 },
    { id: 26, name: "Law/Legal", jobCount: 29 },
    { id: 27, name: "Company Secretary/Regulatory affairs", jobCount: 20 },
  ]);

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 9);

  console.log(visibleCategories);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-disc pl-6">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`mb-2 ${!showAllCategories && "hidden md:block"}`}
          >
            <button
              onClick={() => handleCategoryClick(category.id)}
              className="text-cyan-700 hover:underline"
            >
              {category.name} ({category.jobCount})
            </button>
          </li>
        ))}
      </ul>
      <ul className="mt-4 text-center md:hidden">
        {visibleCategories.map((category) => (
          <li key={category.id}>
            <li
              onClick={() => handleCategoryClick(category.id)}
              className="text-cyan-700 hover:underline"
            >
              {category.name} ({category.jobCount})
            </li>
          </li>
        ))}
        <button
          onClick={() => setShowAllCategories(true)}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Show More
        </button>
      </ul>
    </div>
  );
};

export default BrowseCategory;
