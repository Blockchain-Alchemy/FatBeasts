import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fFJHtbGqcaWW2c2Nmp4MzF",  // ID of a project you are using
      token: "MrjHUD1aR5jl1qhjx7HddKvslYy5zVtfK9MSyMyVYs3o1uayxceFWmfuEGtiD8DIeckJMbPkI7t57kAskXrw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})