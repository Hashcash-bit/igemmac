import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './BioMarker4Styles';

export default function BioMarker4() {
  return (
    <div
      style={{
        height: 'max-content',
      }}
    >
      <Container>
        <TopBar src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QaXR3WS9NQUZ0S1dQaXR3WS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAIhBGDh2zZ4q1jEuDCYZ7z3imyeRudUXfpKHXhGnWaan&exp=1697062394&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAMuJG6me7JUK_5UL5-9KEJrso3lf-eI4emgPi3TJY_sn" />
        <div
          style={{
            justifyContent: 'end',
            display: 'flex',
          }}
        >
          <div
            style={{
              fontSize: '19px',
              fontWeight: 'bold',
              color: '#971A35',
              backgroundColor: '#efd2bf',
              padding: '20px 10px',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                color: '#8F311C',
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '25px',
              }}
            >
              BioMarker 4
            </div>
            <div
              style={{
                fontSize: '49.2px',
                fontWeight: 'bold',
                color: '#971A35',
                paddingLeft: '50px',
              }}
            >
              Tetrahydrofolate
            </div>
          </div>
        </div>
        <BodyTextContainer>
          <TitleTxt>INTRODUCTION</TitleTxt>
          <div
            style={{
              display: 'flex',
              paddingLeft: '10%',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              Tetrahydrofolate (THF), a folate (vitamin B9) derivative and
              precursor to L-methylfolate (5-MTHF), is a metabolite produced by
              gut microbiota for various essential biosynthetic processes such
              as DNA and amino acid synthesis (Khan and Jialal, 2022)
            </div>
          </div>
          <br />
          <br />
          <TitleTxt>METABOLITE X MDD</TitleTxt>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              paddingLeft: '10%',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              Approximately one-third of depressed individuals are folate
              deficient (Young & Ghadirian, 1989; Bottiglieri et al., 1992;
              Bottiglieri et al., 2000). Presently, studies support the link and
              suggest that folate supplementation, particularly with 5-MTHF, is
              beneficial for depressed patients (Nelson, 2012; Bender et al.,
              2017; Altaf et al., 2021). Furthermore, a mutation in the MTHFR
              gene, an enzyme required to convert 5-MTHF from THF, was found in
              MDD patients leading to 5-MTHF unavailability (Gilbody et al.,
              2007a; Gilbody et al., 2007b). Neural cells also utilize 5-MTHF,
              taken up through folate receptors and transporters, for crucial
              processes such as neural cell division, and tissue repair
              (Balashova et al., 2018). Additionally, 5-MTHF binding triggers
              specific signaling mechanisms such as neurulation (Ami et al.,
              2016), and modulates synaptic activity (Balashova et al., 2018).
              Additionally, 5-MTHF adjunct therapy with selective serotonin
              reuptake inhibitors (SSRIs) or serotonin-norepinephrine reuptake
              inhibitors (SNRIs) was investigated and proven effective in MDD
              patients (Altaf et al., 2021; Lam et al., 2022), increasing
              remission rates by 39% compared to patients who only received
              SSRIs or SNRIs (Altaf et al., 2021).
              <br />
              <br />
              THF deficiency can therefore lead to impairment of cell division
              and neurological disorders (Khan and Jialal, 2022).
            </div>
          </div>
          <br />
          <br />
          <TitleTxt>MECHANISMS</TitleTxt>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              paddingLeft: '10%',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              It is believed that 5-MTHF supplementation benefits MDD patients
              through tetrahydrobiopterin (BH4) regeneration (Altaf et al.,
              2021) as 5-MTHF is further processed into BH4 in the brain (Akoglu
              et al., 2007; Miller, 2008). BH4, a rate-limiting cofactor for
              hydrolase enzymes such as tyrosine and tryptophan hydrolase, is
              required for the synthesis of various monoamine neurotransmitters
              including serotonin, dopamine, norepinephrine, and epinephrine
              (Miller, 2008). Lower BH4 levels are also found in depressed
              individuals (Coppen et al., 1989; Anderson et al., 1992; Nasser et
              al., 2014), further implying a relationship between BH4 and MDD.
            </div>
          </div>
          <br />
          <br />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIwAAAB8CAYAAAALiyulAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAADBdSURBVHhe7d0NUFvXmTfwf4oHdXChEzC7xSUpFO/IC115ICETit1iIAUvXfCQWI1jnDjYXn/tYPf12smkZtMEv5kGv94YNnbsxl+xcZxglwFaGpyYjy4mZEMG1uoLY3VMURoCs8XQLq7ZijeU95x7r7AkJCRA4iP5/2aUe+/hSrr36l7PnCfPec49YwKIiIiIiIiIiIg0X9KWRERERERERERECgaMiIiIiIiIiIjIAQNGRERERERERETkgAEjIiIiIiIiIiJywIARERERERERERE5YMCIiIiIiIiIiIgcMGBEREREREREREQOGDAiIiIiIiIiIiIHDBgREREREREREZEDBoyIiIiIiIiIiMgBA0ZEREREREREROSAASMiIiIiIiIiInLAgBERERERERERETlgwIiIiIiIiIiIiBwwYERERERERERERA4YMCIiIiIiIiIiIgcMGBERERERERERkQMGjIiIiIiIiIiIyAEDRkRERERERERE5IABIyIiIiIiIiIicsCAEREREREREREROWDAiIiIiIiIiIiIHDBgRCRZTOgY1NbnzAjM7WZt/fPqi3COEw319GJYWyciIiIiIloI7hkTtHWiaTKh4hv56EEe0j7egzit1bUBNO7MgKkmGYYPSpASoTW78tkAuurq0Ha1Cr//0IxRi2wMREDSCoSuzoQhew3iIgKVXZ11lH4bdYdHEFJ6BZtywrRW98wnstF073FsMS7VWtyT+155qRdBh6on37+vCmcfLsJQuLguH3m6LsJgLcq+Z0Js834k6LQ2d+S+8QcwGG7ESmV/N9fVdgxZhVh/LAfhWrMDb/ZxZ07OUfu7G97+5vZG+1txteQ0bja1qvdZVDRCH92MpE2ZiAlR9xnXfgSla8u0DXccn4X+qt2o+HgzNhYYEKS1eUO+72JBs9tz8vdxT86Xz/0I+hrL0Xj+PPqvDoht+ZyvRMTTm5GepkfIInUvT4YsrWi7UoWbDa0YbpGfI4hronsoEcuy1iFxZbRXnzXc04ym46dws9YkrrFo0OsR+v2NSMoT1zVU3ceV/pYyXD1pO4dgBBg3YtX+fBim9FAR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A6IDlorI0tNYf3mSYJEUmojsYw3Y9sFpGJ7LRFCS6IyazWqwSHQIgzbmw/DWJWyqe+1usMgTOTRN1l+Rs7M9dxpdaqujED1SCi/c/d5V2rHLzqcMzGRlIkoc/7rmC1g/aedTo7xXHLf9y3mcnTf7TKZ/4O77ZLBIdNKDNuYh7g3t+ngMFknBiMkpxLbmaqSV5ovfTI+AqNsYFZ85apEd50SEP1eItA8asa1wKoGNYOjTU4EnM72r8aQUvw5E5COTBItmICh+DzZW5vnlsyfy1zWdLwIRV3ABaXsnmW2s3XZPa8/PqlREvHD3nGcULJJ8+rwGIspYjF0fic/amwqdHhhtkcGiYASIz9HL5+ktD8EiIpoz9zDDiIiIiIhogbGaYOoywDBJ/SJ7VpMJPQbD+Gxu/jDY1Y1FMdGeA37khQFYLIGIivLdEEIioqliwIiIiIiIiIiIiBxwSBoRERERERERETlgwIiIiIiIiIiIiBwwYERERERERERERA4YMCIiIiIiIiIiIgcMGBERERERERERkQMGjIiIiIiIiIiIyAEDRkRERERERERE5IABIyIiIiIiIiIicsCAEREREREREREROWDAiIiIiIiIiIiIHDBgREREREREREREDhgwIiIiIiIiIiIiBwwYERERERERERGRAwaMiIiIiIiIiIjIAQNGRERERERERETkgAEjIiIiIiIiIiJywIARERERERERERE5YMCIiIiIiIiIiIgcMGBEREREREREREQOGDAiIiIiIiIiIiIHDBgREREREREREZEDBoyIiIiIiIiIiMgBA0ZEREREREREROSAASMiIiIiIiIiInLAgBERERERERERETlgwIiIiIiIiIiIiBwwYERERERERERERA4YMCIiIiIiIiIiIgcMGBERERERERERkYN7xgRtfZyLJiIiIiIiIiIi+hy75557tDUtYMQAERERERERERER2XyJwSIiIiIiIiIiIrJ3z1/+8heXESMGkoiIiIiIiIiIvhjsh6MBwP8HivRPoO21V0QAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <TitleTxt
            style={{
              zIndex: '1',
            }}
          >
            SENSING MECHANISM
          </TitleTxt>

          <div
            style={{
              width: '100%',
              display: 'flex',
              paddingLeft: '10%',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '80%',
              }}
            >
              We propose adopting the THF responsive riboswitch system designed
              by Leigh (2015) paired with the Tet-On inducible system by Das et
              al. (2016) for our ingestible biosensor.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '20px',
              paddingLeft: '15%',
              width: '60%',
            }}
          >
            <div
              style={{
                fontSize: '21px',
                fontWeight: '400',
                color: '#971A35',
              }}
            >
              ABSENSE OF THF
            </div>
            <img
              src="https://media.canva.com/1/image-resize/1/828_362_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8tTzBzMC9NQUZ3NmwtTzBzMC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAI2RSVfKHsXwchZPuDo5E3RNiz8bNm-BgtFEt5OK8nZ1&exp=1697085490&x-canva-quality=screen_3x&csig=AAAAAAAAAAAAAAAAAAAAAPyL_QKb21WrxX9yDqBpP3MLZGT6ux4qUDpsLzXRl5xM"
              alt=""
            />
            <div
              style={{
                fontSize: '21px',
                fontWeight: '400',
                color: '#971A35',
              }}
            >
              PRESENCE OF THF
            </div>
            <img
              src="https://media.canva.com/1/image-resize/1/820_278_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9HY2R4SS9NQUZ3NmtHY2R4SS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAACbq6GW5JEcd7SjXfdLvJ0Q8S0fyrW6470Ht9dJM6QpQ&exp=1697086261&x-canva-quality=screen_3x&csig=AAAAAAAAAAAAAAAAAAAAAO6I-qXMf59g1UC1JriwnAI6MsoFRHehP3yw6cJHN6Mq"
              alt=""
            />
          </div>
          <br />
          <div
            style={{
              width: '100%',
              display: 'flex',
              paddingLeft: '10%',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '80%',
              }}
            >
              Endogenous E.coli RNA polymerase binds to the constitutive J23101
              promoter, transcribing the THF riboswitch. THF present then binds
              to the riboswitch terminating the expression of the tet repressor
              (TetR), leading to the transcription of sgRNA after the promoter
              tetA (Leigh 2015; Das et al., 2016). In the absence of THF the
              repressor is expressed and inhibits sgRNA expression.
            </div>
          </div>
          <div
            style={{
              padding: '20px 30px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 50px',
                  backgroundColor: 'white',
                  color: '#971A35',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid #971A35',
                  cursor: 'pointer',
                }}
              >
                Butyrate
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 50px',
                  backgroundColor: 'white',
                  color: '#971A35',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid #971A35',
                  cursor: 'pointer',
                }}
              >
                Indole
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 50px',
                  backgroundColor: 'white',
                  color: '#971A35',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid #971A35',
                  cursor: 'pointer',
                }}
              >
                H2O2
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 50px',
                  backgroundColor: '#971A35',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid #971A35',
                  cursor: 'pointer',
                }}
              >
                Tetrahydrofolate
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 50px',
                  backgroundColor: 'white',
                  color: '#971A35',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid #971A35',
                  cursor: 'pointer',
                }}
              >
                Terathionate
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 50px',
                backgroundColor: 'white',
                color: '#971A35',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #971A35',
                cursor: 'pointer',
              }}
            >
              Back to objective
            </div>
          </div>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
