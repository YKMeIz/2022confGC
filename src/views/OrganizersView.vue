<template>
  <div>
    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Conference Chair</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left"
               v-for="people in chairs" :key="people.name">
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
                <!--                <div v-if="people.areas">-->
                <!--                  <ul v-for="area in people.areas" :key="area">-->
                <!--                    <li>{{ area }}</li>-->
                <!--                  </ul>-->
                <!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Organizing Committee</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left">
            <ul>
              <li>
                Dawei Xu, Griffith University
              </li>
              <li>Yaozhong Ge, Queensland University of Technology</li>
              <li>Haveena Anbananthan, Queensland University of Technology</li>
              <li>Jessica Benitez Mendieta, Queensland University of Technology</li>
              <li>Zhengduo Zhu, Queensland University of Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      chairs: [
        {
          pic: 'j.sun.png',
          name: 'Professor Jing Sun',
          position: 'School of Medicine and Dentistry, Griffith University, Australia',
          email: 'j.sun@griffith.edu.au',
          bio: 'Jing Sun is a full professor in medical big data and biostatistics at School of Medicine and Dentistry, Griffith University. She is an accredited statistician by Statistical Society of Australia and fellow of International Engineering and Technology Institute. She is a collaborator of United Nation Children’s Fund funded program and Global Burden of Disease program. Her research interests cover electronic medical recorded clinical data, clinical trialed data, big data analysis in medicine and dentistry. These methods include machine learning method, neuroimaging and cardiovascular and vascular ultrasound image data, S16 sequencing and biomedical analysis of microbiota, bacteria and cells, and systematic analysis in global burden of chronic disease, psychiatric disease, and maternal and child health at regional, national and global level.',
        }, {
          pic: 'z.li.png',
          name: 'Professor Zhiyong Li',
          position: 'Professor in Biomedical Engineering, Queensland University of Technology',
          email: 'zhiyong.li@qut.edu.au',
          bio: 'Professor Li has a long-term research interest in cardiovascular diseases (atherosclerosis, aneurysm, atrial affiliation). The main focus of his work has been the development of novel technologies to quantify blood flow and vessel characteristics to better prevent stroke and heart attack. His expertise includes medical imaging and image analysis, computational fluid dynamics, mathematical modelling, and numerical methods. He has made significant contributions to the field with over 200 publications in high-quality journals. His main research areas include: Biomechanics, Mechanobiology, Atherosclerosis, Aneurysm, Thrombosis, Atrial Fibrillation, Hemodynamics, Mathematical Modelling and Computational Simulation, Medical Imaging, Tissue Growth, Angiogenesis and Microcirculation, Bone Growth and Scaffold Degradation, Theoretical Biology, Mathematical Biology.',
          areas: [
            'Biomechanics/Mechanobiology',
            'Atherosclerosis/Aneurysm/Thrombosis/Atrial Fibrillation',
            'Hemodynamics',
            'Mathematical Modelling and Computational Simulation',
            'Medical Imaging',
            'Tissue Growth, Angiogenesis and Microcirculation',
            'Bone Growth and Scaffold Degradation',
            'Theoretical Biology/Mathematical Biology',
          ],
        }, {
          pic: 'y.gu.png',
          name: 'Professor YuanTong Gu',
          position: 'ARC Industrial Transformation Training Centre-Joint Biomechanics; School of Mechanical, Medical and Process Engineering, Queensland University of Technology, Brisbane, Australia',
          email: 'yuantong.gu@qut.edu.au',
          bio: 'Professor YuanTong Gu is Head of the School of Mechanical, Medical and Process Engineering at Queensland University of Technology and The Director of the Australian ARC Training Centre for Joint Biomechanics. He was a prestigious Australian Research Council (ARC) Future Fellow. Prof Gu is a world-renowned expert in computer modelling for mechanical and biomedcial engineering. He has secured more than $40M research funds in relevant fields and authored more than 400 refereed journal publications. Most of his publications are in highly-ranked journals, including Nature Communications. His publications have attracted 15K citations in Google Scholar. He was Editor-in-Chief for the Australian Journal of Mechanical Engineering and is Associate Editor for two prestigious international journals and an Editorial Board Member for five other journals. He is now an Executive Committee Member of the Australian Association on Computational Mechanics and the International Association of Applied Mechanics. Prof Gu has obtained several awards and prizes in computational mechanics, including The International Computational Methods Award and The APACM Computational Mechanics Award. He has been invited to give more than 40 plenary and invited talks at international conferences. He served as the conference chair for two international conferences and will organize The 9th Asian Pacific Congress on Computational Mechanics in 2025 at Brisbane.',
        }, {
          pic: 'd.yu.png',
          name: 'Professor Di Yu',
          position: 'Professorial Research Fellow\n'
            + 'The University of Queensland Diamantina Institute\n'
            + 'Chair in Paediatric Immunotherapy,Child Health Research Centre\n',
          email: 'di.yu@uq.edu.au',
          bio: 'Dr Di Yu is a Professor of Immunology at the University of Queensland Diamantina Institute and Chair in Paediatric Immunotherapy at Child Health Research Centre. He received his PhD from Australian National University in 2007 and postdoctoral training at the Garvan Institute of Medical Research from 2008-2010. Before joining the University of Queensland, he was a faculty member at Monash University from 2011-2016 and at Australian National University ANU from 2017-2019. In the Systems and Translational Immunology Laboratory (STIL), Professor Yu and his team investigate the mechanisms that regulate the functions of T cell subsets in human health and disease and aim to design new strategies to monitor personal immune status and modulate immune pathways to treat cancer, autoimmune diseases, and infection. He has published in high-impact journals including Nature, Nature Immunology, Nature Medicine and Immunity and is recognized as a Global Highly Cited Researcher (2019, 2020) by Clarivate and Web of Sciences.',
        }, {
          pic: 'j.yong.png',
          name: 'Professor Jianming Yong ',
          position: 'University of Southern Queensland, Australia',
          email: 'jianming.yong@usq.edu.au',
          bio: 'Professor Jianming Yong is a full professor in Cybersecurity at University of Southern Queensland, Australia. He has been mainly focused on cyber & cloud security, especially in access control, privacy challenges over the cloud and IoT-based systems. He has published 130+ scholarly papers, including 44 high quality journal papers on cyber security, cloud security, access control and privacy preservation and e-learning. Some publications were published by top tier journals and leading conferences across ICT domain.',
        }, {
          pic: 'a.liew.png',
          name: 'Professor Alan Liew',
          position: 'School of Information and Communication Technology, Griffith University, Australia',
          email: 'a.liew@griffith.edu.au',
          bio: 'Alan Liew is currently the Head of School, the School of Information & Communication Technology, and the Deputy Director of the Institute for Integrated Intelligent Systems (IIIS), at Griffith University, Australia. His research interest is in the field of AI, machine learning, medical imaging, computer vision, and bioinformatics. He is leading the medical/health informatics stream in IIIS, and is engaging with the Menzies Health Institute, the Gold Coast University Hospital, Queensland Health, and the Precision Medicine Data Platform (PMDP) on several collaborative projects.',
        }, {
          pic: 'y.xue.png',
          name: 'Yu Xue, Ph.D., Professor',
          position: 'Huazhong University of Science and Technology, Wuhan, 430074, China',
          email: 'xueyu@hust.edu.cn',
          bio: 'Dr. Yu Xue is a professor at the Department of Bioinformatics & Systems Biology, Center for Artificial Intelligence Biology, College of Life Science and Technology of Huazhong University of Science and Technology. Professor Xue’s major interests are focused on the development of novel databases, AI algorithms and computational software packages, such as GPS (Group-based Prediction System) series algorithms and a novel deep learning framework named Hybrid Learning, for understanding the temporally and spatially regulatory roles of proteins and post-translational modifications (PTMs) involved in cellular signaling pathways and networks, by combining systems biology, bioinformatics, and molecular & cellular biology approaches to identify functional regulators and PTM events in autophagy and human cancer. Dr. Xue has published > 100 papers in a number of high-profile journals, such as Immunity, Nature Biomedical Engineering, Nature Communications, and Nature Protocols, with > 8000 citations. He is an associate Editor of Science Bulletin, Genomics, Proteomics & Bioinformatics, Cells, BMC Genomics, Scientific Reports and PLoS ONE. He is very active on pushing the communication and collaboration of young bioinformaticians in China. ResearcherID: https://publons.com/researcher/G-5929-2011/.',
        }, {
          pic: 'l.xie.png',
          name: 'Professor, Dr Lu Xie',
          position: 'Deputy Director of the Institute of Genomics and Bioinformatics, Shanghai Institute of Biomedical Technology.',
          email: 'xielu@sibpt.com; luxiex2017@outlook.com',
          bio: 'Professor Xie is doctoral supervisor of Fudan University. She is also the director of the Bioinformatics Center of Xiangya Hospital, Central South University. His research interests include omics data bioinformatics analysis, tumor vaccine screening design, clinical prognosis early warning modeling and artificial intelligence-assisted decision-making system. He has undertaken a number of national-level projects such as the National Key Research Program, the 973 Key Basic Research of the Ministry of Science and Technology, the 863 Exploration Pilot, and the International Cooperation on Human Proteomics in China. He has published more than 160 academic papers and nearly 30 team software copyrights. He has won the first prize of Shanghai Natural Science Award and the second prize of Hunan Provincial Science and Technology Progress Award. Leading talents in Shanghai, experts with special government allowances of the State Council.',
        },
      ],
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-width: 150px
}
</style>
