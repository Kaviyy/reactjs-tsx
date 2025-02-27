import React, { useState } from 'react'
import {Grid2,Paper, Typography,TextField,Button} from '@mui/material'
const NewProducts = () => {
  let paperStyle ={
    width:400,
    margin:"20px auto",
    padding : "20px"
  }
  let [newProducts,setnewProducts]=useState({
    "id": 10,
          "title": " ",
          "price": 109,
          "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          "category": " ",
          "rating": {
            "rate": 2.9,
          }
  })
  let handleChange =(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);
    let {value,name}=e.target
   
    setnewProducts({
      ...newProducts,
      [name]:
    })
  return (
    <Paper elevation={20} style={paperStyle}>
        <Typography variant='h5' textAlign="center">Create new products</Typography>
        <Grid2 component="form" style={{display:"grid",gap:"20px"}}>
        <TextField value={newProducts.title} name="title" label="title" variant="outlined" 
        fullWidth
        onChange={handleChange}
        />
        <TextField  value={newProducts.price} name="price" label="price" variant="outlined" 
        fullWidth
        onChange={handleChange}
        />
        <TextField  value={newProducts.description}name="description" label="descrption" variant="outlined" 
        fullWidth
        onChange={handleChange}
        />
        <TextField value={newProducts.category} name="category" label="category" variant="outlined" 
        fullWidth
        onChange={handleChange}
        />
        <Grid2 container spacing={2}>
           <Grid2 size={6}>
           <TextField value={newProducts.rating.rate} name="rrating.rate" type="number" label="Rate" variant="outlined" 
           fullWidth
           onChange={handleChange}
           />
           </Grid2>
        </Grid2>
        <Button variant="outlined">Outlined</Button>
        </Grid2>
    </Paper>
  )
}

export default NewProducts;
<a></a>