import Link from "next/link";
import React from "react";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./data/testimonial.js";

const QuoteSVG = (props) => (
  <svg
    {...props}
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.93464 7.15438C5.76471 7.15438 7 8.54407 7 10.603C7 12.4559 5.58169 14 3.66012 14C1.55555 14 0 12.147 0 9.31624C0 2.88236 4.30065 0.308827 7 0V2.83088C5.16993 3.19117 3.11111 5.19858 3.01961 7.41173C3.11111 7.36031 3.47712 7.15438 3.93464 7.15438Z"
      fill="white"
    />
    <path
      d="M13.9346 7.15438C15.7647 7.15438 17 8.54407 17 10.603C17 12.4559 15.5817 14 13.6602 14C11.5555 14 10 12.147 10 9.31624C10 2.88236 14.3007 0.308827 17 0V2.83088C15.17 3.19117 13.1111 5.19858 13.0196 7.41173C13.1111 7.36031 13.4771 7.15438 13.9346 7.15438Z"
      fill="white"
    />
  </svg>
);

const CheckOutSVG = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_278_186)">
      <path
        d="M9.16665 5.83325H4.99998C4.55795 5.83325 4.13403 6.00885 3.82147 6.32141C3.50891 6.63397 3.33331 7.05789 3.33331 7.49992V14.9999C3.33331 15.4419 3.50891 15.8659 3.82147 16.1784C4.13403 16.491 4.55795 16.6666 4.99998 16.6666H12.5C12.942 16.6666 13.3659 16.491 13.6785 16.1784C13.9911 15.8659 14.1666 15.4419 14.1666 14.9999V10.8333"
        stroke="#8585FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.33331 11.6666L16.6666 3.33325"
        stroke="#8585FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 3.33325H16.6667V7.49992"
        stroke="#8585FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_278_186">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const RightArrow = (props) => {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="24"
        transform="rotate(-180 25 25)"
        fill="#323232"
        stroke="#6766FF"
        stroke-width="2"
      />
      <path
        d="M20.5523 35.281C20.2789 35.0075 20.1253 34.6367 20.1253 34.25C20.1253 33.8633 20.2789 33.4924 20.5523 33.2189L28.2713 25.5L20.5523 17.781C20.2867 17.506 20.1397 17.1376 20.143 16.7552C20.1463 16.3728 20.2997 16.0071 20.5701 15.7367C20.8405 15.4663 21.2062 15.3129 21.5886 15.3096C21.971 15.3063 22.3394 15.4533 22.6144 15.7189L31.3644 24.4689C31.6378 24.7424 31.7914 25.1133 31.7914 25.5C31.7914 25.8867 31.6378 26.2575 31.3644 26.531L22.6144 35.281C22.3409 35.5544 21.9701 35.708 21.5834 35.708C21.1967 35.708 20.8258 35.5544 20.5523 35.281Z"
        fill="#6766FF"
      />
    </svg>
  );
};

