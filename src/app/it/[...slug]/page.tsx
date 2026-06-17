import { notFound } from "next/navigation";
import { LocalizedPage } from "../../_components/localized-page";
import {
  resolvePrefixedRoute,
  routeSlugs,
  slugToSegments
} from "@/lib/i18n/routing";

type PrefixedRouteProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return routeSlugs
    .filter((slug) => slug !== "")
    .map((slug) => ({
      slug: slugToSegments(slug)
    }));
}

export default async function ItalianRoute({ params }: PrefixedRouteProps) {
  const { slug } = await params;
  const route = resolvePrefixedRoute("it", slug);

  if (route.status === "not-found") {
    notFound();
  }

  return <LocalizedPage locale={route.locale} slug={route.slug} />;
}

export const dynamic = "force-static";
export const dynamicParams = false;
