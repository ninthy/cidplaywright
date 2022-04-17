import fetch from "node-fetch";

let a = fetch(
  "https://microsoft.gointeract.io/interact/version/2/account/microsoft/interaction/60898ce735877e652665c1ed/L3n0Qk6h/navigation",
  {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      "application-key": "196de13c-e946-4531-98f6-2719ec8405ce",
      "application-version": "7.0.0.4-1",
      browser: "Chrome",
      "browser-version": "98.0.4758.109",
      "cache-control": "no-cache",
      "channel-type": "MOBILE_WEB",
      "content-type": "application/json;charset=UTF-8",
      "device-os": "Android",
      "device-os-version": "6.0",
      "environment-name": "Prod",
      imei: "1642259588185Chrome96.0.4664.110WindowsNT 10.",
      "j-user-id": "7588ed535d00-635d8c58b3b2f0e0-ece9",
      "jma-module-version": "7",
      "jma-version": "7.0.0.39",
      latitude: "",
      locale: "tr-TR",
      longitude: "",
      navigationstarttime: Date.now().toString(),
      "object-instance-id": "L3n0Qk6h",
      "object-step-id":
        "1461173234025-3145f8602eccbe259104553afa8415434b4581-02ee",
      "protocol-version": "5",
      "request-timestamp": Date.now().toString(),
      "run-mode": "FULL",
      "screen-height": "2082.0000310242176",
      "screen-width": "808.0000120401382",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="98", "Opera GX";v="84"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": '"Android"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "security-token": "undefined",
      "space-id": "null",
      "tenant-id": "microsoft",
      "time-stamp": Date.now().toString(),
      "time-zone": "180",
      "user-id": "190979c3-d13e-4ae9-a566-b7f85adaff35",
      "x-requested-with": "XMLHttpRequest",
    },
    referrer:
      "https://microsoft.gointeract.io/interact/index?interaction=1461173234028-3884f8602eccbe259104553afa8415434b4581-05d1&accountId=microsoft&loadFrom=CDN&appkey=196de13c-e946-4531-98f6-2719ec8405ce&Language=English&name=pana&CountryCode=en-US&Click%20To%20Call%20Caller%20Id=+14794592272&startedFromSmsToken=lsz3qQr&dnis=24&token=pMU2Ok",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: '{"navigationType":"NEXT","param":[{"paramName":"1461173234025-3148f8602eccbe259104553afa8415434b4581-02f1","paramValue":"1414353"},{"paramName":"1461173234025-3156f8602eccbe259104553afa8415434b4581-02f9","paramValue":"2668831"},{"paramName":"1461173234025-3153f8602eccbe259104553afa8415434b4581-02f6","paramValue":"4695712"},{"paramName":"1461173234025-3150f8602eccbe259104553afa8415434b4581-02f3","paramValue":"0989406"},{"paramName":"1461173234025-3158f8602eccbe259104553afa8415434b4581-02fb","paramValue":"3613636"},{"paramName":"1461173234025-3157f8602eccbe259104553afa8415434b4581-02fa","paramValue":"9938175"},{"paramName":"1461173234025-3155f8602eccbe259104553afa8415434b4581-02f8","paramValue":"7787742"},{"paramName":"1461173234025-3152f8602eccbe259104553afa8415434b4581-02f5","paramValue":"1922923"},{"paramName":"1461173234025-3151f8602eccbe259104553afa8415434b4581-02f4","paramValue":"7934405"},{"paramName":"1461173234025-3154f8602eccbe259104553afa8415434b4581-02f7","paramValue":"141435326688314695712098940636136369938175778774219229237934405"},{"paramName":"1461173234025-3149f8602eccbe259104553afa8415434b4581-02f2","paramValue":"Submit"}],"variables":{"External Session Id":"L3n0Qk6h","Navigation Current Page":"productKeyForm","Customer ID":"7588ed535d00-635d8c58b3b2f0e0-ece9"}}',
    method: "POST",
    mode: "cors",
    credentials: "omit",
  }
);

console.log(a.then(async (e) => console.log(await e.json())));
