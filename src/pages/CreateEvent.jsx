import FooterSection from '../components/FooterSection'
import HeaderHome from '../components/HeaderHome'
function CreateEvent() {
	return (
		<div className="h-screen">
			<div>
				<HeaderHome />
			</div>
			<main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10"></main>
			<div className="footers">
				<FooterSection />
			</div>
		</div>
	)
}
export default CreateEvent
