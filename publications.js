const publications = [
  {
    title:
      "Temporal Working Memory: Query-Guided Segment Refinement for Enhanced Multimodal Understanding",
    authors:
      "Xingjian Diao, Chunhui Zhang, Weiyi Wu, Zhongyu Ouyang, Peijun Qing, Ming Cheng, Soroush Vosoughi, Jiang Gui",
    venue: "Findings of NAACL",
    year: 2025,
    group: "multimodal",
    linkUrl: "https://aclanthology.org/2025.naacl-findings.189.pdf",
    summary:
      "Query-guided temporal refinement for stronger multimodal understanding over long video segments.",
  },
  {
    title: "Learning musical representations for music performance question answering",
    authors:
      "Xingjian Diao, Chunhui Zhang, Tian Wu, Ming Cheng, Zhongyu Ouyang, Weiyi Wu, Jiang Gui",
    venue: "Findings of EMNLP",
    year: 2024,
    group: "multimodal",
    linkUrl: "https://aclanthology.org/2024.findings-emnlp.159.pdf",
  },
  {
    title: "SoundMind: RL-Incentivized Logic Reasoning for Audio-Language Models",
    authors:
      "Xingjian Diao, Chunhui Zhang, Kezhi Kong, Weiyi Wu, Chensheng Ma, Zhongyu Ouyang, Peijun Qing, Soroush Vosoughi, Jiang Gui",
    venue: "EMNLP",
    year: 2025,
    group: "multimodal",
    linkUrl: "https://aclanthology.org/2025.emnlp-main.27.pdf",
  },
  {
    title:
      "Addressing Overthinking in Large Vision-Language Models via Gated Perception-Reasoning Optimization",
    authors:
      "Xingjian Diao, Zexin Liu, Chunhui Zhang, Weiyi Wu, Kezhi Kong, Lirong Shi, Kexin Ding, Soroush Vosoughi, Jiang Gui",
    venue: "Findings of ACL",
    year: 2026,
    group: "multimodal",
    linkUrl: "https://arxiv.org/pdf/2601.04442.pdf",
    summary:
      "A study of overthinking behavior in large vision-language models with gated optimization between perception and reasoning.",
  },
  {
    title:
      "Learning sparsity for effective and efficient music performance question answering",
    authors:
      "Xingjian Diao, Tian Yang, Chunhui Zhang, Weiyi Wu, Ming Cheng, Jiang Gui",
    venue: "ACL",
    year: 2025,
    group: "multimodal",
    linkUrl: "https://aclanthology.org/2025.acl-short.12.pdf",
  },
  {
    title:
      "ProtoVQA: An Adaptable Prototypical Framework for Explainable Fine-Grained Visual Question Answering",
    authors:
      "Xingjian Diao, Weiyi Wu, Kezhi Kong, Peijun Qing, Xin Xu, Ming Cheng, Soroush Vosoughi, Jiang Gui",
    venue: "EMNLP",
    year: 2025,
    group: "multimodal",
    linkUrl: "https://aclanthology.org/2025.emnlp-main.54.pdf",
  },
  {
    title:
      "Music's Multimodal Complexity in AVQA: Why We Need More than General Multimodal LLMs",
    authors:
      "Wenhui You, Xingjian Diao, Chunhui Zhang, Kezhi Kong, Weiyi Wu, Zhongyu Ouyang, Chensheng Ma, Tian Wu, Ning Wei, and collaborators",
    venue: "Findings of ACL",
    year: 2026,
    group: "multimodal",
    linkUrl: "https://arxiv.org/pdf/2505.20638.pdf",
  },
  {
    title:
      "Improving Representation Learning for Histopathologic Images with Cluster Constraints",
    authors:
      "Weiyi Wu, Chen Gao, Joseph DiPalma, Soroush Vosoughi, Saeed Hassanpour",
    venue: "ICCV",
    year: 2023,
    group: "biomedical",
    linkUrl:
      "https://openaccess.thecvf.com/content/ICCV2023/papers/Wu_Improving_Representation_Learning_for_Histopathologic_Images_with_Cluster_Constraints_ICCV_2023_paper.pdf",
    summary:
      "Representation learning for histopathology using cluster-based constraints to improve structure-aware image embeddings.",
  },
  {
    title:
      "Graph convolutional neural networks for histologic classification of pancreatic cancer",
    authors:
      "Weiyi Wu, Xi Liu, Robert B. Hamilton, Andrew A. Suriawinata, Saeed Hassanpour",
    venue: "Archives of Pathology & Laboratory Medicine",
    year: "",
    group: "biomedical",
    linkUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10356903/",
  },
  {
    title:
      "Learning Spatial-Preserving Hierarchical Representations for Digital Pathology",
    authors:
      "Weiyi Wu, Xingjian Diao, Chunhui Zhang, Chen Gao, Xin Xu, Shu Li, Jiang Gui",
    venue: "CVPR (Findings Track)",
    year: 2026,
    group: "biomedical",
    linkUrl:
      "https://openaccess.thecvf.com/content/CVPR2026F/papers/Wu_Learning_Spatial-Preserving_Hierarchical_Representations_for_Digital_Pathology_CVPRF_2026_paper.pdf",
    summary:
      "Hierarchical representation learning that preserves spatial structure for digital pathology analysis.",
  },
  {
    title:
      "HiST: A Hierarchical Sparse Transformer for Cross-Modal Spatial Transcriptomics Modeling",
    authors:
      "Weiyi Wu, Xinwen Xu, Xingjian Diao, Siting Li, Zhi Wei, Alma Andersson, Jiang Gui",
    venue: "ICML",
    year: 2026,
    group: "biomedical",
    linkUrl: "https://icml.cc/virtual/2026/poster/61463",
    summary:
      "A hierarchical sparse transformer for cross-modal spatial transcriptomics modeling from whole-slide histology and sparse measured locations.",
  },
  {
    title:
      "Exploiting Label-Independent Regularization from Spatial Patterns for Whole Slide Image Analysis",
    authors:
      "Weiyi Wu, Xin Xu, Chen Gao, Xingjian Diao, Shu Li, Jiang Gui",
    venue: "WACV",
    year: 2026,
    group: "biomedical",
    linkUrl:
      "https://openaccess.thecvf.com/content/WACV2026/papers/Wu_Exploiting_Label-Independent_Regularization_from_Spatial_Patterns_for_Whole_Slide_Image_WACV_2026_paper.pdf",
  },
  {
    title:
      "Multi-Ontology Refined Embeddings (MORE): A hybrid multi-ontology and corpus-based semantic representation model for biomedical concepts",
    authors:
      "Shu Jiang, Weiyi Wu, Naoki Tomita, C. H. Ganoe, Saeed Hassanpour",
    venue: "Journal of Biomedical Informatics",
    year: "",
    group: "biomedical",
    linkUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7665985/",
  },
  {
    title:
      "Natural language processing for automated annotation of medication mentions in primary care visit conversations",
    authors:
      "C. H. Ganoe, Weiyi Wu, P. J. Barr, W. Haslett, M. D. Dannenberg, K. L. Bonasia, and collaborators",
    venue: "JAMIA Open",
    year: "",
    group: "clinical",
    linkUrl:
      "https://www.medrxiv.org/content/10.1101/2021.03.29.21254488v1.full.pdf",
    summary:
      "Clinical NLP methods for automatically annotating medication mentions in primary care conversations.",
  },
  {
    title:
      "Associations Between Substance Use and Instagram Participation to Inform Social Network-Based Screening Models: Multimodal Cross-Sectional Study",
    authors:
      "B. G. Bergman, Weiyi Wu, L. A. Marsch, B. S. Crosier, T. C. DeLise, Saeed Hassanpour",
    venue: "Journal of Medical Internet Research",
    year: "",
    group: "clinical",
    linkUrl: "https://www.jmir.org/2020/9/e21916/PDF",
  },
  {
    title:
      "Patient Engagement in a Multimodal Digital Phenotyping Study of Opioid Use Disorder",
    authors:
      "Courtney I. Campbell, Christine H. Chen, Sarah R. Adams, Alina Asyyed, Nicholas R. Athale, Michael B. Does, Weiyi Wu, and collaborators",
    venue: "Journal of Medical Internet Research",
    year: "",
    group: "clinical",
    linkUrl: "https://www.jmir.org/2023/1/e45556/PDF",
  },
  {
    title:
      "The feasibility and utility of harnessing digital health to understand clinical trajectories in medication treatment for opioid use disorder: D-TECT study design and protocol",
    authors:
      "Lori A. Marsch, Christine H. Chen, Sarah R. Adams, Alina Asyyed, Michael B. Does, Saeed Hassanpour, Weiyi Wu, and collaborators",
    venue: "Frontiers in Psychiatry",
    year: "",
    group: "clinical",
    linkUrl:
      "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.871916/pdf",
  },
  {
    title:
      "A longitudinal observational study with ecological momentary assessment and deep learning to predict non-prescribed opioid use, treatment retention, and medication nonadherence",
    authors:
      "Marissa V. Heinz, Gregory D. Price, Amar Singh, Saptarshi Bhattacharya, Christine H. Chen, Alina Asyyed, Weiyi Wu, and collaborators",
    venue: "Journal of Substance Use and Addiction Treatment",
    year: "",
    group: "clinical",
    linkUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12602038/",
  },
  {
    title:
      "Preprocessing of natural language process variables using a data-driven method improves the association with suicide risk in a large veterans affairs population",
    authors:
      "Shu Li, Michael Levis, Michael DiMambro, Weiyi Wu, Julie Levy, Benjamin Shiner, Jiang Gui",
    venue: "Computers in Biology and Medicine",
    year: "",
    group: "clinical",
    linkUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12677280/",
  },
  {
    title:
      "Assessing and Mitigating Medical Knowledge Drift and Conflicts in Large Language Models",
    authors:
      "Weiyi Wu, Xin Xu, Chen Gao, Xingjian Diao, Shu Li, Luis A. Salas, Jiang Gui",
    venue: "Findings of EMNLP",
    year: 2025,
    group: "medical-llm",
    linkUrl: "https://aclanthology.org/2025.findings-emnlp.38.pdf",
    summary:
      "Evaluation and mitigation of knowledge drift and conflicting medical facts in large language models.",
  },
  {
    title: "MIRA: A Bilingual Benchmark for Medical Information Response Audit",
    authors:
      "Mengfei Xu, Qian Yang, Qian Wang, Xiang Dai, Weiyi Wu, Chen Gao",
    venue: "arXiv",
    year: 2026,
    group: "medical-llm",
    linkUrl: "https://arxiv.org/pdf/2605.28025.pdf",
  },
];

