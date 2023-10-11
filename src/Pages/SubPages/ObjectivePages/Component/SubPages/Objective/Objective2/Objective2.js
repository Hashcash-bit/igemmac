import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './Objective2Styles';

import IGEMLOGO from '../../../../../Img/mgemlogo.png';

export default function Objective2() {
  return (
    <div
      style={{
        height: 'max-content',
      }}
    >
      <Container>
        <TopBar src={IGEMLOGO} />
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
            Objective #2: Five sensing systems for Five biomarkers for MDD
          </div>
        </div>
        <BodyTextContainer>
          <TitleTxt>CHASSIS SELECTION</TitleTxt>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
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
              As our biosensor utilizes a molecular recording mechanism that is
              genetically designed and engineered into bacteria, selecting an
              appropriately advantageous bacteria is crucial. Within the gut,
              many commensal bacteria exist in varying abundances, which can be
              influenced by external factors such as diet, antibiotic use, age,
              and lifestyle. In adults, three main bacterial phyla dominate
              microbiota diversity: Firmicutes, Bacteroidetes, and
              Actinobacteria. However, most intestinal bacteria are deemed
              unculturable or difficult to culture, due to a lack of functional
              information and characterization.
            </div>
          </div>
          <br />
          <div
            style={{
              display: 'flex',
              width: '100%',
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
              <img src="https://media.canva.com/1/image-resize/1/235_205_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS90T3dGRS9NQUZ2d290T3dGRS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAJXfpypfeMxqL3Jq15SXXoGD9THa48eg4NSuPDZ2u_Pg&exp=1696994058&x-canva-quality=screen_3x&csig=AAAAAAAAAAAAAAAAAAAAAE1fljrCe518mO4YCV5_lLH53F2_fyQwTjD8kYe-X0ix" />
              <div
                style={{
                  fontSize: '14px',
                  width: '60%',
                }}
              >
                In adults, three main bacterial phyla dominate microbiota
                diversity: Firmicutes, Bacteroidetes, and Actinobacteria.
                However, most intestinal bacteria are deemed unculturable or
                difficult to culture, due to a lack of functional information
                and characterization.
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
            K12 STRAIN E. COLI: DH5A
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
              The use of these genetic recording methods holds great potential
              for ingestible biosensing systems for several reasons. First,
              genetic readouts are more robust against temporal degradation;
              unlike fluorescent markers which have limited longevity due to
              protein degradation, base editing outputs remain constant for much
              longer (Corish and Tyler-Smith, 1999). Thus, the relationship
              between the initial stimulus intensity and output reading is not
              confounded by the time at which the output is measured. Second,
              CAMERA was shown to be functional across a range of conditions; it
              achieved recording multiple stimuli in both bacteria and mammalian
              cells, and maintained reliable readouts to multicopy plasmids in
              samples ranging from 10 to 100 cells (Tang and Liu, 2018).
              Therefore, base editing ratios remain stable after cell death and
              are passed down through bacterial generations.
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
            SAFETY CONCERN AND CONSIDERATIONS
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
              A reasonable safety concern lies in the potential exposure and
              contamination of our engineered bacteria to the gut environment,
              should our biosensor be defective. Many intestinal illnesses occur
              due to pathogenic E. coli having hair-like appendages known as
              pili or fimbriae which are used to attach to and invade intestinal
              cells. However, since its isolation in 1922, laboratory K-12
              strains are unable to synthesize their O antigen, no longer carry
              the F plasmid or bacteriophage λ, and have lost the ability to
              produce many surface-associated structures. Thus, in the rare
              chance that the barrier between the capsule and lumen is breached,
              these bacteria cannot survive in the lumen, and also no longer
              have the ability to attach to intestinal cells, effectively
              decreasing their chance of survival or proliferation.
            </div>
          </div>
          <br />
          <div
            style={{
              display: 'flex',
            }}
          >
            <div></div>
            <div></div>
          </div>
          <TitleTxt>Our Design</TitleTxt>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              Based on this previous work, we propose a genetic reporter system
              with E coli. as the chassis (Figure 3A). The system utilizes a
              second-generation base-editor (BE2) composed of a catalytically
              dead Cas9 protein (dCas9) which cannot cleave DNA fused to a
              cytidine deaminase (CDA); Cas9 is directed to specific DNA
              targets, where CDA induces a CG to AT mutation. Together, they
              enable programmable editing of a specific base with no detectable
              off-target editing, and minimal formation of indel mutations
              (Komor et al., 2016; Tang and Liu, 2018; Luo et al., 2020).
            </div>
            <br />
            <img src="https://media.canva.com/1/image-resize/1/835_158_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS80QWoyRS9NQUZ2ckc0QWoyRS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEDa1KaggIrlwCbsXXgLm9T2yFak61Ph-RKOMxufx_f9&exp=1696977968&x-canva-quality=screen_2x&csig=AAAAAAAAAAAAAAAAAAAAAI45zKkaguKWMIdg-s1nf8FpGzAQdJaMq5X5RTryZ4iT" />
            <br />
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              The dCas9 relies on single guide RNA (sgRNA) to precisely target
              editing sites on specialized recording plasmids, which function
              only to record mutations (Komor et al., 2016). These recording
              plasmids which are well established, contain a gene for an
              enhanced green fluorescent protein (GFP), but with a premature
              stop codon that prevents the production of the protein; an
              approach which was successfully validated in the CAMERA systems
              (Tang and Liu, 2018). BE2 also includes a uracil-DNA glycosylase
              inhibitor (ugi) to potently block cellular repair machinery which
              may undo base editing (Farzadfard et al., 2019; Volke et al.,
              2022). The expression of these two components will be linked to
              two separate promoters: riboflavin will induce the expression of
              BE2 through the LEE1 promoter (PLEE1), while a metabolite of
              interest will induce the expression of sgRNA (Figure 3B&C).
            </div>
            <br />
            <img src="https://media.canva.com/1/image-resize/1/821_137_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9SVFpJZy9NQUZ2ckJSVFpJZy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAOU2b1hYPNPa9NnR4N0O_nvo58BGw_p875w79XLFJpU0&exp=1696977662&x-canva-quality=screen_2x&csig=AAAAAAAAAAAAAAAAAAAAAMFoQv3JH6mlP-h4VeYRAJXf1X71dcFhR4mkE_wmUDCA" />
            <br />
            <img src="https://media.canva.com/1/image-resize/1/830_256_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS94LTk1OC9NQUZ2ckF4LTk1OC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAFT43x6uirw4DJKTtMMMdr8o7eYtVw9dzZdaSeaarwxn&exp=1696976298&x-canva-quality=screen_2x&csig=AAAAAAAAAAAAAAAAAAAAAObh2gJe9DoL6NL1Tinyj142o9rnvsbYvxi4QAVdBUFc" />
            <br />
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              As shown in Figure 3C, once both BE2 and sgRNA have been produced,
              they will form a complex and initiate base editing at the target
              specified by the sgRNA sequence (Komor et al., 2016). Finally,
              PLEE1 will also induce the expression of a separate sgRNA with a
              different base editing target site. The rationale for these design
              choices will be explained in detail in the subsequent sections.
            </div>
          </div>
          <br />
          <TitleTxt>PROMOTER SYSTE</TitleTxt>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
