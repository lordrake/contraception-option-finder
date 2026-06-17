import type { Locale } from "./locales";
import type { RouteSlug } from "./routing";

type RouteCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export const routeCopy: Record<Locale, Record<RouteSlug, RouteCopy>> = {
  en: {
    "": {
      eyebrow: "Foundation",
      title: "Contraception Option Finder",
      description:
        "This Next.js foundation is ready for the upcoming content, component, block, accessibility, and Storybook implementation tasks."
    },
    about: {
      eyebrow: "Shared slug",
      title: "About this foundation",
      description:
        "This placeholder confirms that English routes stay unprefixed while slugs remain shared across locales."
    },
    example: {
      eyebrow: "Shared slug",
      title: "Example route",
      description:
        "This placeholder confirms custom locale routing before the structured content layer is added."
    }
  },
  it: {
    "": {
      eyebrow: "Fondazione",
      title: "Contraception Option Finder",
      description:
        "Questa base Next.js e pronta per i prossimi task su contenuti, componenti, blocchi, accessibilita e Storybook."
    },
    about: {
      eyebrow: "Slug condiviso",
      title: "Informazioni su questa base",
      description:
        "Questo segnaposto conferma che le rotte italiane usano il prefisso /it mentre gli slug restano condivisi."
    },
    example: {
      eyebrow: "Slug condiviso",
      title: "Rotta di esempio",
      description:
        "Questo segnaposto conferma il routing locale personalizzato prima dell'aggiunta del livello dei contenuti strutturati."
    }
  }
};
