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
            Acc
        </Accordion>
        </Box>
  )
}
