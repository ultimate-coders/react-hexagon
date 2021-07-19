import './Ad.scss';

const Ad = ({ ad }) => {

  return (
    <div className='ad_container'>
      <img className='ad_image' src={ad.image} alt={ad.title} />
      <div className='ad_title'>{ad.title}</div>
      <div className="ad_text">{ad.text}</div>
    </div>
  );
};

export default Ad;
