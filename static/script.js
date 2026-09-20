const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;overflow-x:hidden;min-height:0;scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");background-repeat:no-repeat;background-position:right 8px center}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;overflow-wrap:anywhere}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

function useTweaks(defaults) {
    const [values, setValues] = React.useState(defaults);
    const setTweak = React.useCallback((keyOrEdits, val) => {
        const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {[keyOrEdits]: val};
        setValues((prev) => ({...prev, ...edits}));
        window.parent.postMessage({type: '__edit_mode_set_keys', edits}, '*');
        window.dispatchEvent(new CustomEvent('tweakchange', {detail: edits}));
    }, []);
    return [values, setTweak];
}

function TweaksPanel({title = 'Tweaks', children}) {
    const [open, setOpen] = React.useState(false);
    const dragRef = React.useRef(null);
    const offsetRef = React.useRef({x: 16, y: 16});
    const PAD = 16;
    const clampToViewport = React.useCallback(() => {
        const panel = dragRef.current;
        if (!panel) return;
        const w = panel.offsetWidth, h = panel.offsetHeight;
        const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
        const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
        offsetRef.current = {
            x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
            y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
        };
        panel.style.right = offsetRef.current.x + 'px';
        panel.style.bottom = offsetRef.current.y + 'px';
    }, []);
    React.useEffect(() => {
        if (!open) return;
        clampToViewport();
        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(clampToViewport) : null;
        if (ro) {
            ro.observe(document.documentElement);
            return () => ro.disconnect();
        }
        window.addEventListener('resize', clampToViewport);
        return () => window.removeEventListener('resize', clampToViewport);
    }, [open, clampToViewport]);
    React.useEffect(() => {
        const onMsg = (e) => {
            const t = e?.data?.type;
            if (t === '__activate_edit_mode') setOpen(true);
            else if (t === '__deactivate_edit_mode') setOpen(false);
        };
        window.addEventListener('message', onMsg);
        window.parent.postMessage({type: '__edit_mode_available'}, '*');
        return () => window.removeEventListener('message', onMsg);
    }, []);
    const dismiss = () => {
        setOpen(false);
        window.parent.postMessage({type: '__edit_mode_dismissed'}, '*');
    };
    const onDragStart = (e) => {
        const panel = dragRef.current;
        if (!panel) return;
        const r = panel.getBoundingClientRect();
        const sx = e.clientX, sy = e.clientY;
        const startRight = window.innerWidth - r.right, startBottom = window.innerHeight - r.bottom;
        const move = (ev) => {
            offsetRef.current = {x: startRight - (ev.clientX - sx), y: startBottom - (ev.clientY - sy)};
            clampToViewport();
        };
        const up = () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
    };
    if (!open) return null;
    return (
        <>
            <style>{__TWEAKS_STYLE}</style>
            <div ref={dragRef} className="twk-panel" data-omelette-chrome=""
                 style={{right: offsetRef.current.x, bottom: offsetRef.current.y}}>
                <div className="twk-hd" onMouseDown={onDragStart}><b>{title}</b>
                    <button className="twk-x" aria-label="Close tweaks" onMouseDown={(e) => e.stopPropagation()}
                            onClick={dismiss}>✕
                    </button>
                </div>
                <div className="twk-body">{children}</div>
            </div>
        </>
    );
}

function TweakSection({label, children}) {
    return (<>
        <div className="twk-sect">{label}</div>
        {children}</>);
}

function TweakRow({label, value, children, inline = false}) {
    return (<div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
        <div className="twk-lbl"><span>{label}</span>{value != null && <span className="twk-val">{value}</span>}</div>
        {children}</div>);
}

function TweakSlider({label, value, min = 0, max = 100, step = 1, unit = '', onChange}) {
    return (
        <TweakRow label={label} value={`${value}${unit}`}><input type="range" className="twk-slider" min={min} max={max}
                                                                 step={step} value={value}
                                                                 onChange={(e) => onChange(Number(e.target.value))}/></TweakRow>);
}

