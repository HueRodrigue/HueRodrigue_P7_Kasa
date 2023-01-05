
function Banner({ image, text }) {
	return <div className='kasa-banner'>
        <img src={image} alt='Banniere Kasa' className='kasa-banner--img' />
	<h1 className='kasa-banner--text' >{text}</h1>
        </div>
}

export default Banner