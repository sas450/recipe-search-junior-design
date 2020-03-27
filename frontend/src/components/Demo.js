import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    width: 1000,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    align : "center"
  },
}));

function handleChange(e,v) {
  console.log(v)
}

const validIngredients = [
  { title: 'Chicken'},
  { title: 'Cheese'},
  { title: 'Ramen'},
  { title: 'Chocolate'},
  { title: 'Pizza'},
  { title: 'Chinese Food'},
];

export default function Tags() {

  const classes = useStyles();
  return (
      <Autocomplete 
        multiple
        id="tags-outlined"
        options={validIngredients}
        getOptionLabel={option => option.title}
        filterSelectedOptions
        onChange = {handleChange}
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

