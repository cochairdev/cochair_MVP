import { useState } from "react";
import { Box, Paper, Typography, MobileStepper } from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Image {
    label: string;
    imgPath: string;
}

interface Props {
    images: Image[];
}

export const Carousel = ({ images }: Props) => {

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;


    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 , display: 'flex', justifyContent:'center', alignItems:'center',  flexDirection: 'column'}}>
            <AutoPlaySwipeableViews
                axis={'x-reverse'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <Box key={step.label} sx={{ display: 'flex', justifyContent:'center', alignItems:'center',  flexDirection: 'column'}}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 288,
                                    display: 'block',
                                    maxWidth: 288,
                                    overflow: 'hidden',
                                    width: '100%',
                                    borderRadius: '50%'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </Box>
                ))}

            </AutoPlaySwipeableViews>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    bgcolor: 'transparent',
                }}
            >
                <Typography  variant="poster">{images[activeStep].label}</Typography>
            </Paper>
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep} 
                sx={{ 
                    paddingTop:10,
                    backgroundColor:'transparent'
                }}/>
        </Box>
    )
}
