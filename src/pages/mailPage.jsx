import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  TextField,
} from "@mui/material";
import { useState } from "react";


const mails = [
  {
    id: 1,
    name: "Rasha",
    subject:
      "The end of the year is upon us. As you relax and reflect on the past year, take a moment to catch up on",
    date: "11/12/2022 12:24 AM",
  },
  {
    id: 2,
    name: "Rasha",
    subject:
      "The end of the year is upon us. As you relax and reflect on the past year, take a moment to catch up on",
    date: "11/12/2022 12:24 AM",
  },
  {
    id: 3,
    name: "Rasha",
    subject:
      "The end of the year is upon us. As you relax and reflect on the past year, take a moment to catch up on",
    date: "11/12/2022 12:24 AM",
  },
];

export default function MailPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]); 

  const handleCheckboxChange = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNameClick = (id) => {
    navigate(`/maildetials/${id}`); // navigate to a detailed page for that email
  };

  return (
    <Box sx={{
       
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          
          
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Dashboard
      </Typography>
     <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Welcome to #1 ticket management platform in Egypt.
      </Typography>
        </Box>
        
      <Button variant="contained" 
      sx={{  bgcolor: "#00A099", 
        fontSize: "16px",   
    padding: "10px 20px",
       }}
       onClick={() => navigate("/newmail")}>
          New Email
        </Button>
      </Box>

    <Box sx={{
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    bgcolor: "white",       
    border: "1px solid #E0E0E0",
    flexDirection: "column",  
     p: 2,
    borderRadius: "8px",
    }}>
      {/* the email section  */}
      <Box 
      sx={{ 
        display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
        }}>
           <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Email
      </Typography>
  

<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
  
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>
      From
    </Typography>
    <TextField
      type="date"
      defaultValue="2022-01-01"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "9px",
          fontSize: "0.8rem",
          height: "20px",
        },
        
      }}
    />
  </Box>
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>
      To
    </Typography>
    <TextField
      type="date"
      size="small"
      defaultValue="2022-11-23"
      sx={{
    
        "& .MuiOutlinedInput-root": {
          borderRadius: "9px",
          fontSize: "0.8rem",
          height: "20px",
        },
        
    
      }}
    />
  </Box>
</Box>

        
      </Box>
      <Box
      sx={{ 
        display:"flex",
      flexDirection:"row",
    
      bgcolor: "#F1EEEE",
      borderTopLeftRadius: "10px",   
    borderTopRightRadius: "10px",
      padding:"10px 30px"
        }}>
        <Box sx={{ flex: 1 }}>
           <Typography variant="h6"  sx={{color:"#818181" ,fontSize:"14px" , paddingLeft:"22px"}}>
        Name
      </Typography>
    
      </Box>
      <Box sx={{ flex: 8}}>
        <Typography variant="h6"  sx={{color:"#818181" ,fontSize:"14px", paddingLeft:"10px"}}>
        Subject
      </Typography>
      </Box>
      
<Typography variant="h6" sx={{color:"#818181" ,fontSize:"14px"}}>
        Date/Time
      </Typography>



      </Box>

     <Table>
          <TableBody>
            {mails.map((mail) => {
              const isChecked = selected.includes(mail.id);
              return (
                <TableRow key={mail.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(mail.id)}
                      sx={{
                        color: isChecked ? "red" : undefined,
                        "&.Mui-checked": {
                          color: "red", // Makes the checkbox red when checked
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#6E6B7B",
                      cursor: "pointer",
                      "&:hover": { color: "blue" }, // Optional hover effect
                    }}
                    onClick={() => handleNameClick(mail.id)}
                  >
                    {mail.name}
                  </TableCell>
                  <TableCell sx={{ color: "#6E6B7B" }}>{mail.subject}</TableCell>
                  <TableCell sx={{ color: "#6E6B7B", whiteSpace: "pre-line" }}>
                    {mail.date.split(" ")[0]} <br />
                    {mail.date.split(" ").slice(1).join(" ")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
   
      </Box>
    </Box>
  );
}

          