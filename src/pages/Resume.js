import './Resume.css';
import BackButton from '../components/BackButton';
import SocialButtons from '../components/social-buttons/SocialButtons';
import { useMyContext } from '../DataContext.js';

function Resume(){

    const {globalData} = useMyContext();

    console.log(globalData['Temporary']);

    return(
        <div id="resume-container">
            <div id='overview' style={{padding: '5%'}}>

                <div style={{align:'top-left', width:'10%', height:'10%'}}><BackButton/></div>

                <div >
                    <img className='presentation-image' style={{borderRadius: '100%', 'backgroundColor':'#ffffff'}}
                    src={require(`../media-sources/${globalData["Temporary"]}/${globalData["Temporary"]}PNG.png`)}/>
                    <h1>{globalData["Temporary"]}</h1>
                    <h1>About Me</h1>
                    <p className='text-info'>{globalData[globalData["Temporary"]]["resume"]}</p>
                </div>

                <div >
                    <SocialButtons colorButtons={'White'} name={globalData['Temporary']}/>
                </div>
            </div>

            <div id='details' style={{padding: '1%'}}>
                <div className='details-container'>
                    <h1>PERSONAL EXPERIENCE</h1>
                    <p className='text-info' style={{fontSize:'xx-large'}} dangerouslySetInnerHTML={{__html: globalData[globalData["Temporary"]]["experience"]}}></p>
                </div>

                <div  className='details-container'>
                    <h1>EDUCATION</h1>
                    <p className='text-info' style={{fontSize:'xx-large'}} dangerouslySetInnerHTML={{__html: globalData[globalData["Temporary"]]["education"]}}></p>
                    <h1>SKILLS</h1>
                    <p className='text-info' style={{fontSize:'xx-large'}} dangerouslySetInnerHTML={{__html: globalData[globalData["Temporary"]]["skills"]}}></p>
                    <h1>LANGUAGES</h1>
                    <p className='text-info' style={{fontSize:'xx-large'}} dangerouslySetInnerHTML={{__html: globalData[globalData["Temporary"]]["languages"]}}></p>
                </div>
            </div>
        </div>
    )
};

export default Resume;