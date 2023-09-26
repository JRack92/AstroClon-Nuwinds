// const websiteUrl = "www.google.com";
const websiteUrl = "http://localhost:4321/";

export function WebSite() {
  return websiteUrl;
}

export function GetLang(url: string) {
  const lang = url.split("/");
  // console.log(`GetLang => ${lang} || Count=> ${lang.length}`);
  return lang[1] === "" ? "en" : "es";
}

export function GetLangUrl(url: string) {
  const lang = url.split("/");
  // console.log(`GetLangUrl => ${lang} || Count=> ${lang.length}`);
  return lang[1] === "" ? "./" : "./es";
}
