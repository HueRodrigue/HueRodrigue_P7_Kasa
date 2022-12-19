import banner from '../../assets/banner.png'


function Banner() {
	return <div className='kasa-banner'>
        <img src={banner} alt='Banniere Kasa' className='kasa-banner--img' />
		<h1 className='kasa-banner--text'>Chez vous, partout et ailleurs</h1>
    </div>
}

export default Banner