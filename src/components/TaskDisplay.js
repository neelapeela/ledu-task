import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StandaloneToggleButton from './StandaloneToggleButton'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

// display all tasks in accordion view
export default function TaskDisplay({taskname, description, setTasks, oldTasks, id}) {
  const deleteTask = () => {
    setTasks(oldTasks.filter((task)=>task.id!==id));
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ><StandaloneToggleButton/>
          <Typography variant='h6'>{taskname}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography noWrap={true}>
            {description}
          </Typography>
          <IconButton onClick={deleteTask} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}