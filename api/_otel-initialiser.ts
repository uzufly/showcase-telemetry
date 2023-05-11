import { trace, context } from '@opentelemetry/api';
import { registerOTel } from '@vercel/otel';

registerOTel('showcase-imagery-layers');

export const tracer = trace.getTracer('showcase-imagery-layers');
export { context };
