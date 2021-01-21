import {CarTelemetryData, PacketCarTelemetryData} from '../../parsers/packets/types';
import CarTelemetry, {ICarTelemetry} from '../schemas/carTelemetry';


export class CarTelemetryRepository {
  static log(packetCarTelemetryData: PacketCarTelemetryData) {
    CarTelemetryRepository.add(CarTelemetryRepository.createCarTelemetry(
        packetCarTelemetryData.m_carTelemetryData[0]));
  }

  private static add(carTelemetry: ICarTelemetry) {
    console.log(carTelemetry);
    const newCarTelemetry = new CarTelemetry(carTelemetry);
    return newCarTelemetry.save();
  }

  private static createCarTelemetry(carTelemetryData: CarTelemetryData):
      ICarTelemetry {
    const newCarTelemetry: ICarTelemetry = {speed: carTelemetryData.m_speed};
    return newCarTelemetry;
  }
}