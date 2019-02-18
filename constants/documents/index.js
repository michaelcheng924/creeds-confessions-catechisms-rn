import { keyBy } from "lodash";

import apostlesCreed from "./apostles-creed";
import niceneCreed from "./nicene-creed";
import chalcedonianDefinition from "./chalcedonian-definition";
import athanasianCreed from "./athanasian-creed";
import westminster from "./westminster";
import londonBaptist from "./london-baptist";
import canonsDort from "./canons-of-dort";
import belgicConfession from "./belgic-confession";
import westminsterShorter from "./westminster-shorter";
import westminsterLarger from "./westminster-larger";
import baptistCatechism from "./baptist-catechism";
import heidelbergCatechism from "./heidelberg-catechism";
import catechismBoysGirls from "./boys-girls";

export const creeds = [
  apostlesCreed,
  niceneCreed,
  chalcedonianDefinition,
  athanasianCreed
];

export const confessions = [
  westminster,
  londonBaptist,
  canonsDort,
  belgicConfession
];

export const catechisms = [
  westminsterShorter,
  westminsterLarger,
  baptistCatechism,
  heidelbergCatechism,
  catechismBoysGirls
];

export const documents = [
  {
    title: "Creeds",
    items: creeds
  },
  {
    title: "Confessions",
    items: confessions
  },
  {
    title: "Catechisms",
    items: catechisms
  }
];

export const documentsFlat = [
  ...creeds,
  ...confessions,
  ...catechisms
]

export const mappedDocuments = {
  ...keyBy(creeds, "slug"),
  ...keyBy(confessions, "slug"),
  ...keyBy(catechisms, "slug")
};
