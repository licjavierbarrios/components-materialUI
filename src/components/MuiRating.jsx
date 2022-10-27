import { useState } from "react"
import { Rating, Stack } from "@mui/material"
import { Favorite, FavoriteBorder } from "@mui/icons-material"


const MuiRating = () => {
    const [value, setValue] = useState(null)

    const [value1, setValue1] = useState(null)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleChange1 = (event, newValue1) => {
        setValue1(newValue1)
    }
    console.log({value})
    console.log({value1})

  return (
    <>
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} size="large"  />
        </Stack>
        <br />
        <br />
        <br />

        <Stack spacing={2}>
             <Rating 
                value={value1} 
                onChange={handleChange1} 
                precision={0.5} 
                size="large"  
                icon={<Favorite fontSize="inherit" color="error"  />}
                emptyIcon={<FavoriteBorder fontSize="inherit"  />}
                // Seleccionar solo un ícono
                // highlightSelectedOnly

            />
        </Stack>
    </>
  )
}

export default MuiRating