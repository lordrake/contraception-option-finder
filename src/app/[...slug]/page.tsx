import { notFound } from "next/navigation";
import { LocalizedPage } from "../_components/localized-page";
import {
  resolveUnprefixedRoute,
  routeSlugs,
  slugToSegments
} from "@/lib/i18n/routing";

type UnprefixedRouteProps = {
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

export default async function UnprefixedRoute({ params }: UnprefixedRouteProps) {
  const { slug } = await params;
  const route = resolveUnprefixedRoute(slug);

  if (route.status === "not-found") {
    notFound();
  }

  return <LocalizedPage locale={route.locale} slug={route.slug} />;
}

export const dynamic = "force-static";
export const dynamicParams = false;
