/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"x83z7c4c","dataset":"dev","useCdn":false}
          );

globalThis.sanityClient = sanityClient;
