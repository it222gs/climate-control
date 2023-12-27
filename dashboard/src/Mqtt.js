import { useEffect, useState } from "react";
import mqtt from 'mqtt';

function MQTT() {
    //const [msg, setMsg] = useState('');
    const [temperature, setTemperature] = useState('');
    const [co2, setCo2] = useState('');
    const [tvoc, setTvoc] = useState('');

    const [date, setDate] = useState(new Date());
    //const stats = []

    useEffect(() => {
        const client = mqtt.connect('wss://broker.hivemq.com:8000/mqtt')

        client.on('connect', () => {
            console.log('Connected to MQTT Broker'); 

            client.subscribe('klimatkontrollintroducerandeprojekt', () => {
                console.log('Subscribed to topic')
            })
        })

        client.on('message', (topic, message) => {
            const messageStr = message.toString();
            console.log(`Received message: ${messageStr} on topic: ${topic}`);
            //setMsg(messageStr);
            setDate(new Date());
        
            try {
                // json parsing
                const data = JSON.parse(messageStr);
                const { co2, tvoc, temperature } = data;
                setCo2(co2);
                setTemperature(temperature);
                setTvoc(tvoc);

                console.log(`CO2: ${co2}, TVOC: ${tvoc}, Temperature: ${temperature}`);
            } catch (e) {
                console.error("Error parsing JSON", e);
            }


            //stats.push({args: date.toLocaleTimeString() + " " + date.toLocaleDateString(), val: message.toString()})

        })

        return () => {
            if (client.connected) {
                client.end();
            }
        };
    }, []);

    return (
        <div>
            <div className="climate-div">
                <div className="sensors-div"><p>Temperature: {temperature} °C</p></div>
                <div className="sensors-div"><p>CO2: {co2} ppm</p></div>
                <div className="sensors-div"><p>TVOC: {tvoc} ppb</p></div>
                {/* <div>{ (msg > 22) ? <p>Temperature to high!!!</p> : <></>}</div>
                <div>{ (msg < 17) ? <p>Temperature to low!!!</p> : <></>}</div> */}
            </div>
            <div className="date-div">Last checked at: {date.toLocaleTimeString()}, {date.toDateString()}</div>

        </div>
    );
}

export default MQTT;