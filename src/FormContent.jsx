import React ,{useState}from 'react';
import TextField from '@mui/material/TextField';
import './FormContent.css';
import { Select,FormControl,InputLabel,MenuItem,RadioGroup,FormControlLabel, Radio,FormLabel,Button ,Checkbox,OutlinedInput,ListItemText} from '@mui/material';

import { useFormik } from 'formik';
import { signUpSchema } from './schemas';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const hobbies = [
    'Reading book',
    'Listening Music',
    'Travelling',
    'Dancing',
    'Singing',
    'Painting',
    'Designing',
    'Cricket',
    'Bedminton',
    'Sleeping',
  ];

    
const initialValues ={
  Name:"",
  address:"",
  menu: "",
  gender:"",
  hobby :"",
}
const FormContent =()=>{
  const {values,errors,handleBlur,touched,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,action)=>{
      console.log(
        values
      );
      alert('Name of user is'+ ' '+values.Name +' '+ 'with address'+' '+ values.address +' '+ values.menu+' '+ 'and gender'+' '+ values.gender+ ' '+'and hobbies are'+' '+ hobby)
      action.resetForm();
    }
  })
  //console.log(Formik);
  //console.log(errors);
  //console.log(values);
    const [hobby, setHobby] = useState([]);
  
    const handleOnChange = (event) => {
      const {
        target: { value },
      } = event;
      setHobby(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    
    };
    return(
      
      <div className="outer_div">
        <div className="inner_div">

        <h3>Welcome!Kindly fill the form.</h3>
        <div className="formContent">
          <form onSubmit={handleSubmit}>
            <div className="input_block">
            <TextField id="name" color='secondary' name='Name' autoComplete='off' label="Name" placeholder='Enter your name here' variant="outlined"
            value={values.Name}
            onChange={handleChange}
            onBlur={handleBlur} />
            {errors.Name && touched.Name ?(
              <p className='form_error'>{errors.Name}</p>
            ) : null}

            
            </div>
            <div className="input_block">
            <TextField id="address" name='address' color='secondary' label="Address" minRows={6} multiline placeholder='Enter your address here' variant="outlined" 
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}/>
            {errors.address && touched.address ?(
              <p className='form_error'>{errors.address}</p>
            ) : null}
            </div>
            <div className="input_block">
              <FormControl sx={{width: '30vw'}}>
                <InputLabel id="dropdown">Select your Country</InputLabel>
                <Select labelId='menu' name='menu' label='Country name' id='menulist'value={values.menu}
                onChange={handleChange}
                onBlur={handleBlur} color='secondary'>
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                  <MenuItem value={"America"}>America</MenuItem>
                  <MenuItem value={"Russia"}>Russia</MenuItem>
                  <MenuItem value={"Singapore"}>Singapore</MenuItem>
                </Select>
              </FormControl>
              {errors.menu && touched.menu ?(
                <p className='form_error'>{errors.menu}</p>
              ) : null}
            </div>
            
            <div className="input_block">
              <FormControl>
                <FormLabel>Select gender</FormLabel>
                <RadioGroup name='gender' value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                color='secondary'
                id='radiogroup'>
                  <FormControlLabel 
                  value={'male'}
                  label='Male'
                  control={<Radio/>}/>
                  <FormControlLabel 
                  value={'female'}
                  label='Female'
                  control={<Radio/>}/>
                  <FormControlLabel 
                  value={'other'}
                  label='Other'
                  control={<Radio/>}/>

                  
                </RadioGroup>
              </FormControl>
              {errors.gender && touched.gender ?(
                <p className='form_error'>{errors.gender}</p>
              ) : null}
            </div>
            <div className="input_block">
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="multiselect">Hobby</InputLabel>
                <Select
                  name='hobby'
                  labelId="multiselect"
                  id="multi"
                  multiple
                  value={hobby}
                  onBlur={handleBlur}
                  onChange={handleOnChange}
                  input={<OutlinedInput label="Hobby" color='secondary'/>}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {hobbies.map((hobbies) => (
                    <MenuItem key={hobbies} value={hobbies}>
                      <Checkbox checked={hobby.indexOf(hobbies) > -1} />
                      <ListItemText primary={hobbies} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="input_block">
            <Button variant="contained" type='submit'>Submit</Button>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
}

export default FormContent;