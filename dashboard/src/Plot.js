// import mqtt from 'mqtt';
// import { useEffect, useState } from "react";
// import Chart, {
//     ArgumentAxis,
//     Label,
//     Legend,
//     Series,
//   } from 'devextreme-react/chart';

// function Plot() {

//     const exampleData = [{
//         arg: 1960,
//         val: 3032019978,
//       }, {
//         arg: 1970,
//         val: 3683676306,
//       }, {
//         arg: 1980,
//         val: 4434021975,
//       }, {
//         arg: 1990,
//         val: 5281340078,
//       }, {
//         arg: 2000,
//         val: 6115108363,
//       }, {
//         arg: 2010,
//         val: 6922947261,
//       }, {
//         arg: 2020,
//         val: 7795000000,
//       }];

//     const [msg, setMsg] = useState('');
//     const stats = []
//     useEffect(() => {
//         const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt')

//         client.on('connect', () => {
//             console.log('Connected to MQTT Broker'); 

//             client.subscribe('IntroducerandeProjekt', () => {
//                 console.log('Subscribed to topic')
//             })
//         })

//         client.on('message', (topic, message) => {
//             console.log(`Received message: ${message.toString()} on topic: ${topic}`)
//             setMsg(message.toString())
//             stats.push(message.toString());

//         })

//         return () => {
//             if (client.connected) {
//                 client.end();
//             }
//         };
//     }, []);

//     return (<div>      <Chart
//     title="Statistics"
//     dataSource={exampleData}
//     id="chart"
//   >

//     <ArgumentAxis tickInterval={10}>
//       <Label format="decimal" />
//     </ArgumentAxis>

//     <Series
//       type="bar"
//     />

//     <Legend
//       visible={false}
//     />

//   </Chart></div>)

// }

// export default Plot;