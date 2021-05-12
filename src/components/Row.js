import { useRef } from "react";
import { createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import RecipeReviewCard from "./Card";
import { v4 } from "uuid";
import Zoom from '@material-ui/core/Zoom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const useStyles = makeStyles(theme => {
    return {
        root: {
            // marginBottom: '-30px',
            marginBottom: '40px',
            position: 'relative',
        },
        heading: {
            marginLeft: '25px',
        },
        row: {
            display: 'flex',
            overflowX: 'scroll',
            padding: '30px',
            scrollBehavior: 'smooth',
            // overflowY: 'hidden',
            '&::-webkit-scrollbar': {
                display: 'none',
                // width: 0, 
                // background: 'transparent',
            },
        },
        leftbtn: {
            position: 'absolute',
            left: 0,
            top:'72px',
            color: 'white',
            height: '82%',
            width: '4%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // fontSize: '10px',
            '&:hover': {
                background: 'rgba(207, 207, 207, 0.5)',
            },
            [theme.breakpoints.down('xs')]: {
                display:'none',
            }
        },
        rightbtn: {
            position: 'absolute',
            right: 15,
            top: '72px',
            color: 'white',
            height: '82%',
            width: '4%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // fontSize: '10px',
            '&:hover': {
                background: 'rgba(207, 207, 207, 0.5)',
            },
            [theme.breakpoints.down('xs')]: {
                display:'none',
            }
        },
    };
});

const Row = ({ title, items }) => {

    const classes = useStyles();

    const container = useRef(null);

    const scroll = (scrollOffset) => {
        container.current.scrollLeft += scrollOffset;
    };
      

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.heading}>
                { title }
            </Typography>
            <div className={clsx(classes.row,'item-row')} ref={container} >
                { 
                    items.slice(Math.random()*5).map((item,index) => (
                        <Zoom>
                            <RecipeReviewCard key={v4()} title={item.title} content={item.content} img={item.img} type={item.type} className="card" />
                        </Zoom>
                    )) 
                }
                {/* <RecipeReviewCard /> */}
            </div>
            <div className={clsx(classes.leftbtn,'icon-btn')} onClick={e => scroll(-690)} >
                <ChevronLeftIcon fontSize="large" />
            </div>
            <div className={clsx(classes.rightbtn,'icon-btn')} onClick={e => scroll(690)} >
                <ChevronRightIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Row
