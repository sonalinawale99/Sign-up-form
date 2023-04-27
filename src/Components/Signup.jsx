import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Signup = () => {

 const schema = yup.object({
 firstName: yup.string().max(10).min(3).required(),
 age: yup.number().positive().integer().required(),
 number: yup.number().max(10).required(),

 }).required();
 const { register, handleSubmit, handleBlur, formState:{ errors } } = useForm({
resolver: yupResolver(schema)
 });

 const onSubmit = data => console.log(data);

 return (
<div style={{height:"300px", width:"300px"}}>

 <h3>Sign up</h3>

<form onSubmit={handleSubmit(onSubmit)} >
<div className="mb-3">

 <label for="exampleInputPassword1" className="form-label">First Name</label>

 <input type="text" {...register("firstName")}  onBlur={handleBlur()} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 <p>{errors.firstName?.message}</p>

 </div>

 <div className="mb-3">

<label for="exampleInputPassword1" className="form-label">Number</label>

<input type="text" {...register("number")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<p>{errors.number?.message}</p>

</div>



 <div className="mb-3">

 <label for="exampleInputPassword1" className="form-label">Age</label>

<input type="number" {...register("age")}className="form-control" id="exampleInputPassword1"/>
<p>{errors.age?.message}</p>

 </div>
 <button type="submit" className="btn btn-primary">Submit</button>

</form>

</div>

 )

}




export default Signup


