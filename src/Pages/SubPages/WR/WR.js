import React from 'react';
import styled from 'styled-components';
import TopSection from '../../Components/TopSection/TopSection';
import SubNavbar from '../Components/SubNavbar/SubNavbar';
import Footer from '../../Components/Footer/Footer'

const Banner = styled.div`
  background-size: cover;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageIn = styled.img`
  margin-top: 30px;
`

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  padding: 0 30px;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 0;
  width: 20%;
  height: 100vh;
  overflow: auto;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  width: 80%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Topic = styled.p`
  cursor: pointer;
  font-weight: bold;
`;

const SubTopic = styled.p`
  cursor: pointer;
  margin-left: 20px;
`;

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function WR() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        backgroundColor: '#dda7a2',
        marginTop: '50px',
      }}
    >
      <SubNavbar />
      <Banner>
        <Title>IHR & Womens Rights</Title>
      </Banner>
      <Container>
        <Sidebar>
          <Topic onClick={() => scrollTo('section1')}>Introduction</Topic>
          <Topic onClick={() => scrollTo('section2')}>Women’s Health: A Patriarchal Obsession</Topic>
          <Topic onClick={() => scrollTo('section3')}>Social Determinants of Gender-specific MDD</Topic>
          <SubTopic onClick={() => scrollTo('sub-section1')}>
            - Gender-Based Risk Factors and Needs
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section2')}>
            - Intimate Partner Violence and Sexual Assault
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section3')}>
            - Caregiving
          </SubTopic>
          <Topic onClick={() => scrollTo('section4')}>Puberty and Postpartum Influence on MDD</Topic>
          <SubTopic onClick={() => scrollTo('sub-section4')}>
            - Puberty
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section5')}>
            - Social Factors of PPD
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section6')}>
            - Biological Factors of PPD
          </SubTopic>
          <Topic onClick={() => scrollTo('section5')}>Gender Differences in Effects and Access to Drugs</Topic>
          <Topic onClick={() => scrollTo('section6')}>Overdiagnosis of Women</Topic>
          <Topic onClick={() => scrollTo('section7')}>Inclusivity</Topic>
          <Topic onClick={() => scrollTo('section8')}>The Gut Microbiome: Differences Between the Sexes</Topic>
        </Sidebar>
        
        <Content>
          <Section id="section1">
            <h2>Introduction</h2>
            <p>
            Despite comprising nearly 49.7% of the 2023 global population, women have undergone historic neglect within the medical field, both regarding their physical and mental health (United Nations). The attitudes towards women needing assistance has ranged from apathy, due to their ‘lesser station’ in society, to weaponizing said illnesses in women in an attempt to reinforce gender stereotypes (Stewart et al, 2021). Sentiments in the medical field also arose which simply saw women as “lesser men,” such that men were considered the default within medicine, and research was done primarily on men (Albert, 2015). Thus, treatments for women were often haphazardly modified to suit women, often not considering the nuances between the two sexes. Women have also been forced out of positions of authority within the medical field, allowing solely men to navigate the world of women’s health, often guided by their own gender biases.
        	<br /><br />Women’s mental health, in particular, has been an area of great historical contention. Women, often viewed as more ‘emotional’ and ‘irrational’ than their male counterparts, were seen as weak-willed in the face of mental illnesses, such as depression. Thomas Aquinas, an influential middle-aged philosopher, suggested that ‘the woman is a failed man’, a sentiment that has persisted, perhaps in less direct terms, in the modern day. The word ‘hysteria’ arises from the word ‘uterus’ (Tasca et al, 2012). ‘Hysteria’, which, in the modern day, we can understand as forms of mental illness, was exclusively seen as a female disease, and instead of women being treated, their diagnosis was instead used as a means to keep them out of areas of influence and uphold the patriarchal status quo of male dominion.
        	<br /><br />The purpose of this paper is to examine depressive disorders in context to women, primarily focusing on the struggles of cisgendered women. As women are more likely to develop Major Depressive Disorders today, our team aims to illuminate the historic injustices women have faced and how history actively influences our modern day treatment of women struggling with MDD. As the specific issues women face have often been neglected in academic research, we also wish to highlight how said issues can also contribute to MDD. This paper is an essential aspect of our exploration of  integrative human practices, as we aim to create a product for societal good.
            </p>
          </Section>
          <Section id="section2">
            <h2>Women’s Health: A Patriarchal Obsession</h2>
            <p>
            In Western society, Victorian Psychiatry defined the mid to late 1800s (Tasca et al., 2012). Asylums had been developed for moral management, where mental health was restored. Female patients were often deemed more vulnerable to ‘insanity’ on account of their different reproductive organs and sexual abnormality (Tasca et al, 2012). This was justified at the time through an assumed sympathetic connection between the brain and uterus which made them more susceptible to mental illness (Blantford, 1981). In reality, women were largely experiencing depression due to the environmental and social conditions they were surviving within. Husbands were capable of deeming their wife to be suffering from mental illness and send them to asylums if they acted outside of social norms or in contradiction to their expectations (Tasca et al, 2012). This was recognized as ‘female hysteria’.
            <br /><br />Psychiatric Darwinism, or the evolutionary theory of psychiatry, emerged as inspiration from Darwinian theory (Tasca et al, 2012). Mental illness and the case of ‘insanity’ was thought to have a physical cause, inspired by Darwinian theories. The concept was that women gave away significant energy during their reproductive processes and were thus handicapped and intellectually stunted. The Evolution of Sex (1854) by Geddes and Thompson suggested that men, like the sperm, were competitive and inventive; Women were placid, nurturant, and submissive like the ovum. Mental illness would begin if women defied this ‘nature’, which consisted of acting with the similar freedoms as a man or simply having more personality than what is socially acceptable (Tasca et al, 2012).
            <br /><br />As the 1900s approached, Psychiatric Modernism became what reigned in how women’s mental health was defined (Tasca et al, 2012). Freud’s ideas of female sexuality lead to the psychoanalytic theory of penis envy, for which women longed to have the same reproductive organs as men rather than their own which Freud deemed to provide less gratification, contributing to an overall depression in women (Steen, 1991). Karen Horney, a German psychoanalyst at the time, discussed how this idea ignored the male envy of pregnancy and mothering. Regardless, the treatments for the mentally ill became lobotomy, insulin therapy, and electrical shock. Yet, when WW1 approached, men developed something akin to male “hysteria.” The reasoning for such symptoms were derived to be the lack of feeling control over their lives when in the trenches (Tatu and Bogousslavsky, 2017). This was because they were in the same narrow domestic and sexual spaces that the women of the 19th century were in  (Tatu et al., 2017). Psychotherapy could be used to analyze their feelings of terror and disgust which turned into physical symptoms; This idea aided the view of women in mental health as well. The Divided Self (1960) by R.D Laing brought a humanistic perspective to the history of female mental illness by recognizing how schizophrenia arose as a social process and not an organic disease. This promoted the shift towards mental illness being examined in terms of its social context  (Tatu and Bogousslavsky, 2017).
            </p>
          </Section>
          <Section id="section3">
            <h2>Social Determinants of Gender-specific MDD</h2>
            <p>
            Over the past decade, the investigation of social determinants in gender-specific MDD has become a noteworthy topic of research as discussions of non-medical factors influencing health emerged and evolved . According to a meta-analysis conducted in 2023 by the WHO, depression is approximately 50% more common in women than men, with more strain on women in low and middle income countries. The finding poses the question, “why is depression more prevalent in women than men from a socioeconomic standpoint?”. The interaction between social determinants and biology is nuanced, as it involves not only individual psychology, but also its interaction with the varying external environments such as social environment and support availability. There are several main contributors to gender-specific MDD including: social triggers, intimate partner violence, and caregiver burden (Mental Health America).
            </p>
            <p id="sub-section1">
            <b>3.1 Gender-Based Risk Factors and Needs</b>
            <br /><br />Risk factors for MDD are strongly influenced by societal expectations and values. A study that matched 1057 opposite sex dizygotic twin pairs examined the gender-specific risk factors for MDD independent of genetics and the familial environment (Kendler and Gardner, 2014); Of the 20 factors examined, 11 differed across sexes (Figure 1).The result suggests that women are more heavily impacted by interpersonal loss and a lack of caring relationships, which may be a result of women having larger social networks and being more emotionally involved in their networks (Kendler and Gardner, 2014). Whereas men are more heavily impacted by the internal conflicts associated with a lack of self-worth and failure to meet goals (Kendler and Gardner, 2014).
            <br /><br />The varying MDD risk factors highlight the need for gender-specific social support and treatment options for individuals with MDD. Further evidence can be seen in another study examining the gender differences in social support needs among adolescents and young adults. Qualitative and validated instruments for measuring depressive symptoms and social support were administered to 105 people (Martinez-Hernaez et al, 2016). It was found that men more likely prefer support that helps them maintain self-control in light of reducing consumption of psychoactive substances such as tobacco. Contrastingly, women preferred seeking social-emotional support such as speaking with friends, which in turn allows them to gain a better understanding of their source of distress (Martinez-Hernaez et al, 2016). Overall, the difference in risk factors and social support needs prompts for the exploration of other gender-related factors that may influence the onset and development of MDD.
            <ImageIn src='https://static.igem.wiki/teams/4751/wiki/wrfigure1.png' alt='Figure1' />
            </p>
            <p id="sub-section2">
            <b>3.2 Intimate Partner Violence and Sexual Assault</b>
            <br /><br />Intimate Partner Violence (IPV) is a type of domestic violence against an individual in a close relationship. It involves but is not limited to physical, sexual, and emotional abuse, which may present as intimidation, insults, and manipulation, among others (Govt. of Canada). Women have been seen to experience higher rates of IPV due to stereotypical gender norms and higher susceptibility to controlling behaviors. A 2012 meta-analysis that examined the association between IPV and MDD in women, found a moderate to strong correlation between the two (Beydoun et al, 2012). The study suggests that women who experienced IPV are at two to three times more risk for MDD compared to non-exposed women. Furthermore, a substantial portion of MDD as well as peripartum depression can be attributed to long term IPV exposure. The study sheds light upon IPV prevention as a target for reducing MDD risk among women and calls for the development of IPV prevention and mitigation interventions (Beydoun et al, 2012).
            </p>
            <p id="sub-section3">
            <b>3.3 Caregiving</b>
            <br /><br />There are numerous other social factors that contribute to MDD development, such as caregiving burden. Specifically, in many cultures settings, women are required to take on the role as primary caregivers for elders in the family (Sharma et al, 2016). Estimates across various countries suggest that 57% to 81% of all caregivers of the elderly are women (Sharma et al, 2016). Women with caregiving responsibilities are found to be at higher risk for depressive symptoms and have generally poorer self-rated health. There is no recorded correlation between socioeconomic status and depressive symptoms caused by caregiving. This finding suggests that caregivers less satisfied with their living conditions are likely to experience depressive symptoms, as the act of caregiving puts great emotional strain on all women regardless of their socioeconomic status (Sharma et al, 2016).
            <br /><br />Needless to say, the investigation of social factors related to MDD is a crucial and ongoing process. It is important to note that the contributors mentioned in the report only address some of the important factors, as the risk factors vary greatly among individuals and countries. However, the existing research acts as valuable resources that can aid in the development of gender-based MDD prevention and support interventions.

            </p>
          </Section>
          <Section id="section4">
            <h2>Puberty and Postpartum Influence on MDD</h2>
            <p id="sub-section4">
            <br /><br /><b>4.1 Puberty</b>
            <br /><br />MDD has both extrinsic and biological origins. In comparison with other age groups, MDD has been shown to be more prevalent amongst children undergoing pubertal changes (WHO). These changes occur from ages 8-13 in females and 9-14 in males (Mullen et al, 2018). Certain studies point to significant incidental physical, hormonal, and psychological shifts that bring forth emotional stress on adolescents, thus contributing to MDD. Within these psychosocial changes, there may be emergence of self-satisfaction due to the increase in comparison with others as in academic and physical senses. Additionally, it has shown that parent-child relationships begin to evolve substantially during these years due to increased external norms exerted from school and other agents of socialization (Mullen et al, 2018). Such shifts may also contribute to a lowered self-esteem, lack of stress coping systems, and thus major depressive disorder.
 
            <br /><br />In terms of female growth and development, many studies have hypothesized the connection between hormonal changes and the onset of depression. Puberty in females begins with breast growth, menstruation, and increases in luteinizing hormone (LH),  follicle-stimulating hormone (FSH), estrogen, and progesterone (Breehl and Caban, 2023). One study identified a significant positive correlation between the stage of breast development and increased estradiol with the risk of depression (Lewis et al, 2018). In addition, the idea of “pubertal timing” or the relative status of an individual’s development in comparison with their peers, has been shown to have correlations with psychological MDD symptoms.
 
            </p>
            <p>
            <br />This hormonal increase is also present within another condition called postpartum depression or PPD. This occurs when a mother experiences symptoms of MDD at any point after birth. While these symptoms usually decrease following the first two weeks after delivery, many more persist into the long term. These may include mood swings, anxiety, irritability, trouble sleeping, and appetite issues.
            </p>
            <p id="sub-section5">
            <br /><br /><b>4.2.1 Social Factors of PPD</b>
            <br /><br />There is also an evident stigma present due to the lack of awareness as well as institutionalized female hysteria. According to Australian reports, a large portion of women would often leave their PPD untreated, in fear of being labeled a “bad mother” (Thorsteinsson et al, 2018). PPD is often associated with prevalent negative stigma commonly associated with depressive disorders. The Government of Canada states that women who had experienced previous sexual or emotional abuse, used drugs, or drank excessive alcohol were more prone to the disorder. However, that does not detract from the women who do not partake in these activities and rather fuels the unwillingness to seek help. It was reported that those who held the strongest biases were commonly male and younger.
 
            <br /><br />Another factor that may contribute to depressive moods and anxiety within new mothers is the presence of the baby itself. For many, there is a strong anxiety associated with the safety of the child, and a confusion surrounding the newfound emotions associated with motherhood. There is a discrepancy experienced when the experience of motherhood does not match with society’s portrayal or expectation. Mothers often isolate themselves from unalike individuals and have exacerbated negative symptoms without proper social support. This is most prevalent within single mothers and those without proper familial connections.
 
            </p>
            <p id="sub-section6">
            <b>4.2.2 Biological Factors of PPD</b>
            <br /><br />In recent years, more conclusive research has been conducted to determine the proper biological mechanisms behind this disease. One possible hypothesized mechanism was a drastic decrease in estrogen levels. To test this, a study performed in 2000 simulated this decrease with estrogen injections in women who were not pregnant (Bloch et al, 2000). The results indicated that while hormonal changes have an effect, they are not sufficient enough to produce the wide variety of symptoms associated with MDD. 
            <br /><br />However, there has been more research underway to determine a proper biological cause for PPD. A study done by collaborators at John Hopkins Medicine identified changes within extracellular mRNA levels in relation to the placenta of the mother. It was revealed that those with lower levels of mRNA had a higher chance of developing postpartum depression (Payne and Maguire, 2018). This is hypothesized to be primarily due to the lower levels of autophagy, the cleaning out of dead cells, and subsequently lowered production of monocytes and macrophages. A blood test procedure is currently underway to produce a diagnostic method to identify these risks in early stages of pregnancy. 
            <br /><br />In conclusion, there are many hormonal, physical, and environmental changes that could predispose women to MDD symptoms and conditions. A mother’s genetic predisposition or the lack of social support could provoke the development of subsequent PDD. It is important to highlight these experiences to diminish social stigma and promote further research accounting for mothers with MDD.


            </p>
          </Section>
          <Section id="section5">
            <h2>Gender Differences in Effects and Access to Drugs</h2>
            <p>
            The measurement of clinical manifestations of MDD that aid clinicians in diagnosis and treatment may include three primary areas: quality of life, functional impairment, and presenting symptoms. These domains are incredibly correlated and can help predict patient outcomes, in many cases due to associated gender differences  which play an integral role in MDD psychopathology, manifestation, and psychosocial functioning.
            <br /><br />Studies have highlighted these differences particularly in how women are diagnosed with MDD based on symptoms (Salk et al, 2017). Women generally present symptoms associated with mood alterations and conditions such as anxiety, fatigue, lethargy, and reduced appetite. Many symptoms are related to somatic depression, in which individuals may experience distress and excessive thoughts regarding physical symptoms such as shortness of breath, which affects their daily functioning. Diagnosis of MDD in women is also characterized by a poorer quality of life and an increase in symptom reporting and help seeking behaviors (Salk et al, 2017). Although men and women may share similar symptom profiles, diagnosis in women is defined by reduced psychomotor capacity, or a slowing down of physical and mental activities, sleep alterations, and somatic symptoms.
            <br /><br />On the contrary, many male-typical symptoms of MDD include aggressive and violent behaviors, irritability, as well as substance abuse (Quello et al, 2019). Many gender differences in symptoms are still being researched and are not included in the standardized criteria for diagnosis of MDD in the current Diagnostic and Statistical Manual of Mental Disorders. Thus, further research is required to better understand the differences in physical and mental symptoms experienced between genders and how they may guide curated treatment for individuals.
            <br /><br />Studies have found that upon diagnosis, women report greater illness severity and chronicity, thus prompting more serious diagnosis. Women are also more likely to have an earlier age of onset, beginning as early as puberty and decreasing after the age of 65 (Biro et al, 2012). Women are twice as likely to be diagnosed with MDD, which may be due to the lack of help seeking behaviors amongst males, as well as deficits in understanding of gender associated symptoms (Call and Shafer, 2018). Along with experiencing more subsequent and chronic depressive episodes compared to men, women are more likely to require a longer and more complex course of treatment, which often calls for increased psychotropic drug use and intervention (Call and Shafer, 2018).
            <br /><br />In terms of pharmacological treatment, women with MDD are more likely to be treated with psychotropic drugs including antidepressants, anti-anxiety medications, antipsychotics, etc (Sramek, 2016). While there are few sex differences in the use of psychotropic drugs, men are more likely to be placed on mono-therapy, while women are more likely to use combined therapies of on average 4 or more drugs (Sramek, 2016). Some international guidelines on MDD treatment suggest that selective serotonin reuptake inhibitors may be more effective in women, while men may benefit from tricyclic antidepressants (Sramek, 2016). However, there is little evidence that exists to influence prescribing trends. There are currently no standardized guidelines regarding sex-specific treatment as there is still no definite consensus on the efficacy of select drug interventions in men and women.
            <br /><br />Sex differences in MDD pathophysiology have often been ignored with women having low participation in past clinical trials. Complex hormonal fluctuations have been previously cited as a justified exclusion criteria, making many investigations regarding drug testing centered on male physiological function.

            </p>
          </Section>
          <Section id="section6">
            <h2>Overdiagnosis of Women</h2>
            <p>
            As previously mentioned, there are various reasons as to why women are twice as likely to be diagnosed with depression when compared to their male counterparts, including issues which are grounded in social and environmental  factors, as well as biological factors largely specific to cisgendered women. However, there is another factor which contributes to women being more likely diagnosed with MDD: the overdiagnosis of depression and anxiety of women within the medical field.
            <br /><br />Typically, when approaching medical personnel with complaints regarding one’s health, women often have a delayed diagnosis of the root cause of their suffrage. Much of this stems from implicit gender biases within physicians, regarding the nature of women and how many of their complaints are simply “all in their head,” and thus, there is no need to further investigate other potential diagnoses (Dusenbery, 2018). Reports have arisen that women will often divulge physical symptoms which are not commonly associated with MDD  or anxiety, such as intense physical pain in concentrated areas of the body, only to be told that the root cause of this issue is stress or some underlying mental illness. Generally, when men exhibit or express symptoms associated with depression, medical practitioners often see these symptoms as the result of an underlying physical illness. However, this is starkly opposite to the experiences of many women. Women have reported feeling undervalued and not believed within medical settings, which may counterintuitively cause them greater mental distress (Dusenbery, 2018). These prejudiced biases in the medical field echo sentiments of viewing the pain of women through the lens of female “hysteria,” leading to a study to suggest that nearly 30-50% of women diagnosed with depression were misdiagnosed in 1982 (Floyd, 1982).

            </p>
          </Section>
          <Section id="section7">
            <h2>Inclusivity</h2>
            <p>
            There are a variety of factors which can heighten one’s susceptibility to MDD. While the disorder can occur due to one’s own personal strife, external issues which society has imposed on certain communities can instigate depression within a population.  Women can face further issues regarding mental health when they are part of other minority groups, such as the Indigenous women in Canada.
            <br /><br /> 
            The Indigenous population of Canada, having been mistreated for decades, possess an elevated amount of mental and social distress. The events which can spur MDD include intimate partner violence, childhood or sexual abuse, and a history of mental illness. The purpose of the colonial North American residential schooling system was to assimilate the Aboriginal, with an annihilation of culture and undocumented abuse and murder. Of a sample of 90 First Nations and Métis adults, 43% had a mother who attended residential school. Mothers who experienced residential school’s children were found with moderate impairments and increased blood pressure and inflammation. Such depicts the magnitude at which colonization has pained generations of Aboriginal people. In 2018, Statistics Canada devised the first cycle of the Survey of Safety Public and Private Spaces and identified that the impact upon the wellness of Indigenous women is immense (Heidinger, 2022). They are overrepresented as victims of violence; 63% of Indigenous women have experienced sexual or physical abuse within their lifetime by an intimate partner, non-intimate partner, an acquaintance or even a stranger (Heidinger, 2022). The presence of lifetime violence for non-Indigenous women was 45% (Heidinger, 2022). Violent victimization has a concerning effect on the emotional wellness of an individual, causing the threat of depression to be exponentially increased. Additionally, psychological abuse, the purpose of which is to manipulate, control, or isolate victims, has been experienced by six of ten Indigenous women throughout their lifetime (Heidinger, 2022). The detrimental effects of such can permeate even once the abuser has exited the victim’s life. The Canadian National Inquiry into Missing and Murdered Indigenous Women, 2016 to 2019, depicts the historical reluctance to prevent violence towards First Nation women on account of prejudice and colonial indifference, which has further caused suffering to persist. The US Department of Health and Human Service’s Office on Women’s Health reinforces that experiencing forms trauma and long term abuse causes the development of mental health conditions such as depression which can result in alcohol abuse, self injury, and suicide. Following, during their perinatal period, an estimated 20% of all women experience difficulty with their mental health, yet Indigenous women suffer a greater risk (Owais et al, 2020). A Canadian study demonstrates that postpartum depression rates were increased in the First Nations community by 12.9%, Inuit by 10.6%, and Métis by 9.1% (Nelson et al, 2018). Additionally, this data was supplemented to ultimately report that the likelihood for Indigenous women to have postpartum depression was doubled in comparison to their non-Indigenous counterparts (Owais et al, 2020. Within Canada, there is a lack of sufficient medical facilities in Indigenous communities on account of the remote geography of the North. For the Americas, Australia, and New Zealand, sensitivity analysis demonstrated that the odds of psychopathology were higher for younger Indigenous mothers, in comparison to the sum of overall Indigenous mothers  (Owais et al, 2020). Additionally, upon the birth of a child, Indigenous mothers are at a 62% higher odds for developing depression and succumbing to substance abuse (Niccols  et al, 2010).

            </p>
          </Section>
          <Section id="section8">
            <h2>The Gut Microbiome: Differences Between the Sexes</h2>
            <p>
            The gut microbiome is the complex community of microorganisms, including bacteria, viruses, fungi, and archaea, that occupies the gastrointestinal tract of humans (Setubal, 2022). It plays a crucial role in maintaining the health and function of the human body, including digestion, immune system regulation, and metabolic processes (Setubal, 2022). Recent research has revealed significant differences in the gut microbiomes of men and women, with these differences also being linked to varying incidental rates of a host of conditions (i.e. rheumatoid arthritis, eczema, asthma, cardiovascular disease, etc.) (Kim, 2020).
            <br /><br /> Studies have shown that men and women have different microbial compositions in their gut microbiomes. Specifically, a study conducted in Italy found that women had higher levels of certain types of bacteria, such as Actinobacteria, Lactobacillus, Streptococcaceae and Bifidobacterium, while men had higher levels of other types of bacteria, such as Veillonellaceae, Gemmiger and unclassified Clostridia (Clapp et al, 2017). A factor that may contribute to these differences is hormones. Hormones play a critical role in regulating the gut microbiome, and research has shown that sex hormones such as estrogen and testosterone can significantly impact the composition of the gut microbiome (Yoon and Kim, 2021). Though similar human studies have yet to be performed, researchers have found statistically significant differences in the gut microbiota of prepubescent and pubescent mice, wherein the sex differences between the microbiomes of male and female mice appear only after puberty (McGee, 2021). Furthermore, when the sex organs of the male mice were removed, the gut microbiota composition of the male mice became more similar to that of female mice than uncastrated male mice (McGee and Huttenhower, 2021).
 
            <br /><br /> Many mental disorders are marked by an overabundance of certain gut bacteria in comparison to others. These bacteria, such as Lactobacillus and Bifidobacterium, influence neurological function by producing metabolites (i.e. neurotransmitters and amino acids) in a relationship named the “gut-brain axis” (Chen et al, 2018) Changes to the levels of metabolites such as short-chain fatty acids, ammonia, tryptophan, and histamine have been associated with various neurological conditions, though whether they are the cause or the effect is yet to be clear (Guo et al, 2022) The reduced presence of bacteria of the families Prevotellaceae, Corpococcus, and Faecalibacterium have all been linked to MDD prevalence when compared to unaffected individuals (Guo et al, 2022). When regarding the sex-specific differences between female and male patients with MDD, researchers found they had higher abundance of Actinobacteria and lower abundance of Bacteroidia, respectively, than unaffected sex-matched peers (Chen et al, 2018). These findings may represent a possible avenue for more effective treatment of MDD through probiotic therapy specifically tailored to a patient’s sex (Chen et al, 2018).
            <br /><br /> The differences in the gut microbiomes of men and women may have other important implications for health outcomes that can in turn also increase the risk for MDD. For example, research has shown that women are more likely to develop autoimmune diseases such as rheumatoid arthritis and multiple sclerosis, which may be linked to the differences in the gut microbiome, as it plays a crucial role in regulating the immune response and preventing the development of autoimmune disease (Wu J and Wu E, 2012). Autoimmune diseases occur when the immune system mistakenly attacks the body's own tissues, leading to chronic inflammation and tissue damage (Wu Jung and Wu Eric, 2012). Chronic inflammation itself is associated with a higher risk of developing MDD, with studies showing that individuals with high levels of inflammation markers in their blood were more likely to develop MDD (Lee and Giuliani, 2019).
            <br /><br /> In addition to inflammation, there are also specific autoimmune diseases that have been associated with a higher risk of developing MDD. For example, individuals with rheumatoid arthritis, an autoimmune disease that affects the joints, were double to four-times more likely to develop MDD than individuals without the condition (Margaretten et al, 2011). Notably, women are three times as likely to develop rheumatoid arthritis as men (Margaretten et al, 2011). Similarly, a study published in the Medicine (Baltimore) journal in 2018 found that individuals with systemic lupus erythematosus (SLE), another autoimmune disease, had higher rates of MDD compared to healthy controls—approximately six times more prevalent ().
            <br /><br /> The exact mechanisms underlying the relationship between autoimmune disease and MDD are not yet fully understood. One possibility is that chronic inflammation associated with autoimmune disease may affect brain function and increase the risk of developing MDD (Lee and Giuliani, 2019). Another possibility is that genetic factors may play a role, as both autoimmune disease and MDD have been shown to have a genetic component (Lee and Giuliani, 2019). In addition to the strict biological correlation between autoimmune disorders and MDD, there is also something to be said of the psychological impact of living with a chronic condition that may lead to the development of major depressive disorder (Euseden et al, 2017). The decrease in quality of life due to chronic pain, disablement, and increased dependency on caretakers can all factor into the development of MDD in autoimmune patients (Euseden et al, 2017).
            <br /><br /> Finally, while It is important to note that these studies have suggested a link between specific bacterial taxa, inflammation/immune dysfunction and MDD, the relationship between the gut microbiome and mental health is complex and not yet fully understood. The gut microbiome is a highly diverse and dynamic ecosystem, and changes in the abundance of specific bacterial taxa may be influenced by a wide range of factors, including diet, medication use, and other health conditions (Chen et al, 2018). Further research is needed to fully understand the mechanisms underlying the relationship between the gut microbiome and MDD, and to identify potential therapeutic interventions that target the gut microbiome in the treatment of this condition.

            </p>
          </Section>
          <Section id="section9">
            <h2>Conclusion</h2>
            <p>
            The purpose of the following report was to shed light on the historically neglected plight of women’s mental health. The staggering discrepancy between the amount of female diagnosis of MDD, when contrasted to men, can be attributed to a litany of issues, such as societal barriers and discrimination that women have to face, as well as bodily and hormonal differences between men and women. Within our project this year, we hope to create a space of concern for groups who have been neglected within our field of interest, and to inform future health practitioners of the variety of external issues which has complicated the field of women’s mental health.

            </p>
          </Section>
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

export default WR;
