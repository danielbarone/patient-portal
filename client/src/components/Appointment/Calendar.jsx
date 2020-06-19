import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
    DayView,
    AppointmentForm,
    AppointmentTooltip,
    DateNavigator,
    Toolbar
} from '@devexpress/dx-react-scheduler-material-ui';
import * as scheduleActions from "../../services/Schedule/actions"
import { useStyles } from "./Appointment.styles"
function mapStateToProps(state) {
    return {
        currentView: state.scheduleReducer.currentView,
        contactId: state.loginReducer.contactId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch),
    };
}

const appointments = [
    {
        title: 'Website Re-Design Plan',
        startDate: new Date(2020, 5, 19, 9, 30),
        endDate: new Date(2020, 5, 19, 11, 30),
    }, {
        title: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2020, 6, 23, 12, 0),
        endDate: new Date(2020, 6, 23, 13, 0),
    }
]

const CalendarView = (props) => {
    const [viewName, setViewName] = React.useState("Month");
    const classes = useStyles(props);

    const viewChange = (e, index) => {
        const { actions } = props;
        setViewName(index);
        actions.switchView(index);
    };


    return (
        <Paper>
            <RadioGroup
                aria-label="Views"
                className={classes.radio}
                name="views"
                value={viewName}
                onChange={viewChange}
            >
                <FormControlLabel value="Month" control={<Radio />} label="Month" />
                <FormControlLabel value="Week" control={<Radio />} label="Week" />
                <FormControlLabel value="Day" control={<Radio />} label="Day" />
            </RadioGroup>
            <Scheduler
                data={appointments}>
                <ViewState currentViewName={viewName} />
                <MonthView />
                <WeekView
                    startDayHour={10}
                    endDayHour={19}
                />
                <DayView />
                <Appointments />
                <AppointmentTooltip
                    showOpenButton
                    showCloseButton
                />
                <Toolbar/>
                <DateNavigator />
                <AppointmentForm readonly />
            </Scheduler>
        </Paper>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);