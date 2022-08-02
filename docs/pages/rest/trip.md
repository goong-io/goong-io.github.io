---
title: Trip
id: trip
description: Round trip beetween locations
contentType: API
order: 2
layout: page
hideFeedback: true
products:
- Documentation
prependJs:
- "import Copyable from '../../components/copyable';"
---
Trip service solves the Traveling Salesman Problem using farthest-insertion algorithm

`URL: /trip`

`Method: GET`

| Param         | Description                                                                                                            | Example                                 |
|---------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| `origin`      | (Optional) Starting coordinate                                                                                         | `21.03931,105.83997`                    |
| `waypoints`   | (Optional) Waypoint coordinates, Split by `;` for more than 2 waypoints                                                | `16.13901,107.33317;16.13867,107.33330` |
| `destination` | (Optional) Destination coordinate                                                                                      | `21.01343,105.79855`                    |
| `vehicle`     | Vehicle type. Options are `car`, `bike`, `taxi`, `truck`, `hd` (for ride hailing vehicles) Optional, defaults to `car` | `car`                                   |

- If `origin` | `destination` is not specified, 1 best coordinate from `waypoints` will be selected as `origin` | `destination`  
- `origin`, `waypoints`, `destination` are all optionals, but total coordinates must be at least 10 for best trip
- Trip are round trip (route return to `origin`), so `origin` and `destination` must be different  

Example request

