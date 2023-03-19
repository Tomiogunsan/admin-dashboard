import {Box, useTheme, Typography} from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {tokens} from '../../theme';



export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero consequuntur facere, nesciunt autem sunt quam a fugiat! Aliquid ipsa
                     quis ullam tempora velit nihil eos nemo qui at? Sit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero consequuntur facere, nesciunt autem sunt quam a fugiat! Aliquid ipsa
                     quis ullam tempora velit nihil eos nemo qui at? Sit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero consequuntur facere, nesciunt autem sunt quam a fugiat! Aliquid ipsa
                     quis ullam tempora velit nihil eos nemo qui at? Sit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero consequuntur facere, nesciunt autem sunt quam a fugiat! Aliquid ipsa
                     quis ullam tempora velit nihil eos nemo qui at? Sit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Your favourite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero consequuntur facere, nesciunt autem sunt quam a fugiat! Aliquid ipsa
                     quis ullam tempora velit nihil eos nemo qui at? Sit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Final question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero consequuntur facere, nesciunt autem sunt quam a fugiat! Aliquid ipsa
                     quis ullam tempora velit nihil eos nemo qui at? Sit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        </Box>
  )
}
