(this.webpackJsonpbrainspark = this.webpackJsonpbrainspark || []).push([[11], {
  467(a, e, t) {
    t.r(e); const n = t(446); const r = t(414); const l = t(0); const i = t.n(l); const s = t(86); const u = t(411); const m = Object(u.a)((a) => ({
      root: { padding(a) { return a.isPhone ? '0' : '30px 33px'; }, margin(a) { return a.isPhone ? '0' : '30px 10px 0'; }, borderRadius: 20 }, formWrapper: { margin: 20 }, inputWrapper: { margin: '10px 0' }, formTitle: { textAlign: 'center', color: a.color.primaryText, fontWeight: 'bold' }, buttonWrapper: { display: 'flex', justifyContent: 'center', marginTop: 30 }, button: { margin: '0 12px' },
    })); const p = t(31); e.default = function () {
      const a = Object(p.a)({ isMax: !0, size: 500 }); const e = m({ isPhone: a }); return i.a.createElement(s.e, null, i.a.createElement(n.a, { className: e.root, elevation: a ? 0 : 3 }, i.a.createElement(r.a, { variant: 'h6', className: e.formTitle }, 'Form Registrasi'), i.a.createElement('form', { className: e.formWrapper }, i.a.createElement('div', { className: e.inputWrapper }, i.a.createElement(s.j, {
        label: 'Nama Lengkap', fullWidth: !0, placeholder: 'isi dengan benar', InputLabelProps: { shrink: !0 }, id: 'standard-full-width',
      })), i.a.createElement('div', { className: e.inputWrapper }, i.a.createElement(s.j, {
        label: 'Email', fullWidth: !0, placeholder: 'isi dengan benar', InputLabelProps: { shrink: !0 }, id: 'standard-full-width',
      })), i.a.createElement('div', { className: e.inputWrapper }, i.a.createElement(s.j, {
        label: 'NIM', fullWidth: !0, placeholder: 'isi dengan benar', InputLabelProps: { shrink: !0 }, id: 'standard-full-width',
      })), i.a.createElement('div', { className: e.inputWrapper }, i.a.createElement(s.j, {
        label: 'Fakultas', data: [{ value: 'Fakultas Ilmu Komunikasi', name: 'Fakultas Ilmu Komunikasi' }, { value: 'Fakultas Komunikasi Bisnis', name: 'Fakultas Komunikasi Bisnis' }, { value: 'Fakultas Ilmu Terapan', name: 'Fakultas Ilmu Terapan' }, { value: 'Fakultas Rekayasa Industri', name: 'Fakultas Rekayasa Industri' }, { value: 'Fakultas Teknik Elektro', name: 'Fakultas Teknik Elektro' }, { value: 'Fakultas Informatika', name: 'Fakultas Informatika' }, { value: 'Fakultas Ekonomi Bisnis', name: 'Fakultas Ekonomi Bisnis' }], type: 'radio', InputLabelProps: { shrink: !0 }, id: 'standard-full-width',
      })), i.a.createElement('div', { className: e.buttonWrapper }, i.a.createElement(s.a, { variant: 'transparent', className: e.button }, 'cancel'), i.a.createElement(s.a, { type: 'primary', className: e.button }, 'send')))));
    };
  },
}]);
