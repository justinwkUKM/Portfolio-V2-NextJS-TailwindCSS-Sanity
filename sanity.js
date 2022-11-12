
import {createPreviewSubscriptionHook, createCurrentUserHook, createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
    useCdn: process.env.NODE_ENV === 'production',
    // token: '<sanity access token>',
    // EventSource: /* provide your own event source implementation. Required in browsers to support the above token parameter. */
  }

  export const sanityClient = createClient(config)

  export const urlFor = (source) => createImageUrlBuilder(config).image(source)

  // // Set up the live preview subscription hook
  // export const usePreviewSubscription = createPreviewSubscriptionHook(config)
  
  // // Helper function for using the current logged in user account
  // export const useCurrentUser = createCurrentUserHook(config)

  export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })
  
  // Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)
