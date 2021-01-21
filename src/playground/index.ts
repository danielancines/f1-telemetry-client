import {constants, F1TelemetryClient} from '..';
import {connection} from '../data/dbConnection';
import {CarTelemetryRepository} from '../data/repositories/CarTelemetryRepository';
import {ICarTelemetry} from '../data/schemas/carTelemetry';
import {PacketCarTelemetryData} from '../parsers/packets/types';

const {PACKETS} = constants;

const client = new F1TelemetryClient({port: 20777, bigintEnabled: true});
const carTelemetry = new CarTelemetryRepository();

function test(msg: any) {
  console.log(msg.m_carTelemetryData[0]);
}

// client.on(PACKETS.event, console.log);
// client.on(PACKETS.motion, console.log);
// client.on(PACKETS.carSetups, console.log);
// client.on(PACKETS.lapData, console.log);
// client.on(PACKETS.session, console.log);
// client.on(PACKETS.participants, console.log);
client.on(PACKETS.carTelemetry, CarTelemetryRepository.log);
// client.on(PACKETS.carStatus, console.log);
// client.on(PACKETS.finalClassification, console.log);
// client.on(PACKETS.lobbyInfo, console.log);

client.start();
connection();

// stops the client
[`exit`,
 `SIGINT`,
 `SIGUSR1`,
 `SIGUSR2`,
 `uncaughtException`,
 `SIGTERM`,
].forEach((eventType) => {
  (process as NodeJS.EventEmitter).on(eventType, () => client.stop());
});
