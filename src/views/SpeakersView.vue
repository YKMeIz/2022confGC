<template>
  <div>
<!--    <div class="section section-features bg-gray text-center">-->
<!--      <div class="container grid-lg">-->
<!--        <h2>Opening Keynote Address VIP Speakers</h2>-->
<!--        <div class="columns">-->
<!--          <div class="column col-10 col-sm-12 col-mx-auto text-left"-->
<!--               v-for="people in speakers.keynote" :key="people.name">-->
<!--            <div class="tile">-->
<!--              <div class="tile-icon">-->
<!--                <img :src="require('@/assets/' + people.pic)" alt="..."/>-->
<!--              </div>-->
<!--              <div class="tile-content">-->
<!--                <h4 class="tile-title">-->
<!--                  {{ people.name }}-->
<!--                </h4>-->
<!--                <p class="tile-subtitle">-->
<!--                  {{ people.position }}<br>-->
<!--                  <a :href="'mailto:'+people.email">-->
<!--                    {{ people.email }}</a>-->
<!--                </p>-->
<!--                <p class="tile-content text-justify">-->
<!--                  {{ people.bio }}-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <div class="section section-updates bg-gray text-center">
      <div class="container grid-lg">
        <h2>Plenary Speakers - Day 1</h2><br>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left"
               v-for="people in speakers.day1" :key="people.name">
            <div class="tile">
              <div class="tile-icon">
                <img :src="require('@/assets/' + people.pic)" alt="..."/>
              </div>
              <div class="tile-content">
                <h4 class="tile-title">
                  {{ people.name }}
                </h4>
                <p class="tile-subtitle">
                  {{ people.position }}<br>
                  <a :href="'mailto:'+people.email">
                    {{ people.email }}</a>
                </p>
                <p class="tile-content text-justify" v-if="people.topic">
                  <strong>Topic: {{ people.topic }}</strong>
                </p>
                <p class="tile-content text-justify" v-if="people.abstract">
                  <strong>Abstract: </strong>{{ people.abstract }}
                </p>
                <p class="tile-content text-justify" v-if="people.bio">
                  <strong>Bio: </strong>{{ people.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <br><br><br><br>
        <h2>Plenary Speakers - Day 2</h2><br>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left"
               v-for="people in speakers.day2" :key="people.name">
            <div class="tile">
              <div class="tile-icon">
                <img :src="require('@/assets/' + people.pic)" alt="..."/>
              </div>
              <div class="tile-content">
                <h4 class="tile-title">
                  {{ people.name }}
                </h4>
                <p class="tile-subtitle">
                  {{ people.position }}<br>
                  <a :href="'mailto:'+people.email">
                    {{ people.email }}</a>
                </p>
                <p class="tile-content text-justify" v-if="people.topic">
                  <strong>Topic: {{ people.topic }}</strong>
                </p>
                <p class="tile-content text-justify" v-if="people.abstract">
                  <strong>Abstract: </strong>{{ people.abstract }}
                </p>
                <p class="tile-content text-justify" v-if="people.bio">
                  <strong>Bio: </strong>{{ people.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakersView',
  data() {
    return {
      speakers: {
        keynote: [
          {
            name: 'Professor John Bell',
            pic: 'j.bell.png',
            position: 'Deputy Vice-Chancellor (Research and Innovation), University of Southern Queensland, Australia',
            bio: 'Professor John Bell leads the Research and Innovation Division at the University of Southern Queensland. Professor Bell works to enhance the University’s research profile, its research performance and its culture of research excellence and quality research training. He oversees a coordinated focus on fostering collaborations and partnerships with government, industry and the research community, within Australia and around the world to deliver applied research outcomes that have global impact. As an outstanding researcher in his area of materials engineering and energy, Professor Bell has led projects in the development of energy efficient smart windows, dye-sensitised solar cell development, and carbonaceous materials.  He also has expertise in the area of energy efficiency and occupant comfort in buildings and has carried out extensive research with industry.  Professor Bell has received over $25 million in research funding during his 30-year career as a researcher.',
          },
          {
            name: 'Professor YuanTong Gu',
            pic: 'y.gu.png',
            position: 'ARC Industrial Transformation Training Centre-Joint Biomechanics; School of Mechanical, Medical and Process Engineering, Queensland University of Technology, Brisbane, Australia',
            bio: 'Professor YuanTong Gu is Head of the School of Mechanical, Medical and Process Engineering at Queensland University of Technology and The Director of the Australian ARC Training Centre for Joint Biomechanics. He was a prestigious Australian Research Council (ARC) Future Fellow. Prof Gu is a world-renowned expert in computer modelling for mechanical and biomedcial engineering. He has secured more than $40M research funds in relevant fields and authored more than 400 refereed journal publications. Most of his publications are in highly-ranked journals, including Nature Communications. His publications have attracted 15K citations in Google Scholar. He was Editor-in-Chief for the Australian Journal of Mechanical Engineering and is Associate Editor for two prestigious international journals and an Editorial Board Member for five other journals. He is now an Executive Committee Member of the Australian Association on Computational Mechanics and the International Association of Applied Mechanics. Prof Gu has obtained several awards and prizes in computational mechanics, including The International Computational Methods Award and The APACM Computational Mechanics Award. He has been invited to give more than 40 plenary and invited talks at international conferences. He served as the conference chair for two international conferences and will organize The 9th Asian Pacific Congress on Computational Mechanics in 2025 at Brisbane.',
          },
          {
            name: 'Professor Hongxiang Zhang',
            pic: 'h.zhang.png',
            position: 'Secretary General of Chinese Society of Biotechnology, China',
            bio: 'Director of the Editing and Publishing Centre of the Documentation and Information Centre of the Chinese Academy of Sciences, Executive Deputy Editor-in-Chief of the Chinese Journal of Bioengineering, Chairman of the Science Popularization Working Committee, China Coordinator, Deputy Director of the National Biological Vocational and Technical Education Steering Committee of the Chinese Ministry of Education, and editorial research of the Natural Science Journal of the Chinese Academy of Sciences Member of the Academic Committee of the Society, and editorial board member of "Research on Chinese Science and Technology Journals". Research direction: scientific journal publishing, scientific communication. Now he is mainly engaged in the editing and publishing of scientific and technological journals and research on development strategies. He has published more than 40 academic papers and participated in and presided over several national scientific and technological journals research projects. He has monitored over several research projects on development strategies in the field of biotechnology.',
          },
          {
            name: 'Dr Zongze Ruan,  Consul-General',
            pic: 'z.ruan.png',
            position: 'Consulate-General of People’s Republic of China in Brisbane, Australia',
            bio: 'Dr Ruan is current consul-general of Consulate-General of People’s Republic of China in Brisbane, Australia. He obtained PhD in law.',
          },
        ],
        day1: [
          {
            name: 'Professor Steven McPhail',
            pic: 's.mcphail.png',
            position: 'Faculty of Health, School of Public Health & Social Work, Queensland University of Technology',
            email: 'steven.mcphail@qut.edu.au',
            topic: 'A systems approach to sustainable transformation of healthcare delivery by optimizing intelligent decision support: moving beyond algorithm obsession to real-world implementation',
            abstract: 'This presentation will bring together key findings related to workforce and organizational architecture from a series of studies and real-world decision support use cases across several Australian hospitals. Although the use cases have been diverse in nature and clinical application dependent on local priorities, there have been consistent themes arising from organizational context assessments, stakeholder perceptions revealed through interviews and focus groups, and direct observation of work as done versus work as imagined.',
            bio: 'Steve is a health systems innovator, health services researcher, health economist and clinician. He is Director of the Australian Centre for Health Services Innovation (AusHSI) and Academic Director of the Centre for Healthcare Transformation at the Queensland University of Technology, where he is the Professor of Health Services Research. He is passionate about empowering health services to deliver high-value patient-centered care, particularly improving care for vulnerable members of our community and their families.',
          },
          {
            name: 'Runsheng Chen, Professor',
            pic: 'y.chen.png',
            position: 'Academician of CAS, Institute of Biophysics, Chinese Academy of Sciences, China',
            email: 'chenrs@ibp.ac.cn',
            topic: 'Bioinformatics and noncoding RNA',
            abstract: '',
            bio: 'Prof. Chen serves as a member of Human Genome Organization (HUGO), a member of the biomacromolecule group of The Committee on Data for Science and Technology (CODATA), and a member of the bioinformatics professional committee of the International Union of Pure and Applied Physics (IUPAP). In addition, Prof. Chen is the General-secretary and Vice president of Chinese Society of Biophysics. Professor Runsheng Chen is one of the pioneer scholars developing the researches on theoretical biology, bioinformatics, and noncoding RNA in China. So far, Prof. Chen has published more than 200 papers in SCI, and made more than 20 conference or group reports in the international academic conferences since 1996. ',
          },
          {
            name: 'Professor Brent Richards',
            pic: 'b.richards.png',
            position: 'Professor of Critical Care Research at Gold Coast Hospital and Health Service, Medical Director of Research Commercialization, Gold Coast University Hospital, Australia',
            email: 'brent.richards@health.qld.gov.au',
            topic: 'Enabling best patient outcome through integration of AI, big data and critical care',
            abstract: '',
            bio: 'Professor Brent Richards is Medical Director of Innovation and Director of Critical Care Research at Gold Coast Hospital and Health Service, and Professor at Griffith and Bond Universities. He was previously also director of ICU for 15 years, executive director of Surgery, and chair of the state Intensive Care network. Realizing the opportunities and responsibilities in the big data sets being created in healthcare, alongside the rapidly growing capability in AI, Brent is working on ways to expand, understand and interrogate these data sets for clinical understanding, business KPIs and research opportunities, and translating this to patient outcomes.',
          },
          {
            name: 'Luonan Chen, Ph.D., Professor',
            pic: 'l.chen.png',
            position: 'Center for Excellence in Molecular Cell Science, Chinese Academy of Sciences, Shanghai, China',
            email: 'lnchen@sibcb.ac.cn',
            topic: 'Quantifying individual health status from multi-omics data by dynamic network biomarkers',
            abstract: 'Quantifying individual health status from increasingly accumulated genomics data is essential for both early prevention and intervention of diseases, which attracts great attention from communities of biology and medicine. Here, we proposed a health state map (HSM) method derived from dynamic network biomarker method and diffusion map theory to quantify individual health status with the characterization of such two features in a robust and accurate manner based on multi-omics data.',
            bio: 'Luonan Chen has been a professor and executive director at Key Laboratory of Systems Biology, Shanghai Institute of Biochemistry and Cell Biology, Chinese Academy of Sciences since 2010. He was elected as the founding president of Computational Systems Biology Society of OR China, and Chair of Technical Committee of Systems Biology at IEEE SMC Society. In recent years, he published over 350 journal papers and three monographs (books) in the area of bioinformatics, nonlinear dynamics and machine learning (H-index > 70; Citation > 20000).',
          },
          {
            name: 'Kerrie Mengersen, Distinguished Professor',
            pic: 'k.mengersen.png',
            position: 'Statistics Director, Centre for Data Science Queensland University of Technology, Australia',
            email: 'k.mengersen@qut.edu.au',
            topic: 'Where are the vulnerable children?',
            abstract: 'This presentation is joint with Wala Draidi, Harriette Phililips, Owen Forbes and Aiden Price, from the QUT Centre for Data Science. In this presentation, I will describe some new methods that we have been exploring to address this challenge. This research provides evidence of the need for collaboration between health and education sectors in specific regions of Queensland to update current service provision policies and to ensure holistic and appropriate care is available to support children with development vulnerabilities. As part of the discussion, I will also touch on issues of data access and collation, and potential methods for sharing sensitive data.',
            bio: 'Kerrie Mengersen is a Distinguished Professor in Statistics and Director of the Centre for Data Science at QUT, Brisbane. Her research interests focus on the development of new statistical machine learning methods and computational algorithms motivated by, and as contributions to, challenges in health, the environment and industry. Most of her work is undertaken in close collaboration with teams of researchers and practitioners. Kerrie is a member of the Australian Academy of Science and the Academy of Social Sciences.',
          },
          {
            name: 'Jin Gu, Ph.D., Associate Professor',
            pic: 'j.gu.png',
            position: 'Dept. of Automation, Tsinghua University, Beijing 100084, China',
            email: 'jgu@tsinghua.edu.cn',
            topic: 'Explore tissue structures by integrative analyzing the spatial transcriptomes and histopathological images',
            abstract: 'Sequencing-based spatial transcriptomics (ST) is an emerging technology to study in situ gene expression patterns at the whole-genome scale. We found that the matched histopathological images can provide complementary information, such as cellular phenotypes, cell density, cell/nucleus locations and non-cellular structures. Also, we present TIST, which enables accurate identification of spatial cluster (SC) and effective enhancement of spatial gene expression patterns. We benchmarked TIST with 32 real and multiple simulated ST datasets and compared TIST against the start-of-the-art methods. We show that TIST is robust to technical noise, achieves superior performance on multiple tasks and facilitates discovery of important microstructures from sequencing-based ST data.',
            bio: 'Dr. Jin Gu is an Associate Professor at the Institute of Information Processing, Department of Automation, Tsinghua University. His lab aims at developing machine learning methods to explore the big biomedical data, especially diverse omics data, for precision & personalized medicine. Recently, he is interested in finding biomarkers and therapeutic targets and building predictive models of cancer by spatiotemporal genomics. He is the editorial board member of Genomics Proteomics Bioinformatics and BMC Bioinformatics and serves as the member of several professional committees of CAA and CAAI.',
          },
          {
            name: 'Professor Yan Li',
            pic: 'y.li.png',
            position: 'University of Southern Queensland',
            email: 'yan.li@usq.edu.au',
            topic: 'Sleep Stages Classification Using Deep Learning Algorithms',
            abstract: 'Millions of people suffer from sleep disorders like insomnia, apnea, and circadian rhythm sleep disorders. Sleep disorders are often diagnosed through identifying one’s sleep stages using their bio-signals, such as electroencephalography (EEG), electromyogram (EMG), and electrooculogram (EOG), etc. In this talk, I will showcase several advanced artificial intelligence (AI) methods for sleep stages classification. The research results were published in top journals.',
            bio: 'Prof Yan Li is a full Professor in Artificial Intelligence and the Associate Head (Research) for the School of Mathematics, Physics and Computing at University of Southern Queensland (UniSQ). Her research interests lie in the areas of Artificial Intelligence, Machine Learning, Big Data Technologies, Signal/Image Processing, Cybersecurity, and Network and Internet Technologies. Prof Yan Li has published more than 220 publications, supervised dozens of PhD completions, and obtained significant research grants from government bodies and through international collaborations. She is a current member of Australia Research Council (ARC) College of Experts.',
          },
          {
            name: 'Kun Qu, Ph.D., Professor',
            pic: 'k.qu.png',
            position: 'Institute of Artificial Intelligence, School of Data Science, Division of Life Sciences and Medicine, University of Science and Technology of China',
            email: 'qukun@ustc.edu.cn',
            topic: 'Challenges and opportunities in spatial omics',
            abstract: 'Spatial transcriptomics approaches have substantially advanced our capacity to detect the spatial distribution of RNA transcripts in tissues, yet it remains challenging to characterize whole-transcriptome-level data for single cells in space. Here we present benchmarking of 16 integration methods using 45 paired datasets (comprising both spatial transcriptomics and scRNA-seq data) and 32 simulated datasets. We provide a benchmark pipeline to help researchers select optimal integration methods to process their datasets.',
            bio: 'Dr. Kun Qu is a Professor at the Division of Life Science and Medicine, University of Science and Technology of China (USTC). He also serves as the Director of the Office of International Cooperation and Director of the Office of Hong Kong, Macao and Taiwan Affairs at USTC. His lab has long been engaged in interdisciplinary research in Bioinformatics, Immunology, Genomics and Artificial Intelligence (BIGAI), and in particular to develop novel experimental and computational methods to predict, dissect and control the large-scale single cell gene regulatory programs, and to provide insights into precise diagnosis and therapeutics for human cancer and autoimmune diseases.',
          },
          {
            name: 'Professor Zhiyong Li',
            pic: 'z.li.png',
            position: 'Professor in Biomedical Engineering, Queensland University of Technology',
            email: 'zhiyong.li@qut.edu.au',
            topic: 'Medical imaging data based biomechanical modelling for an improved diagnosis of cardiovascular diseases',
            abstract: 'In this presentation, I will introduce our work in image-based computational modelling techniques which can accurately quantify the biomechanical parameters that are associated with plaque vulnerability. I will summarize our work in imaging-based computational modelling and simulation of the interaction between blood flow and atherosclerotic plaque. I will also discuss our recent developments in multiphysical modelling of plaque progression and destabilization. Other applications of our computational methods and models, including brain aneurysm and atrial fibrillation will also be discussed in the talk.',
            bio: 'Zhiyong is a Professor in Biomedical Engineering at QUT. He has a long-term research interest in cardiovascular diseases (atherosclerosis, aneurysm, atrial affiliation). The main focus of his work has been the development of novel technologies to quantify blood flow and vessel characteristics to better prevent stroke and heart attack. His expertise includes medical imaging and image analysis, computational fluid dynamics, mathematical modelling and numerical methods. He has made significant contributions to the field with over 200 publications in high-quality journals.',
          },
          {
            name: 'Qi Liu, Professor',
            pic: 'q.liu.png',
            position: 'Tongji University, Shanghai, China',
            email: 'qiliu@tongji.edu.cn',
            topic: 'Towards AI-based Omics Analysis for Immune-Oncology Study',
            abstract: 'In this talk, we will present several case studies related to AI-based omics analysis for immune-oncology study, which hopes to provide novel insights for data-driven tumor precision medicine.',
            bio: 'Qi Liu, Tenured Professor in the Bioinformatics Department in Tongji University. His group has been closely collaborated with the pharmaceutical and clinical experts for data-driven precision medicine study, by using AI and Omics analysis technology, and has published a series of papers in top journals and conferences including Science Advances, Nature Communications, Genome Biology, Science Bulletins, TKDE, SDM, ICDM etc. His group also developed 30+ tools for omics data analysis with related applications.',
          },
          {
            name: 'Dr Sundresan Naicker',
            pic: 's.naicker.png',
            position: 'Research Fellow (Implementation Science), Australian Centre for Health Services Innovation, School of Public Health and Social Work, Centre for Healthcare Transformation, Faculty of Health, Queensland University of Technology',
            email: 'sundresan.naicker@qut.edu.au',
            topic: 'Implementation science meets digital health: Facilitating effective and sustainable digital transformation within healthcare',
            abstract: 'The field of implementation science provides a range of evidenced-informed principles to systematically overcome these challenges. These principles facilitate consistent, measurable, and contextually pragmatic strategies to adopt, evaluate and support the effective utilization of digital health tools and related data assets across and within health systems. This talk will present key evidence-based implementation principles to inform effective evaluation, assessment, and utilization strategies within digital health, using case studies from our own work.',
            bio: 'Sunny is an Implementation Science Research Fellow at the Australian Centre for Health Services Innovation (AusHSI) at QUT. He also an honorary fellow with Neuroscience Research Australia (NeuRA). His research at AusHSI focuses on developing evidence-based implementation solutions, particularly for digital health interventions; to improve service delivery and patient outcomes within the health system at large.',
          },
          {
            name: 'Youqiong Ye, principal investigator ',
            pic: 'y.ye.png',
            position: 'Shanghai Institute of Immunology, Shanghai Jiao Tong University School of Medicine.',
            email: 'youqiong.ye@shsmu.edu.cn',
            topic: 'Reconstruction of the tumor spatial microenvironment along the malignant-boundary-nonmalignant axis',
            abstract: 'The tumour boundary is a niche composed of malignant cells in the outermost circle of solid tumour and non-malignant cells that are closely adjacent in spatial architecture, bridging these distinct spatial regions. Here, we developed Cottrazm, construct tumour boundary microenvironment based on spatial transcriptomics, a computational tool enabling the integration of ST with hematoxylin and eosin-stained histological imaging data, and single-cell transcriptomics to delineate the tumour boundary connecting malignant and non-malignant cell spots. We validated Cottrazm in six cancer types and identified specific subtypes of macrophage and fibroblast that localized to the tumour boundary and interacted with tumour cells to generate a structural boundary which limits T cell infiltration and promotes immune exclusion in the tumour microenvironment.',
            bio: 'Dr Youqiong Ye is principal investigator of Shanghai Institute of Immunology, Shanghai Jiao Tong University School of Medicine. Her research work focuses on data mining and algorithm development from multimodal data to explore the regulatory roles of tumour boundary microenvironment on tumour progression and immune escape. Her research aims at revealing critical roles of tumour boundary, transcriptional and post-transcriptional regulation on tumour microenvironment and immunotherapy, providing new potential therapeutic strategies and predictive models for immunotherapy. She has published 70+ scholarly papers.',
          },
        ],
        day2: [
          {
            name: 'Yu Xue, Ph.D., Professor',
            pic: 'y.xue.png',
            position: 'Huazhong University of Science and Technology, Wuhan, 430074, China',
            email: 'xueyu@hust.edu.cn',
            topic: 'Artificial intelligence biology for COVID-19',
            abstract: 'Recent advances in deep learning have provided a great opportunity to accurately infer the complex causality from big biological data and boomed the establishment of a new interdisciplinary field named artificial intelligence biology (AIBIO). Here, we reported our recent progresses in AIBIO for COVID-19. Using the plasma proteomic data of COVID-19 patients, we developed a machine learning-based method named POC-19 to identify 11 proteins as biomarkers and a set of biomarker combinations, which were validated by independent cohorts and accurately distinguished and predicted COVID-19 outcomes. In addition, we constructed an open resource named iCTCF that contained chest computed tomography (CT) images, 130 clinical features and laboratory-confirmed clinical status.',
            bio: 'Dr. Yu Xue is a professor at the Department of Bioinformatics & Systems Biology, Center for Artificial Intelligence Biology, College of Life Science and Technology of Huazhong University of Science and Technology. His major interests are focused on the development of novel databases, AI algorithms and computational software packages, such as GPS (Group-based Prediction System) series algorithms and a novel deep learning framework named Hybrid Learning, for understanding the temporally and spatially regulatory roles of proteins and post-translational modifications (PTMs) involved in cellular signaling pathways and networks, by combining systems biology, bioinformatics, and molecular & cellular biology approaches to identify functional regulators and PTM events in autophagy and human cancer.',
          },
          {
            name: 'Associate Professor Jessica Mar',
            pic: 'j.mar.png',
            position: 'Australian Institute for Bioengineering and Nanotechnology, The University of Queensland, Queensland, Australia',
            email: 'j.mar@uq.edu.au',
            topic: 'Leveraging statistical shapes in single cell genomics: looking beyond what’s Normal to understand human disease',
            abstract: 'In genomics, we often assume that continuous data, such as gene expression, follows a single type of statistical distribution. However, we rarely stop to question the validity of this assumption, and whether it applies uniformly to every gene measured in the genome. This talk includes studies from my group where a focus on the shape of gene expression distributions, specifically shape diversity, revealed new insights into biology.',
            bio: 'Associate Professor Jessica Mar is a Group Leader at the University of Queensland. She leads a computational biology group that investigates how variability in the genome contributes to the regulation of diseases like cancer, or phenotypes like pluripotency in stem cells. Her research program has a dual focus that concentrates on modelling the aging process using single cell bioinformatics and understanding cancer genomics through novel statistical methods. A/Prof Mar has received several awards, including a Fulbright scholarship (2003), the Metcalf Prize for Stem Cell Research from the National Stem Cell Foundation of Australia (2017), and the LaDonne H. Shulman Award for Teaching Excellence at Albert Einstein College of Medicine (2017).',
          },
          {
            name: 'Fangqing Zhao, Professor',
            pic: 'f.zhao.png',
            position: 'Beijing Institutes of Life Science, Chinese Academy of Sciences, Beijing',
            email: 'zhfq@biols.ac.cn',
            topic: 'Novel methods in microbiome data integration and their applications',
            abstract: 'The close association between gut microbiota dysbiosis and human diseases is being increasingly recognized. However, contradictory results are frequently reported as confounding effects exist. The lack of unbiased data integration methods also impedes the discovery of disease-associated microbial biomarkers from different cohorts. Here, we propose an algorithm, NetMoss, for assessing shifts of microbial network modules to identify robust biomarkers associated with various diseases. Through comprehensive evaluations on both simulated and real datasets, we demonstrate that NetMoss has great advantages in the identification of disease-related biomarkers.',
            bio: 'Fangqing Zhao, PhD. Professor at Beijing Institutes of Life Science, Chinese Academy of Sciences (BIOLS). His research interests include developing novel computational approaches for exploring noncoding RNAs and human microbiomes. Since 2011, he has been appointed as a Principal Investigator (100-Talent Plan) by Beijing Institutes of Life Science, Chinese Academy of Sciences. He has been awarded with National Science Fund for Distinguished Young Scholars (2020), and has published more than 50 research papers in high-profile journals.',
          },
          {
            name: 'Associate Professor Xiaohui Tao',
            pic: 'x.tao.png',
            position: 'School of Mathematics, Physics and Computing, University of Southern Queensland, Australia',
            email: 'Xiaohui.Tao@usq.edu.au',
            topic: 'The Pursuit of Human-centered AI for P4 Medicine',
            abstract: 'The healthcare and medical practice are now at a crossroad transforming from experience basis to evidence based. P4 (predictive, preventative, personalized, participatory) medicine aiming to detect and prevent disease through extensive biomarker testing, close monitoring, deep statistical analysis, and patient health coaching has been a joint endeavor by healthcare, medicine, and data science research communities, as a part of the journey towards the transformation of evidence-based medicine. In this talk, we will present and discuss our recent works in this endeavor towards P4 medicine adopting innovative human-centered AI algorithms. These typical works reflect our Philosophy of AI research - AI by humanity, for humanity and in service to humanity.',
            bio: 'Dr. Xiaohui Tao is full Professor and Lead of Computing Discipline in the School of Mathematics, Physics and Computing at the University of Southern Queensland, Australia. He is a Senior Member of IEEE and ACM, and an active researcher in AI. Dr. Tao’s research focuses on data analytics, machine learning, knowledge engineering, natural language processing, and health informatics. His research outcomes have been published in 150+ papers across many top-tier journals and conferences. Currently, he is leading a research group that develops algorithms and systems with real-world impact.',
          },
          {
            name: 'Dr Quan Nguyen',
            pic: 'q.nguyen.png',
            position: 'Senior Research Fellow, Head of Genomics and Machine Learning Lab, Institute for Molecular Bioscience, The University of Queensland, Australia',
            email: 'quan.nguyen@imb.uq.edu.au',
            topic: 'Machine learning analysis of spatial and single-cell genomics to identify gene and cell markers of diseases',
            abstract: 'In this presentation, I will talk about predicting cancer progression from non-invasive to invasive states, identifying interacting cancer-immune cells, and studying host responses at sites of infections. Together, our spatial data, computational methods, and clinical collaborations enable us to elucidate important biological processes within diseased tissues.',
            bio: 'Dr Quan Nguyen is a Senior Research Fellow and the head of Genomics and Machine Learning Lab at the Institute for Molecular Bioscience (IMB), The University of Queensland (UQ). He was an ARC DECRA fellow and is currently an NHMRC emerging leadership fellow level 2. He analyses single cell and spatial data to find cell types, their spatial organization and cell-cell interactions underlying differential responses to treatment and risks of cancer metastasis. He aims to find potentially new gene targets to modulate cancer-immune cell interactions and new markers to predict cancer progression and responses to drugs.',
          },
          {
            name: 'Ge Gao, Ph.D., Professor',
            pic: 'g.gao.png',
            position: 'Biomedical Pioneering Innovation Center (BIOPIC), Beijing Advanced Innovation Center for Genomics (ICG), Peking University, Beijing 100871, China',
            email: 'gaog@pku.edu.cn',
            topic: 'Delineate the regulatory map in silico',
            abstract: 'Human individual cells, as the basic biological units of our bodies, carry out their functions through rigorous regulation of gene expression and exhibit heterogeneity among each other in every human tissue. In addition to identify individual genes, one is often interested in how multiple genes interact to form regulatory circuits and carry out cellular functions. Combining massive omics data and leading-edge statistical modeling/machine learning approaches, we have developed set of novel bioinformatic technologies to delineate the regulatory map and characterize the functional genome in action globally during past years. Here we will present our recent advances as well as their potential applications in clinical and translational study.',
            bio: 'Dr. Ge Gao is one of key bioinformatician in China who has interest in developing novel computational technologies to analyze, integrate and visualize high-throughput biological data effectively and efficiently, with applications to decipher and understand the function and evolution of gene regulatory systems.',
          },
          {
            name: 'Professor Alan Liew',
            pic: 'a.liew.png',
            position: 'School of Information and Communication Technology, Griffith University, Australia',
            email: 'a.liew@griffith.edu.au',
            topic: 'AI for Health: Data Privacy and Model Protection',
            abstract: 'Recently we have seen a proliferation of AI in healthcare applications. However, the research focus so far is on improving the predictive analytic performance, for example, predicting the possibility of a patience developing sepsis from a set of clinical measurements, or detection of COVID from chest x-ray image. Relatively little attention is placed on the various issues surrounding the AI model development and deployment in the real world. This talk discusses solutions to two major challenges in AI model development/deployment: how to deal with sensitive data during model development and how to protect the AI models from intellectual theft during model deployment.',
            bio: 'Alan Liew is currently the Head of School, the School of Information & Communication Technology, and the Deputy Director of the Institute for Integrated Intelligent Systems (IIIS), at Griffith University, Australia. His research interest is in the field of AI, machine learning, medical imaging, computer vision, and bioinformatics. He is leading the medical/health informatics stream in IIIS, and is engaging with the Menzies Health Institute, the Gold Coast University Hospital, Queensland Health, and the Precision Medicine Data Platform (PMDP) on several collaborative projects.',
          },
          {
            name: 'Professor Jinyan Huang',
            pic: 'j.huang.png',
            position: 'Professor of Bioinformatics, Biomedical big data center, the First Affiliated Hospital, Zhejiang University School of Medicine, Hangzhou, China',
            email: 'huangjy@sjtu.edu.cn',
            topic: 'Transcriptional landscape of acute lymphoblastic leukemia based on big data',
            abstract: 'B cell precursor acute lymphoblastic leukemia (BCP-ALL) and T cell acute lymphoblastic leukemia(T-ALL) is an aggressive hematological malignancy, known to be a heterogeneous disease in pediatric and adult patients. Most BCP-ALL and T-ALL can be classified into known major genetic subtypes, while a substantial proportion of them remains poorly characterized in relation to its underlying genomic abnormalities. We therefore initiated a large-scale big data study to reanalyze and delineate the transcriptome landscape of ALL cases using RNA sequencing. The combined results strongly advocate that RNA sequencing be introduced into the clinical diagnostic workup of ALL.',
            bio: 'Jinyan Huang holds the position of the director of the Biomedical Big Data Center (BMBDC) of the First Affiliated Hospital of Zhejiang University School of Medicine. Prof. Jinyan Huang is devoted to research on analysis of omics data, molecular typing, and pathogenesis of leukemia. He has done a lot of work in the sharing, integration, and mining of biomedical big data, and personalized medicine, and has developed a series of medical and health software systems. He has published more than 50 SCI papers with a total impact factor of over 500 and an H-index of 40. And he has obtained 2 software copyrights and applied for 6 patents.',
          },
          {
            name: 'Professor Yongsheng Gao',
            pic: 'y.gao.png',
            position: 'Director, Institute for Integrated and Intelligent Systems, Griffith University, Australia',
            email: 'yongsheng.gao@griffith.edu.au',
            topic: 'Classifying images when only a single (or very few) example is available',
            abstract: '',
            bio: 'Professor Yongsheng Gao is the Director of Australian Research Council (ARC) Research Hub for Driving Farming Productivity and Disease Prevention, and the Director of Institute for Integrated and Intelligent Systems at Griffith University, Australia. He was a member of College of Experts, Australian Research Council. As a Chief Investigator, he has been working on projects in Australia, Singapore, Germany, and China in the areas of smart farming, environmental informatics, biosecurity, face recognition, biometrics, image retrieval, computer vision, pattern recognition, and medical imaging. He was also employed as a consultant by Panasonic Singapore Laboratories Pte Ltd working on the face recognition standard in MPEG-7. His research is reported in the media in Australia and Singapore, including The Australian, The Courier Mail, The Sydney Morning Herald, and The Straits Times (Singapore).',
          },
          {
            name: 'Xiangjun Du, Professor',
            pic: 'x.du.png',
            position: 'Sun Yat-sen University 1-321 West, Medical Park, Shenzhen Campus of Sun Yat-sen University, No. 66 Gongchang Road, Guangming District, Shenzhen 518107, P.R. China',
            email: 'duxj9@mail.sysu.edu.cn',
            topic: 'Computational Systems Biology of Infectious Diseases',
            abstract: 'Taking influenza, COVID-19 and dengue as examples for new emerging and important infectious diseases, I will show, by combining systems biology strategy and public health perspectives, and integrating the molecular evolution, the population level model and pattern, and the host-pathogen interaction information, how the relevant influencing factors and mechanisms of infectious diseases are revealed, and then statistical learning and mathematical modeling are carried out to simulate, forecast and evaluate. Relevant theories, methods and strategies are helpful for precise prevention, control and treatment of infectious diseases.',
            bio: 'Professor Du is currently Professor and Associate Dean of School of Public Health (Shenzhen), Sun Yat-sen university. His research focus on interdisciplinary study of infectious diseases from the perspective of systems biology by integrating multiple sources of data. Key research areas include molecular evolution of pathogens, epidemiological simulation and prediction of infectious diseases based on statistical learning and mathematical modelling methods, and quantitative study of pathogen-host interaction.',
          },
        ],

      },
    };
  },
};
</script>

<style scoped>
/*h3 {*/
/*  padding-top: 1em*/
/*}*/
img {
  max-width: 140px
}
</style>
