<template>
  <div class="section section-updates bg-gray">
    <div class="container grid-lg text-left">
      <div class="docs-demo columns">

        <div class="column col-9 col-mx-auto col-sm-12">
          <ul class="tab tab-block">
            <li :class="tabClass1">
              <a>
                <button class="btn btn-link" @click="updateDay(1)">Day 1 (24 Nov.)</button>
              </a>
            </li>
            <li :class="tabClass2">
              <a>
                <button class="btn btn-link" @click="updateDay(2)">Day 2 (25 Nov.)</button>
              </a>
            </li>
          </ul>
          <br>
        </div>

        <div class="column col-9 col-mx-auto col-sm-12">
          <div class="timeline" v-if="day === 1">
            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">8:30am</p>
                    <p class="tile-title">Arrivals/registration<br>
                      Location/venue: JW Marriott Gold Coast, Tamborine Gallery,
                      158 Ferny Avenue, Gold Coast
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">8:45am</p>
                    <p class="tile-title">
                      Greetings from the conference chairs: Prof. Jing Sun (chair), Professor
                      Yuantong
                      Gu (Co-chair), Professor Zhiyong Li (co-chair), Professor Di Yu (co-chair)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">9:00am</p>
                    <p class="tile-title">
                      Venue: JW Marriott Gold Coast, Tamborine Gallery<br>
                      <strong>OPENING KEYNOTE ADDRESS</strong>
                    <ol>
                      <li>
                        <strong>Professor Scott Sheppard</strong>, Deputy Vice-Chancellor and
                        Vice-President, International and External Relations, Queensland University
                        of
                        Technology, Australia
                      </li>
                      <li>
                        <strong>Professor John Bell</strong>, University of Southern Queensland,
                        Australia
                      </li>
                      <li>
                        <strong>Professor Hongxiang Zhang</strong>, Secretary General of Chinese
                        Society of Biotechnology, China
                      </li>
                    </ol>
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Jing Sun
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">9:40am</p>
                    <p class="tile-title">
                      <strong>Professor Steven M McPhail</strong>, Centre Director, Australian
                      Centre for Health Services Innovation (AusHSI), and Co- Director, Centre for
                      Healthcare Transformation, Queensland University of Technology, Australia
                      <br>Topic: A systems approach to sustainable transformation of healthcare
                      delivery by optimizing intelligent decision support: moving beyond algorithm
                      obsession to real-world implementation
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Jing Sun
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">10:10am</p>
                    <p class="tile-title">
                      <strong>Professor Yunsheng Chen</strong>, Professor, Academician of CAS,
                      Institute of Biophysics, Chinese Academy of Sciences, China
                      <br>Topic: Bioinformatics and noncoding RNA
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof Yu Xue
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">10:40am</p>
                    <p class="tile-title">
                      <strong>MORNING TEA</strong> (30 minutes – venue: JW Marriott Gold Coast,
                      Tamborine Foyer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">11:10am</p>
                    <p class="tile-title">
                      <strong>Professor Brent Richards</strong>, Professor of Critical Care Research
                      at Gold Coast Hospital and Health Service, Medical Director of Research
                      Commercialisation and, Gold Coast University Hospital, Adjunct Professor at
                      Griffith University, Australia
                      <br>Topic: Enabling best patient outcome through integration of AI, big data
                      and
                      critical care
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Zhiyong Li
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">11:40am</p>
                    <p class="tile-title">
                      <strong>Professor Luonan Chen</strong>, Center for Excellence in Molecular
                      Cell
                      Science, Chinese Academy of Sciences, China
                      <br>Topic: Quantifying individual health status from multi-omics data by
                      dynamic
                      network biomarkers
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yu Xue
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">12:10am</p>
                    <p class="tile-title">
                      <strong>LUNCH BREAK</strong> (60 minutes – venue: JW Marriott Gold Coast,
                      Tamborine Foyer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">1:10pm</p>
                    <p class="tile-title">
                      <strong>Distinguished Professor Kerrie Mengersen</strong>, Queensland
                      University of Technology <br>Topic: Where are the vulnerable children?
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Jianming Yong
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">1:40pm</p>
                    <p class="tile-title">
                      <strong>Associate Professor Jin Gu</strong>, Ph.D., Associate Professor, Dept.
                      of Automation,
                      Tsinghua University, Beijing, China
                      <br>Topic: Explore tissue structures by integrative analysing the spatial
                      transcriptomes and histopathological images
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Fangqing Zhao
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">2:10pm</p>
                    <p class="tile-title">
                      <strong>AFTERNOON TEA</strong> (30 minutes – venue: JW Marriott Gold Coast,
                      Tamborine Foyer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">2:40pm</p>
                    <p class="tile-title">
                      <strong>Professor Yan Li</strong>, University of Southern Queensland,
                      Australia
                      Title: Artificial intelligence for health and independent living
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Jianming Yong
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">3:10pm</p>
                    <p class="tile-title">
                      <strong>Professor Kun Qu</strong>, Professor, Institute of Artificial
                      Intelligence, School of Data Science, Division of Life Sciences and Medicine,
                      University of Science and Technology of China
                      <br>Topic: Challenges and opportunities in spatial genomics
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Fangqing Zhao
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">3:40pm</p>
                    <p class="tile-title">
                      <strong>Professor Yuantong Gu</strong>, Queensland University of Technology,
                      Australia
                      <br>Topic: Collaborative and Transformative Research in Biomedical Technology
                      at QUT
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yuantong Gu
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">4:10pm</p>
                    <p class="tile-title">
                      <strong>Professor Qi Liu</strong>, Tongji University, Shanghai, China
                      <br>Topic: Towards AI-based Omics Analysis for Immune-Oncology Study
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Fangqing Zhao
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">4:40pm</p>
                    <p class="tile-title">
                      <strong>Dr Sundresan (Sunny) Naicker</strong>, Research Fellow –
                      implementation
                      science (Queensland University of Technology), Australia
                      <br>Topic: Translate research for the public good to implementable
                      technologies,
                      services, products and outcomes
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yuantong Gu
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">5:10pm</p>
                    <p class="tile-title">
                      <strong>Break</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">6:30pm</p>
                    <p class="tile-title">
                      <strong>Gala Dinner</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="timeline" v-if="day === 2">
            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">8:30am</p>
                    <p class="tile-title">
                      <strong>Arrival</strong> (Tamborine Gallery, JW Marriott Gold Coast, 158 Ferny
                      Avenue, Gold Coast, QLD 4217)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">8:40am</p>
                    <p class="tile-title">
                      <strong>Professor Yue Xue</strong>, Huazhong University of Science and
                      Technology, China
                      <br>Topic: Artificial intelligence biology for COVID-19
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Lu Xie
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">9:10am</p>
                    <p class="tile-title">
                      <strong>Associate Professor Jessica Mar</strong>, Health Informatician,
                      University of Queensland
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Di Yu
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">9:40am</p>
                    <p class="tile-title">
                      <strong>Professor Fangqing Zhao</strong><br>
                      Topic: Novel methods in microbiome data integration and their applications
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Lu Xie
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">10:10am</p>
                    <p class="tile-title">
                      <strong>Professor Xiaohui Tao</strong>, School of Mathematics, Physics and
                      Computing, University of Southern Queensland, Australia
                      <br>Topic: The Pursuit of Human-centered AI for P4 Medicine (confirmed)
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Di Yu
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">10:40am</p>
                    <p class="tile-title">
                      <strong>MORNING TEA</strong> (30 minutes – venue: JW Marriott Gold Coast,
                      Tamborine Foyer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">11:10am</p>
                    <p class="tile-title">
                      <strong>Dr Quan Nguyen</strong>, Senior Research Fellow, Head of Genomics and
                      Machine Learning Lab, Institute for Molecular Bioscience, The University of
                      Queensland, Australia
                      <br>Topic: Machine learning analysis of spatial and single-cell genomics to
                      identify gene and cell markers of diseases
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Di Yu
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">11:40am</p>
                    <p class="tile-title">
                      <strong>Professor Ge Gao</strong>, Biomedical Pioneering Innovation Centre
                      (BIOPIC), Beijing Advanced Innovation Center for Genomics (ICG), Peking
                      University, Beijing, China
                      <br>Topic: Delineate the regulatory map in silico: novel computational
                      technologies to analyse, integrate and visualize high-throughput biological
                      data
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yu Xue
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">12:10am</p>
                    <p class="tile-title">
                      <strong>LUNCH BREAK</strong> (60 minutes – venue: JW Marriott Gold Coast,
                      Tamborine Foyer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">1:10pm</p>
                    <p class="tile-title">
                      <strong>Professor Alan Liew</strong>, Head of School, the School of
                      Information
                      & Communication Technology, and the Deputy Director of the Institute for
                      Integrated Intelligent Systems (Griffith University)
                      <br>Topic: Governing in the Digital Age: Use of Data for Better Policies and
                      Public Services
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Alan Liew
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">1:40pm</p>
                    <p class="tile-title">
                      <strong>Professor Jinyan Huang</strong>, Biomedical big data centre, the First
                      Affiliated Hospital, Zhejiang University School of Medicine, Hangzhou, China
                      <br>Topic: Transcriptional landscape of acute lymphoblastic leukemia based on
                      big data
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yu Xue
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">2:10pm</p>
                    <p class="tile-title">
                      <strong>AFTERNOON TEA</strong> (30 minutes – venue: JW Marriott Gold Coast,
                      Tamborine Foyer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">2:40pm</p>
                    <p class="tile-title">
                      <strong>Professor Yongsheng Gao</strong>, Director of Integrated Intelligence
                      and Systems, Griffith University
                      <br>Topic: Biometrics and artificial intelligence
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Alan Liew
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">3:10pm</p>
                    <p class="tile-title">
                      <strong>Professor Xiangjun Du</strong>, Sun Yat-sen University
                      <br>Topic: Computational Systems Biology of Infectious Diseases
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yu Xue
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">3:40pm</p>
                    <p class="tile-title">
                      <strong>Ms. Jodie Austin</strong>, University of Queensland
                      <br>Topic: Harnessing electronic medical record data to enhance medication
                      safety
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Alan Liew
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">4:10pm</p>
                    <p class="tile-title">
                      <strong>Prof Youqiong Ye</strong>, Shanghai Jiaotong University, China
                      <br>Topic: Reconstruction of the tumor spatial microenvironment along the
                      malignant-boundary-nonmalignant axis
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Yu Xue
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-left"><a class="timeline-icon">.</a></div>
              <div class="timeline-content">
                <div class="tile">
                  <div class="tile-content">
                    <p class="tile-subtitle">4:40pm</p>
                    <p class="tile-title">
                      <strong>Statements of next conference in China and conference
                        concludes</strong>
                    </p>
                  </div>
                  <div class="tile-action text-gray">
                    Chair: Prof. Jing Sun
                  </div>
                </div>
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
  name: 'ScheduleView',
  data() {
    return {
      day: 1,
      tabClass1: 'tab-item active',
      tabClass2: 'tab-item',
    };
  },
  methods: {
    updateDay(d) {
      this.day = d;
      if (d === 2) {
        this.tabClass1 = 'tab-item';
        this.tabClass2 = 'tab-item active';
      } else {
        this.tabClass1 = 'tab-item active';
        this.tabClass2 = 'tab-item';
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto
}
</style>
