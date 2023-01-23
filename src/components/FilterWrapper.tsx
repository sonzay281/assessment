import React from "react";
import { SelectInput } from "vcc-ui";

import { IPageData } from "./ProductContainer";

interface IFilterWrapperProps {
  setPageData: React.Dispatch<React.SetStateAction<IPageData>>;
  pageData: IPageData;
}

const FilterWrapper = ({ setPageData, pageData }: IFilterWrapperProps) => (
  <span className="filter-wrapper">
    <SelectInput
      allowEmpty={true}
      label="Filter by  Bodytype"
      title="Select option to filter by  bodytype"
      value={pageData.filter}
      onChange={(e) => setPageData({ ...pageData, filter: e.target.value })}
    >
      {pageData.bodyTypes?.map((bodyType) => (
        <option value={bodyType} key={bodyType}>
          {bodyType}
        </option>
      ))}
    </SelectInput>
  </span>
);

export default FilterWrapper;
