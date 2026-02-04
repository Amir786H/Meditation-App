import { ImageSourcePropType } from "react-native";

interface Session {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType | undefined;
}

export const sessions: Session[] = [
    {
        id: 1,
        title: "Forest Path",
        description: "Mindful walking through nature",
        image: require("@/assets/sessions/forest-path.avif"),
    },
    {
        id: 2,
        title: "Mountain View",
        description: "Grounding mountain meditation practice",
        image: require("@/assets/sessions/mountain-view.avif"),
    },
    {
        id: 3,
        title: "Ocean Waves",
        description: "Calming waves meditation session",
        image: require("@/assets/sessions/ocean-waves.avif"),
    },
    {
        id: 4,
        title: "Sunrise Sky",
        description: "Morning minfulness practice",
        image: require("@/assets/sessions/sunrise-sky.avif"),
    },
    {
        id: 5,
        title: "Zen Stones",
        description: "Focused balance meditation",
        image: require("@/assets/sessions/zen-stones.avif"),
    }
];