import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        color: "black",
        fontFamily: "Playfair Display",
        fontSize: "20px",
        fontWeight: "600",
      }
    }
  }
})

const images = [
  { uri: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0', name:'a'},
  { uri: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0', name:'b'},
  { uri: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0', name:'c'},
  { uri: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e', name:'d'},
  { uri: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e', name:'e'},
  { uri: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e', name:'f'},
];

function IGTaggedPhotos() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        @akar__studios
      </Typography>

      <ImageList 
        sx={{
          height: 250,
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr)) !important",
          gridAutoColumns: "minmax(250px, 1fr)",
          '&::-webkit-scrollbar': {display: "none"},
        }}
      >
        {images.map((image) => 
        <ImageListItem
          sx={{
            width: 250,
          }}
          key={image.name}
        >
          <img src={image.uri} alt={image.name} />
        </ImageListItem>
        )}
      </ImageList>
    </ThemeProvider>
  )
}

export default IGTaggedPhotos;