function TweakToggle({label, value, onChange}) {
    return (<div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <button type="button" className="twk-toggle" data-on={value ? '1' : '0'} role="switch" aria-checked={!!value}
                onClick={() => onChange(!value)}><i/></button>
    </div>);
}

function TweakSelect({label, value, options, onChange}) {
    return (<TweakRow label={label}><select className="twk-field" value={value}
                                            onChange={(e) => onChange(e.target.value)}>{options.map((o) => {
        const v = typeof o === 'object' ? o.value : o;
        const l = typeof o === 'object' ? o.label : o;
        return <option key={v} value={v}>{l}</option>;
    })}</select></TweakRow>);
}

function __twkIsLight(hex) {
    const h = String(hex).replace('#', '');
    const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
    const n = parseInt(x.slice(0, 6), 16);
    if (Number.isNaN(n)) return true;
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({light}) => (<svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'}/>
</svg>);

function TweakColor({label, value, options, onChange}) {
    if (!options || !options.length) {
        return (<div className="twk-row twk-row-h">
            <div className="twk-lbl"><span>{label}</span></div>
            <input type="color" className="twk-swatch" value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>);
    }
    const key = (o) => String(JSON.stringify(o)).toLowerCase();
    const cur = key(value);
    return (<TweakRow label={label}>
        <div className="twk-chips" role="radiogroup">{options.map((o, i) => {
            const colors = Array.isArray(o) ? o : [o];
            const [hero, ...rest] = colors;
            const sup = rest.slice(0, 4);
            const on = key(o) === cur;
            return (<button key={i} type="button" className="twk-chip" role="radio" aria-checked={on}
                            data-on={on ? '1' : '0'} style={{background: hero}}
                            onClick={() => onChange(o)}>{sup.length > 0 && (
                <span>{sup.map((c, j) => <i key={j} style={{background: c}}/>)}</span>)}{on &&
                <__TwkCheck light={__twkIsLight(hero)}/>}</button>);
        })}</div>
    </TweakRow>);
}

Object.assign(window, {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRow,
    TweakSlider,
    TweakToggle,
    TweakSelect,
    TweakColor
});

const {useState, useEffect, useRef, useCallback} = React;
const API_URL = "/predict";

const SHOTS = [
    {key: "Drive", label: "Drive"},
    {key: "Flick", label: "Flick"},
    {key: "Pull", label: "Pull"},
    {key: "Sweep", label: "Sweep"},
];

const prettyShot = (s) => {
    if (!s) return "";
    const found = SHOTS.find((x) => x.key.toLowerCase() === String(s).toLowerCase().replace(/\s+/g, ""));
    if (found) return found.label;
    return String(s).replace(/([a-z])([A-Z])/g, "$1 $2");
};

const CricketBall = ({size = 22, color = "var(--accent)"}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.6"/>
        <path d="M8.3 4.2 C 10.5 8, 10.5 16, 8.3 19.8" stroke={color} strokeWidth="1.4" strokeLinecap="round"
              strokeDasharray="0.2 2.4"/>
        <path d="M15.7 4.2 C 13.5 8, 13.5 16, 15.7 19.8" stroke={color} strokeWidth="1.4" strokeLinecap="round"
              strokeDasharray="0.2 2.4"/>
    </svg>
);
const Sun = ({size = 16}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>
    </svg>
);
const Moon = ({size = 16}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>
    </svg>
);
const UploadGlyph = ({size = 30}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 16V4M12 4 7.5 8.5M12 4l4.5 4.5"/>
        <path d="M4 14v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3"/>
    </svg>
);
const AlertGlyph = ({size = 22}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v5M12 17h.01"/>
        <circle cx="12" cy="12" r="9"/>
    </svg>
);
const GearIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
    </svg>
);

