let q = 1;
const valor = 10.00;
const num = "5543991321383";

function br(v) {
    return v.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function alt(v) {
    q = Math.max(1, q + v);
    document.getElementById("qtd").textContent = q;
    upd();
}

function upd() {
    document.getElementById("unitario").textContent = br(valor);
    document.getElementById("total").textContent = br(q * valor);

    document.getElementById("pedido").href =
        `https://wa.me/${num}?text=${encodeURIComponent(
            `Olá! Gostaria de pedir ${q} pudim(ns).\n\nValor unitário: R$ ${br(valor)}\nTotal: R$ ${br(q * valor)}`
        )}`;
}

upd();