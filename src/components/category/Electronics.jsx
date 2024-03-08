import { Container, Box ,Stack,Typography, Link} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Electronics = () => {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center" }}>
      <Box flexGrow={2} className="border" sx={{height: '480px', width:"300px"}}>
         <img src="src\components\images\images.png" alt="clother" />
      </Box>

      <Box sx={{height: '480px'}}>
        <Box className="border" sx={{position:"relative"}}>
          <img src="src\components\images\clother.jpg" alt="clother" />
          <Stack
              sx={{
                position: "absolute",
                top: 0,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
        </Box>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
    </Box>
    <Box sx={{height: '480px'}}>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
    </Box>
    <Box sx={{height: '480px'}}>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
    </Box>
    <Box sx={{height: '480px'}}>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
        <Box className="border">
          <img src="src\components\images\clother.jpg" alt="clother" />
        </Box>
    </Box>
    </Container>
    
  );
};

export default Electronics;
