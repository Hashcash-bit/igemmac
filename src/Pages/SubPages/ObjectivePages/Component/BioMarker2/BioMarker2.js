import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './BioMarker2Styles';

export default function BioMarker2() {
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
              BioMarker 2
            </div>
            <div
              style={{
                fontSize: '49.2px',
                fontWeight: 'bold',
                color: '#971A35',
                paddingLeft: '50px',
              }}
            >
              Indole
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
              Our team first attempted to measure serotonin levels as one of our
              biomarkers however due to the lack of validated methods to measure
              serotonin through microbial sensing mechanisms as well as
              contradictory evidence in the literature of its correlation with
              MDD. We decided to measure it indirectly by exploring the
              tryptophan pathway.
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
              THE PROBLEM: SERATONIN
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              The link between serotonin (5-HT) and MDD was initially supported
              by studies on serotonin depletion in cerebrospinal fluid (CSF)
              (Cheetham et al., 1991) and reduced serotonin uptake in depressed
              patients (Healy and Leonard, 1987). However, a collection of
              recent meta-analyses evaluated by Moncrieff et al. (2022) via
              sensitivity analysis, revealed no significant distinction in 5-HT
              levels between individuals with and without depression,
              challenging the link between 5-HT and MDD. Other studies found no
              statistical significance between MDD and healthy controls to
              serotonin metabolites such as 5-HIAA in the CSF (Ogawa et al.,
              2018; Pech et al., 2018). Furthermore, 5-HT1Areceptors which
              antagonize serotonin and thus are expected to exhibit a heightened
              binding activity in depressed individuals compared to healthy
              controls (Moncrieff et al., 2022), was not supported; many studies
              indicated reduced receptor activity in MDD patients (Nikolaus et
              al., 2016; Wang et al., 2016).
              <br />
              <br />
              Additionally, bacterial sensors for serotonin have remained
              challenging to integrate into our proposed biosensor function.
              Previously created sensors have been nonspecific and inhibitory to
              gene expression (Kumar et al., 2020), not been tested as
              biosensors (Knecht et al., 2016), or had overly complicated
              pathways that were ill-suited for our design (Lengger et al.,
              2022; Huang et al., 2005). Thus, due to conflicting findings on
              serotonin-MDD association and sensing system development
              difficulties, we find that it is more advantageous to pursue
              alternative metabolites in the tryptophan pathway. Yet, after
              optimization of our biosensor, further clinical in vivo studies
              can be conducted to better elucidate the relationship between
              serotonin and MDD.
            </div>
            <div
              style={{
                fontSize: '21px',
                fontWeight: '400',
                color: '#971A35',
              }}
            >
              THE SOLUTION: INDOLE
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              Indole, an intercellular signaling molecule fundamental to the gut
              microbiome, facilitates a host of functions including drug
              resistance, plasmid stability, biofilm formation, and virulence
              control in pathogenic bacteria (Lee & Lee, 2010). Indole enhances
              IEB barrier integrity by augmenting the expression of genes for
              tight junctions, the actin cytoskeleton, and adherens junction
              (Bansal et al., 2010; Shimada et al., 2013). Additionally, indole
              plays a role in the balance of both proinflammatory
              anti-inflammatory effects (Al-Sadi & Ma., 2007; Bansal et al.,
              2010).
            </div>
          </div>
          <br />
          <br />
          <TitleTxt>METABOLITE X MDD</TitleTxt>
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
              The overproduction of indole by gut microbiota was observed to
              induce consistent anxiety-like behavior and mood disorders in rats
              and mice (Jaglin et al., 2018; Mir et al., 2020). Germ free rats
              with indole-producing bacteria demonstrated helplessness and
              anxiety-like behavior (Jaglin et al., 2018).
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
              TRYPTOPHAN PATHWAY
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              In a study in 2018 by Jaglin et al. it was seen that high levels
              of indole-producing bacteria resulted in heightened anxiety and
              depressive symptoms. It was suggested that indole’s mechanism of
              action was through excessive microbial tryptophan metabolism which
              disrupted host synthesis of serotonin and kynurenine (Jaglin et
              al., 2018). In addition, indole was found to induce a dramatic
              increase of the expression of the adrenomedullary Pnmt gene, which
              is involved in catecholamine biosynthesis, exhibiting an increased
              vulnerability of male mice to the adverse effects of chronic mild
              stress on emotional behaviors (Mir et al., 2020).
              <br />
              <br />
              Additionally, bacterial sensors for serotonin have remained
              challenging to integrate into our proposed biosensor function.
              Previously created sensors have been nonspecific and inhibitory to
              gene expression (Kumar et al., 2020), not been tested as
              biosensors (Knecht et al., 2016), or had overly complicated
              pathways that were ill-suited for our design (Lengger et al.,
              2022; Huang et al., 2005). Thus, due to conflicting findings on
              serotonin-MDD association and sensing system development
              difficulties, we find that it is more advantageous to pursue
              alternative metabolites in the tryptophan pathway. Yet, after
              optimization of our biosensor, further clinical in vivo studies
              can be conducted to better elucidate the relationship between
              serotonin and MDD.
            </div>
            <div
              style={{
                fontSize: '21px',
                fontWeight: '400',
                color: '#971A35',
              }}
            >
              INDOLE DERIVITIVES FUNTIONS
            </div>
            <div
              style={{
                fontSize: '14px',
              }}
            >
              Indoxyl-3-sulfate, a marker for indole production by intestinal
              microbiota, was found to be positively correlated with anxiety in
              patients with MDD, possibly due to its role in connecting the
              right premotor region to the subcallosal cingulate cortex, a
              region responsible for emotional stimuli (Brydges et al., 2021;
              Philippe et al., 2021). Disruption of the balance of the
              intestinal serotonergic system can also contribute to gut
              inflammation. Alistipes, an indole-positive species that limits
              serotonin production, was found in abundance in MDD patients and
              proposed to be associated with gut inflammation (Jiang et al.,
              2015). In a study by Delgado et al. (2022), lower levels of the
              indole derivative indole-3-carboxaldehyde, was correlated with
              increased severity of depressive symptoms in obese patients with
              depression.
              <br />
              <br />
              Given the importance of various indole derivatives, as well as the
              need for the detection of a metabolite within the stool rather
              than serum (Candeliere et al., 2022), we decided to pursue indole
              as an indicator for MDD.
            </div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIkAAAB6CAYAAAA7+wP8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAADTaSURBVHhe7d0HdBTl1wbwG6SEElqQEnov0hOK9N6LggiiNKUJisongiKKgIqIKM2CBfGPCCgoIL33EkBAirQAIYTeQq/7zXMzEzbL7mYTshCS53dOTnZmJ7szszN7eC/33tfHZhAiIiIiIiIiIkrSkpm/iYiIiIiIiIgoCWOQiIiIiIiIiIiIGCQiIiIiIiIiIiIGiYiIiIiIiIiIyMAgERERERERERERMUhEREREREREREQMEhERERERERERkYFBIiIiIiIiIiIiYpCIiIiIiIiIiIgYJCIiIiIiIiIiIgODRERERERERERExCARERERERERERExSERERERERERERAYGiYiIiIiIiIiIiEEiIiIiIiIiIiJikIiIiIiIiIiIiAwMEhEREREREREREYNERERERERERETEIBERERERERERERkYJCIiIiIiIiIiIgaJiIiIiIiIiIiIQSIiIiIiIiIiIjIwSERERERERERERAwSERERERERERERg0RERERERERERGRgkIiIiIiIiIiIiBgkIiIiIiIiIiIiBomIiIiIiIiIiMjAIBERERERERERETFIREREREREREREDBIREREREREREZGBQSIiIiIiIiIiImKQiIiIiIiIiIiIGCQiIiIiIiIiIiIDg0RERERERERERMQgERERERERERERMUhEREREREREREQGBomIiIiIiIiIiIhBIiIiIiIiIiIiYpCIyKsijobL5eOnzKVH49rZc3IhJNRcSpzu3r4jx7fuELHZzDVJw6Xwk3rsSUFSOlYiIiIiokfFx2YwHxMlKNfOXZA5L7+pj5v/9JWkzpxRHztz+9p1Wdp/mIRv3i4tfxkjmQvlN5+5HwabB+YtlYMLl8vJ7bvkzo2bkipDesle9ikp0rKRFGxQU1L6pTO3tmPcKus+/1o2j58o9T7/QEo838J8wgVj++BxE43X9pPSHduYK10wt10/8mupNbS/2+13T58tS/oNkaDeXaRKv17GXexjPuPcvtmL5OSOXVJ1QB9JlvwJc61z2HbB6+9JuW4v6vZ3b91yel7PHTgkszr2kYCgMlL3s/cleWpf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"
              alt=""
            />
          </div>
          <TitleTxt
            style={{
            //   marginBottom: '-30px',
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
              We propose adopting the indole responsive gene expression system
              designed by Matulis et al. (2022) for our ingestible biosensor as
              described below.
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://media.canva.com/1/image-resize/1/771_265_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9velAzQS9NQUZ2Q2pvelAzQS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAHVPhkCnlDy71zVzMxEBTb_IJPixqguPjD3hP3tdtobP&exp=1697081243&x-canva-quality=screen_3x&csig=AAAAAAAAAAAAAAAAAAAAAEjxkKolEIL_sZhSwP6qY5jb4GnpKfOppMajo8sU7Two"
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
              Indole binds to PP_RS00430, inducing the expression of
              transcription factor (TrpI) allowing for the expression of
              tryptophan synthase subunits, now substituted with sgRNA located
              after the promoter PP_RS00425 (Matulis et al., 2022),
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
                  backgroundColor: '#971A35',
                  color: 'white',
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