function byYearDesc(a, b) {
  // Entries without a year sort to the end; otherwise newest first.
  const ya = a.year || -Infinity;
  const yb = b.year || -Infinity;
  return yb - ya;
}

function scholarLink(title) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
}

function renderPublication(item) {
  const targetUrl = item.linkUrl || scholarLink(item.title);
  const summary = item.summary ? `<p>${item.summary}</p>` : "";
  const year = item.year ? `, ${item.year}` : "";
  return `
    <article class="publication-item">
      <h4>
        <a href="${targetUrl}" target="_blank" rel="noreferrer">
          ${item.title}
        </a>
      </h4>
      <p class="publication-meta">Published in <em>${item.venue}</em>${year}</p>
      ${summary}
    </article>
  `;
}

function renderInto(id, items) {
  const node = document.getElementById(id);
  if (!node) {
    return;
  }
  node.innerHTML = items.map(renderPublication).join("");
}

renderInto(
  "home-group-multimodal",
  publications
    .filter((item) => item.group === "multimodal")
    .sort(byYearDesc)
);
renderInto(
  "home-group-biomedical",
  publications
    .filter((item) => item.group === "biomedical")
    .sort(byYearDesc)
);
renderInto(
  "home-group-clinical",
  publications
    .filter((item) => item.group === "clinical")
    .sort(byYearDesc)
);
renderInto(
  "home-group-medical-llm",
  publications
    .filter((item) => item.group === "medical-llm")
    .sort(byYearDesc)
);
