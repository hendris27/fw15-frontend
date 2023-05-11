import FooterSection from '../components/FooterSection'
import HeaderHome from '../components/HeaderHome'
function CreateWishlist() {
	return (
		<div className="h-screen">
			<nav className="headers">
				<HeaderHome />
			</nav>
			<main className="flex justify-center bg-[#DAE5D0]"></main>
			<div className="footers">
				<FooterSection />
			</div>
		</div>
	)
}
export default CreateWishlist
