import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";

import AttachIcon from "../assets/Attach.svg";
import TrashIcon from "../assets/Trash.svg";
import imageIcon from "../assets/rectangle.svg";

export default function NewMail() {
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          New Mail
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Welcome to #1 ticket management platform in Egypt.
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "700px",
          margin: "20px auto",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 5px 0px rgba(254, 255, 254, 1)",
          padding: "2px 19px",
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          label="To:"
          InputProps={{
            sx: {
              fontSize: "14px",
              height: "19px",
              padding: "12px 8px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "12px",
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          label="Cc:"
          InputProps={{
            sx: {
              fontSize: "14px",
              height: "19px",
              padding: "12px 8px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "12px",
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          label="Subject:"
          InputProps={{
            sx: {
              fontSize: "14px",
              height: "19px",
              padding: "12px 8px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "12px",
            },
          }}
        />

        <TextField
          fullWidth
          multiline
          rows={8}
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton>
              <img
                src={AttachIcon}
                alt="Attachfile"
                style={{ width: "35px", height: "35px" }}
              />
            </IconButton>
            <IconButton>
              <img
                src={imageIcon}
                alt="image"
                style={{ width: "20px", height: "30px" }}
              />
            </IconButton>
            <IconButton>
              <img
                src={TrashIcon}
                alt="Trash"
                style={{ width: "35px", height: "35px" }}
              />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#0060FF",
              px: 4,
              borderRadius: "4px",
              textTransform: "none",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
