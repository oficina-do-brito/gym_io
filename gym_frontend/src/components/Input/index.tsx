import React, { ChangeEvent } from "react";
interface IpropsInput {
  nameLabel: string;
  inputType: "text";
  handleFunction: (event: ChangeEvent<HTMLInputElement>) => void;
}
const InputText: React.FC<IpropsInput> = ({
  nameLabel,
  inputType,
  handleFunction,
}: IpropsInput) => {
  const capitalizeFirstLetter = (palavra: string) => {
    return palavra.charAt(0).toUpperCase() + palavra.substring(1);
  };
  return (
    <div className="col-md-6">
      <label htmlFor={nameLabel.toLowerCase()} className="form-label">
        {capitalizeFirstLetter(nameLabel)}
      </label>
      <input
        type={inputType}
        name={nameLabel}
        className="form-control"
        id={nameLabel.toLowerCase()}
        onChange={handleFunction}
      />
    </div>
  );
};
export default InputText;
