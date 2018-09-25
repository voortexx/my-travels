import React from "react";
import Travel from "./Travel";
// src/travel.js
const travel = [
    {
        destination:"Gerardmer",
        country:"France",
        distance:"278km",
        image:"https://lh3.googleusercontent.com/QOM_6rf0f8bQ1xb4wYpZSrlMrccABJLfxlJkiHSLeMQGcZQ7cKIqmpFKmabXLJJU6jkECZZ5-Y7a8FCBYIo6uvC7PH9OXqR6nAM2426dDCcoXKI3rT_7SpUf9xS8CbptYFdS6FI5xOkGPLUgJwJONFnS97w8x_3pnFpnixrrH9_J_Z9CMN4Unb0vn3LhZ4tp7-Mpfn3PMszmlVXqujxy3m3R2x0H_LXqlDoFDN266l03zFAIHwaAXjocvYQQCLsKV0949b3zFA2D09nbUAHP-cESKrFBNK-pyHzjRi8fMIl12yyXePf3tBQPk7Ihc_JL8PKd4Sm7tV78HlkIOZkzaQ3wPTf4eAgSgTo70GcxlhxxkHqyLgRBHefJEETwnWWpn_nF63X98y-goC7Y97AEUb1JeRhBCN6R3FZZ8XDXlrR78LXuFbJGOnPCNkTd_4BdSzKdrBhEhi48nkwNMuX2HP7tQRwG8PvNb9iVrx0ncXQWpaHFnpUWs5VoG8vRjAaD9N9dpaHJWBrm2qin0JdbC_LAA02EJqaTesQ7g-09okONMR-ETyPNVSjv-YtJr9xS0WaM5T5tgMmiLiw8Bl1I7LszNH_cj4nCRRJpOXdMVOczfBtf57xudmaQRRr2lNY=w1431-h950-no"

    },
    {
        destination:"Dublin",
        country:"Ireland",
        distance:"959km",
        image:"https://lh3.googleusercontent.com/c-I8h9iFCbvF8KCIIEzcav2iT5Brvaq-MY4BtSV_Ixx57ZmjwAiK0wEf3JKfUHNOZd83MKNYQvnRjayVqXb3W2e3bngtaB-jvlSKrlrBa9w8ewpdTliCyjxWrS3RiOgPuIsK-ty0K6-1cfEFGZmZfoeXp191JeL3AkpyAtuj5QdVGly8EkWftmQBCUTXRyYoms-G551ehnSzOyvBH5skf9U_cLAi9kuih_fbBbvg9Bi5hmAqGD_cFKxHQXX2nw_eTVjBh7lzBKLiTio4-DsMSgMysIeW9m0_kq7kLjNXaSJinF6FAc-S6krTFyurtU3mVcG1LLAe5aR_l8J3YrS8y89SBw8NzXsyU3818itLq3o4wifqq9FqfsYRNCg-XPNT3JSGSYXvun8VaDQTYmhb-B9zE8qof96PrRBA25M0esyWVLVnZ6FXpR_HKoWPXohkI8g3x_BPvjypoojJFq4XmA4kUA1LxnPnb29gg0vv5AcqbLpXlGCa_mYUZuS7pWZ7Q9PgWM9HO0K3LEneHkZtO3LWZscf3VjPMEi8MIouI3uzzetmJWcmTa2I23tuOp-osMdS0bRgP45pSxgXiHixiQQFeZSefhvFSqpFcqYzJ5-Yf64ypMj3pUWAY5aHkXHO=w713-h950-no"
    },
    {
        destination:"Provins",
        country:"France",
        distance:"200km",
        image:"https://lh3.googleusercontent.com/mctsNXkyGx0jITIJZEZB-VXHr56aYPMUR9GIMmgFr3Uz32YzMrE_aKGue-Hdk24E8905CkkJs69DTq42jBkuJR8YJy5tI05pb3p8nSExtLuAKANe82jjIpJvTY0hu6Q5-KScRweQ1iD8MsTidNBGcg0PXM_M4lT6y3em8DPUpd2jrddV7WtG3wZJdXvafAz0liQj70cNSqSmD0k6AZDLIDelSzT4dzBhKNZXNn9q1KOx3c36n3iNhVgwaeXDIQfnd-hOXjQmGU3dwALYvjznLQkbLWq6OuQJ98cskDmMAXwN44C-RRxsrM4OgK2DzmLKwfyCu18HQyviWpktwOBla1UTd8hLosSZ0aoKktiKyTRAr0G0fD-CHpllNUBf4Gy-ZF06eqabmMQfXslV3U2g-4vYEgXELZ84J8xLnjAFb9RrwW649M7lXG5s718gZOUFj42QwjBGSjtN6d3ib1vS2fUhKC7UQturyDqUh-sL1a6ErtTadrdrgWTNr3_G72Z96-kCSXdHVH_0_10EJwMKnsXhlJy2D1S-nP_KfoCa883gOeVOmD3YYljdSQ0otQiF1VjNCoZEVv41LfPsjP57qCZDyMHXN_l3WSwLE7S6cTdce3SF-imKwTknoCqSUA4=w1689-h950-no"
    },
    {
        destination:"Boulogne /s Mer",
        country:"France",
        distance:"350km",
        image:"https://lh3.googleusercontent.com/73mD1hokKwy7e3ezbeZQipehre0f_dvpHljmvP9YyzixYbUYnl9wjQnCy6rrdPXyZklej0OcE9sBFKYGmx8BM4n3ThQc8fEp16wT0ZXy3wWnnXomN7A9amvILVBCCy-Z8NOhEXmoqTuXxdsbrgRZ4tBUeRuFTpBrW917ki4QGq2o6hrjAEvdblutCRlGDEoIYi_RAKpJrr_-9v4xVp9Q_GJA6IeYANdZKaQ6vJD-Uo2AfAtE5zCa64HpcJv-5w1rrd9UZmWHH1_a9JU3e4Npmcqwz5Ea1Q8Bd8gU7nZxB_rMJqWpih_iJrc2qmB55nkDgilXBgNTG6B5FPPOXPAvBNyQ2p3QLZEe2xmIJgM_8PgcS3COZtfcN_Y3YpgWYuck6c8kw_dmOCLnG7_My9vg-jULiclrqk6q3MRy4IuwdfrDqUY8TwmVvyDvtvGLsMdy7TrggRZZ2XkbrVQwmsVJzRm9gaBwW8drDbUP_RG2Ik7Zq2RYuiPH7jzN7x0UHR7FhPVo75HPUFJPU3eOpq1_hXA5pIf4iV27P42SmqO4viFPWzmib8fTGVS9wfAU_XBoHFY1NvZu0AbfV7DJghPlY_L9Ov2dp3X67Q9tpXAiWM4lo0-eL1rTHNbYGLgrQCY=w1689-h950-no"
    },
    {
        destination:"Talmont",
        country:"France",
        distance:"600km",
        image:"https://lh3.googleusercontent.com/JHQxcerahfc6o6-Y5H65p_XVR27hjEZptPx4ih2_TlsYW4sq9z48PAPvNk6KACm1uoPNw4BdCzmb37FPlMK7ldeQVZonKDto0MAKCMotUaAOFoMmJ1xioc4xQcx_pjfz-It7zscBJrxFPvrfT8sESFA5NHuM7Fcm8qsuuYSRX_XcZg9SK_bINV4X7LUsDrQz1kVKq9eIpTG12Jj6VCBcln0Ckuy8lmc-lPFso2pMDSo67fIgXaOZ0APVTr_ImuT1EpWH6ZcyOvvPdQEmrE2aCThcLLyPhSuCocrIftaV5tSBwzzJqGUgJsKeu-m_SkhYJ_I9k-hHYkbq77JWx8it2F4gsUyXG-BQSaZ3wO-fVY3fRpHM5oO_SDURe0zAEpk-N3p3DgPe1y-cU4bOo1Poa4OuL95s6eXIfV4wrP5LUxTQaxlXQ-2GLReb7OPWBkEo_lAmdg_ZPJXJNChYfL3ndfbM40egb25MsIaFqqzivlfZaVGdhqOKTpOwa5un2lPQtE4UlTiYe21s993VfFuvtcxG22G29puH2mxM1m0YeFUCwQqCnIkBOT2PPWCr-NIY7edSLRWs8C2nIBHOBsLGvC-3p7wr8Vmc33g2KSRsmzApkwFlnEXU6FfZ9UDVXys=w1689-h950-no"
    }
];

const Travels = () => (
    <div>
        {travel.map(travel => (
            <Travel destination={travel.destination} image={travel.image} country={travel.country} distance={travel.distance} />
        ))}
    </div>
);

export default Travels;