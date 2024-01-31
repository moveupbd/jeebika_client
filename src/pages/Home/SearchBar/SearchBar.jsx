import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = ({ data, organizationTypes, locations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrganizationType, setSelectedOrganizationType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform your search logic here based on the filters
    const results = data.filter((job) => {
      const matchesSearchTerm = searchTerm
        ? job.jobType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.organizationName.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesOrganizationType =
        selectedOrganizationType !== ""
          ? job.organizationType.toLowerCase() ===
            selectedOrganizationType.toLowerCase()
          : true;

      const matchesLocation =
        selectedLocation !== ""
          ? job.location.toLowerCase() === selectedLocation.toLowerCase()
          : true;

      return matchesSearchTerm && matchesOrganizationType && matchesLocation;
    });

    setSearchResults(results);
  };

  return (
    <div className="flex flex-col items-center space-y-4 mb-4">
      <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          className="w-full md:w-64 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Job Type or Organization Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {organizationTypes && organizationTypes.length > 0 && (
          <select
            className="w-full md:w-64 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            value={selectedOrganizationType}
            onChange={(e) => setSelectedOrganizationType(e.target.value)}
          >
            <option value="">Select Organization Type</option>
            {organizationTypes.map((orgType) => (
              <option key={orgType} value={orgType}>
                {orgType}
              </option>
            ))}
          </select>
        )}

        {locations && locations.length > 0 && (
          <select
            className="w-full md:w-64 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        )}

        <button
          className="bg-cyan-700 text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          <HiOutlineSearch className="inline-block mr-2" />
          Search
        </button>
      </div>

      {/* Display search results or perform other actions with the results */}
      {searchResults.map((result) => (
        <div key={result.id}>
          <p>{result.jobType}</p>
          <p>{result.organizationType}</p>
          <p>{result.location}</p>
        </div>
      ))}
    </div>
  );
};

SearchBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      jobType: PropTypes.string.isRequired,
      organizationType: PropTypes.string.isRequired,
      organizationName: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
  organizationTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchBar;
