let charactersImagesURL =  [
    "https://images6.alphacoders.com/112/1125041.png",
    "https://wallpapercave.com/wp/wp6404507.jpg",
    "https://wallpaperaccess.com/full/3037903.jpg",
    "https://images.alphacoders.com/118/1186644.png",
    "https://images2.alphacoders.com/120/thumb-1920-1204924.jpg",
    "https://s2.glbimg.com/qlC64g73Q2l7ZDD-sjIZ3Ai5vGw=/0x0:3840x2160/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/X/U/eLCvA7Q26ist3lFctXuw/valorant-sova-dark.jpg",
    "https://gameranx.com/wp-content/uploads/2022/10/960x0-1.jpg",
    "https://s2.glbimg.com/P5J29CRWQvfVyQISruOflTvMuGI=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/4/H/Iv9UVCRUWTauz8E1AZwQ/valorant-reyna-dark.jpg",
    "https://static.gosugamers.net/93/cc/e9/9e04bf959b698a83300210d0ededb4ad3f75b2910a9506add9fa27474a.jpg?w=975&dpr=3",
    "https://noticias.maisesports.com.br/wp-content/uploads/2022/04/Riot-officially-revealed-Fade-new-VALORANT-initiator-800x450.jpeg",
    "https://assetsio.reedpopcdn.com/valorant-kayo-habilidades-1624010417454.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    "https://assetsio.reedpopcdn.com/valorant-agent-raze.jpg?width=880&quality=80&format=jpg&auto=webp",
    "https://s2.glbimg.com/lKD4gpZiNnSlMHo9gK4Jc8LTamc=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/6/B/Do8zTERvCJ9N8CkXCrIw/sage-valorant.jpg",    "https://www.gameshub.com/wp-content/uploads/sites/5/2023/03/Gekko-e1678152830229.png?w=1024",
    "https://prod.assets.earlygamecdn.com/images/cypher-valorant.jpg?x=0.5&y=0.5",
    "https://rare-gallery.com/uploads/posts/344902-Breach-Valorant-Video-Game.jpg",
]


let randomCharacterImage = charactersImagesURL[betweenRandom(0,charactersImagesURL.length)]

function Home() {
    
    return(
            <main style={{ 
                backgroundImage:`url(${randomCharacterImage})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                height: '100vh',
                fontSize: '100%',
                margin: '0',

                padding: '3%'
            }}>
                <style jsx global>{`
                body {
                    background: rgb(15,23,34);
                    padding: 2%
                }
                `}</style>

                <div style={{
                    backgroundColor:'rgba(15,23,34,0.85)',
                    color: '#fe4553',
                    width: '100%',
                    margin: '0',
                    position: 'absolute',
                    padding: '2%',
                    left: '-2%',
                    top: '30%',
                    textAlign: 'center',
                }}>

                    <p style={{fontSize: '2.5rem',}}>
                        1 palavra, 4 letras, um sentimento, um questionamento...
                    </p>

                    <h1 style={{fontSize: '5rem',}}>
                        Vava?
                    </h1>
                </div>
            </main>
    )
}

function betweenRandom(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

export default Home
