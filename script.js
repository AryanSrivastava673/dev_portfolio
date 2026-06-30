/* Year */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Mobile nav ── */
const ham = document.getElementById('tn-ham');
const menu = document.getElementById('tn-menu');
ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    menu.classList.remove('open');
}));

/* ── Sidebar dot active state ── */
const dots = document.querySelectorAll('.snd');
const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const id = e.target.id;
            dots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === '#' + id));
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => sectionObs.observe(s));

/* ── Reveal on scroll ── */
const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ── Terminal typing ── */
const tb = document.getElementById('terminal-body');

const C = {
    prompt: '#89b4fa',
    cmd:    '#c8d0e0',
    key:    '#89b4fa',
    str:    '#cba6f7',
    val:    '#a6e3a1',
    green:  '#34d399',
    dim:    '#555e72',
    plain:  '#6b7280',
};

const script = [
    { gap: 0 },
    { text: '$ aryan --profile', colors: ['prompt', 'cmd'], split: 2 },
    { gap: 500 },
    { raw: '<span style="color:' + C.plain + '">Loading profile...</span>' },
    { gap: 380 },
    { raw: '<span style="color:' + C.dim + '">{</span>' },
    { kv: ['  name    ', ' : ', '"Aryan Srivastava"',    ','] },
    { kv: ['  role    ', ' : ', '"Full Stack Java Dev"', ','] },
    { kv: ['  company ', ' : ', '"EPAM Systems"',        ','] },
    { kv: ['  stack   ', ' : ', '["Java 21", "Spring Boot 3", "React 19"]', ','] },
    { kv: ['  location', ' : ', '"Pune, India"',         ','] },
    { kv: ['  status  ', ' : ', '"● available"',  '', true] },
    { raw: '<span style="color:' + C.dim + '">}</span>' },
];

function addLine(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    tb.appendChild(el);
}

let i = 0;
function runScript() {
    if (i >= script.length) {
        const cur = document.createElement('span');
        cur.className = 'tw-cursor';
        tb.appendChild(cur);
        return;
    }
    const step = script[i++];
    const delay = step.gap !== undefined ? step.gap : 90;

    if (step.gap !== undefined) {
        setTimeout(runScript, delay);
        return;
    }

    setTimeout(() => {
        if (step.raw) {
            addLine(step.raw);
        } else if (step.text) {
            const [p1, ...rest] = [step.text.slice(0, 2), step.text.slice(2)];
            addLine(`<span style="color:${C.prompt}">$ </span><span style="color:${C.cmd}">${rest.join('')}</span>`);
        } else if (step.kv) {
            const [k, sep, v, comma, isStatus] = step.kv;
            const valColor = isStatus ? C.green : C.str;
            addLine(
                `<span style="color:${C.key}">${k}</span>` +
                `<span style="color:${C.dim}">${sep}</span>` +
                `<span style="color:${valColor}">${v}</span>` +
                (comma ? `<span style="color:${C.dim}">${comma}</span>` : '')
            );
        }
        runScript();
    }, delay);
}
setTimeout(runScript, 700);

/* ── Skill tabs ── */
document.querySelectorAll('.stab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.spanel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

/* ── Progress bars ── */
const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.width = e.target.dataset.w + '%';
            barObs.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll('.lc-fill').forEach(b => barObs.observe(b));
