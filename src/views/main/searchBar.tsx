import React, { useEffect, useRef, useState } from "react";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
// import { getClients, setTableData } from "../store/dataSlice";
import debounce from "lodash/debounce";
import cloneDeep from "lodash/cloneDeep";
import { FormContainer, FormItem, Select } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { companyNames } from "../company/companyNames";
import { Field, Form, Formik } from "formik";

const MainSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState([])
  const searchInput = useRef();
  const [selectVal, SetSelectVal] = useState({})
  //   const tableData = useSelector((state) => state.clientList.data.tableData);
  const debounceFn = debounce(handleDebounceFn, 500);

  const fetchData = () => { };


  // Map each stock name to an object with "label" and "value" properties
  const stockObjects = companyNames.map((name: any) => ({ label: name, value: `${name}` }));


  useEffect(() => {
    Object.keys(selectVal).length && navigate(`/company/${selectVal.value}`)
    // SetSelectVal({})
  }, [selectVal])

  function handleDebounceFn(val: any) {
    console.log("val", val)
    if (typeof val === "string" && val.length > 1) {
      fetchData();
    }
    if (typeof val === "string" && val.length === 0) {
      fetchData();
    }
  }



  const onSearch = (e) => {
    console.log("e", e)
    SetSelectVal(e)
    // debounceFn(e.target.value);
  };
  const CustomInput = React.forwardRef((props, ref) => (
    <div style={{ position: 'relative' }}>
      <HiSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
      {/* <input ref={ref} {...props} /> */}
    </div>
  ));

  return (
    <>
      <Select
        placeholder="Search for a company"
        options={showOptions}
        className="md:w-2/4 md:my-0 my-4 md:mx-2"
        size="lg"
        isSearchable={true}
        onChange={(e: any) => onSearch(e)}
        onInputChange={(input) => {
          console.log("input",input)
          if (input.length > 2 && showOptions.length == 0) {
            setShowOptions(stockObjects)
          }
          else {
            setShowOptions([])
          }
        }}
        // value={Object.keys(selectVal)?.length ?true :false}
        // styles={CustomInput}
      />
    </>

  );
};

export default MainSearch;
