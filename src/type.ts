export interface ExtinctSpecies {
  binomialName: string;
  commonName: string;
  location: string;
  wikiLink: string;
  lastRecord: string;
  imageSrc: string | boolean;
  shortDesc: string;
}

export interface ExtinctSpeciesResponse {
  status: "success" | "error";
  data: ExtinctSpecies[];
}
