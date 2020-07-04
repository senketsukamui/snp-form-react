import React from "react";
import Text from "components/Input/Text";
import { INPUT_TYPES } from "utils/constants";
import Select from "./Select";
import Textfield from "./Textfield";

const Input = (props) => {
  switch (props.type) {
    case INPUT_TYPES.TEXT:
      return <Text {...props} />;
    case INPUT_TYPES.SELECT:
      return <Select {...props} />;
    case INPUT_TYPES.TEXTAREA:
      return <Textfield {...props} />;
    default:
      return <div>Произошла ошибка</div>;
  }
};

export default React.memo(Input);