function useTheme() {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("csc-theme") || "dark";
        } catch (e) {
            return "dark";
        }
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("csc-theme", theme);
        } catch (e) {
        }
    }, [theme]);
    return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function Header({theme, toggleTheme}) {
    return (
        <header className="hdr">
            <div className="brand">
                <div className="brand-mark"><CricketBall size={22}/></div>
                <div className="brand-txt">
                    <span className="brand-name">Cricket Shot Classifier</span>
                    <span className="brand-sub">Batting stroke recognition</span>
                </div>
            </div>
            <button className="toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span className="lbl">{theme === "dark" ? "Light" : "Dark"}</span>
                <span className="toggle-knob">{theme === "dark" ? <Sun/> : <Moon/>}</span>
            </button>
        </header>
    );
}

function DropZone({onFile}) {
    const [drag, setDrag] = useState(false);
    const inputRef = useRef(null);
    const handleFiles = (files) => {
        const f = files && files[0];
        if (f && f.type.startsWith("image/")) onFile(f);
    };
    return (
        <div
            className={"drop" + (drag ? " drag" : "")}
            onClick={() => inputRef.current && inputRef.current.click()}
            onDragOver={(e) => {
                e.preventDefault();
                setDrag(true);
            }}
            onDragLeave={(e) => {
                e.preventDefault();
                setDrag(false);
            }}
            onDrop={(e) => {
                e.preventDefault();
                setDrag(false);
                handleFiles(e.dataTransfer.files);
            }}
        >
            <div className="drop-ico"><UploadGlyph/></div>
            <div className="drop-title">{drag ? "Drop to classify" : "Upload a batting shot"}</div>
            <div className="drop-hint">Drag &amp; drop an image here, or <span className="drop-pick">browse files</span>
            </div>
            <div className="drop-meta">JPG · PNG · WEBP · analysed instantly</div>
            <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => handleFiles(e.target.files)}/>
        </div>
    );
}

