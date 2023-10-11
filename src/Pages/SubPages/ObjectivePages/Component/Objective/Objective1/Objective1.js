import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './Objective1Styles';

// import IGEMLOGO from '../../../../../Img/mgemlogo.png';

export default function Objective1() {
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
            Objective #1: Developing a memory-based biological Sensing design
          </div>
        </div>
        <BodyTextContainer>
          <TitleTxt>
            CRISPR-mediated Recording to Encode Metabolite Concentration
          </TitleTxt>
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
                writingMode: 'vertical-lr',
                transform: 'rotate(180deg)',
                display: 'flex',
                justifyContent: 'end',
                padding: '15px',
                height: 'fit-content',
                fontSize: '20px',
                border: '2px solid #971A35',
              }}
            >
              HISTORY
            </div>
            <div
              style={{
                fontSize: '14px',
                width: '60%',
              }}
            >
              SCRIBE (Synthetic Cellular Recorders Integrating Biological
              Events), a strategy developed by Farzadfard and Lu (2014),
              generates intracellularly expressed single-stranded DNA (ssDNA) in
              response to various regulatory signals. The ssDNAs are recombined
              into genomic DNA at specific loci by coexpressed recombinases,
              resulting in precise point mutations which accumulate as a
              function of signal magnitude and duration. However, due to its
              limited recombination rate, SCRIBE requires actively dividing
              cells to achieve population-memory; the platform is more suitable
              for recording across collective genomes of cellular populations,
              rather than editing at the single-cell level (Farzadfard and Lu,
              2014).
              <br />
              <br />
              To overcome this dependence on large cell populations, Tang and
              Liu (2018) developed two CRISPR-mediated analog multi-event
              recording apparatus (CAMERA) systems, enabling analog recording
              within each cell. The systems use the CRISPR-Cas9 nuclease and
              Cas9-derived base editors, which are expressed on writing plasmids
              in response to stimuli of interest, to generate permanent DNA
              sequence modifications at guide RNA-specific loci on recording
              plasmids (Tang and Liu, 2018). Both systems achieved stable
              recording of the amplitude or duration of various signals; this
              can be extended to record multiple metabolite concentrations
              through assignment of associated mutations to unique locations on
              the plasmid. The ratio of edited to unedited DNA on these
              recording plasmids were shown to accurately record the duration
              and intensity of both chemical and light-based stimuli.
              <br />
              <br />
              The DNA-based Ordered Memory and Iteration Network Operator
              (DOMINO) is another genetic based recording platform that uses
              CRISPR base-editing technology to manipulate DNA in response to
              signals of interest (Farzadfard et al., 2019). By linking the
              guide RNA and the Cas9 complex to separate inducible promoters,
              the system can be controlled by an operational signal and another
              independent input, thereby forming a DOMINO operator that can only
              generate mutations when both inducers are present
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
              }}
            >
              <div
                style={{
                  writingMode: 'vertical-lr',
                  padding: '15px',
                  fontSize: '20px',
                  border: '2px solid #971A35',
                  height: 'fit-content',
                }}
              >
                CAMERA & DOMINO
              </div>
            </div>
          </div>
          <br />
          <TitleTxt>Applicability to Ingestible Biosensor Design</TitleTxt>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                writingMode: 'vertical-lr',
                transform: 'rotate(180deg)',
                display: 'flex',
                justifyContent: 'end',
                padding: '15px',
                height: 'fit-content',
                fontSize: '20px',
                border: '2px solid #971A35',
              }}
            >
              BENEFITS
            </div>
            <div
              style={{
                fontSize: '14px',
                width: '60%',
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
              }}
            >
              <div
                style={{
                  writingMode: 'vertical-lr',
                  padding: '15px',
                  fontSize: '20px',
                  height: 'fit-content',
                }}
              ></div>
            </div>
          </div>
          <br />
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
            <img src="https://static.igem.wiki/teams/4751/wiki/design2.png" />
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
            <img src="https://static.igem.wiki/teams/4751/wiki/design3.png" />
            <br />
            <img src="https://static.igem.wiki/teams/4751/wiki/design4.png" />
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
