import React, { useEffect, useState } from 'react'
import Input from './Input'
import Select from 'react-select'
import { selectStyles, selectStylesMob } from '../utils/selectStyles'
import { MdArrowForward } from 'react-icons/md'
import { countries } from 'countries-list';
import { EMPA_SCANNER } from '../APis'
import TypingEffect from './TypingEffect'
import { Rings } from 'react-loader-spinner'


const industruSectiors = [
  { value: 'Agriculture', label: 'Agriculture'},
  { value: 'Automotive', label: 'Automotive'},
  { value: 'Banking & Finance', label: 'Banking & Finance'},
  { value: 'Construction', label: 'Construction'},
  { value: 'Education', label: 'Education'},
  { value: 'Energy', label: 'Energy'},
  { value: 'Entertainment', label: 'Entertainment'},
  { value: 'Food & Beverage', label: 'Food & Beverage'},
  { value: 'Healthcare', label: 'Healthcare'},
  { value: 'Information Technology', label: 'Information Technology'},
  { value: 'Manufacturing', label: 'Manufacturing'},
  { value: 'Mining', label: 'Mining'},
  { value: 'Pharmaceuticals', label: 'Pharmaceuticals'},
  { value: 'Real Estate', label: 'Real Estate'},
  { value: 'Retail', label: 'Retail'},
  { value: 'Telecommunications', label: 'Telecommunications'},
  { value: 'Transportation', label: 'Transportation'},
  { value: 'Travel & Hospitality', label: 'Travel & Hospitality'},
]


const projectSizes = [
  { value: 'Small', label: 'Small (less than $1M)' },
  { value: 'Medium', label: 'Medium ($1M - $10M)' },
  { value: 'Large', label: 'Large (over $10M)' }
];

const sustainabilityGoals = [
  { value: 'CarbonReduction', label: 'Carbon Reduction' },
  { value: 'WaterConservation', label: 'Water Conservation' },
  { value: 'WasteReduction', label: 'Waste Reduction' },
  { value: 'RenewableEnergyUsage', label: 'Renewable Energy Usage' },
  { value: 'ReduceCarbonEmissions', label: 'Reduce Carbon Emissions' },
  { value: 'ReduceOtherGHGEmissions', label: 'Reduce Other GHG Emissions' },
  { value: 'ProduceRenewableEnergy', label: 'Produce Renewable Energy' },
  { value: 'ProduceSustainableMaterials', label: 'Produce Sustainable Materials' }
];

const projectImpactAreas = [
  { value: 'LocalCommunity', label: 'Local Community' },
  { value: 'Regional', label: 'Regional' },
  { value: 'National', label: 'National' },
  { value: 'Global', label: 'Global' }
];

const energySources = [
  { value: 'FossilFuels', label: 'Fossil Fuels' },
  { value: 'Solar', label: 'Solar' },
  { value: 'Wind', label: 'Wind' },
  { value: 'Hydroelectric', label: 'Hydroelectric' },
  { value: 'Biomass', label: 'Biomass' },
  { value: 'Geothermal', label: 'Geothermal' },
  { value: 'None', label: 'None' }
];


const countryNames = Object.values(countries).map(country => country.name);