const HumanSVG = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 80 80"
  >
    <circle cx="40" cy="40" r="40" fill="url(#pattern9)"></circle>
    <defs>
      <pattern
        id="pattern9"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use transform="scale(.00444)" xlinkHref="#image0_164_86"></use>
      </pattern>
      <image
        id="image0_164_86"
        width="225"
        height="225"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAACx0UUtAAAgAElEQVR4nO2de3wU1d3/v+ec2fslm5BAEhKIKCHBIIgIyB0fEKFqvUG1tqIVflae/qwW7c+qj9b+bLVaK9KnWout1ba2ylNt691aLyDUC1osQgJYCSTkQm57v8458/wxybJsdjezuzM7MxveL/5INrNnDrOf/d7Od84gQRDgJJkRIgAgRA5D7IgQ6wcaBuYWom1A24HvEJgXACC6J8UbjdMAAGEncNVAapCxFrALiBkZysAwAZkmAgAgUwH/J7oEndRoMtQtxI4JoRYI7xMircA3C+EdwOgJx2CS4+DDxkHm+cA1IlMdmKciSwMyjAXiynHwIuWkRgEAhEiLEDwgeF5JVmTOWsyWhDMOqrZkFbLWI1NDgSagYUavRoXwAcH3vhB4VfBvBQBgtHCKlMLQfJB9NbKtRI65yFyv9pzUYZRplLqF4C7mfl3wPDxoujSly3QMTRWV3IxdK5B11qiKB0aHRvku5t0meF8Q/FvlspecIe6dMx7HhqYQk+nLwChgguyrkfMS7FwEXKU8w2qYotaoEGHu1wXPH2SRJmegohz5CHF7HK3dzs/b7X0e44DPEAijUIQEQpw/ZAAAuyVms/AWEx3joBYzra7oqh1rrBvnLS93DwqaySHZuFhLrsSuFUVcHyhOjQqRFta5SfA+DpCXNxeNJR8jbo9j+x7z3i9qd+61tXZZ4geYDINXz8glvzfKD/4QiaH4wQ210bPqPfMag2c0tppN0fj4Oc8QYDASQM7rcdVNRZljFZdGqZv1/5UNPAzh3flKE4Pfa/lXc93OZutbux27D9lcFmYyCEYOCM79ilGGojxEYihGYU5D4JzTvXNO72+Y2GN3hviIHJbVPAOX3ozLLiqmgLVINCqED7CeLYOZUD7qNFE+QnYfGP/a++P+tquko99gN+ery3SIevWH0eTxoS/NdV80v7t2fCfIYlbF7KpifXGUAnSvUSHSwjrvyT/i5EzU77U89cqU594u7/EY8jeZ0okb1+mTIl9e2HX5ufs5A5VHqfbVuOpuvQcAOtaoENjFOjcKwW35J0O9va7fvHLq4y+PVc5qSoEy5Ashk0G46fL2y5b+224PyZJaIesiXPUQss2SY44qoEuNCoFdrOchwfvH/NXZdrTqqddqnvl7uckgWIxauRTuAHbZ2FXLu9eu2i+bUp1X4IqNelSqzjQ66NnlUCcfI4+/MO2JlysBQDvqTMQdwBUlsRsu7rhixT6QpcIqKlVv3l8/GqVu2vFDYeAn+VfgOQPdtXfCxv+u7/EYXDY28hvUQ/T+0ydFHrihuba2U4bcHwAYRaW3kOo79JL760GjQoT1Psu6vyFLHb6313Xv040vf+AqswtqxZ3ZQhnq96Prv3Tsm5fuk8v1AyZ43K9x+Ve0X/zXukaFwC56dH2e9U4RzkR37Zlw46bGUBRp07lnxh3AshtUMM8g47doPEjVsEaFCG2/UxbnDgCcgf78uRk//3OVw6Ib8zkcsUp11zW7L/mPLnlkCkOuv+ZezRpUjWpU8L1JD58vS/+H6N9v+tkZnxy0aTz6lEiPF1++qO+OtXvMpqg8IzIKmJCJryHHMnkGlBXtaZS6afutgucJucxn29Gqr3z/DJ3693S4A3jm5MAvbv1InvBUhFFUso7UPKi1XEpbGhV82+nhpbK1zw0FoJQh/fr3dISiqGpM+Onbd5eXu+Vt/CMT30aOhfIMKAeZmx8LCuu8nx5aBCBP3zFnojs/aFz/wNSiFCgAWIxCn8d82X/NajtadbyZNU8wAQB6aBHrvF+eAeVAG3aU7+K/WClL8i7CmegLf6/8z81n1ZXzIx+tZ8Qs6g937m2Y3CabNYXBlJ+b9KoWeqjV1+hgeiQfYon+6h+eXhwZ0oiIjuLZ7/+rdnynnDIFAAAtJFIq+3rWvZkeWi7jgJyBthysXf/AVIdFA/6hIBAsUIa+du/pfr9FNqc/BD20nHVvlnfMbFHPjgoRevia/FfeExGz+Mvvmg6gWu+SWoSiqKE2uuW2f8hWkIrDKHJeQSb+Rq0CqkoalTsAFQlHjOfdvKhYk6QRCUXRrPrAY9/dKf/QqoanKvh6IdLCt9RAdI+8AuUM9M5fzghFR6lAAcBiFHbstT/+wjTOJLPHB0wguodvqREiLTKPLOXkBT6f4NtODzbJPixnon98feobu1zFVKjPAZeNbfpT1a49E2QPTEXowSbBt12JkTNQUI2ynqcHK6Cywhloy/7aHzw1cZQk8pkpsws3bmrs7VVqrYgeWsR6nlZo8JQUTqOs52nWuVaJfUH8fsv1P50yehL5zBAshKLo3qcblToBJqxzbSFlWiCNsu7NCgmUM9FfPD+1x2MYtWHocCxG4eUPXC++V6GQxx+UaaFqUoXQKOu8n3V/WxGBGmhbW9XjL4896eWTKLMLDz4z3e+3jHxobmDCur9dmCVTxTXKOu9nPd9TaOsvPka+98vJZfaTFjQZ0eNverZJ/hw/Dias53sFkKmyGmXdm5UTKGeg//PWlE8O2k56+ZRYjMJTb5S37K9VyuPDkEwVdvoKapT1PK2Qixfx+y2P/bn6ZKqUgTK78NBzdcqeQ3T6SqZQSmlUuSxehDPQl3accjJVygzBwo699l17lSqXDqJwpq+IRgXfdkUFCgB8jGz+n9qTqdKImAzC714fr/hpMGGdaxUq78uvUSHSQg8vVVSgnIG++F6FO6ChBm3NItahWg4qGZWKYEIPL1VisVTuj5nvUmKpM/kkMbLlxYYii0QpQwqNbDcLv3ixpjClcHqwCfgueceUdeJChP9ipZwDpoIz0A9317d2WYopEqUMLWiqVEimFqPw3Pay3mMFupOO/2Kl+EQruZBTo/TwNRDeLeOA6Xhuuyu+gXJxQLDwnSvPqa2wKjS+y8Je/keN4u5eJLybHr5GxvFk0yjr3ixvw3I6entdHzY7i6m/qc8fveWK2dUVjrOmKGVKHRbh2bfLlRg5BZgI3j/KWDSVR6OC701FS6FxOAPdvsdcTNkSZWjaxNJV8yYDwDlNNe6gnF4yDsFCa5elEJmTCCas+9uC7015BpNhDL6LHj6/MA864mPklZ2Tiylbcgcj37pslsnIRaL83KaaSpdSl9FkEF76x9jCNbphQg+fL0v+JMOUC5AnxXF7HO/8y1402RJl6ILZE+c21USiPACYjNyaeaeFooq4eyMHb+12+L2KdZmkQhZt5KtR1nl/YfIkGHL0Bj08mE4637nynPjPkSh/8fIzA5GwEicS3f2Ap7D75IR35990kpdGBd925VpGUoBh7xe1RZPR9/oiP/7mouoKR+KL1RWOa1dMVa5WuuOz0gKFpCKYsJ7v5bn+lIdGqVvp9aThvPJ+WXFk9H3+6LUrpi6eWReJnrCTSiTKX71yelSZ3VVMBuHTz+2KDJ0BTOjhpUDduQ+Q8ztp+63JT2NXmN5jrh5vMWT0Yi5/8xVzI6nEWF3hWLesrs8v923yAEYOdn7mlH0vk5FhlLbfmvO7c/zIBd+bcm2/KBHOQA8cqiqOYDTKww/WLzYNf34jAABEovx1l89TIsEnWOjoN3QeGyv7yCOAieB5IudSVE4aFSIFKzYl8s9DpiIIRvv80Ye/taixriKlERUxGbl7vnGuEqbUQKCtw1XQkFRELEXltEaai0Zp+50F9vIAABgOtlvSmB7d0OuLPP6d5cPD0CQiUX7xzLprzmtUQqYHu1RyRozS9jtzeF/WGhUCu+Taoz47GBxo1+iG7RLp9UU2fWvpiAIViUT5m6+YW+ki8ub4JoPQdsyizlZ0mAgDPxECu7J+X3aHCxF6dL0KAgXw+y2BEKff6n2vL3L/+oUrz5ksRaBxnrl7tbgtnlzTMHKw95Bj5OMUAhN6dH22Hj87jbLeZwtWsU9iwOPyBnXp6SlDlKFN31p6yZLGrAQKANUVjiduWyWjTAkWdh1U1R2Fd7PeZ7N6RzYapW7W/Q1VjCgABIJcJKZUZVs5KENmI//k7SuztaAikSjfWFfxxG2rQNYm6AKviJ4AJqz7G1mVS7PQKO34oQqpEgAAcAbqj6KYOifPnT5/dNoprmfuXp05i8+MKNMnb18pozUNh1U1pYzSjh9KP1yqRoVIizqp0hDRoE1HxVHKUJ8/euOqKVu+d9GYEkvOAhURZfrW5qsWNFXKkumHIurZURhKniTf+SRVo6zzHhUFCgDd/gEVz54Vovl84d6LN3x1UZ7qjCOO85Mbz7tv3QIAUKg3qnBgwjrvkXispCxECOwqTI99BiLRMhXPLpFQFAWjkfvWLVg1b7LYEirv+JEof8mSxjmn1zz96qdPvr7PZjLn1r0QCHLi09HlnV5WCN4/CoGNUh5VKsmOsp6H1BUoAESiWMuLTKJzX7Nk0lsPX3HJkkYYsnyyE4nyY0ost1294O1NV65bVieeN6s41UDArwUzjAnreUjKgSPbUS0YUQAwGVkkpsXnKYaiyMjBxQsmXb1yenWFIxLlFVJnIqJSN3x10XWXz3v/s/Z/fNb+8f6uf3cGg9EIALispgyFZO2knhJN6cgaZZ0bVRcoAJiM/QAT1Z7FcShDA4FwVSl31aLTLl5+ZsHUmYh4usUz68S1qy86BgCgpbV3/5G+F3f+O8Mbx7li6jr6QTBhnRvJae9mPmoEjQqRFiG4TQsaHWcvVXsKAACUIfG2uAtmT7xwQf3cphox7iywOhOJn3pSdSkAiHWuzBrVDkJwmxBpQaaGDMeMoFHV0/k4RmtALScl6tJqNFmMwoKmyv84+5RzzzpF7KxTV50pkTIfiylUgJlIAhPWeQ+p+0OGQzJpVAgfEPxb5Z5UjtiNwoj1UbF2aDUe78zMdn1fTD6iPASjEUEQyh2m6jG2ieOc88+obagrn1RdqllpZoXZrMgd0rkh+LcK4XuQuT7dAZk0ynq2yPWY7jzhY8Rm5dPl9ZShaae47lm31BMIH+sP9HtD+4/09bqDh7u9ANDRF+jzR+OPSkPoeEqb+Pw0hFCli0wdX15iM5e7rFMmjGmoKy+xmceUWOK6BMWy9QIj51Pv84dR1rOF1D6Y7u/pNUrdgudhLQhUxGIKOa18jE87n+oKx5gSS2Ndhfhrkpj6PCFPIAwAx/oD8RfHltkAoMRmBoAxJYNLL3EjHB+hOHQpQhmaPD6k9mNiTwQTwfMwVN8BJPU9q2k1yvr/qhEjKlJe7rZZ+D7PCO156fQ0psQiqjAu4nQHF5MihxPlYfqpQbVnMQxGWf9fccXVKf+Y9gvFBjRkRAEAMNTXyBBFiaGk3gPKfGiYEAStbS2MCRt4OO0fU74qRFrU6hNNC4PJNaHRqivZiMSQ096r9ixSEd6drssktUZZ5yZtGVEAAKiu6NJjC6mmiFGYVY80lDDFwYR1bkr9lxSvCRHB+7iyE8oePkZm1euvhVRrVDhZ1dhjas8iNYL38ZS3kaTQKHO/rvx8cqG2ttNu1tx6vY4IRdHsRq8KNy5LJqX2UmhU8PxBg45e5PzZ/bpvnVSPSAzNPd2j9izSg4ngSbHgNEyjfJd21paSYTB76pGTIWk+zG8a0GIwOoTg3zp8y9JkjTLvNrVuWhoRPkYWTgufDElzgzJUVxkqLcl9b7BCwCjzbkt6LVmjgvcFzTp6AHCV+GZNjii39WERE+Vh3ukBu1Mz3SQpwUTwvpD82gm/Ubd2HT0AAHAG+uWFXb7QSY1mTSSGzp/brbnq/TAE/9akO5tP0KgQ3KVZRy/Cx8iyszq0fNOINqEMVZTEZtQf1XIwOgijQvCE/XZO0Chzv65lRy9SXu5ePN1z0t1nRZSHNUt7FXyWvYxgklSBOtGOetKumWqKxWceOunus6LbSy6a381HtG6ARJJ0eFyjQviAxh29CB8jF87rqiiJnTSlEqEMfWmWt3Z8p9oTkQyjQvhA/LcEjfreV2M6ucCZ4IaLO06a0gwkfoH7/ej6iw+rOJkcSFRjgkYDr2o/GBXhY+SC+YcSMye3Pzpqe+1SEn9eHmVoTkNAH9lSHEyEwKvHf4v/pPGqUxJ2e2jdl7rEhzLqd1NShejzhOK3wfhCaMMFPVpeo09JohoHNSp9gyiNwMfI2lX74w9l7PF4+zzark6rAWVo+qTI7BkH9GREh4hrckijQX0kTInY7aENF7eLpjTDfU6jEPHOLQDo96ONV36uOyMKIFZJB9OmIY16XtFLMBqHj5Grzm+uqwxRhk42Q8UxGblj/QGEUCiKvjTHPWvaET0aUcBE8Lwy+OPgS3yzarPJA85Af3DdF/1+FIiE48bjJP3eEABEYujOq5v1UhNNwZAmMQAAdQvhHWrOJlf4GJk17cjli/oEwdLS2pvuqVyjjf1H+hgz37X2cHm5trucMiKEd4gL9xgAhNgx3QWjcfgI2fiVAxiH9x/pU3suWuHj/V2zJkcuP3e/Lr18HEaF2DEY1GhIZ0l9EuXl7ie/0/Xx/q6TJVKRTw+FHrihWZep0omIysQAAOF9Ks8lP/gYmXd289yph0+WnwDg3U9aH/jmP2trO/VtREXC+2DQjkZadZfUJ8HHyDcv3RcIafLO8YLCuRydlyzt0nGqFAcTIdIKg3ZUn0l9EmZTtK56r8Qd/ouYpsbtxWBBRfhmAMAgRHSa1A8H4+weoFZ8mIwA0T1qz0I2hPAOECIYAPSb1A8HIf10oMkPF+M/UXsOssIoAGAhorOurcwg9PFodvcIfaz2FGRGiBzGEDui9jTkJBp7AWCUVqAQ6kQo+cZf3RM7goVYv9qzkBOzKYpQ+6g0pVzxGVEAEGL9GGixLXNj/De1p6AKfHGmjDSMgbn1XhxNAqFtCLWqPYsCw2G8a+SjdAcmwNxYiLapPRH5wfhvo83dY/xztaegCEK0DQNtV3sa8oPQttFUhOIw1s39kllD2zHwHWrPQhGI5bejxpTyxWpEAQD4Diwwr9qzUIboHow/GQUy5TB+Te05KIjAvJp6UI/MYPxw0ddKEeosznQ+AVxMy7vDwfi1ojalXIy/U+05KEx0TzHbUQDA+Nni9fgcxi+ZTVG1p6E4Ra5RAMD44WLM8TmMPyl6Ly9S/BoFgOJziAh1YqyPTQ7zZ1Ro1GyKEvKk2rOQk+L71mVgVGgUABDaVjT5E2f96WgIQ+OMFo3CYP70ks5lyhHyZHGXYoaDwThN7TkUDr3LlJAtRdghmhnjtFFkR0WGZKo/DPYnRp1AAQCAQ9g52nbvxPhZhDopvVbtiUiEMxkhELqOC4+iGDQOwk4MXLXa01ABhLZx1p8i1KN5v88h1ErZ10dVknQCXDUGUqP2LFQiuoeQ72p7FYrD+CVC/kvtaagKqcHIWKv2LNQE44eHwlNNKZVDqIeQLaNkJSkDyFiLAbuK6f76HMD4WY67VlMGFeOXCPnu6MyQToBRwC4OiFntiWRC3PwtvjlMOGJU7FQ/NxnnaiGRwvi1aOwFAOX+pxCPbpMurxYhZg4ZytSeRQo4A+VjpPPY2H0HKg+3O70+zuM1BEOmYEjZYtnaVTum1o83ltYpepZ0RAdaBT68Y7f9xffOV/REVguzWiIlzpjTwU+s8U6t76oae0y85oqeNweQoYwDwwS1p3ECnIG2Ha1678O6fftLevstVsvxBwVjLNhtCoYl4YDPWbtE4LsjPS2IMxdSqaI6AcBU0QDwntXCsMIP9AmGTMGQqbMb9n/u+vOrdeVloalTPAtmt9aO19imkIYJSGBhfo9ZC7cvcybae8z1/KvT93/uEl9R+nNKJBzwzVp6/tqbvhtu2xVpGXyEOuLMAGAsrQPglGjpj0tTxFTRYJ7x9dbWww99+1qzzSH76TLAhp6LN+U096UrPy0f69bE7pCMctPCSGBhfq9N3ZlwBur3W17824xt/6gsgAkZTjjgq25s/O4PfwYAhGCgbs9bDyYekCBWGYgOtAJAojoBwDhpueXUJZQyQvD211997tEHCyxTEcZQMIQXndN14fLddntIdZvKnR5AgiDQzxeruL2j6Nx/+dvpwZCp8OoUcVpN3/rJr0tddkoHQ4tAoB8+fixJRiK56TWlLuPEBSr+Sgh+4XdPvbX1KVVkCgCMIasl8n++/qm6rh+Z55PT3kWCINDWbwr+J1SZBGeiOz9o/NNL9VBYz55IOODb+MiTdXUT4xIRITjmfeeBdKpKRFTtcKS8FwBMDZeYa2cln53gx///7Z/tel9FmQLAZRccmDdHtQfoIPs6UvcLDADIVKdKiZQz0J0fNP52awPGgooCvf7unwwXKABQZrAtusNU0TTiIAIfTvlPygTQnJsN1TOHnx0A1t1+r1oCBQDxQ/nt1oadHzSq8/gHRpGpDgb7R81TCz8BzkBbDtb+6aV6RVP1zIQDvnNXr22amVoiIuYZVxonLVfi7Igzlyy7y2ZLXfsTA9P//NFmJU4tHbuN/uml+paDterI1DwVRI0iS0Phz97b6/rVM2cW/rxxxET+kq+tzSBQAKCUWU5dYmq4RN6zmyoabIvuoMyQ+dR1dRPX3nJ3OOCT9+zZ8qtnzuztdRX+vKIyMQAgw9gC1544E33kibmMIRVdfM2EiV/7v7dkFqgIpcxcO0tGmZoqmgzTrpJyJKWsaebMNRtuVVGmGAuMoUeemMuZCmtKMUGGsTC4Qk1cyDy/YKm9GIb29lsK7+XDAZ/Z5iibULNg6QVNcxYSgqVoFAAoZYbqmdGSunTJvnSMk5abE1J4KadeuGJlb8+xln/8vaO9HQAKH6RiLPT2W3Z+0Djv7OaCpfnIPB+ICwCQIAgAUMjUPhwx3vOQIhFe6tMFfABgtjlOazx96uyFtVOmVlSOF/9kNmS9sio92U9JyhReCuEYA4CerqNt+/ft+3D758174/+v3GaSG3dv/FvBOlnFpB7iGmUDf2VtXy6Ax+cM9PW3z3zjnQlKe/n4R9g0e/5Zi5aNn1RvNJsBgPLHl4tslhz7NmJ7fh/pyfoBlmjOzU5neW4CjU+bcBwA9HQd9ff3fbztzc8+3FEwsTKGzltyZMXSfxbClDKKa/+CSy+CuEaFSAs9OHKRRRbueWi5cuX6+Ac2b9Wlk6dOSynNODlrFABie56N9Hwm8WDEmeGsG9Kl8CMSCKUwXaJYo+Hw0S8OHNy3Z+crzystVrGwf/fGAm3lTiZ/hkwNENcoAPCfFaJ7svPY2B89MldiJFo+JosPlTGKMamfs+TMBUvi3jylNOMQjsvB3Q++l+DQv9+JfjHyB2aqaJCYIaUjpUaPz4TjAMBswG1tbfFIoKy0BGfjFaOhgDcYGfEwf4Dc/u33q8Yekz5yznBNg5/dcV0i+2rBv1XZsxrovgOVia1MMoIxueG+xwjHUZ7PLM04lOfBkKMpFWtSyGiPN6CkxFTRZJj2ldxOISJGoplmwvMAEOChrHxcReX4mYuX93Qdff23j/d3tWclUylYLWzfgcoCLJAi++r4z8etCLKtVHq1iY+RPc0KtqtKV6c8p6PMUD0Tzbk53QHGScvzFCiM5AqGH0x5vqx8XJ4nzcCe5jLF41FGkW1l/LcEjTrmKntiAADo7LarVRNNyYhWakRstrKSZXcNX7I3NVxiOXVJnoNrDYyFzm57AU6UqMYEjZrrlc7r3R6H0o302SKL3R1a2T++XIfm3JxbjSmJ/L9CshMMYbdH4RoCJshcf/y3xD+hkrRuSxZCEYvEI1Vf/csBw7SrjJOW+40T0Zybbbay/AUKMn2FpOANRqRfc+mfY24k6fAEjWLXCkVD0kBwhNJBOOALB3ynNZ6+ZsOta2+5OxoKKDeZ4yeVyVYRgt8+VHXvS9VOZ7ksAxYMxui8VZeu2XBr2YQa8SPIfPyIn2N+s6HYtSLxhRNOhqyzCn/TSFKxfUL9VLGYcmjfvwozgXyy+ziE4Na2gUef/Kc/yD/66w82fGOOjhw9HwmXV4ydt2zFzMXLo+HwZx9s/6J5TyFXB04AE2SdlfjCiV8I4ipABSpOOOCrrqlpWHXp5KnT4tIUM1PxZx1BKfvx5h0AYLdyz714cNXy+rra0jxlWsgaBQytZhGOm7l4+czFyy+6ZoO4OiD2CRRMqci+Wlymj5MsBeS8RPD+UWlrKt4/dOGa6xLXgQr8kZwwnxjLuZgPAITgV97c3/y5227lAMBu5X68ecd/379KvgkWFPGDIBx3ytQzTpl6xpILLjv6xYEXn/tVR3Oz4kplFDmT+8uSPxjsXFQAd79mw603fv+RU6aekVXJXTnymYDo5e/d9IEoUJHmz92PP/URIbnrXgsZfdynnTL1jBu//8iaDbcqfkpMsHNR8mvJB3GViSV+2Tmtqen2R38/c/FyLUhTFihld/7onbKSEyJau5X73fP7W9sGcpappi6O+GHNXLz89kd/f1qTgn0dyL4auMqkF1NcQVRypSLZPaOlE9auv/0u0XbKP35+5Ga3CMG/e3ZHe1eK+kNZifHOH70TCGvuf5ozok1df/td9XPuVUghqOTK4S+n0GhS5i/X6XHFfZZT7wZBo59ZDl8b0cs/ufVwopdPpL0r8NQzH+dgSrXg6NMi8H7rV3HVU0rINKX2Ul0+ZELO6+U9NypZ53feolmB5obo5dMJFIZy/Hffa85Wphr0MycgyrTiPnlHRc7rAZmGv5762uGqm+T8lhinBUpl/v8oQVbWixD8+FMfpfTyidit3IOPfVpMHn8Qgfc7bkLm+bINyCiuuinlX1JrFJkawDxDrnOTqs1AXNo3otKtl+jlf/f8/gxGNI4/yG96bKd0U6ppR58I4nDNFtlGM88QO5qHk/bC4dKbZTGlyLrIh8/RvkCzIhDmh+fy6bBbuZf/3ird42vd0ccReB+dhBxy7NjKKC5N2yuSXqNlF8lQKGUUVz2U7yAFRIoNIwQ/9czHI3r5RMpKjA8+9qnXH86nYqpN8LhbZbBlmOCyi9L+Me3biAuV5G1KzTN8MENHRnREG0YIfve95udePCjFyyfiD/I/2/LhiARsE5EAAArjSURBVIfpxtGLCLyPTso3LGQUldyctP6ZSKavNa5Yn6cpxY58u9C1RiDMP/jYp9kKFADsVu5v246M6PF14+gTyPdTxgRXrM/09wx/Q+b6vNacGEXOZbm/XSUyWDJC8KbHdvqDOcrIbuXufuhjb4AvMo+PnMvy8bfIvjqxo3k4I1wsXHV37qfHxEfV2Vg+H9JZMjGXf/nvrTkY0UQeeOTddH/SmaMfwkfrcve3jOKquzMfMoJGkakBWZPX+CUy2GSln2A0M5SyslLL9EYZ7hlM17OnR0cPAi+2dOb2bmRdlK7kFGdkp4OrHsrNlCLT9BzepQVS2jPxxf934/x+T+6bydit3MYNczLfL69HkOWcXN4mrewzskaRbRZyXpHDBPQYjIqktGfii7XVJXfeNCe3kNQf5G+9YbrYL1tkMkWu83J5l/MKZJs14mGSgndcsTEHU6rHYDQdcUkFQtHFC05dcHZVtjL1B/k1F06eNWty/AuQZK11rFqB90Wyv4WLUVyxUcqBkjSagykd3JhPt8FoooCS1EN5ft3XZ2abOdVU2q689PREC63L6DMdxJXt2r1EIwoSNQrZJ/jIcZn0gzVIOmsnUlHh2HDtmdID035PdP1VDaKXT0THtnMYqOS6LI6WkM7HkapRZGpApbdIlSmjyD5P4sgaJ11sumLp5HPnjZfi8f1B/muXTllwzpSUQ4nfgSIQK3LOzkIepbeMmM7HyaKYTKrvkF4G8wlN+nX0IuEYyyCdQCi6ccOcceUp+h2TaDzN9bU109MNVSQeX+B9/GlS5YEJqb5D+tjZLHgQFx73a0nfFfMMQDq7+Xg4I6rH6bAuPmdCZlPqD/IXrpic+VbsIjCiIpKqpIzicb/OsDo/nOwW5XD5V6Q0EOAS9Z+wXQDCMTbgiYyYPPUcK8RunVogcbO7tJhn4PLs1vezXDhGJjJ+ywimtIiC0cxQnm/v8GY+xm7l2rs1tE+goiDH3BG1QcZvSXlDSAaybm5AtlkjJE/iMr3Og1GJtHX4RzymvcNbJEFnZgTex0/IFJKKqZK0elMiuTTgkJp7M0wF2VcDLsQWlarTPxCSUn6SouMiAXHIvi7tXzEhNffmMGpOTWLIRCa+ls6UItP0IkiYRoRw3OHDXUYJO/D0e6L9A6ECTEkLIFuaMI9RMvG1bL28SI6NjMixDJWsSyFTffaM5kYgLOnqGQ348OEu3e2ylhupdwNnFJWsQ44chZHHRlw1D6bw+PrsGc2N1iNuiUdKVLPuEXhftAyM05Jfx4TUPJjzqHlcO+IiE99OMqWCsEjXy/TSMRtwR5df4qp96xF3Pvvy6QniQqYTsyJGycS3syqIJpHXhUOOhbjivkSZkvJcerR0yu69PVIOs1u5Pc2SjiwOkCPhQZuM4or7kGNhPgPm++XGVbclVvVHTzDq9QWlt+eNotQeAFkTVnnMM3DVbXkOKIMD4ia9Gv959ASjHl9M+sH+IO/1BZWbjIYQ72YeIlEbOSNHkMRVDpaijNNGSTAqFp6yeovHFxslqT0AIMe1g8WmYZuJ5oA8Vw05lsm+i5rGaT3Sm9Xx+/YfW1xR6OfOqwVyLEfGU3MuNiUhW7KJq24bPcGo2YDbu4WsWvGlF6qKAGSVIQyNI2dBBFmnOU29o2GRCQBG7CZJxG7lOrr8o6X8RN3INFHG8WS9auJKF3UXvUy9vmC/O7vlzdY2r063eMgO5nfauNzWPNMh9zebq3RaeaBF7tc8vlggmN2NsjGe7+nR3wMms8Vp4/Ip16dEAe8jyrR4EZP6bO9dzlbTesRpCcsuUFBEowDAVTq4I4qMrA1yWH/3B/ni7ixRSKCglEYBkLm+WGVqNuDckvRsy1U6QjmBgnIaheKVaTjGpHeTJNLeLRRlau80u5UTKCiqUYjLtLjSfMrzfdn3LNutXCgUK7bUHnFOs1uWxaQMKP61RuZ6B/lC6bMUEsrzufWItLZ5o+Gw7PNREaepV2mBQgE0CgDIXO80F081yuOL5ba9Y3tXIKtOFI3jtIQLIFAojEYBiifTl34b03CiMSaOIPekVEDpGDSRwoXwYmxaBHfx5pyeGw143/5i2A+iADFoIgVNM5G5vtTuB6bvht9AWNKjw1JSBJ0lBXPxcQpeChFXoZhfv8n+nuae3B7bIHaWyD6fwsH8itZB06FGuY6rdNo4/bae5HPjx8FD/TLOpHAgbrBZpOACBXU0CgDE5XQ49NjIFw2H83lmQ1tnSI8RudPU63Q4VBEoqKZRAEAmIKVOk56WBwnH/euzttyS+ji627PEaQkDKZW33S4rVF2aQybgKp1mt47C0zx3c9DTniWifxcDUPUECiprVISrdNo4vfj9/BNzfXSWIM5pVi0ATUIDGgUA4tKF389qb5KUiNuRar+zxGnqBWzRgkBBKxoF3fj9/BPz5gN9ssxEEeL+natU178nojE1cJVOmxuE3gCf/TOplMfrC+bfTu/2RjS7Ab7T1KtuepQSzdjROMQFXKWN62W85pZkPL5Yzg8GT0SDqT2NDti4Xk2Zzzja06gIV3nG2fMXfvlixijL49noMpLD3iQp0dRNI+LlXfjli2cuPq/AK5zS0cSVSg0yLbnwq0tWnvv8Lx/d+0kLZzLjnB+SLhNypeRa2I6UMcpHwqfPbFj2tRudTi1GVnE0rFERrvLSDT847cO3tv91a39Xn9FiU3Eucj0hpPWIe4UBB9Rbb4qGAmWVYxZedM0Zs89VbRKS0bxGAQDgjNnnnnH2/I/e/subf3oJAFQxqGYDbu/w5lN4ElG3s0Q0nwu/fPGSCy7TYOiZEn1oFAAAmc4+d83Zi8975TebP/3kcyi4Ur2+oM8vTxd9a5u38Km9jpx7EvrRqAhxrbrurgWre9/b+miBlerxxdzeiCxDub2R/oFQWalFltFGRL/qFNGbRgEAwOksF5X6ybtvbP/LnwGgMBmVP8jn7+vFcfIfRAp6V6eILjUq4nSWL7nwq0tWrfro3Tfe/NNLipaoCMfJe5vHvv3HFi84VdE+vSJQp4iONToIcYlx6kfvvkFwGJBSG0nLe5tH6xH3YhmHSwRxQN0z58+Y8u3v6F2dIvrXqAhxnX3uGhAiQHu9QQ6wHRAnr1ilPGJZInYrN+CRJ7RNhvmdVh5I6dnnrlFkfDUoFo2KiI0pTgC+CwAGxSoHUh6xnBUyP+hWlCaAZteK8qG4NBqHqwQAp80NEPaKtfL8xJrz3iTpaOvwU57Pd0WU+UHc8hM4IMXg1lNSpBoVIS4AcDoBqBsENyCzN8Dn9uQTcW+SspLc71pOot8T9fhiZaXZX3/EiVsQO608ILNGWjwVpag1Gkf8IIWI0wGDAav4osBLCVvz2ZskHeJNIxUVk0f2+OIME6VJSgFAL6tE+TM6NCoifqhiwAoAfBcgMwhhb3jIFKXXqxJdIJnGTJiJ09QrzrMoY00pjCaNJjH0kTttEaADgMxC7JgvWgaQInhVYn+R1OUn5gcAh7EfGcaCIN6QOUqlGWcUazQOMol6RcTlNEWAhQAjoAMA4A1yThsHADs/6ojGWL8nGvf4OdSh4stL4uZkOz/q2LB2ChjAG+AHs3JSCowDbAFUtAlQDiBBkKffrGgRIgDgDQj9vd3+/r6+oCUQxj3HjnV3u70hKwCI++X6/LEYz8fvJLFZiYHjHHYDAIwptQCA0xIcN85VMXaszczGWEP2sjFl5eOcNgQwiiLL3Phffjg+qZyzgSgAAAAASUVORK5CYII="
      ></image>
    </defs>
  </svg>
);

