import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import MoodBadOutlinedIcon from '@mui/icons-material/MoodBadOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import SportsMmaOutlinedIcon from '@mui/icons-material/SportsMmaOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import AnimationIcon from '@mui/icons-material/Animation';
import {faHatCowboySide,faUserAstronaut,faTv,faHourglassHalf,faMusic, faGun, faSkull,faKhanda}from '@fortawesome/free-solid-svg-icons'



 export const catagories=[
    {
        title:"Popular",
        icon:<TheatersOutlinedIcon  className='icon'/>,
        value:"popular"
    },

    {
        title: "Top Rated",
        icon:<StarBorderOutlinedIcon className='icon'/>,
        value: "top_rated"
     
    },
    {
        title:"Upcoming",
        icon:< UpcomingOutlinedIcon className='icon'/>,
        value:"upcoming"
    }
 ]
 export const genres={
  icon:[
    <SportsMmaOutlinedIcon className='icon' />,<ExploreOutlinedIcon className='icon' />,<AnimationIcon  className='icon'/>,
    <SentimentVerySatisfiedOutlinedIcon className='icon'/>,<FontAwesomeIcon icon={faGun} className='icon' />,
    < VideocamOutlinedIcon className='icon' />,<MoodBadOutlinedIcon className='icon' />,<FamilyRestroomIcon/>,
    < AutoFixHighOutlinedIcon className='icon'/>,<FontAwesomeIcon icon={faHourglassHalf} className='icon'/>,
    <SentimentVeryDissatisfiedOutlinedIcon className='icon'/>, <FontAwesomeIcon icon={faMusic} className='icon'/>,
    <FontAwesomeIcon icon={faHatCowboySide} className='icon'/>,< FavoriteBorderOutlinedIcon className='icon'/>,
    <FontAwesomeIcon icon={faUserAstronaut} className='icon'/>,<FontAwesomeIcon icon={faTv} className='icon'/>,
    <FontAwesomeIcon icon={faSkull} className='icon'/>,<FontAwesomeIcon icon={faKhanda} className='icon'/>,
    <  GroupWorkOutlinedIcon className='icon'/>
  ],
  name:["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History",
         "Horror","Music","Mystery","Romance","Science Fiction","Tv Movie","Thriller","War","Western"]
   
}