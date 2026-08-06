import { useOutletContext } from 'react-router-dom';
import styles from '../../public/css/accountsetting.css?raw'
import { useState } from 'react';

const AccountSetting = () => {
    const { setHide } = useOutletContext();
    setHide(false);
    const [tab, setTab] = useState("ho-so");
    const [confirm, setConfirm] = useState(false);
    const [toast, setToast] = useState(false);

    const handleShowToast = () => {
        setToast(true);
        setTimeout(() => { setToast(false); }, 4000)
    }
    return (
        <>
            <style>{styles}</style>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ":root{--bg0:#0f1117;--bg1:#171c27;--bg2:#1e2436;--bg3:#252d42;--gold:#f5c542;--gold2:#fde68a;--gold-dim:#8a6b0d;--jade:#22d3a0;--jade2:#6effd8;--jade-dim:#0d6b50;--sky:#38bdf8;--sky2:#93dffb;--sky-dim:#0e5577;--rose:#f472b6;--rose2:#fbb6d4;--rose-dim:#7c1d4c;--amber:#fb923c;--t1:#f0f4ff;--t2:#a0aac4;--t3:#5a637a;--b0:rgba(255,255,255,.06);--b-gold:rgba(245,197,66,.22);--b-jade:rgba(34,211,160,.22);--b-sky:rgba(56,189,248,.22);--rad:12px;--tr:.2s ease}#wrapper{padding:0 !important}.settings-page{display:flex;min-height:600px;gap:0;background:var(--bg2);border-radius:var(--rad);overflow:hidden;border:1px solid var(--b0);box-shadow:0 4px 24px rgba(0,0,0,.5);margin:24px 0 40px;font-family:\"Segoe UI\",sans-serif;color:var(--t1)}.settings-sidebar{width:240px;flex-shrink:0;background:var(--bg0);border-right:1px solid var(--b0);display:flex;flex-direction:column}.settings-nav{flex:1;padding:12px 10px;display:flex;flex-direction:column;gap:2px}.settings-nav-btn{display:flex;align-items:center;gap:12px;padding:11px 14px;border:none;border-radius:8px;background:0 0;color:var(--t3);font-size:13px;font-weight:600;cursor:pointer;text-align:left;transition:background var(--tr),color var(--tr);width:100%}.settings-nav-btn svg{flex-shrink:0}.settings-nav-btn:hover{background:var(--bg3);color:var(--t2)}.settings-nav-btn.active{background:linear-gradient(135deg,rgba(245,197,66,.15),rgba(251,146,60,.08));color:var(--gold);border:1px solid var(--b-gold)}.settings-nav-btn .nav-badge{margin-left:auto;background:rgba(34,211,160,.12);border:1px solid rgba(34,211,160,.25);color:var(--jade);font-size:10px;font-weight:700;padding:1px 6px;border-radius:99px}.settings-nav-btn .nav-badge.cost{background:rgba(244,114,182,.1);border-color:rgba(244,114,182,.25);color:var(--rose)}.settings-main{flex:1;min-width:0;display:flex;flex-direction:column}.settings-header{padding:22px 28px 18px;border-bottom:1px solid var(--b0);display:flex;flex-direction:column;align-items:flex-start;gap:0;background:var(--bg1);position:relative;overflow:hidden}.settings-header:after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--gold),var(--amber),var(--rose))}.settings-header-icon{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:rgba(245,197,66,.1);border:1px solid rgba(245,197,66,.2);color:var(--gold);flex-shrink:0;margin-bottom:14px}.settings-header h2{font-size:16px;font-weight:700;color:var(--t1);margin:0 0 2px}.settings-header p{font-size:12px;color:var(--t3);margin:0}.settings-body{flex:1;padding:28px 28px 32px}.s-tab{display:none}.s-tab.active{display:block}.s-field{margin-bottom:18px}.s-field label{display:block;font-size:11px;font-weight:700;color:var(--t3);margin-bottom:7px;text-transform:uppercase;letter-spacing:1.5px}.s-input-wrap{position:relative}.s-input-wrap input,.s-input-wrap select{width:100%;background:var(--bg0);border:1px solid var(--b0);border-radius:8px;color:var(--t1);font-size:14px;padding:11px 14px;outline:none;transition:border-color var(--tr),box-shadow var(--tr);box-sizing:border-box}.s-input-wrap input[type=password]{padding-right:44px}.s-input-wrap input:focus,.s-input-wrap select:focus{border-color:rgba(245,197,66,.5);box-shadow:0 0 0 3px rgba(245,197,66,.08)}.s-input-wrap input.err{border-color:rgba(244,114,182,.5)}.s-input-wrap input.ok{border-color:rgba(34,211,160,.4)}.s-input-wrap input:disabled{opacity:.4;cursor:not-allowed}.s-toggle-pass{position:absolute;right:13px;top:50%;transform:translateY(-50%);cursor:pointer;color:var(--t3);line-height:0;user-select:none}.s-toggle-pass:hover{color:var(--t2)}.s-hint{font-size:11px;color:var(--t3);margin-top:5px;line-height:1.4}.s-hint.warn{color:var(--amber)}.s-hint.good{color:var(--jade)}.s-row{display:flex;gap:14px}.s-row .s-input-wrap{flex:1}.s-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:11px 22px;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;transition:opacity var(--tr),transform .1s,box-shadow var(--tr);letter-spacing:.2px;text-decoration:none;white-space:nowrap}.s-btn:active{transform:scale(.97)}.s-btn:disabled{opacity:.4;cursor:not-allowed;transform:none !important}.s-btn:hover:not(:disabled){opacity:.88}.s-btn-blue{background:linear-gradient(135deg,var(--gold-dim),var(--gold));color:#0f1117}.s-btn-green{background:linear-gradient(135deg,var(--jade-dim),var(--jade));color:#0f1117}.s-btn-red{background:linear-gradient(135deg,var(--rose-dim),var(--rose));color:#0f1117}.s-btn-teal{background:linear-gradient(135deg,var(--sky-dim),var(--sky));color:#0f1117}.s-btn-full{width:100%;margin-top:4px}.s-btn.spin{position:relative;color:transparent !important;pointer-events:none}.s-btn.spin:after{content:'';position:absolute;width:16px;height:16px;top:50%;left:50%;margin:-8px 0 0 -8px;border:2px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;animation:s-spin .75s linear infinite}@keyframes s-spin{to{transform:rotate(360deg)}}.s-alert{display:flex;align-items:flex-start;gap:9px;padding:11px 14px;border-radius:8px;font-size:13px;font-weight:500;line-height:1.5;margin-bottom:18px}.s-alert svg{flex-shrink:0;margin-top:1px}.s-alert.error{background:rgba(244,114,182,.08);border:1px solid rgba(244,114,182,.22);color:var(--rose)}.s-alert.critical{background:rgba(251,146,60,.12);border:1px solid rgba(251,146,60,.35);border-left:4px solid var(--amber);color:#fcd9b0;padding:14px 16px;font-size:13.5px}.s-alert.critical strong{display:block;color:var(--amber);font-size:14px;margin-bottom:6px}.s-alert.critical ul{margin:6px 0 0;padding-left:18px}.s-alert.critical li{margin-bottom:4px}.s-alert.critical li:last-child{margin-bottom:0}.s-alert.warn{background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.2);color:var(--amber)}.s-alert.info{background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.18);color:var(--sky)}.s-alert.success{background:rgba(34,211,160,.07);border:1px solid rgba(34,211,160,.2);color:var(--jade)}.s-step{background:var(--bg1);border:1px solid var(--b0);border-radius:var(--rad);padding:20px;margin-bottom:14px;position:relative;overflow:hidden}.s-step:before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--sky-dim),var(--sky))}.s-step.done{border-color:var(--b-jade);background:rgba(34,211,160,.04)}.s-step.done:before{background:linear-gradient(90deg,var(--jade-dim),var(--jade))}.s-step h4{font-size:13px;font-weight:700;color:var(--t3);margin:0 0 16px;display:flex;align-items:center;gap:8px}.s-step.done h4{color:var(--jade)}.s-step-num{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:var(--sky-dim);border-radius:50%;font-size:11px;font-weight:800;color:#fff;flex-shrink:0}.s-step.done .s-step-num{background:var(--jade-dim)}.s-otp-row{display:flex;gap:8px;align-items:flex-start}.s-otp-row .s-input-wrap{flex:1}.s-otp-row .s-btn{flex-shrink:0;padding:11px 16px}.s-sub-list{list-style:disc;font-size:11px;color:var(--t3);margin:6px 0 0 16px;padding:0}.s-sub-list li{margin-bottom:2px}#s-toast-container{position:fixed;top:20px;right:20px;z-index:99999;display:flex;flex-direction:column;gap:10px;pointer-events:none}.s-toast{display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:9px;font-size:13px;font-weight:600;min-width:280px;max-width:380px;pointer-events:auto;box-shadow:0 6px 24px rgba(0,0,0,.5);animation:s-toast-in .3s ease;border-left:3px solid}@keyframes s-toast-in{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:none}}@keyframes s-toast-out{from{opacity:1;transform:none}to{opacity:0;transform:translateX(30px)}}.s-toast.out{animation:s-toast-out .3s ease forwards}.s-toast.error{background:var(--bg1);border-color:var(--rose);color:var(--rose)}.s-toast.success{background:var(--bg1);border-color:var(--jade);color:var(--jade)}.s-toast.warn{background:var(--bg1);border-color:var(--amber);color:var(--amber)}.s-toast.info{background:var(--bg1);border-color:var(--sky);color:var(--sky)}.s-toast svg{flex-shrink:0}.s-toast-close{margin-left:auto;cursor:pointer;opacity:.5;flex-shrink:0;background:0 0;border:none;color:inherit;padding:0;line-height:0}.s-toast-close:hover{opacity:1}#s-confirm-overlay{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99990;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(6px);opacity:0;transition:opacity .2s;pointer-events:none}#s-confirm-overlay.visible{opacity:1;pointer-events:auto}.s-confirm-box{background:var(--bg1);border:1px solid var(--b0);border-radius:var(--rad);padding:28px;max-width:400px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6);transform:scale(.92);transition:transform .2s;text-align:center;position:relative;overflow:hidden}.s-confirm-box:before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--gold),var(--amber),var(--rose))}#s-confirm-overlay.visible .s-confirm-box{transform:scale(1)}.s-confirm-icon{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}.s-confirm-icon.warn{background:rgba(251,146,60,.12);border:1px solid rgba(251,146,60,.25);color:var(--amber)}.s-confirm-icon.info{background:rgba(56,189,248,.1);border:1px solid rgba(56,189,248,.22);color:var(--sky)}.s-confirm-title{font-size:16px;font-weight:700;color:var(--t1);margin:0 0 8px}.s-confirm-msg{font-size:13px;color:var(--t3);margin:0 0 22px;line-height:1.6}.s-confirm-msg strong{color:var(--t2)}.s-confirm-msg small{display:block;margin-top:6px;font-size:11px;color:var(--amber)}.s-confirm-actions{display:flex;gap:10px;justify-content:center}.s-confirm-actions .s-btn{min-width:100px}.s-divider{height:1px;background:var(--b0);margin:22px 0}.s-cost-card{background:rgba(244,114,182,.06);border:1px solid rgba(244,114,182,.2);border-radius:8px;padding:12px 16px;margin-bottom:18px;font-size:13px;color:var(--rose);display:flex;align-items:center;gap:10px}.s-free-card{background:rgba(34,211,160,.06);border:1px solid rgba(34,211,160,.2);border-radius:8px;padding:12px 16px;margin-bottom:18px;font-size:13px;color:var(--jade);display:flex;align-items:center;gap:10px}.s-cost-card svg,.s-free-card svg{flex-shrink:0}@media (max-width:768px){.settings-page{flex-direction:column;overflow:visible}.settings-sidebar{width:100%;border-right:none;border-bottom:1px solid var(--b0)}.settings-nav{flex-direction:row;flex-wrap:wrap;gap:4px;padding:8px 12px 12px;justify-content:flex-start}.settings-nav-btn{flex:0 0 calc(50% - 2px);min-width:0;padding:9px 12px;font-size:12px;gap:6px}.settings-nav-btn svg{width:14px;height:14px;flex-shrink:0}.settings-nav-btn .nav-badge{display:none}.settings-body{padding:20px 16px 24px}.settings-header{padding:14px 16px 12px}.s-row{flex-direction:column;gap:0}.s-info-label{min-width:110px}}.s-textarea{width:100%;background:var(--bg0);border:1px solid var(--b0);border-radius:8px;color:var(--t1);font-size:14px;padding:11px 14px;outline:none;resize:vertical;min-height:80px;box-sizing:border-box;transition:border-color var(--tr),box-shadow var(--tr);font-family:inherit;line-height:1.5}.s-textarea:focus{border-color:rgba(245,197,66,.5);box-shadow:0 0 0 3px rgba(245,197,66,.08)}.s-info-grid{display:flex;flex-direction:column;gap:6px;margin-bottom:4px}.s-info-row{display:flex;align-items:center;gap:12px;padding:9px 14px;background:var(--bg1);border:1px solid var(--b0);border-radius:8px;transition:background var(--tr)}.s-info-row:hover{background:var(--bg2)}.s-info-label{font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:1px;min-width:140px;flex-shrink:0}.s-info-value{font-size:13px;color:var(--t1)}.tu-luyen-card{padding:14px 16px;background:linear-gradient(145deg,rgba(245,197,66,.06) 0%,var(--bg1) 45%);border:1px solid rgba(245,197,66,.18);border-radius:10px;display:flex;flex-direction:column;gap:14px}.tu-luyen-card__title{font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:1px}.tu-luyen-realms{display:grid;grid-template-columns:minmax(0, 1fr) auto minmax(0, 1fr);gap:10px 12px;align-items:stretch}.tu-luyen-realm{display:flex;flex-direction:column;gap:6px;min-width:0;padding:10px 12px;border-radius:8px}.tu-luyen-realm--current{background:rgba(245,197,66,.1);border:1px solid rgba(245,197,66,.28)}.tu-luyen-realm--next{background:rgba(255,255,255,.03);border:1px dashed rgba(255,255,255,.16)}.tu-luyen-realms--solo{grid-template-columns:1fr}.tu-luyen-realms--solo .tu-luyen-realm--peak{align-items:center;text-align:center;background:rgba(245,197,66,.08);border:1px solid rgba(245,197,66,.22);color:var(--gold);font-size:12px;font-weight:700;padding:12px}.tu-luyen-badge{display:inline-block;align-self:flex-start;font-size:9px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;padding:3px 7px;border-radius:4px;line-height:1.2}.tu-luyen-badge--current{color:#1a1408;background:var(--gold)}.tu-luyen-badge--next{color:var(--t2);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)}.tu-luyen-name{font-size:14px;font-weight:800;color:var(--t1);line-height:1.35;word-break:break-word}.tu-luyen-realm--next .tu-luyen-name{color:var(--t2)}.tu-luyen-sub{font-size:11px;color:var(--t3);line-height:1.4}.tu-luyen-sub strong{color:var(--gold);font-weight:700}.tu-luyen-arrow{display:flex;align-items:center;justify-content:center;color:var(--gold-dim);font-size:18px;font-weight:700;padding-top:28px}.tu-luyen-progress{display:flex;flex-direction:column;gap:6px}.tu-luyen-progress__head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.tu-luyen-progress__label{font-size:10px;color:var(--t3);font-weight:600}.tu-luyen-progress__pct{font-size:12px;font-weight:800;color:var(--gold)}.tu-luyen-bar-bg{height:7px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}.tu-luyen-bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#c49a0a,var(--gold),var(--amber));background-size:200% 100%;animation:tu-luyen-shine 2.5s linear infinite;transition:width .6s cubic-bezier(.4,0,.2,1)}@keyframes tu-luyen-shine{0%{background-position:200% 0}100%{background-position:-200% 0}}.tu-luyen-bar-nums{display:flex;justify-content:space-between;font-size:10px;color:var(--t3)}@media (max-width:560px){.tu-luyen-realms{grid-template-columns:1fr}.tu-luyen-arrow{padding:0;transform:rotate(90deg)}}.profile-feature-grid{display:flex;flex-wrap:wrap;gap:6px}.profile-feature-grid a{display:inline-flex;align-items:center;gap:6px;padding:7px 11px;height:34px;background:rgba(255,255,255,.04);border:1px solid var(--b0);border-radius:7px;color:var(--t3);font-size:12px;font-weight:600;text-decoration:none;white-space:nowrap;transition:background var(--tr),border-color var(--tr),color var(--tr)}.profile-feature-grid a.fg-blue{background:rgba(56,189,248,.08);border-color:rgba(56,189,248,.2);color:var(--sky)}.profile-feature-grid a.fg-blue:hover{background:rgba(56,189,248,.16);border-color:rgba(56,189,248,.4);color:var(--sky2)}.profile-feature-grid a.fg-green{background:rgba(34,211,160,.08);border-color:rgba(34,211,160,.2);color:var(--jade)}.profile-feature-grid a.fg-green:hover{background:rgba(34,211,160,.15);border-color:rgba(34,211,160,.4);color:var(--jade2)}.profile-feature-grid a.fg-orange{background:rgba(251,146,60,.08);border-color:rgba(251,146,60,.2);color:var(--amber)}.profile-feature-grid a.fg-orange:hover{background:rgba(251,146,60,.15);border-color:rgba(251,146,60,.4);color:var(--gold)}.profile-feature-grid a.fg-red{background:rgba(244,114,182,.08);border-color:rgba(244,114,182,.2);color:var(--rose)}.profile-feature-grid a.fg-red:hover{background:rgba(244,114,182,.15);border-color:rgba(244,114,182,.4);color:var(--rose2)}.profile-feature-grid a.fg-purple{background:rgba(168,85,247,.08);border-color:rgba(168,85,247,.2);color:#a855f7}.profile-feature-grid a.fg-purple:hover{background:rgba(168,85,247,.15);border-color:rgba(168,85,247,.4);color:#c084fc}.profile-feature-grid a.fg-teal{background:rgba(34,211,160,.08);border-color:rgba(34,211,160,.2);color:var(--jade)}.profile-feature-grid a.fg-teal:hover{background:rgba(34,211,160,.15);border-color:rgba(34,211,160,.4);color:var(--jade2)}.profile-feature-grid a.fg-amber{background:rgba(245,197,66,.08);border-color:rgba(245,197,66,.2);color:var(--gold)}.profile-feature-grid a.fg-amber:hover{background:rgba(245,197,66,.15);border-color:rgba(245,197,66,.4);color:var(--gold2)}.profile-feature-grid a.fg-cyan{background:rgba(56,189,248,.08);border-color:rgba(56,189,248,.2);color:var(--sky)}.profile-feature-grid a.fg-cyan:hover{background:rgba(56,189,248,.15);border-color:rgba(56,189,248,.4);color:var(--sky2)}.profile-feature-grid a.fg-slate{background:rgba(100,116,139,.08);border-color:rgba(100,116,139,.2);color:#94a3b8}.profile-feature-grid a.fg-slate:hover{background:rgba(100,116,139,.15);border-color:rgba(100,116,139,.4);color:#cbd5e1}.profile-feature-grid a i{font-size:11px;flex-shrink:0}@media (max-width:480px){.profile-feature-grid a{flex:0 0 calc(50% - 3px);justify-content:flex-start}}.sidebar-avatar-section{display:flex;flex-direction:column;align-items:center;padding:22px 16px 16px;border-bottom:1px solid var(--b0)}.sidebar-avatar-link{display:block;position:relative;margin-bottom:10px;transition:transform var(--tr);cursor:pointer}.sidebar-avatar-link:hover{transform:scale(1.05)}.sidebar-avatar-link .avatar-container-header{width:76px !important;height:76px !important}.sidebar-avatar-link .avatar-container-header img{width:100% !important;height:100% !important;object-fit:cover;border-radius:50%}.sidebar-display-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:4px;text-align:center;max-width:190px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sidebar-role-label{font-size:11px;text-align:center;margin-bottom:8px;line-height:1.4}.sidebar-avatar-change-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 14px;border-radius:20px;background:rgba(245,197,66,.1);border:1px solid rgba(245,197,66,.25);color:var(--gold);font-size:11px;font-weight:700;text-decoration:none;transition:background var(--tr),border-color var(--tr),color var(--tr)}.sidebar-avatar-change-btn:hover{background:rgba(245,197,66,.18);border-color:rgba(245,197,66,.4);color:var(--gold2)}@media (max-width:768px){.sidebar-avatar-section{display:none}}"
                }}
            />
            <div id="s-toast-container">
                {toast && (<div className="s-toast success">
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Cập nhật châm ngôn thành công!</span>
                    <button className="s-toast-close" title="Đóng">
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </button>
                </div>)}
            </div>
            <div id="s-confirm-overlay" className={confirm && "visible"}>
                <div className="s-confirm-box">
                    <div className="s-confirm-icon warn" id="s-confirm-icon">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1={12} y1={9} x2={12} y2={13} />
                            <line x1={12} y1={17} x2="12.01" y2={17} />
                        </svg>
                    </div>
                    <div className="s-confirm-title" id="s-confirm-title">
                        Xác nhận thay đổi biệt danh?
                    </div>
                    <div className="s-confirm-msg" id="s-confirm-msg">
                        Biệt danh mới: <strong>Dương Hoàng1</strong>
                    </div>
                    <div className="s-confirm-actions">
                        <button className="s-btn s-btn-red" id="s-confirm-cancel" onClick={() => { setConfirm(false) }}>
                            Hủy
                        </button>
                        <button className="s-btn s-btn-green" id="s-confirm-ok">
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    margin: "12px 0",
                    padding: "12px 18px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    background: "linear-gradient(135deg,#c23030,#e05a00)",
                    borderRadius: 8,
                    borderLeft: "4px solid #ff8c00",
                    boxShadow: "0 2px 12px rgba(200,80,0,.35)",
                    lineHeight: "1.5"
                }}
            >
                {" "}
                <span style={{ fontSize: "1.4em", flexShrink: 0 }}>🔥</span>{" "}
                <span>
                    Đạo hữu đã đủ tu vi để đột phá! Mua <strong>Đột Phá Đan</strong> tại{" "}
                    <a
                        href="/tu-bao-cac"
                        style={{ color: "#ffd700", fontWeight: 700, textDecoration: "none" }}
                    >
                        Tụ Bảo Các
                    </a>{" "}
                    để thăng cấp.
                </span>
            </div>

            <div className="settings-page">
                <aside className="settings-sidebar">
                    <div className="sidebar-avatar-section">
                        <a
                            href="/profile/189458?um_action=edit"
                            className="sidebar-avatar-link"
                            title="Chỉnh sửa hồ sơ"
                        >
                            <div className="avatar-container-header adjust-frame ">

                                <img
                                    src="https://hoathinh3d.am/wp-content/uploads/ultimatemember/189458/profile_photo.png?t=1782829829"
                                    alt="Avatar"
                                    className="responsive-img"
                                />
                            </div>
                        </a>
                        <div className="sidebar-display-name">Dương Hoàng1</div>
                        <div className="sidebar-role-label">
                            <b>
                                <font color="#898989">Phàm Nhân</font>
                            </b>
                        </div>
                        <a
                            href="/profile/189458?um_action=edit"
                            className="sidebar-avatar-change-btn"
                        >
                            <svg
                                width={11}
                                height={11}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            Thay đổi
                        </a>
                    </div>
                    <nav className="settings-nav">
                        <button className={`settings-nav-btn ${tab === "ho-so" ? "active" : ""}`} data-tab="ho-so" onClick={() => { setTab("ho-so") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={2} y={5} width={20} height={14} rx={2} />
                                <circle cx={8} cy={12} r="2.5" />
                                <path d="M14 9h4M14 12h4M14 15h4" />
                            </svg>
                            Hồ Sơ
                        </button>
                        <button className={`settings-nav-btn ${tab === "biet-danh" ? "active" : ""}`} data-tab="biet-danh" onClick={() => { setTab("biet-danh") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                            </svg>
                            Biệt danh <span className="nav-badge">Miễn phí</span>
                        </button>
                        <button className={`settings-nav-btn ${tab === "mat-khau" ? "active" : ""}`} data-tab="mat-khau" onClick={() => { setTab("mat-khau") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            Mật khẩu
                        </button>
                        <button className={`settings-nav-btn ${tab === "email" ? "active" : ""}`} data-tab="email" onClick={() => { setTab("email") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Email
                        </button>
                        <button className={`settings-nav-btn ${tab === "ngay-sinh" ? "active" : ""}`} data-tab="ngay-sinh" onClick={() => { setTab("ngay-sinh") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                <line x1={16} y1={2} x2={16} y2={6} />
                                <line x1={8} y1={2} x2={8} y2={6} />
                                <line x1={3} y1={10} x2={21} y2={10} />
                            </svg>
                            Ngày sinh
                        </button>
                        <button className={`settings-nav-btn ${tab === "mat-khau-2" ? "active" : ""}`} data-tab="mat-khau-2" onClick={() => { setTab("mat-khau-2") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            Mật khẩu cấp 2
                        </button>
                        <button className={`settings-nav-btn ${tab === "ten-tai-khoan" ? "active" : ""}`} data-tab="ten-tai-khoan" onClick={() => { setTab("ten-tai-khoan") }}>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M16 3l4 4-4 4" />
                            </svg>
                            Đổi tên tài khoản
                        </button>
                    </nav>
                </aside>
                <div className="settings-main">
                    <div className={`settings-header s-tab ${tab === "ho-so" ? "active" : ""}`} id="hdr-ho-so">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={2} y={5} width={20} height={14} rx={2} />
                                <circle cx={8} cy={12} r="2.5" />
                                <path d="M14 9h4M14 12h4M14 15h4" />
                            </svg>
                        </div>
                        <div>
                            <h2>Hồ Sơ</h2>
                            <p>Thông tin cá nhân và các tính năng</p>
                        </div>
                    </div>
                    <div className={`settings-header s-tab ${tab === "biet-danh" ? "active" : ""}`} id="hdr-biet-danh">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                            </svg>
                        </div>
                        <div>
                            <h2>Biệt danh</h2>
                            <p>Thay đổi tên hiển thị của bạn</p>
                        </div>
                    </div>
                    <div className={`settings-header s-tab ${tab === "mat-khau" ? "active" : ""}`} id="hdr-mat-khau">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <div>
                            <h2>Mật khẩu</h2>
                            <p>Cập nhật mật khẩu đăng nhập</p>
                        </div>
                    </div>
                    <div className={`settings-header s-tab ${tab === "email" ? "active" : ""}`} id="hdr-email">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div>
                            <h2>Email</h2>
                            <p>Đổi địa chỉ email tài khoản</p>
                        </div>
                    </div>
                    <div className={`settings-header s-tab ${tab === "ngay-sinh" ? "active" : ""}`} id="hdr-ngay-sinh">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                <line x1={16} y1={2} x2={16} y2={6} />
                                <line x1={8} y1={2} x2={8} y2={6} />
                                <line x1={3} y1={10} x2={21} y2={10} />
                            </svg>
                        </div>
                        <div>
                            <h2>Ngày sinh</h2>
                            <p>Cập nhật ngày sinh của bạn</p>
                        </div>
                    </div>
                    <div className={`settings-header s-tab ${tab === "mat-khau-2" ? "active" : ""}`} id="hdr-mat-khau-2">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div>
                            <h2>Mật khẩu cấp 2</h2>
                            <p>Tạo / thay đổi mật khẩu bảo mật cấp hai</p>
                        </div>
                    </div>
                    <div className={`settings-header s-tab ${tab === "ten-tai-khoan" ? "active" : ""}`} id="hdr-ten-tai-khoan">
                        <div className="settings-header-icon">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M16 3l4 4-4 4" />
                            </svg>
                        </div>
                        <div>
                            <h2>Đổi tên tài khoản</h2>
                            <p>Thay đổi tên đăng nhập (username)</p>
                        </div>
                    </div>
                    <div className="settings-body">
                        <div className={`s-tab ${tab === "ho-so" ? "active" : ""}`} id="tab-ho-so">
                            <div className="s-field">

                                <label htmlFor="profile-bio">
                                    Châm ngôn
                                    <span
                                        style={{
                                            fontWeight: 400,
                                            textTransform: "none",
                                            letterSpacing: 0,
                                            color: "#666"
                                        }}
                                    >
                                        (tối đa 300 ký tự)
                                    </span>
                                </label>
                                <textarea
                                    id="profile-bio"
                                    className="s-textarea"
                                    maxLength={300}
                                    rows={3}
                                    defaultValue={""}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: 8
                                    }}
                                >

                                    <span id="bio-char-count" style={{ fontSize: 11, color: "#666" }}>
                                        0/300
                                    </span>
                                    <button
                                        type="button"
                                        id="btn-update-bio"
                                        className="s-btn s-btn-green"
                                        style={{ padding: "9px 18px" }}
                                        onClick={() => handleShowToast()}
                                    >

                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Lưu châm ngôn
                                    </button>
                                </div>
                            </div>
                            <div className="s-divider" />
                            <div className="s-info-grid">
                                <div className="tu-luyen-card">
                                    <div className="tu-luyen-card__title">Tu luyện</div>
                                    <div className="tu-luyen-realms">
                                        <div className="tu-luyen-realm tu-luyen-realm--current">

                                            <span className="tu-luyen-badge tu-luyen-badge--current">
                                                Cảnh giới hiện tại
                                            </span>
                                            <span className="tu-luyen-name">Phàm Nhân</span>
                                            <span className="tu-luyen-sub">
                                                Tu vi: <strong>1,119</strong>
                                            </span>
                                        </div>
                                        <div className="tu-luyen-arrow" aria-hidden="true">
                                            →
                                        </div>
                                        <div className="tu-luyen-realm tu-luyen-realm--next">

                                            <span className="tu-luyen-badge tu-luyen-badge--next">
                                                Cảnh giới kế tiếp
                                            </span>
                                            <span className="tu-luyen-name">Anh Biến 《Sơ Kỳ》</span>
                                            <span className="tu-luyen-sub">
                                                Còn <strong>1,882</strong> tu vi để đạt
                                            </span>
                                        </div>
                                    </div>
                                    <div className="tu-luyen-progress">
                                        <div className="tu-luyen-progress__head">

                                            <span className="tu-luyen-progress__label">
                                                Tiến độ lên cảnh giới kế tiếp
                                            </span>
                                            <span className="tu-luyen-progress__pct">5.9%</span>
                                        </div>
                                        <div className="tu-luyen-bar-bg">
                                            <div className="tu-luyen-bar-fill" style={{ width: "5.9%" }} />
                                        </div>
                                        <div className="tu-luyen-bar-nums">

                                            <span>1,001 tu vi</span> <span>3,001 tu vi</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-info-row">

                                    <span className="s-info-label">Hệ thống tu luyện</span>
                                    <span className="s-info-value">Tiên Nghịch</span>
                                    <a
                                        href="/cap-nhat-he-thong-tu-luyen?t=0e42c"
                                        className="s-btn"
                                        style={{
                                            marginLeft: "auto",
                                            flexShrink: 0,
                                            background: "rgba(0,160,220,0.1)",
                                            border: "1px solid rgba(0,160,220,0.2)",
                                            color: "#50a8d0",
                                            fontSize: 11,
                                            padding: "5px 10px"
                                        }}
                                    >

                                        <svg
                                            width={11}
                                            height={11}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Đổi
                                    </a>
                                </div>
                                <div className="s-info-row">

                                    <span className="s-info-label">ID</span>
                                    <span className="s-info-value">189458</span>
                                </div>
                                <div className="s-info-row">

                                    <span className="s-info-label">Tên tài khoản</span>
                                    <span className="s-info-value">duonghoang31</span>
                                </div>
                                <div className="s-info-row">

                                    <span className="s-info-label">Email</span>
                                    <span className="s-info-value">duong133818@gmail.com</span>
                                </div>
                                <div className="s-info-row">

                                    <span className="s-info-label">Ngày đăng ký</span>
                                    <span className="s-info-value">30/06/2026</span>
                                </div>
                            </div>
                            <div style={{ marginTop: 14 }}>

                                <a
                                    href="https://hoathinh3d.am/wp-login.php?loginSocial=google&action=unlink&redirect=https%3A%2F%2Fhoathinh3d.am%2Fcai-dat-tai-khoan"
                                    className="s-btn s-btn-red"
                                    style={{ fontSize: 12, padding: "9px 16px" }}
                                >

                                    <svg
                                        width={13}
                                        height={13}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={15} y1={9} x2={9} y2={15} />
                                        <line x1={9} y1={9} x2={15} y2={15} />
                                    </svg>
                                    Hủy Liên Kết Google
                                </a>
                            </div>
                            <div className="s-divider" />
                            <div className="s-field">

                                <label style={{ marginBottom: 12 }}>Tính năng</label>
                                <div className="profile-feature-grid">

                                    <a className="fg-blue" href="/diem-danh?t=0e42c">
                                        <i className="fa fa-calendar" /> Điểm Danh
                                    </a>
                                    <a className="fg-green" href="/khoang-mach?t=0e42c">
                                        <i className="fa fa-gem" /> Khoáng Mạch
                                    </a>
                                    <a className="fg-orange" href="/hoang-vuc?t=0e42c">
                                        <i className="fa fa-fire" /> Hoang Vực
                                    </a>
                                    <a className="fg-red" href="/me-cung?t=0e42c">
                                        <i className="fa fa-dungeon" /> Mê Cung
                                    </a>
                                    <a className="fg-green" href="/phuc-loi-duong?t=0e42c">
                                        <i className="fa fa-gift" /> Phúc Lợi Đường
                                    </a>
                                    <a className="fg-orange" href="/do-thach-hh3d?t=0e42c">
                                        <i className="fa fa-dice" /> Đổ Thạch
                                    </a>
                                    <a className="fg-purple" href="/tien-duyen?t=0e42c">
                                        <i className="fa fa-heart" /> Tiên Duyên
                                    </a>
                                    <a className="fg-orange" href="/vong-quay-phuc-van?t=0e42c">
                                        <i className="fa fa-spinner" /> Vòng Quay Phúc Vận
                                    </a>
                                    <a className="fg-purple" href="/bang-xep-hang?t=0e42c">
                                        <i className="fa fa-star" /> BXH Tu Vi
                                    </a>
                                    <a className="fg-purple" href="/bang-xep-hang-truyen-thua?t=0e42c">
                                        <i className="fa fa-star" /> BXH Truyền Thừa
                                    </a>
                                    <a className="fg-purple" href="/bang-xep-hang-tong-mon?t=0e42c">
                                        <i className="fa fa-star" /> BXH Tông Môn
                                    </a>
                                    <a className="fg-amber" href="/bang-phu-hao-tinh-thach?t=0e42c">
                                        <i className="fa fa-star" /> BXH Phú Hào
                                    </a>
                                    <a className="fg-amber" href="/tu-bao-cac?t=0e42c">
                                        <i className="fa-solid fa-shop" /> Tụ Bảo Các
                                    </a>
                                    <a
                                        className="fg-teal"
                                        href="/danh-sach-cac-tong-mon-tai-hoathinh3d?t=0e42c"
                                    >
                                        <i className="fa-solid fa-house" /> Tông Môn
                                    </a>
                                    <a className="fg-green" href="/linh-thach?t=0e42c">
                                        <i className="fa fa-gem" /> Hấp Thu Linh Thạch
                                    </a>
                                    <a className="fg-cyan" href="/phong-chat-version-2-0?t=0e42c">
                                        <i className="fa fa-comments" /> Phòng Chat
                                    </a>
                                    <a className="fg-slate" href="/cap-nhat-he-thong-tu-luyen?t=0e42c">
                                        <i className="fa-solid fa-sitemap" /> Hệ Thống Tu Luyện
                                    </a>
                                    <a className="fg-amber" href="/sap-xep-phap-bao?t=0e42c">
                                        <i className="fas fa-sort" /> Sắp Xếp Pháp Bảo
                                    </a>
                                    <a className="fg-amber" href="/quan-ly-khung-avatar?t=0e42c">
                                        <i className="fas fa-images" /> Quản Lý Khung Avatar
                                    </a>
                                    <a className="fg-blue" href="/nhiem-vu-hang-ngay?t=0e42c">
                                        <i className="fa fa-chart-bar" /> Bảng Hoạt Động
                                    </a>
                                    <a className="fg-slate" href="/gop-y-bao-loi?t=0e42c">
                                        <i className="fa fa-comment" /> Góp Ý-Báo Lỗi
                                    </a>
                                    <a className="fg-cyan" href="/cach-tinh-tu-vi-hoathinh3d?t=0e42c">
                                        <i className="fa fa-chalkboard-user" /> Hướng Dẫn Tu Vi
                                    </a>
                                    <a className="fg-red" href="/my-account/user-logout/?t=0e42c">
                                        <i className="fa fa-sign-out" /> Đăng Xuất
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`s-tab ${tab === "ten-tai-khoan" ? "active" : ""}`} id="tab-ten-tai-khoan">
                            <div className="s-alert warn" style={{ marginBottom: 18 }}>

                                <svg width={15} height={15} viewBox="0 0 16 16" fill="none">
                                    <circle cx={8} cy={8} r="7.5" stroke="currentColor" />
                                    <path
                                        d="M8 4.5v4M8 10.5v1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div>
                                    Tên tài khoản chỉ được chứa
                                    <strong>chữ cái không dấu, số, gạch dưới (_)</strong>. Tối thiểu 6,
                                    tối đa 20 ký tự. Sau khi đổi cần đăng xuất và đăng nhập lại bằng tên
                                    mới.
                                </div>
                            </div>
                            <form id="uname-form" method="post">

                                <input
                                    type="hidden"
                                    name="_action"
                                    defaultValue="change_username"
                                />
                                <input type="hidden" name="uname_nonce" defaultValue="f4e32112bb" />
                                <div className="s-field">

                                    <label>Tên tài khoản hiện tại</label>
                                    <div className="s-input-wrap">
                                        <input type="text" defaultValue="duonghoang31" disabled="" />
                                    </div>
                                </div>
                                <div className="s-field">

                                    <label>Tên tài khoản mới</label>
                                    <div className="s-input-wrap">
                                        <input
                                            type="text"
                                            id="uname-new"
                                            name="new_username"
                                            maxLength={20}
                                            placeholder="6–20 ký tự, không dấu..."
                                        />
                                    </div>
                                    <div className="s-hint" id="uname-hint" />
                                </div>
                                <button type="submit" id="uname-submit" className="s-btn s-btn-blue">

                                    <svg
                                        width={14}
                                        height={14}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    Cập nhật tên tài khoản
                                </button>
                            </form>
                        </div>
                        <div className={`s-tab ${tab === "biet-danh" ? "active" : ""}`} id="tab-biet-danh">
                            <div className="s-free-card">

                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    style={{ flexShrink: 0 }}
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>
                                    Bạn đang có <strong>1 lần thay đổi miễn phí</strong> trong tháng
                                    này.
                                </span>
                            </div>
                            <div className="s-field">

                                <label htmlFor="new-display-name">
                                    Biệt danh mới
                                    <span
                                        style={{
                                            fontWeight: 400,
                                            textTransform: "none",
                                            letterSpacing: 0,
                                            color: "#666"
                                        }}
                                    >
                                        (tối đa 20 ký tự)
                                    </span>
                                </label>
                                <div className="s-input-wrap">

                                    <input
                                        type="text"
                                        id="new-display-name"
                                        maxLength={20}
                                        defaultValue="Dương Hoàng1"
                                    />
                                </div>
                            </div>
                            <div
                                className="s-alert warn"
                                style={{ fontSize: 12, marginBottom: 20 }}
                            >

                                <svg width={14} height={14} viewBox="0 0 16 16" fill="none">
                                    <circle cx={8} cy={8} r="7.5" stroke="currentColor" />
                                    <path
                                        d="M8 4.5v4M8 10.5v1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                Nghiêm cấm đặt tên kém văn hóa, phân biệt vùng miền hoặc tên lãnh tụ.
                                Vi phạm sẽ bị khóa tài khoản vĩnh viễn.
                            </div>
                            <button
                                type="button"
                                id="btn-update-name"
                                className="s-btn s-btn-green"
                                onClick={() => { setConfirm(true) }}
                            >

                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Cập nhật biệt danh
                            </button>
                        </div>
                        <div className={`s-tab ${tab === "mat-khau" ? "active" : ""}`} id="tab-mat-khau">
                            <form method="post" id="cp-form">

                                <input type="hidden" name="_action" defaultValue="change_password" />
                                <div className="s-field">

                                    <label htmlFor="new_password">Mật khẩu mới</label>
                                    <div className="s-input-wrap">

                                        <input
                                            type="password"
                                            id="new_password"
                                            name="new_password"
                                            placeholder="Tối thiểu 6 ký tự"
                                            autoComplete="new-password"
                                        />
                                        <span className="s-toggle-pass" data-target="new_password">

                                            <svg
                                                width={17}
                                                height={17}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="s-hint" id="pass-strength" />
                                </div>
                                <div className="s-field">

                                    <label htmlFor="confirm_password">Nhập lại mật khẩu mới</label>
                                    <div className="s-input-wrap">

                                        <input
                                            type="password"
                                            id="confirm_password"
                                            name="confirm_password"
                                            placeholder="Nhập lại để xác nhận"
                                            autoComplete="new-password"
                                        />
                                        <span className="s-toggle-pass" data-target="confirm_password">

                                            <svg
                                                width={17}
                                                height={17}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="s-hint" id="pass-match" />
                                </div>
                                <button type="submit" className="s-btn s-btn-blue" id="cp-submit">

                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    Đổi mật khẩu
                                </button>
                            </form>
                        </div>
                        <div className={`s-tab ${tab === "email" ? "active" : ""}`} id="tab-email">
                            <form id="email-change-form">
                                <div className="s-step" id="email-step-1">
                                    <h4>
                                        <span className="s-step-num">1</span> Xác minh email hiện tại
                                    </h4>
                                    <div className="s-field">

                                        <label htmlFor="current-email">Email hiện tại</label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="email"
                                                id="current-email"
                                                placeholder="Nhập địa chỉ email hiện tại..."
                                            />
                                        </div>
                                    </div>
                                    <div className="s-field">

                                        <label htmlFor="otp-code-old">Mã OTP từ email hiện tại</label>
                                        <div className="s-otp-row">
                                            <div className="s-input-wrap">

                                                <input
                                                    type="text"
                                                    id="otp-code-old"
                                                    placeholder="6 ký tự..."
                                                    maxLength={6}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                id="send-otp-old"
                                                className="s-btn s-btn-teal"
                                            >
                                                Gửi OTP
                                            </button>
                                        </div>
                                        <ul className="s-sub-list">
                                            <li>Mã có hiệu lực 30 phút — tối đa 3 lần/ngày</li>
                                            <li>Kiểm tra cả hộp thư spam nếu không thấy</li>
                                        </ul>
                                    </div>
                                    <button
                                        type="button"
                                        id="verify-old-email"
                                        className="s-btn s-btn-blue"
                                    >

                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Xác minh email hiện tại
                                    </button>
                                </div>
                                <div className="s-step" id="email-step-2" style={{ display: "none" }}>
                                    <h4>
                                        <span className="s-step-num">2</span> Xác minh email mới
                                    </h4>
                                    <div className="s-field">

                                        <label htmlFor="new-email">
                                            Email mới
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    textTransform: "none",
                                                    letterSpacing: 0,
                                                    color: "#666"
                                                }}
                                            >
                                                (chỉ Gmail)
                                            </span>
                                        </label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="email"
                                                id="new-email"
                                                placeholder="example@gmail.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="s-field">

                                        <label htmlFor="otp-code-new">Mã OTP từ email mới</label>
                                        <div className="s-otp-row">
                                            <div className="s-input-wrap">

                                                <input
                                                    type="text"
                                                    id="otp-code-new"
                                                    placeholder="6 ký tự..."
                                                    maxLength={6}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                id="send-otp-new"
                                                className="s-btn s-btn-teal"
                                            >
                                                Gửi OTP
                                            </button>
                                        </div>
                                    </div>
                                    <button type="submit" className="s-btn s-btn-green">

                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Hoàn tất thay đổi email
                                    </button>
                                </div>
                                <input type="hidden" id="email-nonce" defaultValue="e41f171e3e" />
                                <input type="hidden" id="old-email-verified" defaultValue={0} />
                            </form>
                            <div className="s-divider" />
                            <div style={{ textAlign: "center" }}>

                                <a
                                    href="/khoa-tai-khoan-thay-doi-email"
                                    className="s-btn s-btn-red"
                                    style={{ fontSize: 12, padding: "9px 18px" }}
                                >

                                    <svg
                                        width={13}
                                        height={13}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={12} y1={8} x2={12} y2={12} />
                                        <line x1={12} y1={16} x2="12.01" y2={16} />
                                    </svg>
                                    Không nhận được OTP? Thay đổi khẩn cấp
                                </a>
                            </div>
                        </div>
                        <div className={`s-tab ${tab === "ngay-sinh" ? "active" : ""}`} id="tab-ngay-sinh">
                            <ul
                                className="s-sub-list"
                                style={{ color: "#666", fontSize: 12, margin: "0 0 18px 14px" }}
                            >
                                <li>Ngày sinh dùng để tính quà sinh nhật hàng năm.</li>
                                <li>
                                    Chỉ có thể thay đổi <strong>một lần mỗi 24 giờ</strong>.
                                </li>
                                <li>Vui lòng điền chính xác để nhận quà đúng thời điểm.</li>
                            </ul>
                            <form id="dob-form">
                                <div className="s-field">

                                    <label htmlFor="new-dob">Ngày sinh mới</label>
                                    <div className="s-input-wrap" style={{ maxWidth: 260 }}>

                                        <input
                                            type="date"
                                            id="new-dob"
                                            name="new-dob"
                                            defaultValue=""
                                            max="2026-08-05"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    id="update-dob-btn"
                                    className="s-btn s-btn-green"
                                >

                                    <svg
                                        width={14}
                                        height={14}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    Cập nhật ngày sinh
                                </button>
                            </form>
                            <div id="dob-inline-msg" style={{ marginTop: 14 }} />
                        </div>
                        <div className={`s-tab ${tab === "mat-khau-2" ? "active" : ""}`} id="tab-mat-khau-2">
                            <div className="s-alert critical">

                                <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1={12} y1={9} x2={12} y2={13} />
                                    <line x1={12} y1={17} x2="12.01" y2={17} />
                                </svg>
                                <div>

                                    <strong>Lưu ý quan trọng về Mật khẩu cấp 2</strong>
                                    <ul>
                                        <li>
                                            Mật khẩu cấp 2 <strong>chỉ có thể reset</strong> khi bạn có
                                            <strong>email chính chủ</strong> và còn truy cập được hộp thư
                                            đó.
                                        </li>
                                        <li>
                                            Hãy <strong>cẩn trọng</strong> khi tạo hoặc thay đổi — ghi nhớ
                                            mật khẩu, <strong>tránh quên</strong>.
                                        </li>
                                        <li>
                                            <strong>Ban quản trị sẽ không hỗ trợ</strong> thay đổi, xóa hay
                                            khôi phục mật khẩu cấp 2 thay bạn.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="sp-main-section">
                                <div className="s-alert warn" style={{ marginBottom: 18 }}>

                                    <svg width={15} height={15} viewBox="0 0 16 16" fill="none">
                                        <circle cx={8} cy={8} r="7.5" stroke="currentColor" />
                                        <path
                                            d="M8 4.5v4M8 10.5v1"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span>
                                        Bạn chưa có mật khẩu cấp 2. Tạo ngay để bảo vệ tài khoản.
                                    </span>
                                </div>
                                <form id="sp-form">
                                    <div className="s-field">

                                        <label htmlFor="sp-current-password">
                                            Mật khẩu đăng nhập hiện tại
                                        </label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="password"
                                                id="sp-current-password"
                                                placeholder="Xác minh bằng mật khẩu đăng nhập"
                                                autoComplete="current-password"
                                            />
                                            <span
                                                className="s-toggle-pass"
                                                data-target="sp-current-password"
                                            >
                                                <svg
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="s-field">

                                        <label htmlFor="sp-new-password">
                                            Mật khẩu cấp 2
                                            <span style={{ fontSize: 11, fontWeight: 400, color: "#666" }}>
                                                (tối thiểu 6 ký tự, không chứa khoảng trắng)
                                            </span>
                                        </label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="password"
                                                id="sp-new-password"
                                                placeholder="Tối thiểu 6 ký tự"
                                                autoComplete="new-password"
                                            />
                                            <span className="s-toggle-pass" data-target="sp-new-password">
                                                <svg
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="s-hint" id="sp-pass-hint" />
                                    </div>
                                    <div className="s-field">

                                        <label htmlFor="sp-confirm-password">
                                            Nhập lại mật khẩu cấp 2
                                        </label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="password"
                                                id="sp-confirm-password"
                                                placeholder="Nhập lại để xác nhận"
                                                autoComplete="new-password"
                                            />
                                            <span
                                                className="s-toggle-pass"
                                                data-target="sp-confirm-password"
                                            >
                                                <svg
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="s-hint" id="sp-match-hint" />
                                    </div>
                                    <button type="submit" className="s-btn s-btn-blue" id="sp-submit">

                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                        Tạo mật khẩu cấp 2
                                    </button>
                                    <input type="hidden" id="sp-action" defaultValue="create" />
                                </form>
                                <div className="s-divider" />
                            </div>
                            <div id="sp-reset-section" style={{ display: "none" }}>
                                <div className="s-alert warn" style={{ marginBottom: 18 }}>

                                    <svg width={15} height={15} viewBox="0 0 16 16" fill="none">
                                        <circle cx={8} cy={8} r="7.5" stroke="currentColor" />
                                        <path
                                            d="M8 4.5v4M8 10.5v1"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span>
                                        Mã OTP sẽ gửi đến email của tài khoản. Mật khẩu mới ít nhất
                                        <strong>6 ký tự</strong>, không chứa khoảng trắng.
                                    </span>
                                </div>
                                <div className="s-step" id="sp-reset-step1">
                                    <h4>
                                        <span className="s-step-num">1</span> Gửi mã xác minh
                                    </h4>
                                    <div className="s-field">

                                        <label htmlFor="sp-reset-email">Email tài khoản</label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="email"
                                                id="sp-reset-email"
                                                placeholder="Nhập email hiện tại của tài khoản"
                                            />
                                        </div>
                                    </div>
                                    <button type="button" id="sp-send-otp" className="s-btn s-btn-teal">

                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        Gửi mã xác minh
                                    </button>
                                </div>
                                <div
                                    className="s-step"
                                    id="sp-reset-step2"
                                    style={{ display: "none", marginTop: 14 }}
                                >
                                    <h4>
                                        <span className="s-step-num">2</span> Đặt mật khẩu mới
                                    </h4>
                                    <div className="s-field">

                                        <label htmlFor="sp-reset-otp">Mã OTP</label>
                                        <div className="s-input-wrap" style={{ maxWidth: 200 }}>

                                            <input
                                                type="text"
                                                id="sp-reset-otp"
                                                placeholder="6 ký tự"
                                                maxLength={10}
                                            />
                                        </div>
                                    </div>
                                    <div className="s-field">

                                        <label htmlFor="sp-reset-new-pass">Mật khẩu cấp 2 mới</label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="password"
                                                id="sp-reset-new-pass"
                                                placeholder="Tối thiểu 6 ký tự"
                                                autoComplete="new-password"
                                            />
                                            <span className="s-toggle-pass" data-target="sp-reset-new-pass">
                                                <svg
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="s-field">

                                        <label htmlFor="sp-reset-confirm-pass">
                                            Xác nhận mật khẩu mới
                                        </label>
                                        <div className="s-input-wrap">

                                            <input
                                                type="password"
                                                id="sp-reset-confirm-pass"
                                                placeholder="Nhập lại"
                                                autoComplete="new-password"
                                            />
                                            <span
                                                className="s-toggle-pass"
                                                data-target="sp-reset-confirm-pass"
                                            >
                                                <svg
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: 10, marginTop: 4 }}>

                                        <button
                                            type="button"
                                            id="sp-reset-back"
                                            className="s-btn"
                                            style={{
                                                background: "rgba(255,255,255,0.06)",
                                                color: "#708898",
                                                border: "1px solid rgba(255,255,255,0.08)"
                                            }}
                                        >

                                            <svg
                                                width={13}
                                                height={13}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                            Quay lại
                                        </button>
                                        <button
                                            type="button"
                                            id="sp-reset-submit"
                                            className="s-btn s-btn-green"
                                        >

                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            Cập nhật mật khẩu cấp 2
                                        </button>
                                    </div>
                                </div>
                                <div className="s-divider" />
                                <div style={{ textAlign: "center" }}>

                                    <button
                                        type="button"
                                        id="sp-toggle-back-main"
                                        className="s-btn"
                                        style={{
                                            background: "transparent",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            color: "#888",
                                            fontSize: 12,
                                            padding: "8px 16px"
                                        }}
                                    >

                                        <svg
                                            width={13}
                                            height={13}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                        Quay về Tạo / Đổi mật khẩu cấp 2
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AccountSetting