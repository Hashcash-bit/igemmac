import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './Objective3Styles';

export default function Objective3() {
  return (
    <div
      style={{
        height: 'max-content',
      }}
    >
      <Container>
        <TopBar src="https://static.igem.wiki/teams/4751/wiki/mgemlogo.png" />
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
            }}
          >
            Objective #3: Pill Design
          </div>
        </div>
        <BodyTextContainer>
          <TitleTxt>
            Structure of a 5 compartment ingestible pill design
          </TitleTxt>
          <div
            style={{
              display: 'flex',
              // justifyContent: 'center',
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
              As the sensing systems must be ingested for adequate sensing of
              gut metabolite, a pill must be designed to allow for the
              compartmentalization of several sensing systems while eliminating
              the risk of bacterial translocation from the pill to the GI tract.
              We propose a theoretical blueprint of a five compartment pill
              design using a bacteria cellulose scaffold to allow for adequate
              diffusion of gut metabolites through the pill and its different
              compartments while entrapping the E. coli sensing system.
            </div>
          </div>
          <br />
          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            K12 STRAIN E. COLI: DH5A
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  border: '4px solid #971A35',
                  width: '60%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://static.igem.wiki/teams/4751/wiki/design7.png"
                  style={{
                    width: '30%',
                  }}
                />
                <div
                  style={{
                    fontSize: '14px',
                    width: '60%',
                  }}
                >
                  When creating an ingestible pill there is a myriad of things
                  that we must consider for example:
                  <br />
                  1. Outer Coating to protect contents from the harsh conditions
                  of the GI tract
                  <br />
                  2. Inner coating to allow for the transfer of metabolites and
                  entrapment of E. coli sensing systems
                  <br />
                  3. Size of the pill (Safety Considerations)
                </div>
              </div>
            </div>
          </div>
          <br />
          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            OUTER COATING: ENTRIC COATING
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
                paddingLeft: '15%',
              }}
            >
              While traversing the GI tract the pill and interior contents will
              encounter many stresses that might influence the sensing of the
              bacteria. One major concern with ingestible biosensors is the
              potency of stomach acid that might cause damage to the system. A
              common method of addressing this issue is by creating an enteric
              coating for example, a pH-sensitive layer of Eudragit® L100 is a
              common coat. A study by Paz et al, (2022) highlighted that 3
              layers of Eudragit® L100 coating protected their ingestible
              biosensor for more more than 20 hours in acidic artificial gastric
              fluid. By coating the pill with this protective layer, the
              contents of the pill should remain undisturbed for its entire
              journey through the GI tract.
            </div>
          </div>
          <br />
          <br />

          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            INNER COATING: BACTERIAL CELLULOSE
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
                paddingLeft: '15%',
              }}
            >
              To promote ease of extraction and isolation of specific sensing
              systems from the pill to obtain concentrations of metabolites
              independent from one another, our team proposes a 5 compartment
              scaffolding design within the pill. This scaffold will be composed
              of bacterial cellulose-based polymer nanocomposites which are
              porous but will not be degraded in the digestive tract. The
              advantage of using bacterial cellulose is that it is natively
              composed of fine pores spanning from 0.02-10 µm depending on
              preparation methods. Most e coli bacteria are 1.0-2.0 µm long,
              with radius about 0.5 µm thus, they are too large and impermeable
              to the cellulose-based scaffold. Furthermore, the pores are large
              enough to allow for the passive diffusion of smaller compounds
              such as glucose (0.001 µm) and our gut metabolite biomarkers. For
              designing the pill, we would use type-I cellulose which exhibits
              high crystallinity (increased hardness and density), thermodynamic
              stability, and high flexibility and tensile strength (Young
              modulus of 15–18 GPa) to allow the pill to overcome to high
              stress-inducing environment of GI tract due to peristalsis. It is
              also important to note that the use of bacterial cellulose
              supports our goal of prioritizing safety due to its biocompatible,
              biodegradable, and non-toxic nature.
            </div>
          </div>
          <br />
          <br />
          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            SIZE OF THE PILL
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
                paddingLeft: '15%',
              }}
            >
              An important consideration is the size of the pill which will
              house the sensing components of our system. This variable will
              influence both the patient experience as well as plasmid quantity
              after extraction of the pill. After synthesis of relevant pill
              based therapeutics such as “pillcam“ by Gossum et al. 2009, we
              found that the upper limit of pill sizes are 11mm x 26 mm. This
              will allow for a total volume of 2.122 mL within the pill.
              Considering our 5 compartment system, this allows for a volume of
              upwards of 0.424 mL per compartment, which is an adequate volume
              for growth of E. coli granted that proper nutrition is available.
            </div>
          </div>
          <br />
          <br />
          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            SCHEMATIC OF THE PILL
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://static.igem.wiki/teams/4751/wiki/design8.png"
              style={{
                width: '700px',
                border: '4px solid #971A35',
              }}
            />
          </div>
          <br />
          <br />
          <TitleTxt>IMPLEMENTATION</TitleTxt>
          <br />
          <br />
          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            PATIENT EXPERIENCE
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
                paddingLeft: '15%',
              }}
            >
              Our vision of the construction of the BacTract pill, is that the
              pill will be ingested by participants and traverse the Alimentary
              canal starting from the mouth to the anus until it is inevitably
              excreted. Our pill construction is similar in size as the PillCAM
              COLON’s design where the mean and median transit times in the
              gastrointestinal tract (from mouth to anus) were 4 hours 51
              minutes and 4 hours 1 minute, respectively. Furthermore, it was
              also found that the pill’s capsule transit times in the colon of
              patients who excreted the capsule within 10 hours after ingestion
              were 2 hours 8 minutes and 1 hour 18 minutes. Therefore, after
              ingestion of the pill, stool samples of participants will be
              monitored by trained staff of the study and delivered to a lab for
              further testing.
            </div>
          </div>
          <br />
          <br />
          <div
            style={{
              fontSize: '28px',
              fontWeight: '400',
              paddingLeft: '15%',
              color: '#971A35',
            }}
          >
            IN THE LAB
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
                paddingLeft: '15%',
              }}
            >
              When the pill arrives in the lab, each compartment can be isolated
              to allow for independent growth of each metabolite sensing system.
              Since base pair mutations induced by the CAMERA-DOMINO system are
              on recording systems and sgRNA are specific to only the write
              plasmids, there should not be significant difference in growth
              rates between bacteria with edited plasmid compared to non-edited
              plasmids. Therefore these bacteria can be grown in liquid media
              and their respective plasmids can be extracted and isolated. After
              extraction of the recording plasmid, EGFP will be amplified in
              PCRhigh throughput testing to measure the ratio of edited to
              unedited plasmids and the specific mutation sites of interest.
            </div>
          </div>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