function BarChart({probs}) {
    const max = Math.max(...probs.map((p) => p.value), 0.0001);
    return (
        <div className="bars">
            {probs.map((p, i) => (
                <div key={p.key} className={"bar-row" + (i === 0 ? " top" : " dim")}>
                    <div className="bar-top">
                        <span className="bar-name">{p.label}</span>
                        <span className="bar-val">{p.value.toFixed(1)}%</span>
                    </div>
                    <div className="bar-track">
                        <div className="bar-fill" style={{width: (p.value / max) * 100 + "%"}}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Result({data}) {
    const probs = SHOTS
        .map((s) => ({
            key: s.key,
            label: s.label,
            value: Number((data.all_probabilities && data.all_probabilities[s.key]) || 0)
        }))
        .sort((a, b) => b.value - a.value);
    const conf = typeof data.confidence === "number" ? data.confidence : (probs[0] ? probs[0].value : 0);
    return (
        <div className="result">
            <div className="res-head">
                <div>
                    <div className="res-label">Predicted shot</div>
                    <div className="res-shot"><span className="res-dot"/>{prettyShot(data.shot) || probs[0].label}</div>
                </div>
                <div className="res-conf">
                    <div className="res-conf-num">{conf.toFixed(1)}%</div>
                    <div className="res-conf-lbl">Confidence</div>
                </div>
            </div>
            <BarChart probs={probs}/>
        </div>
    );
}

const SAMPLE = {
    shot: "Drive",
    confidence: 88.3,
    all_probabilities: {Drive: 88.3, Flick: 6.4, PullShot: 3.4, Sweep: 1.9}
};

function App() {
    const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
        "accent": "#19c37d",
        "radius": 14,
        "headFont": "Space Grotesk"
    }/*EDITMODE-END*/;
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const [theme, toggleTheme] = useTheme();
    const [tweaksOpen, setTweaksOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [status, setStatus] = useState("idle");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onMsg = (e) => {
            const type = e?.data?.type;
            if (type === '__activate_edit_mode') setTweaksOpen(true);
            if (type === '__deactivate_edit_mode' || type === '__edit_mode_dismissed') setTweaksOpen(false);
        };
        window.addEventListener('message', onMsg);
        return () => window.removeEventListener('message', onMsg);
    }, []);

    useEffect(() => {
        const r = document.documentElement;
        r.style.setProperty("--accent", t.accent);
        r.style.setProperty("--radius", t.radius + "px");
        r.style.setProperty("--font-head", `'${t.headFont}', system-ui, sans-serif`);
    }, [t.accent, t.radius, t.headFont]);

    const predict = useCallback(async (f) => {
        setStatus("loading");
        setError(null);
        setResult(null);
        try {
            const fd = new FormData();
            fd.append("file", f);
            const res = await fetch(API_URL, {method: "POST", body: fd});
            if (!res.ok) throw new Error("Server responded " + res.status);
            setResult(await res.json());
            setStatus("done");
        } catch (e) {
            setError(e.message || "Request failed");
            setStatus("error");
        }
    }, []);

    const onFile = (f) => {
        if (imgUrl) URL.revokeObjectURL(imgUrl);
        setFile(f);
        setImgUrl(URL.createObjectURL(f));
        predict(f);
    };
    const reset = () => {
        if (imgUrl) URL.revokeObjectURL(imgUrl);
        setFile(null);
        setImgUrl(null);
        setResult(null);
        setError(null);
        setStatus("idle");
    };

    return (
        <React.Fragment>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <main>
                {!file && (
                    <div className="intro">
                        <h1>Which shot was that?</h1>
                        <p>Upload a frame of a batter mid-stroke and the model will identify the shot — Drive, Flick,
                            Pull Shot or Sweep.</p>
                    </div>
                )}
                {!file && <DropZone onFile={onFile}/>}
                {file && (
                    <div className="card">
                        <div className="img-wrap"><img src={imgUrl} alt="Uploaded batting shot"/></div>
                        <div className="card-foot">
                            <span className="file-name">{file.name}</span>
                            <button className="btn btn-primary" onClick={reset}>Try another</button>
                        </div>
                    </div>
                )}
                {status === "loading" && (
                    <div className="card">
                        <div className="state">
                            <div className="spinner"/>
                            <div className="state-txt">Analysing stroke…</div>
                        </div>
                    </div>
                )}
                {status === "error" && (
                    <div className="card">
                        <div className="state err">
                            <div className="state-ico"><AlertGlyph/></div>
                            <div className="state-txt">Couldn't reach the classifier.<br/><code>{error}</code></div>
                            <div style={{display: "flex", gap: 10, marginTop: 4}}>
                                <button className="btn" onClick={() => predict(file)}>Retry</button>
                                <button className="btn" onClick={() => {
                                    setResult(SAMPLE);
                                    setStatus("done");
                                    setError(null);
                                }}>View sample result
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {status === "done" && result && (
                    <div className="card"><Result data={result}/></div>
                )}
            </main>

            {!tweaksOpen && (
                <button
                    onClick={() => window.postMessage({type: '__activate_edit_mode'}, '*')}
                    title="Customise appearance"
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        zIndex: 9998,
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--surface)',
                        color: 'var(--text-dim)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                        transition: 'color .2s, border-color .2s, transform .15s'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-dim)';
                        e.currentTarget.style.borderColor = 'var(--border-strong)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                ><GearIcon/></button>
            )}

            <TweaksPanel>
                <TweakSection label="Brand"/>
                <TweakColor label="Accent" value={t.accent} options={["#19c37d", "#3bb0ff", "#f0a93b", "#e0654a"]}
                            onChange={(v) => setTweak("accent", v)}/>
                <TweakSelect label="Display font" value={t.headFont} options={["Space Grotesk", "Manrope"]}
                             onChange={(v) => setTweak("headFont", v)}/>
                <TweakSection label="Shape"/>
                <TweakSlider label="Corner radius" value={t.radius} min={4} max={28} unit="px"
                             onChange={(v) => setTweak("radius", v)}/>
            </TweaksPanel>
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);