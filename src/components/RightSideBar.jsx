import Ad from './Ad';

const ads = [
    {
        image: 'https://www.luminuseducation.com/wp-content/uploads/2018/04/21586964_1541163115926909_7851285713698993931_o-2048x1024.jpg',
        title: 'Prime Minister Dr. Hani Al Mulqi and Minister of Labor Mr. Ali Al Ghazzawi visited Luminus',
        text: 'Prime Minister Dr. Hani Al Mulqi and Minister of Labor Mr. Ali Al Ghazzawi visited Luminus Education, welcomed by Luminus Education CEO Mr. Ibrahim Safadi.',
        link: 'https://www.luminuseducation.com/index.php/2017/09/17/52343/',
    },
    {
        image: 'https://www.luminuseducation.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-10-at-3.11.22-PM-3354x1677.png',
        title: 'Celebrating the achievements of Jordan’s innovators, entrepreneurs and creative youth.',
        text: 'Innovative Jordan honored CEO and Founder Ibrahim Safadi, as part of its nationwide campaign celebrating the achievements of Jordan’s innovators, entrepreneurs and creative youth.',
        link: 'https://www.luminuseducation.com/index.php/2017/07/25/52381/',
    },
    {
        image: 'https://www.luminuseducation.com/wp-content/uploads/2018/04/IFC-Thumbnail-232x300.png',
        title: 'IFC Case Study',
        text: 'IFC, the largest global development institution, conducted a case study about Luminus Education, highlighting its success story in the world of education, namely in the Middle East.',
        link: 'https://www.luminuseducation.com/wp-content/uploads/2018/04/IFC_Luminus_Case_Study.pdf',
    },
];

const RightSideBar = () => {

    return (
        <div className='Right_side_bar'>
            {
                ads.map(ad => <Ad ad={ad} />)
            }
        </div>
    )
}

export default RightSideBar;