const TestimonialCard = ({ mentorData }) => {
  return (
    <div
      className={`flex flex-col w-[192px] h-[186px] lg:w-[360px] 2xl:w-[400px] lg:h-[458px] relative rounded-md bg-[#303030] py-2 px-4 lg:p-6`}
    >
      <QuoteSVG className="w-[10px] lg:w-[60px]" />
      <p className="text-[8px] lg:text-lg mt-2 lg:mt-4 text-white lg:px-4 leading-4 italic lg:leading-8">
        &quot;{mentorData.testimonial}&quot;
      </p>
      <div className="flex mt-2 lg:mt-4 lg:px-4 absolute bottom-4">
        <HumanSVG className="w-6 lg:w-12" />
        <div className="ml-4 leading-3">
          <div
            className="text-[8px] lg:text-lg"
            style={{
              background:
                "-webkit-linear-gradient(92.43deg, #6766FF 0%, #FFFFFF 97.66%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {mentorData.name}
          </div>
          <div className="text-[8px] lg:text-lg text-white">
            {mentorData.college}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const carouselRef = useRef(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1280, min: 900 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="my-24 py-14 relative">
      <div className="flex justify-between w-full items-center z-10 px-2 sm:px-12">
        <div className="relative sm:max-w-[360px] xl:max-w-none w-[70%] sm:w-[60%] lg:w-[80%] xl:w-[90%] max-w-[1100px] overflow-hidden z-10">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            arrows={false}
          >
            {data.map((mentorData, index) => (
              <TestimonialCard mentorData={mentorData} key={index} />
            ))}
          </Carousel>
        </div>
        <RightArrow
          className="cursor-pointer absolute left-[60%] mobile:left-[55%] 420:left-1/2 sm:left-[40%] md:left-1/3 lg:left-1/2 xl:left-[62%] 2xl:left-2/3 w-4 sm:w-10 z-10 mr-2"
          onClick={() => {
            carouselRef.current.next();
          }}
        />
        <div className="flex sm:min-w-[300px] md:min-w-[400px] flex-col w-[30%] sm:w-[40%] lg:w-[20%] xl:w-[10%] z-10">
          <div className="text-[10px] sm:text-lg text-[#FFFFFF] font-bold leading-7">
            🔊🔊 TESTIMONIAL
          </div>
          <div className="text-[#FFFFFF] font-bold text-base sm:text-2xl md:text-5xl leading-4 sm:leading-[60px] my-2">
            Hear from our Mentees
          </div>
          <Link href="/mentorship-program/story">
            <div className="cursor-pointer flex items-center text-center sm:w-2/3 max-w-[250px] bg-white text-[#8585FF] p-2 sm:py-4 sm:px-8 sm:leading-7 text-[6px] 420:text-sm font-bold underline underline-offset-2 rounded-lg">
              WANT TO HEAR MORE? <CheckOutSVG className="sm:ml-2" />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 w-4/5 h-full z-0"
        style={{
          background: "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
        }}
      ></div>
    </div>
  );
}
