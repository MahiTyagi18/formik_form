import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    Name: Yup.string().min(2).max(30).required("Please enter your name here!"),
    address: Yup.string().max(50).required("Please enter your address here!"),
    menu: Yup.string().required("Please select your country!"),
    gender: Yup.string().required("Selecting an option is required!"),
    hobby: Yup.array().min(1, 'Select at least one option'),
})