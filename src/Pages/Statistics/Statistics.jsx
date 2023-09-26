
import { PieChart, Pie, Cell } from 'recharts';




const Statistics = () => {
  const total = 12;
const donateCard = JSON.parse(localStorage.getItem("donate"));

const totalDonation = donateCard.length;
const totalDonationParcent = ( totalDonation / total) *100;
const remain = 100 - totalDonationParcent;
const data = [
  {name:'total', value:remain },
  {name:'totalDonation', value: totalDonationParcent }
 
]
const colors = ['#FF444A','#00C49F'] ;

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} className='font-bold' fill="white " textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

  return (
  
    <div className='flex space-y-8 p-5 flex-col my-10 justify-center mx-auto items-center '>
         
    
    <PieChart  width={400} height={500}>
  <Pie  data={data} cx="50%" cy="50%" outerRadius={150} labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            
             >
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
  </Pie>
</PieChart>
<div className='flex gap-5 '>
  <div>
    <p className='font-medium '>Your Donation<button className=' ml-2 w-[100px] h-[12px] border-2 bg-[#00C49F] rounded'></button></p>
  </div>
  <div>
    <p className='font-medium'>Total Donation<button className=' ml-2 w-[100px] h-[12px] border-2 bg-[#FF444A] rounded'></button></p>
  </div>
  
</div>
    </div>
  );
};

export default Statistics;