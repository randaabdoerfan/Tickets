import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RightArrow from "../assets/Vector.svg";
import LeftArrow from "../assets/Left.svg";
import TrashIcon from "../assets/Trash.svg";
import UploadIcon from "../assets/upload.svg"


export default function MailDetials() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // If user refreshes the page and state is lost, fetch by ID (optional)
  const mail = state || {
    name: "Unknown",
    subject: "No subject available",
    date: "N/A",
    content: "No content available",
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Welcome to #1 ticket management platform in Egypt.
      </Typography>

      <Box
        sx={{
          bgcolor: "white",
          p: 3,
          borderRadius: "8px",
          border: "1px solid #E0E0E0",
        }}
      >
        <Box 
        sx= {{
            display:"flex",
            justifyContent:"space-between"
        }}
        >
            <Typography variant="subtitle2" sx={{ color: "gray", mb: 1 }}>
          {mail.name} &lt;RASDFDI.ai&gt;
        </Typography>
        <Box>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
          {/* {mail.date} */}
          11/44/
        </Typography>
        <img src={UploadIcon} alt="upload" style={{ width: "10px", height: "14px" }} />
         <img 
  src={TrashIcon} 
  alt="Trash" 
  style={{ width: "20px", height: "20px" ,color:"black" }} 
/>
         <img src={RightArrow} alt="Trash" style={{ width: "10px", height: "14px" }}/>
         
        </Box>
        </Box>

        <Typography variant="body1" sx={{ my: 2 }}>
          {mail.subject}
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 3 }}>
          {mail.content || mail.subject}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
          sx ={{ border:"1px solid #717579",
            padding:"10px  45px  ",
            color:"black",
            fontFamily:"Replay"

          }}
            variant="outlined"
            onClick={() => navigate(-1)}
          >
             <img src={RightArrow} alt="Trash" style={{ padding:"2px ", width: "20px", height: "25px" }}/>
            Reply
          </Button>
          <Button
          sx ={{ border:"1px solid #717579",
            padding:"10px 45px  ",
            color:"black",
            fontFamily:"Replay"

          }}
            variant="outlined"
            onClick={() => navigate(-1)}
          > <img src={LeftArrow} alt="Trash" style={{ padding:"2px ", width: "25px", height: "25px" }}/>
            Forward
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
