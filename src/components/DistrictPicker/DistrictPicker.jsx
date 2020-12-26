import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./DistrictPicker.module.css";
import { fetchDistricts } from "../../api";

const DistrictPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchDistricts());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((district, key) => (
          <option key={key} value={district}>
            {district}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default DistrictPicker;