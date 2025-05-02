import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:'rdd3i0fc',
    dataset: 'production',
    apiVersion: '2023-05-04',
    useCdn: 'true',
    token: 'sk0eO8sS3vhaiFC77uOlhGRqYFvSgvz38zn1ooXPETCibRYib6n2ukmllmm3niwE4WhyjOLfrqN2eajoAy7Q6OLb8SXNWApu11oCs7H2dOXd5PUBIVCo5OqGXdIsnnkqaSXSD76dnYhymrVDN83Lmm4UKW36ja834FiMe6a2FLXYbHy1mzuZ',
    ignoreBrowserTokenWarning: true,
});

 
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);