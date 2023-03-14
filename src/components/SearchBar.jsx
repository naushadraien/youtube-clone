import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        //here e is the event and e.preventDefault() is used to prevent reloading the page when searching anything
        e.preventDefault();

        if(searchTerm){
            //here navigate is used to redirect us to what we passed in the navigate()
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }

  return (
    <Paper 
        component='form'
        onSubmit={handleSubmit}
        //here pl is padding left
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow:'none',
            //here mr is margin right and sm stands for small device
            mr: {sm: 5}
        }}
    >
        <input type="text" 
            className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar