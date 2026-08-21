# 数据集和结果审核

初次运行：`ec_b36_cenpk_full_4omics_x86_v2`
独立DNA便携运行：`yrc_bc187_yjm981_dna_portability_v2`
独立单端RNA便携运行：`prjeb55673_wt_single_end_rna_portability_v1`

该报告审核结果内容以及工作流程完成情况。测量/公开，
发布者处理的层、模型派生的层和合成层保持明确分离。

整体审核状态：**PASS**

## 解释界限

- B36 和CEN.PK 原始锚点测试所有四个预处理路径。他们的单样本交叉研究设计不支持形式微分推理。
- B36 与 MS14384 使用相同研究的公共处理比较。 YRC 与 CEN.PK 对齐了研究中的证据，并且不是受控倍数变化。
- QTL、分子-QTL、细菌GWAS、WGCNA和MOFA2使用单独的合适的公共队列。 DIABLO是在没有监督目标的情况下故意推迟的。
- 代谢组学原始特征保持匿名，除非原始证据支持身份。发布者命名的结果单独显示，并且不会强制使用这些功能。
- 发酵和CPU预测输出是综合可行性测试。观察到的锚定发酵连接为零，因此没有提出真正的菌株建议。
- KG 输出测试类型交换和引用完整性；它们不是已部署的图形数据库或因果模型。

## 定量审核

### 执行

| 组件 | 数据集/分析 | 公制 | 价值 | 状态 | 证据 |
|---|---|---|---:|---|---|
| 验证 | 初级四组学运行 | 验证状态 | PASS | PASS | `validation/ec_b36_cenpk_full_4omics_x86_v2/validation_summary.json` |
| 释放 | 初级四组学运行 | 释放标记存在 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/release/RELEASE_COMPLETE.txt` |
| 验证 | YRC DNA 便携运行 | 验证状态 | PASS | PASS | `validation/yrc_bc187_yjm981_dna_portability_v2/validation_summary.json` |
| 释放 | YRC DNA 便携运行 | 释放标记存在 | 真实 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/release/RELEASE_COMPLETE.txt` |
| 验证 | 独立单端RNA便携运行 | 验证状态 | PASS | PASS | `validation/prjeb55673_wt_single_end_rna_portability_v1/validation_summary.json` |
| 释放 | 独立单端RNA便携运行 | 释放标记存在 | 真实 | PASS | `results/prjeb55673_wt_single_end_rna_portability_v1/release/RELEASE_COMPLETE.txt` |

### 主要组学与扩展结果

| 组件 | 数据集/分析 | 公制 | 价值 | 状态 | 证据 |
|---|---|---|---:|---|---|
| DNA-seq | EC_B36_DNA_ERR2929695 | 候选变体行 | 2 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/EC_B36_DNA_ERR2929695/standardized/candidate_variant_table.tsv` |
| DNA-seq | EC_B36_DNA_ERR2929695 | 通过筛选的变异行 | 2 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/EC_B36_DNA_ERR2929695/standardized/variant_table.tsv` |
| DNA-seq | EC_B36_DNA_ERR2929695 | 最小通过等位基因分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/EC_B36_DNA_ERR2929695/preprocessed/filter_policy.json` |
| DNA-seq | EC_B36_DNA_ERR2929695 | alt_等位基因_剂量_值 | 1 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/EC_B36_DNA_ERR2929695/standardized/variant_table.tsv` |
| DNA-seq | EC_B36_DNA_ERR2929695 | 可解释的注释分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/EC_B36_DNA_ERR2929695/standardized/variant_table.tsv` |
| DNA-seq | SC_CENPK_DNA_SRR445715 | 候选变体行 | 1458 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/SC_CENPK_DNA_SRR445715/standardized/candidate_variant_table.tsv` |
| DNA-seq | SC_CENPK_DNA_SRR445715 | 通过筛选的变异行 | 320 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/SC_CENPK_DNA_SRR445715/standardized/variant_table.tsv` |
| DNA-seq | SC_CENPK_DNA_SRR445715 | 最小通过等位基因分数 | 0.8 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/SC_CENPK_DNA_SRR445715/preprocessed/filter_policy.json` |
| DNA-seq | SC_CENPK_DNA_SRR445715 | alt_等位基因_剂量_值 | 1 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/SC_CENPK_DNA_SRR445715/standardized/variant_table.tsv` |
| DNA-seq | SC_CENPK_DNA_SRR445715 | 可解释的注释分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/dna/assays/SC_CENPK_DNA_SRR445715/standardized/variant_table.tsv` |
| RNA-seq | EC_B36_RNA_SRR12067163 | TPM_行数 | 5118 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/rna/assays/EC_B36_RNA_SRR12067163/standardized/tpm_expression.tsv` |
| RNA-seq | EC_B36_RNA_SRR12067163 | 非零_TPM_行 | 5044 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/rna/assays/EC_B36_RNA_SRR12067163/standardized/tpm_expression.tsv` |
| RNA-seq | EC_B36_RNA_SRR12067163 | 可解释的注释分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/rna/assays/EC_B36_RNA_SRR12067163/standardized/tpm_expression.tsv` |
| RNA-seq | SC_CENPK_RNA_SRR8594115 | TPM_行数 | 5451 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/rna/assays/SC_CENPK_RNA_SRR8594115/standardized/tpm_expression.tsv` |
| RNA-seq | SC_CENPK_RNA_SRR8594115 | 非零_TPM_行 | 5448 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/rna/assays/SC_CENPK_RNA_SRR8594115/standardized/tpm_expression.tsv` |
| RNA-seq | SC_CENPK_RNA_SRR8594115 | 可解释的注释分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/rna/assays/SC_CENPK_RNA_SRR8594115/standardized/tpm_expression.tsv` |
| 蛋白质组学 | EC_B36_PROTEOME_50977 | 量化蛋白质行 | 2022 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/proteomics/assays/EC_B36_PROTEOME_50977/standardized/protein_abundance.tsv` |
| 蛋白质组学 | EC_B36_PROTEOME_50977 | 可解释的注释分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/proteomics/assays/EC_B36_PROTEOME_50977/standardized/protein_abundance.tsv` |
| 蛋白质组学 | SC_CENPK_PROTEOME_S1 | 量化蛋白质行 | 2506 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/proteomics/assays/SC_CENPK_PROTEOME_S1/standardized/protein_abundance.tsv` |
| 蛋白质组学 | SC_CENPK_PROTEOME_S1 | 可解释的注释分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/proteomics/assays/SC_CENPK_PROTEOME_S1/standardized/protein_abundance.tsv` |
| 代谢组学 | EC_B36_METAB_50913 | 匿名_重新处理_特征_行 | 23782 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/EC_B36_METAB_50913/standardized/raw_feature_table.tsv` |
| 代谢组学 | EC_B36_METAB_50913 | 发布者命名结果行 | 170 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/EC_B36_METAB_50913/standardized/reported_metabolite_abundance.tsv` |
| 代谢组学 | EC_B36_METAB_50913 | 代谢物名称分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/EC_B36_METAB_50913/standardized/reported_metabolite_abundance.tsv` |
| 代谢组学 | EC_B36_METAB_50913 | 外部标识符分数 | 0.9765 | INFO | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/EC_B36_METAB_50913/standardized/reported_metabolite_abundance.tsv` |
| 代谢组学 | EC_B36_METAB_50913 | 证据层分离 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/EC_B36_METAB_50913/standardized/metabolite_evidence_separation.json` |
| 代谢组学 | SC_CENPK_METAB_QXA10 | 匿名_重新处理_特征_行 | 2676 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/SC_CENPK_METAB_QXA10/standardized/raw_feature_table.tsv` |
| 代谢组学 | SC_CENPK_METAB_QXA10 | 发布者命名结果行 | 367 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/SC_CENPK_METAB_QXA10/standardized/reported_metabolite_abundance.tsv` |
| 代谢组学 | SC_CENPK_METAB_QXA10 | 代谢物名称分数 | 1.0 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/SC_CENPK_METAB_QXA10/standardized/reported_metabolite_abundance.tsv` |
| 代谢组学 | SC_CENPK_METAB_QXA10 | 外部标识符分数 | 0.9728 | INFO | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/SC_CENPK_METAB_QXA10/standardized/reported_metabolite_abundance.tsv` |
| 代谢组学 | SC_CENPK_METAB_QXA10 | 证据层分离 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/modalities/metabolomics/assays/SC_CENPK_METAB_QXA10/standardized/metabolite_evidence_separation.json` |
| 菌株比较 | EC_B36_vs_MS14384::DNA | 证据行 | 3384 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/EC_B36_vs_MS14384.dna.tsv` |
| 菌株比较 | EC_B36_vs_MS14384::rna | 证据行 | 5357 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/EC_B36_vs_MS14384.rna.tsv` |
| 菌株比较 | EC_B36_vs_MS14384::蛋白质组学 | 证据行 | 4657 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/EC_B36_vs_MS14384.proteomics.tsv` |
| 菌株比较 | EC_B36_vs_MS14384::代谢组学 | 证据行 | 283 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/EC_B36_vs_MS14384.metabolomics.tsv` |
| 菌株比较 | SC_YRC_vs_CENPK1137D::DNA | 证据行 | 3 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/SC_YRC_vs_CENPK1137D.dna.tsv` |
| 菌株比较 | SC_YRC_vs_CENPK1137D::rna | 证据行 | 6465 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/SC_YRC_vs_CENPK1137D.rna.tsv` |
| 菌株比较 | SC_YRC_vs_CENPK1137D::蛋白质组学 | 证据行 | 2835 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/SC_YRC_vs_CENPK1137D.proteomics.tsv` |
| 菌株比较 | SC_YRC_vs_CENPK1137D::代谢组学 | 证据行 | 585 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/comparison/tables/SC_YRC_vs_CENPK1137D.metabolomics.tsv` |
| 多组学整合 | ec_B36_cenpk_full_4omics_x86_v2 | 生物样本 | 2 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/integration/sample_metadata.tsv` |
| 多组学整合 | ec_B36_cenpk_full_4omics_x86_v2 | 特点 | 41877 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/integration/feature_dictionary.tsv` |
| CRISPR | ec_B36_cenpk_full_4omics_x86_v2 | 质量控制状态 | PASS | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/crispr/qc_summary.json` |
| 发酵 | ec_B36_cenpk_full_4omics_x86_v2 | 质量控制状态 | PASS_SYNTHETIC_FIXTURE | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/fermentation/qc_summary.json` |
| MLP | ec_B36_cenpk_full_4omics_x86_v2 | 质量控制状态 | PASS_SYNTHETIC_FEASIBILITY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/mlp/qc_summary.json` |
| kg | ec_B36_cenpk_full_4omics_x86_v2 | 质量控制状态 | PASS_INGESTION_FEASIBILITY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/kg/qc_summary.json` |
| 延伸 | 整合 | 执行状态 | 成功 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | 比较 | 执行状态 | PASS | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 扩展 | CRISPR | 执行状态 | PASS_PUBLIC_PROCESSED_EVIDENCE | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | 变异调用器回归 | 执行状态 | PASS_WORKFLOW_REGRESSION | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | 验证重播 | 执行状态 | PASS_FRESH_REPLAY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | QTL | 执行状态 | PASS_FRESH_VALIDATION_REPLAY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | 分子QTL | 执行状态 | PASS_FRESH_VALIDATION_REPLAY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 扩展 | WGCNA | 执行状态 | PASS_FRESH_VALIDATION_REPLAY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 扩展 | MOFA2 | 执行状态 | PASS_FRESH_VALIDATION_REPLAY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 扩展 | DIABLO | 执行状态 | DEFERRED_NO_PREDECLARED_TARGET | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 扩展 | GEM | 执行状态 | PASS_FRESH_VALIDATION_REPLAY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | 发酵 | 执行状态 | PASS_SYNTHETIC_FIXTURE | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | MLP | 执行状态 | PASS_SYNTHETIC_FEASIBILITY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 延伸 | kg | 执行状态 | PASS_INGESTION_FEASIBILITY | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/extension_status.tsv` |
| 扩展可视化 | ec_B36_cenpk_full_4omics_x86_v2 | 渲染数字 | 11 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/extensions/visualization_eligibility.tsv` |
| MLP | ec_B36_cenpk_full_4omics_x86_v2 | 匹配的观察组学发酵批次 | 0 | EXPECTED_LIMITATION | `results/ec_b36_cenpk_full_4omics_x86_v2/mlp/observed_omics_join_eligibility.tsv` |
| 新鲜方法重播 | 细菌_GWAS | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M1B_ecoref_gwas/milestone_status.tsv` |
| 新鲜方法重播 | 酵母QTL | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M1A_bloom_qtl/qc.tsv` |
| 新鲜方法重播 | eQTL | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M2A_eqtl/matrixeqtl_summary.tsv` |
| 新鲜方法重播 | pQTL | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M2B_pqtl/qc.tsv` |
| 新鲜方法重播 | 酒酵母QTL | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M2C_wine_qtl/qc.tsv` |
| 新鲜方法重播 | WGCNA | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M3A_wgcna/qc.tsv` |
| 新鲜方法重播 | MOFA2 | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M3B_mofa/qc.tsv` |
| 新鲜方法重播 | DIABLO | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M3C_diablo/status.json` |
| 新鲜方法重播 | GEM_MEMOTE | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M4A_gem/memote_summary.tsv` |
| 新鲜方法重播 | 分组预测 | 预期输出当前 | 真实 | PASS | `results/ec_b36_cenpk_full_4omics_x86_v2/validation_replay/fresh_results/M4B_prediction/qc.tsv` |

### 便携性

| 组件 | 数据集/分析 | 公制 | 价值 | 状态 | 证据 |
|---|---|---|---:|---|---|
| DNA-seq | YRC_BC187_DNA | 候选变体行 | 37080 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_BC187_DNA/standardized/candidate_variant_table.tsv` |
| DNA-seq | YRC_BC187_DNA | 通过筛选的变异行 | 35994 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_BC187_DNA/standardized/variant_table.tsv` |
| DNA-seq | YRC_BC187_DNA | 最小通过等位基因分数 | 0.8 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_BC187_DNA/preprocessed/filter_policy.json` |
| DNA-seq | YRC_BC187_DNA | alt_等位基因_剂量_值 | 1 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_BC187_DNA/standardized/variant_table.tsv` |
| DNA-seq | YRC_BC187_DNA | 可解释的注释分数 | 1.0 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_BC187_DNA/standardized/variant_table.tsv` |
| DNA-seq | YRC_YJM981_DNA | 候选变体行 | 46597 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_YJM981_DNA/standardized/candidate_variant_table.tsv` |
| DNA-seq | YRC_YJM981_DNA | 通过筛选的变异行 | 44485 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_YJM981_DNA/standardized/variant_table.tsv` |
| DNA-seq | YRC_YJM981_DNA | 最小通过等位基因分数 | 0.8 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_YJM981_DNA/preprocessed/filter_policy.json` |
| DNA-seq | YRC_YJM981_DNA | alt_等位基因_剂量_值 | 1 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_YJM981_DNA/standardized/variant_table.tsv` |
| DNA-seq | YRC_YJM981_DNA | 可解释的注释分数 | 1.0 | PASS | `results/yrc_bc187_yjm981_dna_portability_v2/modalities/dna/assays/YRC_YJM981_DNA/standardized/variant_table.tsv` |
| RNA-seq | PRJEB55673_WT_RNA_R1 | TPM_行数 | 6459 | PASS | `results/prjeb55673_wt_single_end_rna_portability_v1/modalities/rna/assays/PRJEB55673_WT_RNA_R1/standardized/tpm_expression.tsv` |
| RNA-seq | PRJEB55673_WT_RNA_R1 | 非零_TPM_行 | 2364 | PASS | `results/prjeb55673_wt_single_end_rna_portability_v1/modalities/rna/assays/PRJEB55673_WT_RNA_R1/standardized/tpm_expression.tsv` |
| RNA-seq | PRJEB55673_WT_RNA_R1 | 可解释的注释分数 | 1.0 | PASS | `results/prjeb55673_wt_single_end_rna_portability_v1/modalities/rna/assays/PRJEB55673_WT_RNA_R1/standardized/tpm_expression.tsv` |

## 如何使用本报告

使用`reports/RESULT_AUDIT.tsv`进行程序过滤，并使用此文件进行手动审核。每行的详细含义和限制保留在TSV的`interpretation`和`source_layer`列中。
