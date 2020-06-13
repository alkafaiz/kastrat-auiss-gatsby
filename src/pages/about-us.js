import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About us" description="some descriptions" />
    <Container>
      <p>
        Divisi Kajian isu strategis AUISS atau yang biasa disingkat sebagai
        Kastrat AUISS adalah sebuah divisi yang tergintegrasi dalam PPI cabang
        APU. Divisi ini adalah divisi baru yang dibentuk pada masa jabatan
        Presiden AUISS Kevin Angdreas dengan wakil Kania Mega Tantri. AUISS
        sendiri adalah sebuah organisasi mahasiswa Indonesia yang berkuliah di
        Asia Pacific University di Kuala Lumpur, sekaligus menjadi wadah untuk
        seluruh mahasiswa Indonesia untuk berkompetisi, bersosialisasi, dan
        berorganisasi dengan asas kekeluargaan.
      </p>
      <p>
        Divisi yang baru terbentuk ini kedepannya akan mengkaji isu-isu yang
        sedang hangat sebagai bentuk menyampaikan informasi kepada seluruh
        pembacanya dan mahasiswa Indonesia di APU lebih khususnya. Divisi
        Kastrat tahun 2020 beranggotakan Matthew Farant sebagai koordinator dan
        penanggung jawab kepada Presiden AUISS, Ivandy Octavian dan Hardyanshel
        Kesuma sebagai anggota.
      </p>
      <p>
        Program yang akan dijalankan oleh Kastrat AUISS adalah Intel (Infografis
        dan Artikel) AUISS, Voice of AUISS, dan AUISS Seksi Live. Lain daripada
        itu Kastrat AUISS juga mempunyai beberapa program kolaborasi dengan
        divisi lainnya, yaitu; Independence Day, Kongres AUISS dan menjalin
        hubungan diplomasi dengan PPI cabang lainnya yang ada di Malaysia.
      </p>

      <p>
        Untuk informasi lebih lanjut seputar divisi Kastrat dan AUISS bisa
        follow{" "}
        <span>
          <a href="#">instagram AUISS</a>
        </span>{" "}
        atau email kita di{" "}
        <span>
          <a href="mailto:e.kastratapu@gmail.com">e.kastratapu@gmail.com</a>
        </span>
      </p>
    </Container>
  </Layout>
)

export default AboutUs
