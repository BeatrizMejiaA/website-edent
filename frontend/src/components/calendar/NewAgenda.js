import React, {useEffect,useState} from "react";
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";
import { fade, lighten } from "@material-ui/core/styles/colorManipulator";

const theme = createMuiTheme({ typography: {
    useNextVariants: true,
  }, palette: { type: "light", primary: blue } });

const styles = ({ spacing }) => ({
  customCell: {
    verticalAlign: "Top",
    borderBottom: `1px solid ${lighten(fade(theme.palette.divider, 1), 0.88)}`,
    height: spacing(12) + 1
  }
});

const TimeSacaleCell = withStyles(styles, { name: "TimeScaleCell" })(
  ({ classes, endDate, ...restProps }) => {
    const nextEndDate = new Date(endDate);
    nextEndDate.setMinutes(0);
    return (
      <WeekView.TimeScaleCell
        className={classes.customCell}
        endDate={nextEndDate}
        {...restProps}
      />
    );
  }
);

export const Newagenda = () => {

    const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getCalendar2").then((response) => {
      setCalendar(response.data);
    });
  }, []);
  
  

    return (
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={calendar}>
            <ViewState currentDate="2022-05-07" />
            <WeekView
              startDayHour={9}
              endDayHour={19}
              timeScaleCellComponent={TimeSacaleCell}
            />
            <Appointments />
          </Scheduler>
        </Paper>
      </MuiThemeProvider>
    );
  
}


