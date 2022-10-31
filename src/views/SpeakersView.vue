<template>
  <div>
    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Opening Keynote Address VIP Speakers</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left"
               v-for="people in speakers.keynote" :key="people.name">
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
                <p class="tile-content text-justify">
                  {{ people.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-updates bg-gray text-center">
      <div class="container grid-lg">
        <h2>Confirmed Plenary Speakers</h2>
<!--        <h3>China Plenary Speakers</h3>-->
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left"
               v-for="people in speakers.chn" :key="people.name">
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
                <p class="tile-content text-justify">
                  {{ people.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
<!--        <h3>Australia Plenary Speakers</h3>-->
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left"
               v-for="people in speakers.aus" :key="people.name">
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
                <p class="tile-content text-justify">
                  {{ people.bio }}
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
            name: 'Professor Hongxiang Zhang',
            pic: 'h.zhang.png',
            position: 'Secretary General of Chinese Society of Biotechnology, China',
            bio: 'Director of the Editing and Publishing Centre of the Documentation and Information Centre of the Chinese Academy of Sciences, Executive Deputy Editor-in-Chief of the Chinese Journal of Bioengineering, Chairman of the Science Popularization Working Committee, China Coordinator, Deputy Director of the National Biological Vocational and Technical Education Steering Committee of the Chinese Ministry of Education, and editorial research of the Natural Science Journal of the Chinese Academy of Sciences Member of the Academic Committee of the Society, and editorial board member of "Research on Chinese Science and Technology Journals". Research direction: scientific journal publishing, scientific communication. Now he is mainly engaged in the editing and publishing of scientific and technological journals and research on development strategies. He has published more than 40 academic papers and participated in and presided over several national scientific and technological journals research projects. He has monitored over several research projects on development strategies in the field of biotechnology.',
          },
        ],
        chn: [
          {
            name: 'Yunsheng Chen, Professor',
            pic: 'y.chen.png',
            position: 'Academician of CAS, Institute of Biophysics, Chinese Academy of Sciences, China',
            email: 'chenrs@ibp.ac.cn',
            topic: 'Bioinformatics and noncoding RNA',
            abstract: '',
            bio: 'Prof. Chen serves as a member of Human Genome Organization (HUGO), a member of the biomacromolecule group of The Committee on Data for Science and Technology (CODATA), and a member of the bioinformatics professional committee of the International Union of Pure and Applied Physics (IUPAP). In addition, Prof. Chen is the General-secretary and Vice president of Chinese Society of Biophysics. Professor Yunsheng Chen is one of the pioneer scholars developing the researches on theoretical biology, bioinformatics, and noncoding RNA in China. For more than twenty years, Prof. Chen has led his group to perform a series of systemic research projects in the field of bioinformatics, including the whole genome assembly and annotation for T. tengcongensis B4 (the first bacterium genome completely sequenced in China), the 1% Human Genome Project, and the Draft Sequence of the Rice Genome. Since 2001, Prof. Chen has rapidly expanded his interest to the investigation of noncoding RNAs, two widely used noncoding RNA databases (NONCODE, http://www.noncode.org/ and NPInter, http://www.bioinfo.org/NPInter/) have been established and updated periodically. So far, Prof. Chen has published more than 200 papers in SCI, and made more than 20 conference or group reports in the international academic conferences since 1996. For his outstanding early studies on genomic informatics, Prof. Chen was invited to give the "Kotani Memorial Lecture" on the 15th International CODATA Conference, Tsukuba, Japan, 29 Sep. - Oct. 1996, and then selected as the winner of "Kotani Prize". Recently, Prof. Chen was granted the Prize for Scientific and Technological Progress of Ho Leung Ho Lee Foundation in 2008, Tan Jiazhen life sciences and Achievement Award in 2012, and second-class prize of national science and Technology.',
          },
          {
            name: 'Luonan Chen, Ph.D., Professor',
            pic: 'l.chen.png',
            position: 'Center for Excellence in Molecular Cell Science, Chinese Academy of Sciences, Shanghai, China',
            email: 'lnchen@sibcb.ac.cn',
            topic: 'Quantifying individual health status from multi-omics data by dynamic network biomarkers',
            abstract: 'Quantifying individual health status from increasingly accumulated omics data is essential for both early prevention and intervention of diseases, which attracts great attention from communities of biology and medicine. Most of the existing approaches mainly classify individuals into different catalogues or classes based on phenotypes and biomarkers. However, health status of an individual from a dynamical systems viewpoint can be viewed as a non-equilibrium steady state, which can generally be characterized by two key features, i.e. (1) homeostatic potential that represents the ability of homeostatic resilience to withstand perturbations or maintain functions at the current state or phenotype of this individual and (2) phenotypic potential that represents the state/phenotype of the individual on the whole process from health to disease, i.e., the current position of the individual. Here, we proposed a health state map (HSM) method derived from dynamic network biomarker method and diffusion map theory to quantify individual health status with the characterization of such two features in a robust and accurate manner based on multi-omics data. To verify our method, HSM method was applied to the quantification of diabetes mellitus (rat subjects) and the Roux-en-Y Gastric Bypass (human subjects) for both disease progression process and recovery process, which demonstrated its effectiveness and potential for personalized medicine and preventive medicine.',
            bio: 'Luonan Chen received BS degree in the Electrical Engineering, from Huazhong University of Science and Technology, and the M.E. and Ph.D. degrees in the electrical engineering, from Tohoku University, Sendai, Japan, in 1988 and 1991, respectively. From 1997, he was an associate professor of the Osaka Sangyo University, Osaka, Japan, and then a full Professor. Since 2010, he has been a professor and executive director at Key Laboratory of Systems Biology, Shanghai Institute of Biochemistry and Cell Biology, Chinese Academy of Sciences. He was elected as the founding president of Computational Systems Biology Society of OR China, and Chair of Technical Committee of Systems Biology at IEEE SMC Society. In recent years, he published over 350 journal papers and three monographs (books) in the area of bioinformatics, nonlinear dynamics and machine learning (H-index > 70; Citation > 20000).',
          },
          {
            name: 'Jin Gu, Ph.D., Associate Professor',
            pic: 'j.gu.png',
            position: 'Dept. of Automation, Tsinghua University, Beijing 100084, China',
            email: 'jgu@tsinghua.edu.cn',
            topic: 'Explore tissue structures by integrative analyzing the spatial transcriptomes and histopathological images',
            abstract: 'Sequencing-based spatial transcriptomics (ST) is an emerging technology to study in situ gene expression patterns at the whole-genome scale. My lab and collaborators have used 10X Visium to study the spatial heterogeneities in primary liver cancer. From that study, we found that the matched histopathological images can provide complementary information, such as cellular phenotypes, cell density, cell/nucleus locations and non-cellular structures. Also, current ST data still suffer strong technical noises. Here, we present TIST, which enables accurate identification of spatial cluster (SC) and effective enhancement of spatial gene expression patterns. TIST devises a histological feature extraction method based on Markov random field (MRF) to learn the macroscopic cellular patterns from histopathological images and integrates them with transcriptomics and location information into a comprehensive network, termed TIST-net. Based on TIST-net, we realizes SC identification via a random-walk-based strategy and gene expression enhancement via neighborhood smoothing. We benchmarked TIST with 32 real and multiple simulated ST datasets and compared TIST against the start-of-the-art methods. We show that TIST is robust to technical noise, achieves superior performance on multiple tasks and facilitates discovery of important microstructures from sequencing-based ST data.',
            bio: 'Dr. Jin Gu is an Associate Professor at the Institute of Information Processing, Department of Automation, Tsinghua University. His lab aims at developing machine learning methods to explore the big biomedical data, especially diverse omics data, for precision & personalized medicine. Recently, he is interested in finding biomarkers and therapuetic targets and building predictive models of cancer by spatiotemporal omics. He is the editorial board member of Genomics Proteomics Bioinformatics and BMC Bioinformatics and serves as the member of several professional committees of CAA and CAAI.',
          },
          {
            name: 'Kun Qu, Ph.D., Professor',
            pic: 'k.qu.png',
            position: 'Institute of Artificial Intelligence, School of Data Science, Division of Life Sciences and Medicine, University of Science and Technology of China',
            email: 'qukun@ustc.edu.cn',
            topic: 'Challenges and opportunities in spatial genomics',
            abstract: 'Spatial transcriptomics approaches have substantially advanced our capacity to detect the spatial distribution of RNA transcripts in tissues, yet it remains challenging to characterize whole-transcriptome-level data for single cells in space. Addressing this need, researchers have developed integration methods to combine spatial transcriptomic data with single-cell RNA-seq data to predict the spatial distribution of undetected transcripts and/or perform cell type deconvolution of spots in histological sections. However, to date, no independent studies have comparatively analyzed these integration methods to benchmark their performance. Here we present benchmarking of 16 integration methods using 45 paired datasets (comprising both spatial transcriptomics and scRNA-seq data) and 32 simulated datasets. We found that Tangram, gimVI, and SpaGE outperformed other integration methods for predicting the spatial distribution of RNA transcripts, whereas Cell2location, SpatialDWLS, and RCTD are the top-performing methods for the cell type deconvolution of spots. We provide a benchmark pipeline to help researchers select optimal integration methods to process their datasets.',
            bio: 'Dr. Kun Qu is a Professor at the Division of Life Science and Medicine, University of Science and Technology of China (USTC). He also serves as the Director of the Office of International Cooperation and Director of the Office of Hong Kong, Macao and Taiwan Affairs at USTC. His lab has long been engaged in interdisciplinary research in Bioinformatics, Immunology, Genomics and Artificial Intelligence (BIGAI), and in particular to develop novel experimental and computational methods to predict, dissect and control the large-scale single cell gene regulatory programs, and to provide insights into precise diagnosis and therapeutics for human cancer and autoimmune diseases. He has published more than 60 papers in top journals such as Nature, Nature Methods, Cell, Cancer Cell, etc., with more than 10,000 Google Scholar citations, and a total impact factor of more than 800, and an H-index of 43. He was awarded the National Innovative Talents Youth grant in 2016, the National Outstanding Youth grant in 2021 and two National Key R&D grants from the Ministry of Science and Technology.',
          },
          {
            name: 'Qi Liu, Professor',
            pic: 'q.liu.png',
            position: 'Tongji University, Shanghai, China',
            email: 'qiliu@tongji.edu.cn',
            topic: 'Towards AI-based Omics Analysis for Immune-Oncology Study',
            abstract: 'In this talk, we will present several case study related to AI-based omics analysis for immune-oncology study, which hopes to provide novel insights for data-driven tumor precision medicine.',
            bio: 'Qi Liu, Tenured Professor in the Bioinformatics Department in Tongji University. His group has been closely collaborated with the pharmaceutical and clinical experts for data-driven precision medicine study, by using AI and Omics analysis technology, and has published a series of papers in top journals and conferences including Science Advances, Nature Communications, Genome Biology, Science Bulletins, TKDE, SDM, ICDM etc. His group also developed 30+ tools for omics data analysis with related applications.',
          },
          {
            name: 'Yu Xue, Ph.D., Professor',
            pic: 'y.xue.png',
            position: 'Huazhong University of Science and Technology, Wuhan, 430074, China',
            email: 'xueyu@hust.edu.cn',
            topic: 'Artificial intelligence biology for COVID-19',
            abstract: 'Recent advances in deep learning have provided a great opportunity to accurately infer the complex causality from big biological data, and boomed the establishment of a new interdisciplinary field named artificial intelligence biology (AIBIO). Here, we reported our recent progresses in AIBIO for COVID-19. Using the plasma proteomic data of COVID-19 patients, we developed a machine learning-based method named POC-19 to identify 11 proteins as biomarkers and a set of biomarker combinations, which were validated by independent cohorts and accurately distinguished and predicted COVID-19 outcomes, including non-survivors and survivors recovered from mild or severe symptoms. In addition, we constructed an open resource named iCTCF that contained chest computed tomography (CT) images, 130 clinical features and laboratory-confirmed clinical status. We show the utility of the database in the prediction of COVID-19 morbidity and mortality outcomes via a deep-learning algorithm named HUST-19 trained with data from 1170 patients and 19,685 manually labelled CT slices. In an independent validation cohort of 351 patients, the algorithm discriminated negative, mild, and severe cases with areas under the receiving operating characteristic curve of, respectively, 0.944, 0.860 and 0.884. The publicly open database may find further uses in the diagnosis and management of COVID-19 patients. Taken together, we anticipate that AIBIO can be a new paradigm in bioinformatics and provide powerful methods for uncovering new biological findings.',
            bio: 'Dr. Yu Xue is a professor at the Department of Bioinformatics & Systems Biology, Center for Artificial Intelligence Biology, College of Life Science and Technology of Huazhong University of Science and Technology. His major interests are focused on the development of novel databases, AI algorithms and computational software packages, such as GPS (Group-based Prediction System) series algorithms and a novel deep learning framework named Hybrid Learning, for understanding the temporally and spatially regulatory roles of proteins and post-translational modifications (PTMs) involved in cellular signaling pathways and networks, by combining systems biology, bioinformatics, and molecular & cellular biology approaches to identify functional regulators and PTM events in autophagy and human cancer. Dr. Xue has published > 100 papers in a number of high-profile journals, such as Immunity, Nature Biomedical Engineering, Nature Communications, and Nature Protocols, with > 8000 citations. He is an associate Editor of Science Bulletin, Genomics, Proteomics & Bioinformatics, Cells, BMC Genomics, Scientific Reports and PLoS ONE. He is very active on pushing the communication and collaboration of young bioinformaticians in China. ResearcherID: https://publons.com/researcher/G-5929-2011/.',
          },
          {
            name: 'Fangqing Zhao, Professor',
            pic: 'f.zhao.png',
            position: 'Beijing Institutes of Life Science, Chinese Academy of Sciences, Beijing',
            email: 'zhfq@biols.ac.cn',
            topic: 'Novel methods in microbiome data integration and their applications',
            abstract: 'The close association between gut microbiota dysbiosis and human diseases is being increasingly recognized. However, contradictory results are frequently reported as confounding effects exist. The lack of unbiased data integration methods also impedes the discovery of disease-associated microbial biomarkers from different cohorts. Here, we propose an algorithm, NetMoss, for assessing shifts of microbial network modules to identify robust biomarkers associated with various diseases. Compared to previous approaches, the NetMoss method shows better performance in removing batch effects Through comprehensive evaluations on both simulated and real datasets, we demonstrate that NetMoss has great advantages in the identification of disease-related biomarkers. Based on analysis of pandisease microbiota studies, there is a high prevalence of multidisease-related bacteria in global populations. We believe that large-scale data integration will help in understanding the role of the microbiome from a more comprehensive perspective and that accurate biomarker identification will greatly promote microbiome-based medical diagnosis.',
            bio: 'Fangqing Zhao, PhD. Professor at Beijing Institutes of Life Science, Chinese Academy of Sciences (BIOLS). His research interests include developing novel computational approaches for exploring noncoding RNAs and human microbiomes. He obtained his PhD in marine genomics from Institute of Oceanology, Chinese Academy of Sciences in 2006. Dr. Zhao conducted his Postdoc research in the Department of Biochemistry and Molecular Biology at Pennsylvania State University from 2006 to 2010. Since 2011, he has been appointed as a Principal Investigator (100-Talent Plan) by Beijing Institutes of Life Science, Chinese Academy of Sciences. He has been awarded with National Science Fund for Distinguished Young Scholars (2020), and has published more than 50 research papers in high-profile journals including Cell, Gut, Nature Biotechnology, Nature Computational Science, Nature Communications, etc.',
          },
          {
            name: 'Ge Gao, Ph.D., Professor',
            pic: 'g.gao.png',
            position: 'Biomedical Pioneering Innovation Center (BIOPIC), Beijing Advanced Innovation Center for Genomics (ICG), Peking University, Beijing 100871, China',
            email: 'gaog@pku.edu.cn',
            topic: 'Delineate the regulatory map in silico',
            abstract: 'Human individual cells, as the basic biological units of our bodies, carry out their functions through rigorous regulation of gene expression and exhibit heterogeneity among each other in every human tissue. In addition to identify individual genes, one is often interested in how multiple genes interact to form regulatory circuits and carry out cellular functions. Combining massive omics data and leading-edge statistical modeling/machine learning approaches, we have developed set of novel bioinformatic technologies to delineate the regulatory map and characterize the functional genome in action globally during past years. Here we will present our recent advances as well as their potential applications in clinical and translational study.',
            bio: 'In an era of biology turning increasingly into a data-rich science, the massive amount of data generated by high-throughput technologies present both new opportunities and serious challenges. Dr. Ge Gao is one of key bioinformatician in China who has interest in developing novel computational technologies to analyze, integrate and visualize high-throughput biological data effectively and efficiently, with applications to decipher and understand the function and evolution of gene regulatory systems. When he was first recruited as a Principal Investigator (tenure-track) by Peking University in 2011, Dr. Gao has developed fourteen online bioinformatic software tools and databases for efficient analyses of large-scale omics data. More than 1.5 billion hits for these resources as well as 10,000+ citations for 30+ published peer-reviewed papers from world-wide research community during past five years well demonstrates their global significance and impact. Taking advantage of these powerful bioinformatics technical infrastructures, Dr. Gao has been delineating the regulatory map and characterizing the functional genome in action globally. Dr. Gao is an active member of global bioinformatic society. He has been elected as a member of Executive Committee and the China Liaison for Asia-Pacific Bioinformatics Network (APBioNET) since 2011, and the Vice President on Education during 2016 and 2018. He is also a Founding Member of Expert Committee for Computational Biology and Bioinformatics, Chinese Society of Biotechnology (established in 2014), as well as of Expert Committee for Big Data and Biocuration, Genetics Society of China (established in 2015). His academic achievement has been well recognized through the Clarivate Highly Cited Researcher, Elsevier Chinese Most Cited Researchers, the National Top-notch Young Professionals, and Lvye Distinguished Young Biomedical Scholar programs. In the coming years, Dr. Gao will continue his scientific pursuit to decipher the “coded messages” in genomes with cutting-edge bioinformatic and genomic technology.',
          },
          {
            name: 'Jinyan Huang, Professor of Bioinformatics',
            pic: 'j.huang.png',
            position: 'Biomedical big data center, the First Affiliated Hospital, Zhejiang University School of Medicine, Hangzhou, China',
            email: 'huangjy@sjtu.edu.cn',
            topic: 'Transcriptional landscape of acute lymphoblastic leukemia based on big data',
            abstract: 'B cell precursor acute lymphoblastic leukemia(BCP-ALL) and T cell acute lymphoblastic leukemia(T-ALL) is an aggressive hematological malignancy, known to be a heterogeneous disease in pediatric and adult patients. Most BCP-ALL and T-ALL can be classified into known major genetic subtypes, while a substantial proportion of them remains poorly characterized in relation to its underlying genomic abnormalities. We therefore initiated a large-scale big data study to reanalyze and delineate the transcriptome landscape of ALL cases using RNA sequencing. Leveraging the information of gene expression enabled us to identify 14 subtypes in BCP-ALL and 10 subtypes in T-ALL. This large-scale transcriptome sequence analysis of BCP-ALL and T-ALL revealed distinct molecular subgroups that reflect discrete pathways of BCP-ALL and T-ALL, informing disease classification and prognostic stratification. The combined results strongly advocate that RNA sequencing be introduced into the clinical diagnostic workup of ALL.',
            bio: 'Jinyan Huang, Ph.D., MD degree from Tongji University in 2007. He holds the position of the director of the Biomedical Big Data Center (BMBDC) of the First Affiliated Hospital of Zhejiang University School of Medicine. In 2009, with the support of the China-France Applied Science Foundation, he trained at the National Sequencing Center in Paris and the Center for Human Polymorphism (CEPH) for high-throughput data analysis with the supervise of Prof. Mark Lathrop. From 2011 to 2014, he worked as a postdoctoral researcher at the Harvard School of Public Health. In 2014, he returned to China and was employed by the Blood Research Institute of Ruijin Affiliated Hospital of Shanghai Jiaotong University School of Medicine, and was selected for several high-level talent programs. Dr. Huang was awarded the Gilles Kahn Prize of Foundation Franco-Chinoise pour la Science et ses Applications (FFCSA), the first National Translational Medicine Center Translational Medicine Innovation Award, and the National Science and Technology Progress Second Prize (ranked fourth). Served as the vice chairman of the Chinese Anti-Cancer Association Tumor Gene Diagnosis Professional Committee, a standing member of the China Biomedical Big Data Professional Committee, a member of the China Medical Biotechnology Association Gene Detection Technology Branch, a member of the Chinese Pathophysiology Society Experimental Hematology Youth Committee and a member of the Foundation Franco-Chinoise pour la Science et ses Applications (FFCSA) Club, Guest Associate Editor of Frontiers in Genetics magazine. Prof. Jinyan Huang is devoted to research on analysis of omics data, molecular typing, and pathogenesis of leukemia. He has done a lot of work in the sharing, integration, and mining of biomedical big data, and personalized medicine, and has developed a series of medical and health software systems. He has published more than 50 SCI papers as the first or corresponding author in academic journals such as "Nature Communication", "Nucleic Acid Research", "Cell Research" and "Bioinformatics", with a total impact factor of over 500 and an H-index of 40, co-editor-in-chief Published the book "Application of R Language in Biomedical Field". And he has obtained 2 software copyrights and applied for 6 patents.',
          },
          {
            name: 'Xiangjun Du, Professor',
            pic: 'x.du.png',
            position: 'Sun Yat-sen University 1-321 West, Medical Park, Shenzhen Campus of Sun Yat-sen University, No. 66 Gongchang Road, Guangming District, Shenzhen 518107, P.R. China',
            email: 'duxj9@mail.sysu.edu.cn',
            topic: 'Computational Systems Biology of Infectious Diseases',
            abstract: 'Taking influenza, COVID-19 and dengue as examples for new emerging and important infectious diseases, I will show, by combining systems biology strategy and public health perspectives, and integrating the molecular evolution, the population level model and pattern, and the host-pathogen interaction information, how the relevant influencing factors and mechanisms of infectious diseases are revealed, and then statistical learning and mathematical modeling are carried out to simulate, forecast and evaluate. Relevant theories, methods and strategies are helpful for precise prevention, control and treatment of infectious diseases.',
            bio: 'Professor Du is currently Professor and Associate Dean of School of Public Health (Shenzhen), Sun Yat-sen university. His research focus on interdisciplinary study of infectious diseases from the perspective of systems biology by integrating multiple sources of data. Key research areas include molecular evolution of pathogens, epidemiological simulation and prediction of infectious diseases based on statistical learning and mathematical modelling methods, and quantitative study of pathogen-host interaction. Representative studies include antigenic prediction and vaccine recommendation for seasonal influenza virus based on only sequences, long-term forecast for seasonal influenza virus by integrating modelling, quantitative strategy evaluation study for prevention and control of important infectious diseases, evolution and transmission analysis based on mutation network and mechanistic study of susceptibility and vaccine response for infectious diseases.',
          },
          {
            name: 'Youqiong Ye, principal investigator ',
            pic: 'y.ye.png',
            position: 'Shanghai Institute of Immunology, Shanghai Jiao Tong University School of Medicine.',
            email: 'youqiong.ye@shsmu.edu.cn',
            topic: 'Reconstruction of the tumor spatial microenvironment along the malignant-boundary-nonmalignant axis',
            abstract: 'The tumour boundary is a niche composed of malignant cells in the outermost circle of solid tumour and non-malignant cells that are closely adjacent in spatial architecture, bridging these distinct spatial regions. Although cellular composition, cell interactions and molecular network regulation of the tumour boundary all have profound effects on TME remodelling, the tumour boundary has been subjectively described by scientists or pathologists based on IHC staining data without clear criteria or consistent methods. There are no experimental or bioinformatic tools, to our knowledge, which can effectively delineate the tumour boundary. Advances in spatial transcriptomics (ST) enlarge the application of single cell technologies to unveil the expression landscape of tissues with valuable spatial context. Here, we developed Cottrazm, construct tumour boundary microenvironment based on spatial transcriptomics, a computational tool enabling the integration of ST with hematoxylin and eosin-stained histological imaging data, and single-cell transcriptomics to delineate the tumour boundary connecting malignant and non-malignant cell spots. Further, Cottrazm is able to deconvolute cell-type composition at each spatial location and can reconstruct cell type-specific gene expression profiles at sub-spot level. We validated Cottrazm in six cancer types, including colorectal cancer and hepatocellular carcinoma, to delineate the location, cellular composition along the malignant-boundary-non-malignant spatial axis, and cell-cell interaction of sub-spots in the spatial niche. We identified specific subtypes of macrophage and fibroblast that localized to the tumour boundary and interacted with tumour cells to generate a structural boundary which limits T cell infiltration and promotes immune exclusion in the tumour microenvironment. Taken together, Cottrazm provides an integrated tool framework to dissect the tumour spatial microenvironment and facilitates the discovery of functional biological insights, thereby identifying therapeutic targets in oncologic ST datasets.',
            bio: 'Dr Youqiong Ye is principal investigator of Shanghai Institute of Immunology, Shanghai Jiao Tong University School of Medicine. Her research work focuses on data mining and algorithm development from multimodal data (e.g., single-cell transcriptomics, spatial transcriptomics, HE-stained histological images) to explore the regulatory roles of tumour boundary microenvironment on tumour progression and immune escape. Her research aims at revealing critical roles of tumour boundary, transcriptional and post-transcriptional regulation on tumour microenvironment and immunotherapy, providing new potential therapeutic strategies and predictive models for immunotherapy (Cancer cell, 2020; Nature Metabolism, 2019; Nature Immunology, 2019; Cancer Research, 2022; Nature Communications, 2020, 2022; etc.). She has published 70+ scholarly papers.',
          },
        ],
        aus: [
          {
            name: 'Kerrie Mengersen, Distinguished Professo',
            pic: 'k.mengersen.png',
            position: 'Statistics Director, Centre for Data Science Queensland University of Technology (QUT) 2 George Street, Brisbane 4001 Australia',
            email: 'k.mengersen@qut.edu.au',
            topic: 'Where are the vulnerable children?',
            abstract: 'This presentation is joint with Wala Draidi, Harriette Phililips, Owen Forbes and Aiden Price, from the QUT Centre for Data Science. Identification of spatial patterns and clusters among young people with health and developmental vulnerabilities can lead to new insights about contributing factors and facilitate more targeted, cost-effective management actions. In this presentation, I will describe some new methods that we have been exploring to address this challenge. The methods include two-step and hybrid statistical machine learning and visual analytic approaches that capitalize on the benefits of the Bayesian paradigm. A particular focus of the investigation will be on identifying the role of attendance at preschool on children’s vulnerability in their first year of school. This research provides evidence of the need for collaboration between health and education sectors in specific regions of Queensland to update current service provision policies and to ensure holistic and appropriate care is available to support children with development vulnerabilities. As part of the discussion, I will also touch on issues of data access and collation, and potential methods for sharing sensitive data. This work in progress is being undertaken in collaboration with the Queensland Children’s Hospital and a large national consortium of researchers and agencies who are constructing an Australian National Child Health and Development Atlas.',
            bio: 'Kerrie Mengersen is a Distinguished Professor in Statistics and Director of the Centre for Data Science at QUT, Brisbane. Her research interests focus on the development of new statistical machine learning methods and computational algorithms motivated by, and as contributions to, challenges in health, the environment and industry. Most of her work is undertaken in close collaboration with teams of researchers and practitioners. Kerrie is a member of the Australian Academy of Science and the Academy of Social Sciences.',
          },
          {
            name: 'Professor Brent Richards',
            pic: 'b.richards.png',
            position: 'Professor of Critical Care Research at Gold Coast Hospital and Health Service, Medical Director of Research Commercialization, Gold Coast University Hospital, Australia',
            email: 'brent.richards@health.qld.gov.au',
            topic: 'Enabling best patient outcome through integration of AI, big data and critical care',
            abstract: '',
            bio: 'Professor Brent Richards is Medical Director of Innovation and Director of Critical Care Research at Gold Coast Hospital and Health Service, and Professor at Griffith and Bond Universities. He was previously also director of ICU for 15 years, executive director of Surgery, and chair of the state Intensive Care network. Realizing the opportunities and responsibilities in the big data sets being created in healthcare, alongside the rapidly growing capability in AI, Brent is working on ways to expand, understand and interrogate these data sets for clinical understanding, business KPIs and research opportunities, and translating this to patient outcomes. He has co-founded IntelliHQ, a not-for-profit organization bringing together start-ups, industry partners, researchers and educators to work collaboratively to unlock the potential that AI can bring to healthcare, improving value-based care and system productivity.',
          },
          {
            name: 'Professor YuanTong Gu',
            pic: 'y.gu.png',
            position: 'ARC Industrial Transformation Training Centre—Joint Biomechanics. School of Mechanical, Medical and Process Engineering, Queensland University of Technology, Brisbane, Australia',
            email: 'yuantong.gu@qut.edu.au',
            topic: 'Collaborative and Transformative Research in Biomedical Technology at QUT',
            abstract: 'Biomedical technology is one of QUT\'s research strengths and is ranked top nationally and internationally. QUT’s research and development of biomedical technologies focus on better patient treatments and quality of life into the future using regenerative approaches, robotics and artificial intelligence, and advanced manufacturing to expand surgical possibilities and reduce complications. This talk will give an overview of collaborative and transformative research in Biomedical Technologies at QUT. Digital technologies for biomedical technology at QUT will also be presented in this talk.',
            bio: 'Professor YuanTong Gu is Head of the School of Mechanical, Medical and Process Engineering at Queensland University of Technology and The Director of the Australian ARC Training Centre for Joint Biomechanics. He was a prestigious Australian Research Council (ARC) Future Fellow. Prof Gu is a world-renowned expert in computer modelling for mechanical and biomedical engineering. He has secured more than $40M research funds in relevant fields and authored more than 400 refereed journal publications. Most of his publications are in highly-ranked journals, including Nature Communications. His publications have attracted 15K citations in Google Scholar. He was Editor-in-Chief for the Australian Journal of Mechanical Engineering and is Associate Editor for two prestigious international journals and an Editorial Board Member for five other journals. He is now an Executive Committee Member of the Australian Association on Computational Mechanics and the International Association of Applied Mechanics. Prof Gu has obtained several awards and prizes in computational mechanics, including The International Computational Methods Award and The APACM Computational Mechanics Award. He has been invited to give more than 40 plenary and invited talks at international conferences. He served as the conference chair for two international conferences and will organize The 9th Asian Pacific Congress on Computational Mechanics in 2025 at Brisbane.',
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
            name: 'Professor Steven McPhail',
            pic: 's.mcphail.png',
            position: 'Faculty of Health, School of Public Health & Social Work, Queensland University of Technology',
            email: 'steven.mcphail@qut.edu.au',
            topic: '',
            abstract: '',
            bio: 'Steve is a health systems innovator, health services researcher, health economist and clinician. He is Director of the Australian Centre for Health Services Innovation (AusHSI) and Academic Director of the Centre for Healthcare Transformation at the Queensland University of Technology, where he is the Professor of Health Services Research. He is passionate about empowering health services to deliver high-value patient-centered care, particularly improving care for vulnerable members of our community and their families. He has published more than 200 peer-reviewed journal articles, been awarded more than $100 million in competitive research funding and his work has been cited in policy-related documents from the World Bank and World Health Organisation. Steve also co-leads the MRFF funded CHD Life+ research program.',
          },
          {
            name: 'Dr Sundresan Naicker',
            pic: 's.naicker.png',
            position: 'Research Fellow (Implementation Science), Australian Centre for Health Services Innovation, School of Public Health and Social Work, Centre for Healthcare Transformation, Faculty of Health, Queensland University of Technology',
            email: 'sundresan.naicker@qut.edu.au',
            topic: 'Implementation science meets digital health: Facilitating effective and sustainable digital transformation within healthcare',
            abstract: 'Health systems may be characterized as a complex adaptive system. This type of organized social system has three key traits: 1). There is no fixed rate of change 2). The system has some emergent characteristics (new behaviors, components or other adaptations that may arise from changing contexts) which are spontaneous and self-organizing 3). The influencers, predictors, and modifiers of human behaviors (actions and activities) are varied and variable in the system. Consequently, the effective and appropriate utilization, adoption and evaluation of digital health interventions and related data tools and assets within healthcare presents an ongoing challenge. These include poor uptake, inappropriate use, and abandonment over time. However, the field of implementation science provides a range of evidenced-informed principles to systematically overcome these challenges. These principles facilitate consistent, measurable, and contextually pragmatic strategies to adopt, evaluate and support the effective utilization of digital health tools and related data assets across and within health systems. This talk will present key evidence-based implementation principles to inform effective evaluation, assessment, and utilization strategies within digital health, using case studies from our own work.',
            bio: 'Sunny is an Implementation Science Research Fellow at the Australian Centre for Health Services Innovation (AusHSI) at QUT. He also an honorary fellow with Neuroscience Research Australia (NeuRA). He has more than a decade of experience in translational medical and health research and completed his PhD in Medicine (Public Health & Epidemiology) at the University of Sydney in 2017. His research focused on the development and implementation of complex primary care interventions to change patient and physician behavior to improve colorectal cancer screening, detection and mortality in NSW and Victoria. He undertook further post-doctoral training in implementation science with the Cancer Council NSW where he specialized in behavior change theory and practice. His research at AusHSI focuses on developing evidence-based implementation solutions, particularly for digital health interventions; to improve service delivery and patient outcomes within the health system at large.',
          },
          {
            name: 'Associate Professor Jessica Mar',
            pic: 'j.mar.png',
            position: 'Australian Institute for Bioengineering and Nanotechnology, The University of Queensland, Queensland, Australia',
            email: 'j.mar@uq.edu.au',
            topic: '',
            abstract: '',
            bio: 'Associate Professor Jessica Mar\'s research group focuses on the development of bioinformatics methods to understand how regulatory processes go awry in human diseases. Specifically, the groups is interested in modelling how variability of gene expression contributes to regulation of the transcriptome. This interest has led us very naturally into single cell biology where there is a great need to develop accurate statistical approaches for data arising from single cell sequencing. Elucidating heterogeneity and variability in gene expression in this context in important as this may uncover new cellular subtypes or identify stochasticity in the usage of key pathway or master regulators. The explosive availability of big data sets, coupled with the speed at which sequencing technologies have advanced have created an exciting environment for the current state of computational biology research. The Mar group looks to modern tools in statistics, such as Bayesian methodologies and machine learning algorithms, to make sense of biology from big data.',
          },
          {
            name: 'Associate Professor Xiaohui Tao',
            pic: 'x.tao.png',
            position: 'School of Mathematics, Physics and Computing, University of Southern Queensland, Australia',
            email: 'Xiaohui.Tao@usq.edu.au',
            topic: 'The Pursuit of Human-centered AI for P4 Medicine',
            abstract: 'The healthcare and medical practice are now at a crossroad transforming from experience basis to evidence based. P4 (predictive, preventative, personalized, participatory) medicine aiming to detect and prevent disease through extensive biomarker testing, close monitoring, deep statistical analysis, and patient health coaching has been a joint endeavor by healthcare, medicine, and data science research communities, as a part of the journey towards the transformation of evidence-based medicine. In this talk, we will present and discuss our recent works in this endeavor towards P4 medicine adopting innovative human-centered AI algorithms. These typical works reflect our Philosophy of AI research - AI by humanity, for humanity and in service to humanity.',
            bio: 'Dr. Xiaohui Tao is full Professor and Lead of Computing Discipline in the School of Mathematics, Physics and Computing at the University of Southern Queensland, Australia. He is a Senior Member of IEEE and ACM, and an active researcher in AI. Dr. Tao received his Ph.D. in Information Technology from Queensland University of Technology, Australia, which has led to research in data analytics, machine learning, knowledge engineering, natural language processing, and health informatics. His research outcomes have been published in 150+ papers across many top-tier journals (e.g., TKDE, INFFUS, IPM, etc.) and conferences (e.g., IJCAI, ICDE, CIKM, etc.). Tao is the recipient of an Australia Research Council Grant, an Australian Endeavour Research Fellowship, along with several other awards from respected professional bodies and organizations. Tao is Editor-in-Chief of Natural Language Processing Journal, Elsevier. Currently, he is leading a research group that develops algorithms and systems with real-world impact.',
          },
          {
            name: 'Dr Quan Nguyen',
            pic: 'q.nguyen.png',
            position: 'Senior Research Fellow, Head of Genomics and Machine Learning Lab, Institute for Molecular Bioscience, The University of Queensland, Australia',
            email: 'quan.nguyen@imb.uq.edu.au',
            topic: 'Machine learning analysis of spatial and single-cell genomics to identify gene and cell markers of diseases',
            abstract: 'How multiple cell types co-exist and change in tissue remains largely unanswered. However, such knowledge is essential to understand, predict, monitor, and control pathological processes like cancer and infections. We develop a spatial omics platform and machine learning software to identify most cell types and cell locations, quantify spatial molecular profiles, and detect cell-to-cell communication. This platform generates both spatial sequencing and tissue imaging data, two largest types of biological data. Analyzing the data allows us to model spatiotemporal relationship between cells across an undissociated tissue section. Such spatial models suggest genes and cell types that are potential drivers of biological changes associated with diseases. In this presentation, I will talk about predicting cancer progression from non-invasive to invasive states, identifying interacting cancer-immune cells, and studying host responses at sites of infections. Together, our spatial data, computational methods, and clinical collaborations enable us to elucidate important biological processes within diseased tissues.',
            bio: 'Dr Quan Nguyen is a Senior Research Fellow and the head of Genomics and Machine Learning Lab at the Institute for Molecular Bioscience (IMB), The University of Queensland (UQ). He was an ARC DECRA fellow and is currently an NHMRC emerging leadership fellow level 2. He analyses single cell and spatial data to find cell types, their spatial organization and cell-cell interactions underlying differential responses to treatment and risks of cancer metastasis. He aims to find potentially new gene targets to modulate cancer-immune cell interactions and new markers to predict cancer progression and responses to drugs.',
          },
          {
            name: 'Professor Alan Liew',
            pic: 'a.liew.png',
            position: 'School of Information and Communication Technology, Griffith University, Australia',
            email: 'a.liew@griffith.edu.au',
            topic: 'Governing in the Digital Age: Use of Data for Better Policies and Public Services',
            abstract: '',
            bio: 'Alan Liew is currently the Head of School, the School of Information & Communication Technology, and the Deputy Director of the Institute for Integrated Intelligent Systems (IIIS), at Griffith University, Australia. His research interest is in the field of AI, machine learning, medical imaging, computer vision, and bioinformatics. He is leading the medical/health informatics stream in IIIS, and is engaging with the Menzies Health Institute, the Gold Coast University Hospital, Queensland Health, and the Precision Medicine Data Platform (PMDP) on several collaborative projects.',
          },
          {
            name: 'Professor Yongsheng Gao',
            pic: 'y.gao.png',
            position: 'Director, Institute for Integrated and Intelligent Systems, Griffith University, Australia',
            email: 'yongsheng.gao@griffith.edu.au',
            topic: 'Biometrics and artificial intelligence',
            abstract: '',
            bio: 'Professor Yongsheng Gao is an active researcher with international reputation in person identification and environmental informatics research. His research spans computer vision, pattern recognition, biosecurity, pest and disease recognition, vison for agriculture, face recognition, medical imaging, biomedical engineering, and system integration. He has made significant contributions to both fundamental theories and applied research that can solve important industrial problems and published in prestigious or reputable journals.',
          },
          {
            name: 'Miss Jodie Austin',
            pic: 'j.austin.png',
            position: 'BPharm, PGDipClinPharm, PhD candidate, University of Queensland, Australia',
            email: 'j.austin1@uq.edu.au',
            topic: 'Harnessing electronic medical record data to enhance medication safety',
            abstract: 'The digitization of the healthcare sector continues to advance. With the continued expansion of electronic medical records (EMR), new models of digitally enabled health care delivery are being explored. High-risk, complex medications are key candidates for EMR intervention strategies to enhance patient safety. Exploration of the effect on EMR implementation within Queensland Health facilities has identified a reduction in hospital-acquired medication complications. Whilst these results are promising, such risks can be mitigated further through effective real-time data capture to establish continuous learning cycles and care improvement. Real-time analytics products are a viable method to harness and display aggregated data associated with high-risk medication management.',
            bio: 'Jodie currently works for the Queensland Digital Health Centre at the University of Queensland. She is the Director of Clinical Informatics, working within the SMART Hub, a service established to assist researchers with accessing digital health data. She is a clinical pharmacist by background but has spent the last decade working within the field of clinical informatics, five of those years with eHealth Queensland. She is currently completing her PhD, funded via the Digital Health CRC, looking at the management of high-risk medications within a digital hospital environment.',
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
