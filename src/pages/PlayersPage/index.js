import React, { Fragment } from 'react';

import Navbar from "../../components/Navbar/index"
import Players from "../../components/Players/index"

export default function PlayersPage() {
    return (
      <Fragment>
      <Navbar></Navbar>
      <Players></Players>
      </Fragment>
    );
  }