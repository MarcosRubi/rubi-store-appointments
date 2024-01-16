import { useSelectedServices, useStepActive } from "../store/useServices"

const IconArrow = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
}
const IconPlus = ()=>{
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
}
function StepsFooter() {
    const { stepActive, setStepActive } = useStepActive((state) => state)
    const { selectedServices } = useSelectedServices(state => state)


    const handleOnClick = (option) => {
        if (selectedServices.length <= 0) {
            alert('Seleccione al menos un servicio')
            return
        }
        if((stepActive + option) > 4 || (stepActive + option) < 1){
            return
        }
        setStepActive(stepActive + option)
    }

    return (
        <footer className={`steps__footer flex items-center ${stepActive === 1 ? 'justify-end' : 'justify-between'}`}>
            {
                stepActive > 1
                && <button className="btn btn-secondary flex items-center prev" onClick={() => { handleOnClick(-1) }}>
                    <IconArrow />
                    <span>Atrás</span>
                </button>
            }
            
            {
                stepActive === 4
                ? <button className="btn btn-primary flex items-center prev" onClick={() => { handleOnClick(-1) }}>
                    <span>Agendar cita</span>
                    <IconPlus />
                </button>
                : <button className="btn btn-primary flex items-center next" onClick={() => { handleOnClick(+1) }}>
                <span>Siguiente</span>
                <IconArrow />
            </button>
            }

        </footer>
    )
}

export default StepsFooter