import React from 'react'
import Style from  '../styles/about.module.css'
import Container from '../components/PageContainer/index';


const about = () => {
    return (
        <>
        <Container style='home'>
            <div className={Style.container}>
                <div className={Style.container__content}>
                    {/* <img src="https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="aqui va la imagen"/> */}
                    <img src="https://source.unsplash.com/random" alt="aqui va la imagen"/>
                    <div className={Style.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit incidunt quasi tenetur corporis! Necessitatibus nobis ut est, enim quasi provident corporis nesciunt voluptatum accusamus veritatis quia, nisi minima porro! Fuga quae aspernatur corporis cumque tenetur voluptates voluptas, enim modi quas quasi pariatur, ad ullam autem laborum incidunt? Molestiae eos incidunt, voluptatum porro animi iure repudiandae nemo nostrum totam iusto perferendis, deserunt, rem corporis!</p>
                    </div>

                </div>
            </div>
		</Container>

        </>
    )
}
export default about
