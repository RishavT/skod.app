function redirect(toBaseUrl, hash) {
    // Redirects to toBaseURL+window.location.hash
    if (!hash) hash = window.location.hash;
    toPath = hash.replace("#", "/");
    finalURL = toBaseUrl + toPath;
    // finalURL = finalURL.replaceAll("//", "/");
    // window.location.replace(finalURL);
    window.location.href = finalURL;
    // console.log(finalURL);
}