{{
    <Copyable lang="javascript">
      {`$ curl "https://rsapi.goong.io/trip?origin=21.03931,105.83997&waypoints=21.03303694945164,%20105.79131815992706;21.017654632470325,%20105.80350611785252;21.00755912449365,%20105.81105921853873;20.99834437409386,%20105.79148982130629;21.00507520431542,%20105.78814242441126;21.0191769116844,%20105.78822825510088;21.026948305457093,%20105.79466555682208;21.012767209964053,%20105.80256198026676;21.020619056604428,%20105.78925822337628;21.01028337649572,%20105.7894298847555&destination=21.01343,105.79855&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}

Example response

`application/json`

{{
    <Copyable lang="javascript">{`
{
  "code": "Ok",
  "trips": [
    {
      "distance": 29360.3,
      "duration": 9207.8,
      "geometry": "wfl_Coz~dS{CUEb@jF^~ALzLz@tBPzM\`AbAFbJp@w@jH]hDnCVFFHDh@FRDFBbBbArCdB\`Aj@h@\|A|@hAt@JDnAb@p@Tb@NnAb@rAd@\`@NfA^NDb@PlDjAnDpALDLDdAd@VJVHHDNDLF|@\VHVJdA^PFNF\NdBl@dA^j@Rj@Rd@PnC\`Ar@^N\H\`@D\`@AZEVMPY^m@hAyAbDUd@Sb@IR_@x@ADYj@GPcB|DOd@\`@RD@lAf@pAj@dAb@\`A\`@xAl@jAd@fAd@hF~B\T^f@B^@dA?~EBn@HZRZ^\`@z@v@bBzA|CnCdA~@d@\`@ZVjBfBp@j@fA|@z@t@fAz@bEvCdAt@bAt@f@^PL\`@\
@p@t@z@b@h@\`@h@JXH^c@t@MVYl@EFq@tAZNpAiCJJ\`@\d@\`@HHJHXVTRFD^\NLTTTPNNNLHF??NJ|@p@JDDBARCDc@\`@g@l@_@d@IJHK^e@f@m@b@a@BE@SECKE}@q@OK??IGOMOOUQUUOM_@]GEUSYWKImErIqBxDKGq@g@MISOYSW\`@y@pAmAnBaBlCuCvEgExGQX_@d@g@l@w@z@}A\`BML{@~@a@b@u@|@UVuBbB[T_@VOJkAv@aAh@Ya@X\`@k@ZiAf@cA\`@kCdAk@TkChAMFUJWJcBx@sAp@q@^k@^s@l@mAnA}@fAa@f@OP{AhBsA~AKJYRULYJe@Hc@BOA[Ce@Gq@Mk@O{@[kAg@UMOZUl@M^M\`@EN}@|BCHYdAWd@MTCHKRGJMVIPUd@GJS^CFKRl@Zh@Vd@Vn@No@Oe@Wi@Wm@[JSBGR_@FKTe@HQLWFKJSBILUVe@XeABI|@}BDOLa@L_@Tm@N[q@_@_Ak@cBoAq@}@m@m@cGoFQO_A_A]]_@[]nAI\OT[f@CDINSXiAtA}@\`Ai@h@OPg@j@WXu@v@w@z@gCfCaBfBs@t@Ub@Uj@EPK\Oj@e@xBu@hDwAnGGTI\`@VHj@ZFD\`Ah@zBvA\`Al@|AfAs@lAjAr@CLUzAbANS~ArARzB\pARtCh@jC\`@fBX\`C\vAJjA?PEt@WZSxAuApEmFtAwAJG|CGRCZGpAnBjBnCl@|@PXn@bAZf@bA~ApAtB|C~EXU|DoCz@o@wBcEvBbEh@x@d@r@xAeAdAs@l@\`Ab@r@n@fAxAeA|AiArA_Ad@_@rEkDvEcD~@s@nEgDbFyDtCtEnAhBnAjB|@zAJNz@vA@JDPJPl@|@VSvH{FpAcAHEFGbE}Cb@]\`AIj@@d@Fb@Rd@Z|@rANT~CdFBFBFaAb@OJ^n@dA\`BPFBH{BfByCzBeBoCaBiCKOqBaDk@}@}AaCbE}Cb@]\ObBw@vC{BpAwAZ[h@e@BCNMTQ~AkAXULKx@o@bAu@BAl@e@zA|BtClEjAdB~@tAhBvCdA\`BeAaBiBwC_AuAkAeBuCmE{A}BfDgC\`CgBVQi@aAmJfHiAz@e@\}ErD]XQ@c@Ai@IaAS{Aa@WK_@QYW[_@gAaBq@cAeA_BKIOEKQq@iAS[cA{AkAcBqAoBe@q@_AuAuAuBwAoBe@m@m@q@Y]g@i@w@}@g@k@Y]UUOQa@c@_EsEf@[g@ZW[oAuAY]gBuBaAiAaAgAIAQDIHARJJ|BfCfBrBZ^DDHvAVjEF~@@XBZADALEZo@~Be@xEd@yEn@_CD[@M@EC[AYG_AWkEl@W~AfBn@t@bCnCb@f@PP\`@a@Y]UUOQa@c@_EsEW[oAuAY]q@YeH_I{AcBgCyC{A{A[Yo@c@}@q@_@Q}@c@wBcA_CkAq@[y@_@{@c@_@S{As@yAu@}BiAw@a@kB}@WMWM}EaC{Aw@yAw@EC{Ao@_Ac@YIoDq@WGmCg@oASSE{@SSEeBUy@MyAUc@IICaAQ_@IaAUiBa@fAmGN_ALiADU^sAVw@Aa@WqD[kEg@yGYsDQiCMwAMuAEk@Gs@IeAM_BIy@KuAKiAEa@Em@M_BGq@q@eGe@yDKw@Iq@Ea@AMAG?c@@K@SHq@NmAFc@DWNaA\`@uBD[TmAJc@DUDW@CDQ?CH_@F[@GLm@Je@Lo@??FUDSF]Nq@XyAVoAp@qDVqALo@?ABQt@wDd@aCHe@TcALq@KKSGcBQuC[mIs@{AKyMaAuBO{L}@aBMmAI",
      "legs": [
        {
          "distance": 5933.8,
          "duration": 1224.4,
          "steps": [],
          "summary": "",
          "weight": 1224.4
        },
        {
          "distance": 1885.3,
          "duration": 408.7,
          "steps": [],
          "summary": "",
          "weight": 408.7
        },
        {
          "distance": 1658.9,
          "duration": 431.6,
          "steps": [],
          "summary": "",
          "weight": 431.6
        },
        {
          "distance": 2469,
          "duration": 661.5,
          "steps": [],
          "summary": "",
          "weight": 661.5
        },
        {
          "distance": 2075.6,
          "duration": 504,
          "steps": [],
          "summary": "",
          "weight": 504
        },
        {
          "distance": 256.1,
          "duration": 107.1,
          "steps": [],
          "summary": "",
          "weight": 107.1
        },
        {
          "distance": 1376.9,
          "duration": 305.6,
          "steps": [],
          "summary": "",
          "weight": 305.6
        },
        {
          "distance": 1403.7,
          "duration": 1771.6,
          "steps": [],
          "summary": "",
          "weight": 1771.6
        },
        {
          "distance": 1550.2,
          "duration": 1750.1,
          "steps": [],
          "summary": "",
          "weight": 1750.1
        },
        {
          "distance": 2670.3,
          "duration": 509,
          "steps": [],
          "summary": "",
          "weight": 509
        },
        {
          "distance": 999.7,
          "duration": 238.9,
          "steps": [],
          "summary": "",
          "weight": 238.9
        },
        {
          "distance": 7080.8,
          "duration": 1295.3,
          "steps": [],
          "summary": "",
          "weight": 1295.3
        }
      ],
      "weight": 9207.8,
      "weight_name": "routability"
    }
  ],
  "waypoints": [
    {
      "distance": 5.136911,
      "location": [
        21.039316,
        105.839921
      ],
      "place_id": "Qeza2NKABQXYxSPKnN1jWej8f9qZunsn4_BW8Jy7USDaw1DBg4N_J9rCN_yBuEEj9NIJwKyAImJR_fec5KlVIVj9VIObhmtM7-433Kzf9ELsVTvnmarbWuzDO_SAgUFk6sMV24OpVVzv_jPwmYFJXe3CO-a7r0FZjsM77N-AVV3A7VTfr5dFYu-aFeCYhiNi9_4365irSUTvwzvSrYFFYdrgL-CcuX9D75kz-Jq7SVPb7C_mmN5RXuPtNMsM",
      "trips_index": 0,
      "waypoint_index": 0
    },
    {
      "distance": 2.754927,
      "location": [
        21.033061,
        105.791325
      ],
      "place_id": "pl1MiIkisHbi5wfAlY5fLeaRGNSeiWpM6uTl6_2wKlieDPb059dYTOf1aPiSsS4v5MwQwonUUC7V5bLjpTpYKv3P1-mis0xL5uc-1aXWXEvS5TLukKNIU-XKMv2JiEht48oc0oqHXFXm9zqgkPlAVOTLMu-m1khQ5coyyYmJXFTR5F3Wpp5Ma-aTHOmRjypr_vc-4pGiQE3myjLbpHaIVaNPpJumVTHZK5pA68ZOyQFrS5SbvkddYV-rkPcI",
      "trips_index": 0,
      "waypoint_index": 4
    },
    {
      "distance": 22.416487,
      "location": [
        21.017809,
        105.803366
      ],
      "place_id": "bZTXSeOUyuD7lFWPk7RobvjPJ8ynjCpR7Mkr-o-3XXLi4x3NlaV7d_rgK8iPi4Ir4soQrdJGK01fXcwnRjLnyStFdBfCgm3dO4-I70KDTWU4v4DfrlaZN11bPN12MjU1okM_4GealWVCP8j_8lY1FUeHON-qj001V4M83zIyMWVHU4VjTt6NJbuOWGeybii9u-_I755SnRfhIzzfeoY1J49bsI-yQtXNP45U_9OC3RV_XliPq4NJdUu_hOMc",
      "trips_index": 0,
      "waypoint_index": 2
    },
    {
      "distance": 31.015553,
      "location": [
        21.007758,
        105.811269
      ],
      "place_id": "MtGIptXLVbDkkgTSpZ5MXuf3APSjWC9v_-nW05Iqalf-5F3okLEjRP3kIcKmnkBVy1cxYiZHUT2WV5CL3_YlIbZHlLvKjilBk5uc-1aXWXEvS5f3ukKNIUzLK5f2JiEh248oc0oqgbVzmsjr5kPdAVOSIMu-m1khQ5eUyyYeJXFTK5F2J1p5Ma-aTHOmRjypr_vc-4pGiQE3myjLbpCpMiNPpJumVaHZK5pA68ZOyQFrS5SbvkddYV-rkPcI",
      "trips_index": 0,
      "waypoint_index": 1
    },
    {
      "distance": 134.579692,
      "location": [
        20.999314,
        105.79071
      ],
      "place_id": "v2vfjerMdvj61jvOl61RWf6aFtG7kj5q_5U3z5e-NlvP10TVv64yTOPXBcyJyVEy-TcN35TJTdHIMyf2-uMpFN-DSP_S_rlFW-_ojyLjLQVbP-C_zjb5VTvjXL-CUlVVw_ogBz9e9QUj7lyfkjZVdSfnWL_K7y1VNr9cv1JT4QfmU-UDLu4NJUfuOAfSM4Dd2kuoj_4zjXVD71y_GuZVRdc70O_SIrWtX-40n7I6vXUfP-DtFjMr4SvdF8iA",
      "trips_index": 0,
      "waypoint_index": 9
    },
    {
      "distance": 43.717286,
      "location": [
        21.005389,
        105.787887
      ],
      "place_id": "RS92N5P4xtfjjEDlg5dge_r7EeqMlDZE-usg3ri9XTfg-QX1lL4-Uc-Nmj-P2knQ1-Y3T3oOhYzPP1jP0jYhVd870Gf-Uu1V5-_ojyLjLQVbP-K_zjb5VTvgv1-CUlVVw_tcBz5e9QUj76ifkjZVdSfk3L_K7y1XW-E0v1JSUQUXM-UnLu4NRQPuOAfSMkjd24-oja4y__1D71y9duZVRdc70O_SIrWtX-40n7I6v4Edd-DvyjMrPSvf5IN8",
      "trips_index": 0,
      "waypoint_index": 8
    },
    {
      "distance": 15.681507,
      "location": [
        21.019095,
        105.788105
      ],
      "place_id": "m_6CF6iCgtDswTHagat5b-_iOeGeg1Mj4u4T4oHcfWHZ8iaEmLlyben-JeithGVV7O8T3a-qW3np0DHmuYJhWNniKf_dhUdi7ew13q7dV0DZ7jnlU6hDWO7BjJs5g0Nm6MH22YGrV17t_DHym4NLX-_AOeR93a1b7sE5wkOCV1_a71bdrZVHYO2YF-KahCFg9fw1IZqpS-ntwTlGr4NHY9j2LeKeu31B4u0x-pi5S1HZ7i3KkmtxTXOHvNsk",
      "trips_index": 0,
      "waypoint_index": 6
    },
    {
      "distance": 69.479722,
      "location": [
        21.027187,
        105.795284
      ],
      "place_id": "iM9t50LlUU795TvmlohwT7D1MI2S0Ep2heZTsZyMTlrPz230l9coWuCTLPWQsSBQ5s0g9ZPVXSz_kQX_iIhoWMCQCeinjVEt5OU816fUXnTQ5zDskqFJSufIMP-Likpv4cge0Iiil1fk9Tj7XoqSVubJMO2k1EpS58gwy4uLXlbT5l_UpJxOaeSRHuuTjShp_PU84JOgQk_kyDDZpopOatHrJOuXsnRI5JI485GwQljQ5yTtk9VaVejmP8AT",
      "trips_index": 0,
      "waypoint_index": 3
    },
    {
      "distance": 19.450353,
      "location": [
        21.01267,
        105.802406
      ],
      "place_id": "6QHohMH0r3joXOnbUb6veurGN_VBrJhV6ntiiumsqyfuXSzPZ9qrUfLrN-Bd2J5o3MAGzXjaqCXw6g6GdISoI_D0I8Bzsagj6-oz2FHbnUbf6D_IjRa6EXujHP_BFhYdg7scRv1HfnVjr-jetTYWrWenGP-JF24Rd6Mc_xFGEq1nc6VDbQZOcZuueEeQngpxm8_oz702vqUDrxz_WQYWYZd7kK-R7vZ5H6503_E2_nFff6CviVdqYWufpMM8",
      "trips_index": 0,
      "waypoint_index": 10
    },
    {
      "distance": 8.278421,
      "location": [
        21.020549,
        105.789286
      ],
      "place_id": "x6_uha6MX__Y8rkhmiFKXWun2hemeulQn7t8p3a7dQyL2wQyEnbdQJNjyE8mYuVdN6f4tIe6FdtDemAcmwIF1RNrBB-idgmli7ew13q7dV0BT7tnlm6hDWDnBOfaCg0Nm6MEX2YGrV33t_DHym4NeS-_AOeSt3UNb7sE5woKCV1_a71bdrZVHYO2YF-KahCFg9fw16ZqpS0btwTnQr4NHY9jiLeKeu31B7Zsx-pi5S1HZ7i3kmtxTXOHvNsk",
      "trips_index": 0,
      "waypoint_index": 5
    },
    {
      "distance": 38.043008,
      "location": [
        21.010007,
        105.789648
      ],
      "place_id": "8fGEhdnxiVzB8Rj3nLZiefWBBPbYqGpGx7Al2Ya1N0D27Qzik55-efPhKYqdm3pp_oUtn4adO3792z3XYqeKfPffLptcpEhH8ukqwbHCSF_zxib6hLc-XPHeJumdnEd5994Ixp60SEHy4y7thJxUQPDfJvuywlxE8d4m3Z2dSEDF8EnCsopYf_KHCP2Fmz5_6BuMq9oW2VFny3ibPsJxYfMdM_f2BpGJe8qYu5YcyVE7GpjL7hcNMQ_7wKdY",
      "trips_index": 0,
      "waypoint_index": 7
    },
    {
      "distance": 36.917935,
      "location": [
        21.013758,
        105.798614
      ],
      "place_id": "RrhWKDhh7vf0m1fylIB3bO3sBv2bgyFT7Xw3ya-q_CD3ShLig6hzbvfsEv6elHhG7-ONKKndSmP3_djRl6lSYd_9KcGDpgZe7O0036_cVkHY7zggmqlC5O_AOFmDgkJn6cAW2ICqVl_s_TDzmoJKXu7Bn-U43EJLa78Csw4ODVl7b7lfcrJRG7-xhFuObhSCZ9P006Juo90dKwDjRroLsYtnjLOOfunxA7Jow-5m4SlDY7yzlm91SXeDuN8g",
      "trips_index": 0,
      "waypoint_index": 11
    }
  ]
}
  `}</Copyable>
}}