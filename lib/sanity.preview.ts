"use client";

import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly() {
    throw new Error(`Impossible de charger le mode de prévisualisation car vous n'êtes pas connecté`)
}

if(!projectId || !dataset) {
    throw new Error(
        "Il manque l'id du projet ou le dataset"
    )
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})