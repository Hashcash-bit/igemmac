import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './BioMarkerStyles';

export default function BioMarker1() {
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
              BioMarker 1
            </div>
            <div
              style={{
                fontSize: '49.2px',
                fontWeight: 'bold',
                color: '#971A35',
                paddingLeft: '50px',
              }}
            >
              Butyrate
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
              Butyrate, a short chain fatty acid, has been shown to have
              connections with Major Depressive Disorder (MDD) and is being
              explored as a potential biomarker for both gut and cognitive
              health.
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
              Initial studies of the GBA and its relationship to mood disorders
              began through the surveillance of the microbiome to identify
              changes in gut composition. From this, studies have shown that
              butyrate-producing Faecalibacterium and Coprococcus were
              consistently found at lower levels in MDD patients compared to
              controls (Jiang et al., 2015; Zheng et al., 2016; Valles-Colomer
              et al., 2019). Specifically, F. prausnitzii, a butyrate producing
              bacteria that comprises up to 14% of the total fecal gut
              microbiota (Rivière et al., 2016), was found at relatively
              decreased levels across multiple studies (Jiang et al., 2015;
              Zheng et al., 2016, 2020; Chen et al., 2018, 2020; Rong et al.,
              2019; Lai et al., 2021; Stevens et al., 2021). This was further
              supported by a study with 165 young adults, which showed a
              negative association of fecal butyrate concentrations with
              depressive symptoms (r = − 0.195) (Müller et al., 2021)
            </div>
          </div>
          <br />
          <br />
          <TitleTxt>MECHANISMS</TitleTxt>
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
              Reinforces intestinal epithelial barrier
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              The short chain fatty acid (SCFA), butyrate, is a gut-derived
              metabolite that serves as an energy source for colonic epithelial
              cells. It plays a critical role in maintaining IEB integrity
              (Rivière et al., 2016); damage to the IEB can increase the
              permeability of toxins such as the previously described LPS (Rojo
              et al., 2007; Ohlsson et al., 2019; Caso et al., 2021). In this
              regard, butyrate regulates tight junction proteins such as
              Claudin-1 (Peng et al., 2009; Wang et al., 2012; Chun et al.,
              2017; Yan and Ajuwon, 2017) and stabilizes hypoxia-inducible
              factor (HIF), an important player in maintaining gut homeostasis
              (Louis et al., 2006; Kelly et al., 2013; Shao et al., 2018).
            </div>
            <div
              style={{
                fontSize: '21px',
                fontWeight: '400',
                color: '#971A35',
              }}
            >
              ANTI-INFLAMATORY
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              Butyrate has shown promising potential in alleviating depressive
              symptoms in patients with MDD through its anti-inflammatory
              properties. One mechanism by which butyrate exerts its effect is
              by increasing the levels of extrathymic regulatory T cells
              (Tregs); this results in the increase of IL-10, a prominent
              anti-inflammatory cytokine (Arpaia et al., 2013; Park et al.,
              2015, 2019; Stilling et al., 2016). Colonic Tregs regulate
              intestinal homeostasis and control inflammation by limiting the
              proliferation of effector CD4+ T cells (Rocamora-Reverte et al.,
              2021). Additionally, studies have shown that butyrate-treated
              microglia respond to LPS stimulation by decreasing the production
              of cytokines such as TNFa and overall dampening neural
              inflammation (Park et al., 2019; Silva et al., 2020; Caetano-Silva
              et al., 2023).
            </div>
            <div
              style={{
                fontSize: '21px',
                fontWeight: '400',
                color: '#971A35',
              }}
            >
              STIMULATES THE VAGUS NERVE
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              Transcutaneous vagus nerve stimulation has been shown to suppress
              depressive symptoms in mild and severe MDD patients (Peña et al.,
              2014; Bonaz et al., 2018). Coupled with studies pointing to the
              role of butyrate in the stimulation of afferent fibers of the
              vagus nerve, another mechanism of butyrate as a marker for
              cognitive health is highlighted (Stilling et al., 2016; Cawthon
              and De La Serre, 2018). The mechanism of action has not been fully
              elucidated but research has noted that butyrate stimulates
              afferent terminals in a CCK-independent manner as opposed to long
              chain fatty acids such as oleate (Lal et al., 2001; Stilling et
              al., 2016). It is important to note that butyrate activation of
              the vagus nerve exhibits varying effects amongst individuals; some
              hypothesize that these differences are a result of altered
              expression of transporters/receptors with which butyrate interacts
              (Bruning et al., 2020). One receptor of interest is the GPR41
              found on enteric nerve fibers which interacts with SCFAs and
              allows for direct communication from the gut to the CNS (Schroeder
              and Bäckhed, 2016).
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
              src="data:image/png;base64,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EEnMIiIiIqKFhplEREREtGB8/vnnSs2gP/7xj8p6eno6fv3rXyvLd0rOaCYDRZKsdSRrHsnaR0REREQLBYNEFLDHH39cWyIiIpp+P/nJT5ThY8H6h3/4Bzz33HPaGvDuu+/CZDJpa5MjM4jkUDOHPXv24MiRI9oaERER0cLAIBEFzGg04r333tPWiIiIppfFYplUkMhmsyEuLk5bU//IcerUKW1tcp588kmXQtiy1pGseURERES0kLAmERERES0osbGxePTRR7U14NVXX8V//ud/amvBk7OZOQeIHnroIQaIiIiIaEFiJhEF7E5T9YmIiILx8ssvTyqTSGpra8OqVau0NeDpp5/GL37xC20tOCUlJXjmmWe0NSg1jmSto8n43e9+5zKFPhER0XR74IEHtCUi/xgkIiIiogVp7dq1aG5uVpZ1Op0SnAkJCVHWgxETE4OPP/5YWZZ/MJE1jiZLBonk1PlEREQzISEhAV1dXdoakX8cbkZEREQLkvMU9YODgy5DxgJVVVU1HiCSOO09ERERLWQMEhEREdGClJOTA71er60BlZWV2lLgnANL3/jGNzjTJxERES1oHG5GREREC9YLL7yAH//4x9oacO7cOWRlZWlrvjU2NiIzM1Nbg1LTSNY2uhNyuNmf/vQnbY2IiGj6JScna0tE/jFIRERERAvW8PAwvva1r+HPf/6zsi6DPhcuXFCW/cnOzsa//Mu/KMuyltEf/vAHLFu2TFknIiIiWog43IyIiIgWrPDwcJc6Qg0NDTCbzdqad++///54gEiSv4MBIiIiIlroGCQiIiKiBc292HQgBazd92HBaiIiIloMONyMiIiIFrzNmzfjjTfe0NagzFgWHR2trbn64x//qAxR+/zzz5V1WcNI1jIiIiIiWuiYSUREREQLXjDZRPJnjgCRxCwiIiIiWiyYSURERESLwne+8x20trYqyzJT6JNPPlGW3cXFxcFmsynLK1euDKiGEREREdFCwEwiIiIiWhScM4LkTGUvv/yytnbb6dOnxwNEErOIiIiIaDFhJhEREREtGvHx8fjd736nLCcnJ+O3v/2tsuywatUqtLW1KctRUVHo7+9XlomIiIgWA2YSERER0aLhnBnU0dGB+vp6bQ1obm4eDxBJzCIiIiKixYZBIiIiIlo0ZOAnLCxMW3MtYM1p74kmawTWTqu2HLyBPmbs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3erUcVy/G6k/z4PBU/Hba3U49YDoUEYuQ9gKdTamcfrt2FQs3juQfbRVbxxtRZIeYX8pt4zA3uo4x5I8Pz9Fxo+zEOtn6v8pabcn3VU4uq4CYYfOY0eOvyF5I+goTcXloyuQ+E4V1voIQnj/nH3pR8tTDymZVcG9zuE6WnZnwFKfAsNvypDqZ3as0QEz6p8tgq1eFuPW6MVnpfsM9nancW+xRsQ+dwDrTcs8zsDnU+cRlG+sBvZWoaDA3/A8b8dvQe29eehDLtb+vhCJ2la/+sQ1rARO3F7nOKbYOITdowZkbrnct4IpC4Zf/BSp8cEGiFxN6XU72Iba3fvQ1669Th7/V8Rn1en4/JZCd6gK2TlxPgJ5wV0jRAsFM4mIiIiIyCfd6kLsuFAFw940hOlFh1kGiESnK/zRQpjeacQOrwEiKRSxWcXY+ZtL2PBqEaJy9AiJvYHRVtnRlJ3ANEQdEp3q37RgZ/HtAJFvoTA8WawMO8Pp/fjXi04ddyeRpjxsbbr9vuqxW9UOZ5Ieup1FMDVfQn5FAIGSgeuwi2N2eVxzTPmtCWQffzodrxXnWAadVovz8/NirFXOj/8AkTSl7XaWkIJY8VguA3x+aQWs12fBEGyWSkCikfrCmzBk31lgIlAhkUZsqLiErc1lSNwp7gM5RMkqzqkMEMkARE4OEl89K877S9gwmQDRbIvJwtZzxYjwdj3YesevafW+lddRIQznzmPnG8V3HCCSpvS61aUg+41GZL9aiMj1cerxywCRXvyeveJ+eu8Scn0GiIgWL2YSERERERFRQPrMZoQbjX4zo1T96OpcisSkaRwadrMXtqE4xDLLY0oM9/TiZnwcgokdEtHCwiARERERERERERFxuBkRERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBERERERERERETFIREREREREREREAoNERERERERERETEIBEREREREREREQH/H/+a7/VhWtArAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
          <TitleTxt
            style={{
              marginBottom: '-30px',
              zIndex: '1',
            }}
          >
            SENSING MECHANISM
          </TitleTxt>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://media.canva.com/1/image-resize/1/704_270_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS81enItVS9NQUZ1ZDQ1enItVS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAADyqBSpVRL8M0yAgA4AZqfqTWoL4Hq1ksfyS_nEMeV5j&exp=1697080054&x-canva-quality=screen_3x&csig=AAAAAAAAAAAAAAAAAAAAANMawhtzO3RNndwuozAWTZuATXjXWHIaNguoRA6QPrjU"
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
              The biosensor design was inspired by the work of Bai et al. where
              these researchers engineered a model probiotic organism, E. coli
              Nissle 1917 (EcN, serotype O6:K5:H1) to produce and sense butyrate
              (58). The sensing system manipulates the native Type III secretion
              systems (T3SS) signaling pathways which initiates with the
              butyrate and leucine-responsive regulatory protein forming a
              binary complex which binds to the promoter region of PchA (pPchA)
              (58,59). Subsequently, PchA binds to the LEE1 promoter which
              natively initiates the transcription of the ler gene which was
              replaced by the reporter gene sfgfp in the aforementioned study
              (figure 1). In this project the reporter gene is the sgRNA and
              will replace the sfGFP gene in Bai et al (2020) study.
            </div>
          </div>
          <br />
          <br />
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
                  backgroundColor: '#971A35',
                  color: 'white',
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
                  backgroundColor: 'white',
                  color: '#971A35',
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
