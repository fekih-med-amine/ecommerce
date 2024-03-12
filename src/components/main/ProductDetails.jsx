import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src="src\components\images\chemise.jpg"
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Chemise</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          19 $
        </Typography>
        <Typography variant="body1">
          chemise bleu bla bla bla bla bla bla cjnjfnvijnigjn
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              key={1}
              value={0}
              sx={{
                width: "110px",
                height: "110px",
                mx: 1,
                p: "0",
                opacity: selectedImg === 0 ? 1 : 0.5,
              }}
              onClick={() => setSelectedImg(0)}
            >
              <img
                style={{ borderRadius: 3 }}
                height={"100%"}
                width={"100%"}
                src="src\components\images\chemise.jpg"
                alt=""
              />
            </ToggleButton>
            <ToggleButton
              key={2}
              value={1}
              sx={{
                width: "110px",
                height: "110px",
                mx: 1,
                p: "0",
                opacity: selectedImg === 1 ? 1 : 0.5,
              }}
              onClick={() => setSelectedImg(1)}
            >
              <img
                style={{ borderRadius: 3 }}
                height={"100%"}
                width={"100%"}
                src="src\components\images\chemise.jpg"
                alt=""
              />
            </ToggleButton>
            <ToggleButton
              key={3}
              value={2}
              sx={{
                width: "110px",
                height: "110px",
                mx: 1,
                p: "0",
                opacity: selectedImg === 2 ? 1 : 0.5,
              }}
              onClick={() => setSelectedImg(2)}
            >
              <img
                style={{ borderRadius: 3 }}
                height={"100%"}
                width={"100%"}
                src="src\components\images\chemise.jpg"
                alt=""
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
