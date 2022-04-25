import React from "react";
import { Switch, Route } from "react-router-dom";
import { Patient } from "./CreatePatient";

import { Sidebar } from "./Sidebar";


import { Schedule } from "./ScheduleScreen";
import { Report } from "./ReportScreen";
import { RegisterService } from "./RegisterService";
import { Newagenda } from "./NewAgenda";



export const CalendarScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main className="main">
        <div>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/patient" component={Patient} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/agenda" component={Newagenda} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/service" component={RegisterService} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

// <div className='journal__main-content'>
// <Sidebar/>
// <main>
//  <h1>hellowww</h1>
// </main>
//</div>
//)
