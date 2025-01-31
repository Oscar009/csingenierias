'use client';
import { CustomDivider } from "@/app/components/CustomDivider/CustomDivider";
import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/img/logo_negro.jpeg";
import AnimatedText from "@/app/components/Animated/AnimatedText";
import CustomEmblaCarousel from "@/app/components/Carousel/CustomCarusel";
import { coverPhotos } from "./photos/cover";

const HomePage = () => {
  return (
    <Grid2 container size={{ xs: 12 }} spacing={2} >
      <CustomEmblaCarousel
        photos={coverPhotos}
        adjustSize={true}
      />
      <Grid2 size={{ xs: 12, sm: 12, md: 6 }} sx={{ paddingInline: 5, paddingBlock: 3 }}>
        <AnimatedText direction="right">
          <Typography variant="h5" fontFamily={'Bebas Neue'}>Bienvenida</Typography>
        </AnimatedText>
        <CustomDivider />
        <AnimatedText direction="right">
          <Typography fontFamily={'unset'}>
            {"Nos complace ofrecerle una amplia gama de propiedades exclusivas y servicios personalizados para satisfacer todas sus necesidades inmobiliarias. Nuestra misión es ayudarle a encontrar la casa de sus sueños o la inversión perfecta, con el respaldo de nuestro equipo de expertos comprometidos con la excelencia y la transparencia. Descubra cómo podemos hacer realidad sus aspiraciones inmobiliarias."}
          </Typography>
        </AnimatedText>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src={logo}
          alt="Logo"
          style={{
            width: '300px',
            height: 'auto',
            maxHeight: '200px'
          }}
        />
      </Grid2>
    </Grid2>
  )
}

export default HomePage;
