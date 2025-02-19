function trackVisit() {
    let visits = parseInt(getCookie("visitCount")) || 0;
    visits++;

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 7);
    document.cookie = `visitCount=${visits};expires=${expiryDate.toUTCString()};path=/`;
  
    return visits;
  }
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  }
  console.log(`Visit count: ${trackVisit()}`);

function setThemePreference(theme) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    document.cookie = `usertheme=${theme};expires=${expiryDate.toUTCString()};path=/`;
}

function getThemePreference() {
    const cookies = document.cookie.split(";");
    const themeCookie = cookies.find(cookie => cookie.trim().startsWith("usertheme="));
    return themeCookie ? themeCookie.split("=")[1] : "light"; 
}

setThemePreference("dark");
console.log(getThemePreference());