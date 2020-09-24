import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import API from "../../utils/API"
import Players from "../Players/index"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TeamNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [teams, setTeams] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {

        API.getAllTeams()
            .then(res => {
                setTeams(res)
            })

    }, [])


    console.log(teams)
    return (
        <Container maxWidth="lg">
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >

                        <Tab label="Atlanta Hawks" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg"} style={{ width: '70px', height: '70px' }} alt="ATL HAWKS"></img>} {...a11yProps(0)} />

                        <Tab label="Boston Celtics" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"} style={{ width: '70px', height: '70px' }} alt="BOSTON CELTICS"></img>} {...a11yProps(1)} />

                        <Tab label="Brooklyn Nets" icon={<img src={"https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg"} style={{ width: '70px', height: '70px' }} alt="BROOKLYN NETS"></img>} {...a11yProps(2)} />

                        <Tab label="Charlotte Hornets" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg"} style={{ width: '70px', height: '70px' }} alt="CHARLOTTE HORNETS"></img>} {...a11yProps(3)} />

                        <Tab label="Chicago Bulls" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg"} style={{ width: '70px', height: '70px' }} alt="CHICAGO BULLS"></img>} {...a11yProps(4)} />

                        <Tab label="Cleveland Cavaliers" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg"} style={{ width: '70px', height: '70px' }} alt="CLEVELAND CAVALIERS"></img>} {...a11yProps(5)} />

                        <Tab label="Dallas Mavericks" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg"} style={{ width: '70px', height: '70px' }} alt="DALLAS MAVERICKS"></img>} {...a11yProps(6)} />

                        <Tab label="Denver Nuggets" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg"} style={{ width: '70px', height: '70px' }} alt="DENVER NUGGETS"></img>} {...a11yProps(7)} />

                        <Tab label="Detroit Pistons" icon={<img src={"https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg"} style={{ width: '70px', height: '70px' }} alt="DETROIT PISTONS"></img>} {...a11yProps(8)} />

                        <Tab label="Golden State Warriors" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"} style={{ width: '70px', height: '70px' }} alt="DETROIT PISTONS"></img>} {...a11yProps(9)} />

                        <Tab label="Houston Rockets" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg"} style={{ width: '70px', height: '70px' }} alt="HOUSTON ROCKETS"></img>} {...a11yProps(10)} />

                        <Tab label="Indiana Pacers" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg"} style={{ width: '70px', height: '70px' }} alt="INDIANA PACERS"></img>} {...a11yProps(11)} />

                        <Tab label="Los Angeles Clippers" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg"} style={{ width: '70px', height: '70px' }} alt="LOS ANGELES CLIPPERS"></img>} {...a11yProps(12)} />

                        <Tab label="Los Angeles Lakers" icon={<img src={"https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"} style={{ width: '70px', height: '70px' }} alt="LOS ANGELES LAKERS"></img>} {...a11yProps(13)} />

                        <Tab label="Memphis Grizzlies" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg"} style={{ width: '70px', height: '70px' }} alt="MEMPHIS GRIZZLIES"></img>} {...a11yProps(14)} />

                        <Tab label="Miami Heat" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"} style={{ width: '70px', height: '70px' }} alt="MIAMI HEAT"></img>} {...a11yProps(15)} />

                        <Tab label="Milwaukee Bucks" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg"} style={{ width: '70px', height: '70px' }} alt="MILWAUKEE BUCKS"></img>} {...a11yProps(16)} />

                        <Tab label="Minnesota Timberwolves" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg"} style={{ width: '70px', height: '70px' }} alt="MINNESOTA TIMBERWOLVES"></img>} {...a11yProps(17)} />

                        <Tab label="New Orleans Pelicans" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg"} style={{ width: '70px', height: '70px' }} alt="NEW ORLEANS PELICANS"></img>} {...a11yProps(18)} />

                        <Tab label="New York Knicks" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg"} style={{ width: '70px', height: '70px' }} alt="NEW YORK KNICKS"></img>} {...a11yProps(19)} />

                        <Tab label="Oklahoma City Thunder" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg"} style={{ width: '70px', height: '70px' }} alt="OLKAHOMA CITY THUNDER"></img>} {...a11yProps(20)} />

                        <Tab label="Orlando Magic" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg"} style={{ width: '70px', height: '70px' }} alt="ORLANDO MAGIC"></img>} {...a11yProps(21)} />

                        <Tab label="Philidelphia 76ers" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg"} style={{ width: '70px', height: '70px' }} alt="PHILIDELPHIA 76ERS"></img>} {...a11yProps(22)} />

                        <Tab label="Phoenix Suns" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg"} style={{ width: '70px', height: '70px' }} alt="PHOENIX SUNS"></img>} {...a11yProps(23)} />

                        <Tab label="Portland Trailblazers" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg"} style={{ width: '70px', height: '70px' }} alt="PORTLAND TRAILBLAZERS"></img>} {...a11yProps(24)} />

                        <Tab label="Sacramento Kings" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg"} style={{ width: '70px', height: '70px' }} alt="SACRAMENTO KINGS"></img>} {...a11yProps(25)} />

                        <Tab label="San Antonio Spurs" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg"} style={{ width: '70px', height: '70px' }} alt="SAN ANTONIO SPURS"></img>} {...a11yProps(26)} />

                        <Tab label="Toronto Raptors" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg"} style={{ width: '70px', height: '70px' }} alt="TORONTO RAPTORS"></img>} {...a11yProps(27)} />

                        <Tab label="Utah Jazz" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg"} style={{ width: '70px', height: '70px' }} alt="UTAH JAZZ"></img>} {...a11yProps(28)} />

                        <Tab label="Washinton Wizards" icon={<img src={"https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg"} style={{ width: '70px', height: '70px' }}></img>} {...a11yProps(29)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Players team="ATL"></Players>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Players team="BOS"></Players>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Players team="BKN"></Players>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Players team="CHA"></Players>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Players team="CHI"></Players>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Players team="CLE"></Players>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Players team="DAL"></Players>
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <Players team="DEN"></Players>
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <Players team="DET"></Players>
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <Players team="GS"></Players>
                </TabPanel>
                <TabPanel value={value} index={10}>
                    <Players team="HOU"></Players>
                </TabPanel>
                <TabPanel value={value} index={11}>
                    <Players team="IND"></Players>
                </TabPanel>
                <TabPanel value={value} index={12}>
                    <Players team="LAC"></Players>
                </TabPanel>
                <TabPanel value={value} index={13}>
                    <Players team="LAL"></Players>
                </TabPanel>
                <TabPanel value={value} index={14}>
                    <Players team="MEM"></Players>
                </TabPanel>
                <TabPanel value={value} index={15}>
                    <Players team="MIA"></Players>
                </TabPanel>
                <TabPanel value={value} index={16}>
                    <Players team="MIL"></Players>
                </TabPanel>
                <TabPanel value={value} index={17}>
                    <Players team="MIN"></Players>
                </TabPanel>
                <TabPanel value={value} index={18}>
                    <Players team="NO"></Players>
                </TabPanel>
                <TabPanel value={value} index={19}>
                    <Players team="NY"></Players>
                </TabPanel>
                <TabPanel value={value} index={20}>
                    <Players team="OKC"></Players>
                </TabPanel>
                <TabPanel value={value} index={21}>
                    <Players team="ORL"></Players>
                </TabPanel>
                <TabPanel value={value} index={22}>
                    <Players team="PHI"></Players>
                </TabPanel>
                <TabPanel value={value} index={23}>
                    <Players team="PHO"></Players>
                </TabPanel>
                <TabPanel value={value} index={24}>
                    <Players team="POR"></Players>
                </TabPanel>
                <TabPanel value={value} index={25}>
                    <Players team="SAC"></Players>
                </TabPanel>
                <TabPanel value={value} index={26}>
                    <Players team="SA"></Players>
                </TabPanel>
                <TabPanel value={value} index={27}>
                    <Players team="TOR"></Players>
                </TabPanel>
                <TabPanel value={value} index={28}>
                    <Players team="UTA"></Players>
                </TabPanel>
                <TabPanel value={value} index={29}>
                    <Players team="WAS"></Players>
                </TabPanel>
            </div>
        </Container>
    );
}
