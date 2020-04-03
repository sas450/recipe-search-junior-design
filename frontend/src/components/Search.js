import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import validIngredients from "../bb_ingredient.json";

class Search extends React.Component {
  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        width: 1000,
        "& > * + *": {
          marginTop: theme.spacing(3)
        },
        align: "center"
      }
    }));

    return (
      <Autocomplete
        multiple
        id="tags-outlined"
        options={validIngredients}
        getOptionLabel={option => option.title}
        filterSelectedOptions
        onChange={this.props.updateIngredients}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Ingredient Search"
            placeholder="Enter an Ingredient"
            fullWidth
          />
        )}
      />
    );
  }
}

export default Search;
