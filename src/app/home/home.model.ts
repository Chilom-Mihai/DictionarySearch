export interface Words {
    word?: string;
    phonetic?: string;
    phonetics: Array<{
        text?: string;
        audio?: string;
        sourceUrl?: string;
        license: {
            name?: string;
            url?: string;
        };
    }>;
    meanings: Array<{
        partOfSpeech?: string;
        definitions: Array<{
            definition?: string;
            antonyms?: string[];
            example?: string;
        }>;
        synonyms?: string[];

    }>;
    license?: {
        name?: string;
        url?: string;
    };
    sourceUrls?: string[];
}