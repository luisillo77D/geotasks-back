import {z} from 'zod';

export const createSampleSchema = z.object({
    title: z.string({
        required_error:"Title is required"
    }),
    texture: z.string({
        required_error:"Texture is required"
    }),
    description: z.string({
        required_error:"Description must be a string"
    }).optional(),
    date: z.string().datetime().optional(),
})