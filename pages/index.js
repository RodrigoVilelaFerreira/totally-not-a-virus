
function Home(props) {
    
    return(
            <main style={{ 
                backgroundImage:`url('https://www.pcgamesn.com/wp-content/sites/pcgamesn/2020/03/valorant-logo.jpg')`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                height: '100vh',
                fontSize: '100%',
                margin: '0',
                padding: '0'
            }}>
                <style jsx global>{`
                body {
                    margin: 0;
                    height: 100vh; 
                    scroll-behavior: smooth;
                }
                `}</style>

                <div style={{
                    backgroundColor:'rgba(15,23,34,0.85)',
                    color: '#fe4553',
                    width: '100%',
                    height: '60vh',
                    margin: '0',
                    position: 'absolute',
                    top: '20%',
                    textAlign: 'center',
                }}>

                    <p style={{fontSize: '2.5rem',}}>
                        1 palavra, 4 letras, um sentimento, um questionamento...
                    </p>

                    <h1 style={{fontSize: '6rem',}}>
                        Vava?
                    </h1>
                </div>
            </main>
    )
}

export default Home
