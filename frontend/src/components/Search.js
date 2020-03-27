import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {

    state = {
        user_ingredients : []
    }

    handleChange = (e,v) => {
        this.setState({
            user_ingredients : v
        })
    }
    
    render() {


        const validIngredients = [
            { title: 'Chicken'},
            { title: 'Cheese'},
            { title: 'Ramen'},
            { title: 'Chocolate'},
            { title: 'Pizza'},
            { title: 'Chinese Food'},
          ];


          const useStyles = makeStyles(theme => ({
            root: {
              width: 1000,
              '& > * + *': {
                marginTop: theme.spacing(3),
              },
              align : "center"
            },
          }));



        return (
            <div>
                <Autocomplete 
                multiple
                id="tags-outlined"
                options={validIngredients}
                getOptionLabel={option => option.title}
                filterSelectedOptions
                onChange = {this.handleChange}
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
          </div>
        )
    }
}

export default Search