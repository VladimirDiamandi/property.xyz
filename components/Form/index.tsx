import React, { useState } from "react";

import FormItem from "./FormItem";
import CustomSelect, { IOptions } from "../CustomSelect";

import { MainBtn, StyledForm } from "../../styles/Form.styles";
import { useRouter } from "next/router";

const typeOptions: Array<IOptionsParams> = [
  {
    id: 1,
    label: "Flat",
    value: "flat",
  },
  {
    id: 2,
    label: "Detached",
    value: "detached",
  },
  {
    id: 3,
    label: "Semi-Detached",
    value: "semiDetached",
  },
  {
    id: 4,
    label: "Terrace",
    value: "terrace",
  },
];

const badsOptions: Array<IOptionsParams> = [
  {
    id: 1,
    label: "1",
    value: "1",
  },
  {
    id: 2,
    label: "2",
    value: "2",
  },
  {
    id: 3,
    label: "3",
    value: "3",
  },
];


interface IOptionsParams {
  id: number,
  label: string,
  value: string
}

interface IFormProps {
  btnName: 'Search' | 'Update'
}


const Form: React.FC<IFormProps> = ({ btnName }) => {
  const router = useRouter()
  const [postcode, setPostcode] = useState<string>('');
  const [type, setType] = useState<null | IOptions>(null);
  const [beds, setBeds] = useState<null | IOptions>(null);


  const handleSubmit = () => {
    console.log("SearchData: ", {
      postcode,
      type,
      beds,
    });
    if (btnName === 'Search') router.push('/result')
    setPostcode("");
    setType(null);
    setBeds(null);
  };

  return (
    <StyledForm>
      <FormItem label="Property postcode" divider>
        <input
          type="text"
          placeholder="e.g CH5 387"
          value={postcode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPostcode(e.target.value)}
        />
      </FormItem>
      <FormItem label="Property type" divider>
        <CustomSelect
          options={typeOptions}
          selectedOption={type}
          onSelectOption={setType}
        />
      </FormItem>
      <FormItem label="No. of beds">
        <CustomSelect
          options={badsOptions}
          selectedOption={beds}
          onSelectOption={setBeds}
        />
      </FormItem>
      <MainBtn onClick={handleSubmit}>{btnName}</MainBtn>
    </StyledForm>
  );
};

export default Form;