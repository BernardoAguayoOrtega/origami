import Head from 'next/head';
import Container from '../components/PageContainer/index';
import Carousel from '../components/Carousel/index';
import { useState } from 'react';
import Modal from '../components/Modal';

function HomePage() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<>
			<Modal description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci lacus, varius a rhoncus ut, posuere ac turpis. Pellentesque et lorem ut dui bibendum rutrum. In eu dui consequat, iaculis sapien non, ultricies diam. Vivamus non metus mattis, venenatis velit mattis, egestas augue. Donec vitae viverra sapien. Nullam sagittis, lectus a hendrerit ullamcorper, purus ipsum volutpat neque, id suscipit magna lacus et leo. Etiam accumsan, elit et accumsan tincidunt, mauris dui pulvinar nisl, sit amet egestas lorem magna nec metus.

Mauris dapibus, odio vel gravida dapibus, arcu felis ultrices tortor, at gravida ex eros quis felis. Suspendisse semper purus sit amet leo interdum imperdiet. Nulla at massa rutrum tellus hendrerit rutrum. Quisque et odio porta, malesuada risus ac, placerat felis. Nullam ut sollicitudin lectus. Etiam euismod tellus vel ex dapibus, et bibendum sem molestie. Praesent scelerisque et mi quis egestas. Curabitur lacinia felis neque, eget placerat lacus gravida sit amet. Donec accumsan tellus in eros ullamcorper bibendum.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ornare condimentum quam ac ullamcorper. Nunc nec cursus velit, vitae pellentesque risus. Sed dapibus sed lacus a fringilla. Phasellus non tempus libero, non dignissim velit. Vivamus euismod metus sit amet est suscipit bibendum. Nam maximus ex elementum risus egestas pretium. Nam scelerisque commodo diam, vel tempus dolor suscipit vitae. Ut rhoncus odio convallis ex auctor, at malesuada mauris varius. Vivamus sed efficitur nunc.

Aliquam tempus odio eget urna auctor finibus. Ut iaculis eu quam molestie fermentum. Nulla et purus non sem pellentesque tempus auctor eget est. Phasellus vehicula bibendum placerat. Nam id semper tortor. Duis a fringilla sem. Suspendisse nec dapibus nibh, non vehicula eros. Pellentesque ut turpis elit.

Mauris porttitor malesuada lectus, id congue ipsum sagittis at. Sed vitae efficitur dui. Cras consequat tellus odio, at luctus odio blandit eu. Vivamus faucibus sem eu quam convallis iaculis nec ac elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ante lacus, gravida id neque eu, hendrerit condimentum nisl. Pellentesque eget mi est. Integer neque ex, interdum sed aliquam at, interdum sit amet elit. Nulla facilisi.' title='some title, amazing title' image='https://images.unsplash.com/photo-1552727408-5d0599032dfb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60' open={open} setOpen={setOpen} />
			<Head>
				<title>Welcome</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Container style='home' setOpen={setOpen}>
				<div className='title'>
					<h1>Origami, "Ori" means folding and</h1>
					<h1>"Gami" means paper.</h1>
				</div>
				<Carousel onClick={handleOpen}/>
			</Container>
			<style jsx>{`
				.title {
					margin-left: 3rem;
					margin-top: 3rem;
				}

				h1 {
					color: rgba(0, 0, 0, 0.7);
					font-weight: 700;
				}
			`}</style>
		</>
	);
}

export default HomePage;
