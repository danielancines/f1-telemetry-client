import {model, Schema} from 'mongoose';

const carTelemetrySchema = new Schema(
    {
      speed: {type: Number, required: true}

    },
    {collection: 'carTelemetries'});

export default model('CarTelemetry', carTelemetrySchema);
export interface ICarTelemetry {
  speed: number;
}