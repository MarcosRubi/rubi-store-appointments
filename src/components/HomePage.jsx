import StepsButtons from './StepsButtons'
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useThemeStore } from '../store/themeStore'
import { useEffect } from 'react'
import StepsFooter from './StepsFooter';
import { useStepActive } from '../store/useServices';

function HomePage() {
	const { theme } = useThemeStore((state) => state)
	const { stepActive } = useStepActive((state) => state)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [])

	return (
		<section className="steps m-auto">
			<header className="steps__header flex justify-between items-center flex-column ">
				<h1>Reserve su cita</h1>
				<StepsButtons />
			</header>
			<div className="steps__body">
				<Step1 stepActive={stepActive}  />
				<Step2 stepActive={stepActive} />
				<Step3 stepActive={stepActive} />
			</div>
			<StepsFooter />
		</section>
	)
}

export default HomePage