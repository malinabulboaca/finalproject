import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const articles = useRef([]);

  useEffect(() => {
    if (id) {
      window.scrollTo(0, articles.current[id - 1].offsetTop);
    }
  }, [id]);

  return (
    <section className="blog-articles-wrapper">
      <article ref={(ref) => articles.current.push(ref)}>
        <h3>Beneficii ~ miere de rapita</h3>
        <hr />
        <p>
          Mierea de rapiță, produsă din nectarul florilor de rapiță (Brassica
          napus), este apreciată nu doar pentru gustul său blând, ci și pentru
          beneficiile sale nutriționale și terapeutice. Aceasta este un remediu
          în bolile renale, ale ficatului și pancreasului, ale sistemului cardio
          și circulator, respirator, în osteoporoză, reumatism. Conținutul său
          de antioxidanți ajută la neutralizarea radicalilor liberi, protejând
          celulele împotriva daunelor oxidative. Acești antioxidanți contribuie
          la reducerea inflamației și la prevenirea unor afecțiuni cronice,
          sprijinind astfel un sistem imunitar sănătos.
        </p>
      </article>

      <article ref={(ref) => articles.current.push(ref)}>
        <h3>Beneficii ~ miere poliflora</h3>
        <hr />
        <p>
          Mierea polifloră este un tip de miere produsă din nectarul florilor
          mai multor plante diferite. Spre deosebire de mierea monofloră, care
          provine dintr-o singură sursă de nectar, mierea polifloră conține un
          mix variat de surse florale. Această diversitate îi conferă un profil
          nutrițional și terapeutic complex. Datorită proprietăților sale
          antiinflamatorii, mierea polifloră poate reduce inflamația și ameliora
          durerile articulare. Enzimele naturale din miere facilitează digestia
          și sprijină sănătatea intestinelor, favorizând dezvoltarea bacteriilor
          benefice. De asemenea, are și efecte antimicrobiene, fiind utilă în
          tratamentul tusei și al gâtului iritat, și poate fi aplicată pe piele
          pentru hidratare și vindecarea rănilor minore.
        </p>
      </article>
      <article ref={(ref) => articles.current.push(ref)}>
        <h3>Beneficii ~ miere mana de padure</h3>
        <hr />
        <p>
          Mierea de mană de pădure, cunoscută și sub numele de miere de pădure,
          este un tip de miere mai rar și apreciat, produsă nu din nectarul
          florilor, ci din secrețiile dulci ale unor insecte care se hrănesc cu
          seva copacilor. Această miere are o serie de beneficii pentru
          sănătate, datorită compoziției sale unice. Mierea de mană contribuie
          la sănătatea sistemului digestiv, respirator și a pielii. Aceasta
          ajută la combaterea oboselii, calmează tusea și durerile de gât,
          îmbunătățește aspectul pielii și calmează gastrita. Totodata, mierea
          de mană de pădure poate sprijini regenerarea celulelor hepatice și
          poate contribui la eliminarea toxinelor din corp.
        </p>
      </article>
      <article ref={(ref) => articles.current.push(ref)}>
        <h3>Beneficii ~ miere de salcam</h3>
        <hr />
        <p>
          Mierea de salcâm este un tip de miere monofloră foarte apreciată
          pentru gustul său delicat și pentru numeroasele beneficii pe care le
          oferă sănătății. Această miere este produsă din nectarul florilor de
          salcâm (Robinia pseudoacacia) și se remarcă prin claritatea sa, aroma
          subtilă și consistența fluidă. Unul dintre principalele avantaje ale
          mierii de salcâm este conținutul său bogat în antioxidanți. Aceștia
          ajută la întărirea sistemului imunitar, protejând organismul împotriva
          infecțiilor și bolilor prin neutralizarea radicalilor liberi și
          reducerea inflamației. Proprietățile antibacteriene și antimicrobiene
          ale mierii de salcâm sunt de asemenea remarcabile, fiind eficientă în
          prevenirea și tratarea infecțiilor, atât intern, cât și extern,
          accelerând vindecarea rănilor și arsurilor minore. Mierea de salcâm
          are și un efect calmant asupra sistemului nervos, ajutând la reducerea
          stresului și anxietății. Consumată înainte de culcare, poate
          îmbunătăți calitatea somnului. De asemenea, conține enzime naturale
          care facilitează digestia și absorbția nutrienților, sprijinind
          sănătatea microbiomului intestinal prin proprietățile sale prebiotice.
        </p>
      </article>
    </section>
  );
};

export default Blog;
