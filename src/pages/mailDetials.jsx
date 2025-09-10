import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import RightArrow from "../assets/Vector.svg";
import LeftArrow from "../assets/Left.svg";
import TrashIcon from "../assets/Trash.svg";
import UploadIcon from "../assets/upload.svg";

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
      {/* Header */}
      <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Welcome to #1 ticket management platform in Egypt.
      </Typography>

      {/* Mail Container */}
      <Box
        sx={{
          bgcolor: "white",
          p: 3,
          borderRadius: "8px",
          border: "1px solid #E0E0E0",
        }}
      >
        {/* Top Row (Name + Date + Icons) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            {mail.name} &lt;RASDFDI.ai&gt;
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {mail.date}
            </Typography>
            <img src={UploadIcon} alt="upload" style={{ width: "12px", height: "14px" }} />
            <img src={TrashIcon} alt="trash" style={{ width: "18px", height: "18px" }} />
            <img src={RightArrow} alt="next" style={{ width: "10px", height: "14px" }} />
          </Box>
        </Box>

        {/* Subject */}
        <Typography variant="body1" >
          {mail.subject}
        </Typography>

        {/* Content */}
        <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 3 }}>
          {mail.content || mail.subject}
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<img src={RightArrow} alt="reply" style={{ width: "18px", height: "18px" }} />}
            sx={{
              border: "1px solid #717579",
              px: 5,
              color: "black",
              fontFamily: "Arial",
            }}
            onClick={() => navigate(-1)}
          >
            Reply
          </Button>

          <Button
            variant="outlined"
            startIcon={<img src={LeftArrow} alt="forward" style={{ width: "18px", height: "18px" }} />}
            sx={{
              border: "1px solid #717579",
              px: 5,
              color: "black",
              fontFamily: "Arial",
            }}
            onClick={() => navigate(-1)}
          >
            Forward
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
