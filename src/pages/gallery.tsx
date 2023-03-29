import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import fifth_ave from '../images/east_coast/fifth_ave.jpg'
import bay_sf_overview from '../images/cali/bay_sf_overview.jpg'
import mn_voyagers_0 from '../images/mid_west/mn_voyagers_0.jpg'
import bryce_2 from '../images/mid_west/bryce_2.jpg'

const images = [
    {
        url: bryce_2,
        title: 'National Parks',
        width: '100%',
        href: '/#/gallery/national_parks'
    },
    {
        url: fifth_ave,
        title: 'East Coast',
        width: '100%',
        href: '/#/gallery/east_coast'
    },
    {
        url: bay_sf_overview,
        title: 'California',
        width: '100%',
        href: '/#/gallery/cali'
    },
    {
        url: mn_voyagers_0,
        title: 'Mid-West',
        width: '100%',
        href: '/#/gallery/mid_west'
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
        opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
        opacity: 0,
        },
        '& .MuiTypography-root': {
        border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

function Gallery(){
    return(
        <div>
            <h1>Gallery</h1>
            <h3>Showing some pictures I took here..</h3>
            <Box sx={{alignItems: 'center', display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', gap: 2 }}>
            {images.map((image) => (
                
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <a href={image.href}>
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </a>
                </ImageButton>
               
            ))}
            </Box>
        </div>
    )
}

export default Gallery;