function EMPAScannerTool({ app }) {
  let allCountries = []
  for (let i = 0; i < countryNames.length; i++) {
    allCountries.push({
        value: countryNames[i],
        label: countryNames[i]
      })
    
  }

  const [industry_sector, setIndustruSectiors] = useState(industruSectiors[0])
  const [project_size, setProjectSize] = useState(projectSizes[0])
  const [sustainability_goals, setSustainabilityGoal] = useState(sustainabilityGoals[0])
  const [project_impact_area, setPprojectImpactArea] = useState(projectImpactAreas[0])
  const [current_energy_sources, setEenergySource] = useState(energySources[0])
  const [country, setCountry] = useState(allCountries[0]);

  const [environmental_certification_interest, setEnvironmental_certification_interest] = useState()
  const [stakeholder_engagement, setStakeholder_engagement] = useState()
  const [biodiversity_contributions, setBiodiversity_contributions] = useState()
  const [carbon_footprint_assessment, setCarbon_footprint_assessment] = useState()
  const [involvement_in_carbon_markets, setInvolvement_in_carbon_markets] = useState()
  const [risk_management_strategies, setRisk_management_strategies] = useState()

  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [organization, setOrganization] = useState(false)
  
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(null)

  const onSubmit =async (e) => {
    e.preventDefault()
    setData(null)
    setLoading(true)

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 200);
    try {

      let body = {
        industry_sector: [industry_sector.value],
        project_size: project_size.value,
        sustainability_goals: [sustainability_goals.value],
        project_impact_area: project_impact_area.value,
        current_energy_sources: [current_energy_sources.value],
        country: country.value,
        environmental_certification_interest,
        stakeholder_engagement,
        biodiversity_contributions,
        carbon_footprint_assessment,
        involvement_in_carbon_markets,
        risk_management_strategies,
        name,
        email,
        organization
      }
      
      const data = await EMPA_SCANNER(body);
      let x = [data.potential, data.explanation]
      setData(x)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }


  return (
    <form onSubmit={onSubmit} className='flex flex-col justify-start items-start w-full gap-4 relative sm:gap-3'>
       <span className='flex flex-col gap-2 w-full animate opacity-0 relative z-[50]'>
          <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm '>Industry Sector</label>
          <Select defaultValue={industry_sector} styles={window.innerWidth< 768? selectStylesMob: selectStyles} options={industruSectiors} setIndustruSectiors={(o)=>setIndustruSectiors(o)} components={{ IndicatorSeparator: () => null }}/>
        </span>
        <span className='flex flex-col gap-2 w-full animate opacity-0 relative z-[48]'>
          <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>Project Size</label>
          <Select defaultValue={project_size} styles={window.innerWidth< 768? selectStylesMob: selectStyles} options={projectSizes} onChange={(o)=>setProjectSize(o)} components={{ IndicatorSeparator: () => null }}/>
        </span>
        <span className='flex flex-col gap-2 w-full animate opacity-0 relative z-[45]'>
          <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>Sustainability Goals</label>
          <Select defaultValue={sustainability_goals} styles={window.innerWidth< 768? selectStylesMob: selectStyles} options={sustainabilityGoals} onChange={(o)=>setSustainabilityGoal(o)} components={{ IndicatorSeparator: () => null }}/>
        </span>
        <span className='flex flex-col gap-2 w-full animate opacity-0 relative z-[43]'>
          <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>Project Impact Area</label>
          <Select defaultValue={project_impact_area} styles={window.innerWidth< 768? selectStylesMob: selectStyles} options={projectImpactAreas} onChange={(o)=>setPprojectImpactArea(o)} components={{ IndicatorSeparator: () => null }}/>
        </span>
        <span className='flex flex-col gap-2 w-full animate opacity-0 relative z-[41]'>
          <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>Country</label>
          <Select defaultValue={country} styles={window.innerWidth< 768? selectStylesMob: selectStyles} options={allCountries} onChange={(o)=>setCountry(o)} components={{ IndicatorSeparator: () => null }}/>
   
        </span>

        <Radio label='Interested in Environmental Certifications?' updateValue={setEnvironmental_certification_interest}/>
        
        <span className='flex flex-col gap-2 w-full animate opacity-0 relative z-[39]'>
          <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>Current Energy Sources</label>
          <Select defaultValue={current_energy_sources} styles={window.innerWidth< 768? selectStylesMob: selectStyles} options={energySources} onChange={(o)=>setEenergySource(o)} components={{ IndicatorSeparator: () => null }}/>
        </span>
        <Radio label='Stakeholder Engagement?' updateValue={setStakeholder_engagement}/>
        <Radio label='Biodiversity Contributions?' updateValue={setBiodiversity_contributions}/>
        <Radio label='Carbon Footprint Assessment?' updateValue={setCarbon_footprint_assessment}/>
        <Radio label='Involvement in Carbon Markets?' updateValue={setInvolvement_in_carbon_markets}/>
        <Radio label='Risk Management Strategies?' updateValue={setRisk_management_strategies}/>
        <div className='animate opacity-0 w-full'>
          <Input label='Name' required={true} type='text' placeholder='Enter Name' readOnly={false} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='animate opacity-0 w-full'>
          <Input label='Email' required={true} type='email' placeholder='Enter Email Address' readOnly={false} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='animate opacity-0 w-full'>
          <Input label='Organization' required={true} type='text' placeholder='Enter Organization Name' readOnly={false} onChange={(e) => setOrganization(e.target.value)}/>
        </div>


        <button disabled={loading} className='disabled:cursor-wait disabled:opacity-70 my-3 rounded-md opacity-0 animate px-5 py-1.5 font-Satoshi flex gap-1 items-center hover:opacity-80 font-medium text-sm pb-2 bg-green-200 text-white cursor-pointer transition-all ease-in duration-150 border-[1px] border-grey'>
          Submit
          <MdArrowForward className='text-lg'/>
        </button>

        {loading && <div className='flex justify-start items-center gap-2 mb-5'>
        <span className=' w-[35px] h-[35px] rounded-md bg-[#DDD2F9] p-[1px]'>
            <img src={app.img} className='w-full h-full object-cover' alt={app.name}/>
          </span>
                <Rings
                    visible={true}
                    height="40"
                    width="40"
                    color="#8AC825"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>}

        {data &&
        <div className='flex justify-start items-start gap-4 mb-10'>
          <span className=' w-[35px] h-[35px] rounded-md bg-[#DDD2F9] p-[1px]'>
            <img src={app.img} className='w-full h-full object-cover' alt={app.name}/>
          </span>
          <div className='flex flex-col gap-1 w-[95%]'>
            {data.map((d, index) => (
              <TypingEffect text={d} key={index}/>
            ))}
          </div>
        </div>   }
    </form>
  )
}

export default EMPAScannerTool


const Radio = ({ label, updateValue }) => {
  const name = label.substr(0, 15).replace(/\s/g, '-').toLowerCase()
  const [state, setState] = useState(true)
  const handleChange = (x) => {
    setState(x);
  };

  useEffect(()=>{
    updateValue(state)
  }, [state])

  return (
    <div className='flex flex-col gap-2 w-full animate opacity-0 relative z-[20]'>
       <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>{label}</label>
       <span className='flex justify-start items-center gap-2'>
          <input type='radio' name={name} value='YES' checked={state === true} onChange={()=> handleChange(true)}/>
          <label className='font-Satoshi font-bold text-base text-black-50 sm:text-sm'>YES</label>
       </span>
       <span className='flex justify-start items-center gap-2'>
          <input type='radio' name={name } value='NO' checked={state === false} onChange={()=> handleChange(false)}/>
          <label className='font-Satoshi font-bold text-base text-black-50 sm:text-sm'>NO</label>
       </span>
    </div>
  )
}