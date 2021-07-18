function redirect(toBaseUrl) {
    // Redirects to toBaseURL+window.location.hash
    hash = window.location.hash;
    toPath = hash.replace("#", "/");
    finalURL = toBaseUrl + toPath;
    // finalURL = finalURL.replaceAll("//", "/");
    // window.location.replace(finalURL);
    window.location.href = finalURL;
    // console.log(finalURL);
}
