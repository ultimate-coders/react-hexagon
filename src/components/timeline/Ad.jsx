import './Ad.scss';

const Ad = ({ ad }) => {

  const onClick = () => {
    window.open(ad.link);
  }

  return (
    <div className='ad_container'>
      <img onClick={onClick} className='ad_image' src={ad.image} alt={ad.title} />
      <div onClick={onClick} className='ad_title'>{ad.title}</div>
      <div className="ad_text">{ad.text}</div>
    </div>
  );
};

export default Ad;
