/*
function rp_pi(a) { a = a.replace(/([a-z]+)pi+/gi, "$1*" + Math.PI); a = a.replace(/([0-9]+)pi+/gi, "$1*" + Math.PI); a = a.replace(/pi([a-z]+)/gi, Math.PI + "*$1"); a = a.replace(/pi([0-9]+)/gi, Math.PI + "*$1"); return a.replace(/pi/gi, Math.PI); } function c_regratres() {
    var v0 = jQuery("#cx6_0").val(); var v1 = jQuery("#cx6_1").val(); var v2 = jQuery("#cx6_2").val(); calcula2("r3(" + v0 + ";" + v1 + ";" + v2 + ")", "Regra de três simples (proporção direta): " + v0 + " está para " + v1 + ", assim como " + v2 + " está para:"); jQuery("#cx6_0").val(""); jQuery("#cx6_1").val("");
    jQuery("#cx6_2").val(""); fechaabinha(6); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_fatorial() { 
    var v0 = jQuery("#cx8_0").val(); calcula2("!(" + v0 + ")", "Fatorial de " + v0 + ""); jQuery("#cx8_0").val(""); fechaabinha(8); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } }
     function c_porcentagem() {
    var v0 = jQuery("#cx14_0").val(); var v1 = jQuery("#cx14_1").val(); calcula2("%(" + v0 + ";" + v1 + ")", "" + v0 + "% de " + v1 + ""); jQuery("#cx14_0").val(""); jQuery("#cx14_1").val("");
    fechaabinha(14); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_logaritmo() {
     var v0 = jQuery("#cx15_0").val(); var v1 = jQuery("#cx15_1").val(); calcula2("log(" + v0 + ";" + v1 + ")", "log <sub>" + v1 + "</sub> <sup>" + v0 + "</sup>"); jQuery("#cx15_0").val(""); jQuery("#cx15_1").val(""); fechaabinha(15); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
     }
      function c_ln() {
    var v0 = jQuery("#cx16_0").val(); 
    calcula2("ln(" + v0 + ")", "Logaritmo natural de " + v0 + "");
     jQuery("#cx16_0").val("");
    fechaabinha(16); 
    if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} 
function c_raizquadrada() {
     var v0 = jQuery("#cx21_0").val(); calcula2("raiz(" + v0 + ")", "√" + v0 + ""); jQuery("#cx21_0").val(""); fechaabinha(21); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_raizcubica() {
    var v0 = jQuery("#cx22_0").val(); calcula2("raiz3(" + v0 + ")", "<sup>3</sup>√" + v0 + ""); jQuery("#cx22_0").val(""); fechaabinha(22); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_raizenesima() { var v0 = jQuery("#cx23_0").val(); var v1 = jQuery("#cx23_1").val(); calcula2("raizn(" + v0 + ";" + v1 + ")", "<sup>" + v1 + "</sup>√" + v0 + ""); jQuery("#cx23_0").val(""); jQuery("#cx23_1").val(""); fechaabinha(23); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_lb() {
    var v0 = jQuery("#cx24_0").val(); calcula2("lb(" + v0 + ")", "Logaritmo binário de " + v0 + ""); jQuery("#cx24_0").val(""); fechaabinha(24); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_aoquadrado() { var v0 = jQuery("#cx29_0").val(); calcula2("x2(" + v0 + ")", "" + v0 + "<sup>2</sup>"); jQuery("#cx29_0").val(""); fechaabinha(29); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_aocubo() { var v0 = jQuery("#cx30_0").val(); calcula2("x3(" + v0 + ")", "" + v0 + "<sup>3</sup>"); jQuery("#cx30_0").val(""); fechaabinha(30); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_exponencial() {
    var v0 = jQuery("#cx31_0").val(); var v1 = jQuery("#cx31_1").val();
    calcula2("exp(" + v0 + ";" + v1 + ")", "" + v0 + "<sup>" + v1 + "</sup>"); jQuery("#cx31_0").val(""); jQuery("#cx31_1").val(""); fechaabinha(31); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_ex10() { var v0 = jQuery("#cx32_0").val(); calcula2("ex10(" + v0 + ")", "10<sup>" + v0 + "</sup>"); jQuery("#cx32_0").val(""); fechaabinha(32); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_hipotenusa() {
    var v0 = jQuery("#cx34_0").val(); var v1 = jQuery("#cx34_1").val(); calcula2("hip(" + v0 + ";" + v1 + ")", "Hipotenusa de catetos " + v0 + " e " + v1 + "");
    jQuery("#cx34_0").val(""); jQuery("#cx34_1").val(""); fechaabinha(34); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_cotg() { var v0 = jQuery("#cx35_0").val(); v0 = rp_pi(v0); calcula2("cotg(" + v0 + ")", "Cotangente de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx35_0").val(""); fechaabinha(35); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_sec() {
    var v0 = jQuery("#cx36_0").val(); v0 = rp_pi(v0); calcula2("sec(" + v0 + ")", "Secante de " + v0 + " (" + trigmedidamask + ")");
    jQuery("#cx36_0").val(""); fechaabinha(36); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_cosec() { var v0 = jQuery("#cx37_0").val(); v0 = rp_pi(v0); calcula2("cosec(" + v0 + ")", "Cossecante de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx37_0").val(""); fechaabinha(37); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_seno() {
    var v0 = jQuery("#cx38_0").val(); v0 = rp_pi(v0); calcula2("sen(" + v0 + ")", "Seno de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx38_0").val("");
    fechaabinha(38); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_coseno() { var v0 = jQuery("#cx39_0").val(); v0 = rp_pi(v0); calcula2("cos(" + v0 + ")", "Cosseno de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx39_0").val(""); fechaabinha(39); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_tangente() {
    var v0 = jQuery("#cx40_0").val(); v0 = rp_pi(v0); calcula2("tg(" + v0 + ")", "Tangente de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx40_0").val(""); fechaabinha(40);
    if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_cc() { var v0 = jQuery("#cx41_0").val(); calcula2("cc(" + v0 + ")", "Comprimento da circunferência de raio " + v0 + ""); jQuery("#cx41_0").val(""); fechaabinha(41); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_ac() {
    var v0 = jQuery("#cx42_0").val(); calcula2("ac(" + v0 + ")", "Área da circunferência de raio " + v0 + ""); jQuery("#cx42_0").val(""); fechaabinha(42); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_acotg() { var v0 = jQuery("#cx43_0").val(); v0 = rp_pi(v0); calcula2("acotg(" + v0 + ")", "Arco cotangente de " + v0 + ""); jQuery("#cx43_0").val(""); fechaabinha(43); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_asec() { var v0 = jQuery("#cx44_0").val(); v0 = rp_pi(v0); calcula2("asec(" + v0 + ")", "Arco secante de " + v0 + ""); jQuery("#cx44_0").val(""); fechaabinha(44); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_acosec() {
    var v0 = jQuery("#cx45_0").val();
    v0 = rp_pi(v0); calcula2("acosec(" + v0 + ")", "Arco cossecante de " + v0 + ""); jQuery("#cx45_0").val(""); fechaabinha(45); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_arcseno() { var v0 = jQuery("#cx46_0").val(); v0 = rp_pi(v0); calcula2("asen(" + v0 + ")", "Arco seno de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx46_0").val(""); fechaabinha(46); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_arccoseno() {
    var v0 = jQuery("#cx47_0").val(); v0 = rp_pi(v0); calcula2("acos(" + v0 + ")", "Arco cosseno de " + v0 + " (" + trigmedidamask + ")");
    jQuery("#cx47_0").val(""); fechaabinha(47); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_arctg() { var v0 = jQuery("#cx48_0").val(); v0 = rp_pi(v0); calcula2("atg(" + v0 + ")", "Arco tangente de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx48_0").val(""); fechaabinha(48); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_apr() {
    var v0 = jQuery("#cx49_0").val(); calcula2("apr(" + v0 + ")", "Graus para Radianos"); jQuery("#cx49_0").val(""); fechaabinha(49); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_rpa() { var v0 = jQuery("#cx50_0").val(); calcula2("rpa(" + v0 + ")", "Radianos para Graus"); jQuery("#cx50_0").val(""); fechaabinha(50); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_senh() { var v0 = jQuery("#cx51_0").val(); v0 = rp_pi(v0); calcula2("senh(" + v0 + ")", "Seno hiperbólico de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx51_0").val(""); fechaabinha(51); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_cosh() {
    var v0 = jQuery("#cx52_0").val();
    v0 = rp_pi(v0); calcula2("cosh(" + v0 + ")", "Cosseno hiperbólico de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx52_0").val(""); fechaabinha(52); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_tgh() { var v0 = jQuery("#cx53_0").val(); v0 = rp_pi(v0); calcula2("tgh(" + v0 + ")", "Tangente hiperbólica de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx53_0").val(""); fechaabinha(53); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_arcsenoh() {
    var v0 = jQuery("#cx54_0").val();
    v0 = rp_pi(v0); calcula2("asenh(" + v0 + ")", "Arco hiperbólico de seno de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx54_0").val(""); fechaabinha(54); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_arccosenoh() { var v0 = jQuery("#cx55_0").val(); v0 = rp_pi(v0); calcula2("acosh(" + v0 + ")", "Arco hiperbólico de cosseno de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx55_0").val(""); fechaabinha(55); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_arctgh() {
    var v0 = jQuery("#cx56_0").val();
    v0 = rp_pi(v0); calcula2("atgh(" + v0 + ")", "Arco tangente de " + v0 + " (" + trigmedidamask + ")"); jQuery("#cx56_0").val(""); fechaabinha(56); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_fatorar() { var v0 = jQuery("#cx57_0").val(); calcula3("fatorar(" + v0 + ")", "Fatoração de " + v0 + ""); jQuery("#cx57_0").val(""); fechaabinha(57); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_frac() {
    var v0 = jQuery("#cx58_0").val(); calcula3("frac(" + v0 + ")", "Decimal para fração");
    jQuery("#cx58_0").val(""); fechaabinha(58); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_simp() { var v0 = jQuery("#cx59_0").val(); var v1 = jQuery("#cx59_1").val(); calcula3("simp(" + v0 + ";" + v1 + ")", "Simplificação de fração"); jQuery("#cx59_0").val(""); jQuery("#cx59_1").val(""); fechaabinha(59); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_ale() {
    var v0 = jQuery("#cx60_0").val(); var v1 = jQuery("#cx60_1").val(); calcula2("ale(" + v0 + ";" + v1 + ")", "Número aleatório entre " + v0 + " e " + v1 + "");
    jQuery("#cx60_0").val(""); jQuery("#cx60_1").val(""); fechaabinha(60); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_convc() {
    var v0 = jQuery("#cx61_0").val(); var v1 = jQuery("#cx61_1").val(); var v2 = jQuery("#cx61_2").val(); var v1_ = jQuery("#cx61_1 option:selected").text(); var v2_ = jQuery("#cx61_2 option:selected").text(); calcula3('convc("' + v0 + '";"' + v1 + '";"' + v2 + '")', "" + v0 + " " + v1_ + " para " + v2_ + ""); jQuery("#cx61_0").val(""); jQuery("#cx61_1").val(""); jQuery("#cx61_2").val(""); fechaabinha(61);
    if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_convt() {
    var v0 = jQuery("#cx62_0").val(); var v1 = jQuery("#cx62_1").val(); var v2 = jQuery("#cx62_2").val(); var v1_ = jQuery("#cx62_1 option:selected").text(); var v2_ = jQuery("#cx62_2 option:selected").text(); calcula3('convt("' + v0 + '";"' + v1 + '";"' + v2 + '")', "" + v0 + " " + v1_ + " para " + v2_ + ""); jQuery("#cx62_0").val(""); jQuery("#cx62_1").val(""); jQuery("#cx62_2").val(""); fechaabinha(62); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_conva() { var v0 = jQuery("#cx63_0").val(); var v1 = jQuery("#cx63_1").val(); var v2 = jQuery("#cx63_2").val(); var v1_ = jQuery("#cx63_1 option:selected").text(); var v2_ = jQuery("#cx63_2 option:selected").text(); calcula3('conva("' + v0 + '";"' + v1 + '";"' + v2 + '")', "" + v0 + " " + v1_ + "² para " + v2_ + "²"); jQuery("#cx63_0").val(""); jQuery("#cx63_1").val(""); jQuery("#cx63_2").val(""); fechaabinha(63); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_convv() {
    var v0 = jQuery("#cx64_0").val(); var v1 = jQuery("#cx64_1").val();
    var v2 = jQuery("#cx64_2").val(); var v1_ = jQuery("#cx64_1 option:selected").text(); var v2_ = jQuery("#cx64_2 option:selected").text(); calcula3('convv("' + v0 + '";"' + v1 + '";"' + v2 + '")', "" + v0 + " " + v1_ + "³ para " + v2_ + "³"); jQuery("#cx64_0").val(""); jQuery("#cx64_1").val(""); jQuery("#cx64_2").val(""); fechaabinha(64); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_ex() {
    var v0 = jQuery("#cx65_0").val(); calcula2("ex(" + v0 + ")", "e<sup>" + v0 + "</sup>"); jQuery("#cx65_0").val(""); fechaabinha(65); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_ar() { var v0 = jQuery("#cx66_0").val(); var v1 = jQuery("#cx66_1").val(); calcula2("ar(" + v0 + ";" + v1 + ")", "Arranjo com repetição de " + v0 + " tomados " + v1 + " a " + v1 + ""); jQuery("#cx66_0").val(""); jQuery("#cx66_1").val(""); fechaabinha(66); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_as() {
    var v0 = jQuery("#cx67_0").val(); var v1 = jQuery("#cx67_1").val(); calcula2("as(" + v0 + ";" + v1 + ")", "Arranjo simples de " + v0 + " tomados " + v1 + " a " + v1 + ""); jQuery("#cx67_0").val(""); jQuery("#cx67_1").val("");
    fechaabinha(67); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_cs() { var v0 = jQuery("#cx68_0").val(); var v1 = jQuery("#cx68_1").val(); calcula2("cs(" + v0 + ";" + v1 + ")", "Combinação simples de " + v0 + " tomados " + v1 + " a " + v1 + ""); jQuery("#cx68_0").val(""); jQuery("#cx68_1").val(""); fechaabinha(68); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_cr() {
    var v0 = jQuery("#cx69_0").val(); var v1 = jQuery("#cx69_1").val(); calcula2("cr(" + v0 + ";" + v1 + ")", "Combinação com repetição de " + v0 + " tomados " + v1 + " a " + v1 + "");
    jQuery("#cx69_0").val(""); jQuery("#cx69_1").val(""); fechaabinha(69); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_ps() { var v0 = jQuery("#cx70_0").val(); calcula2("ps(" + v0 + ")", "Permutação simples de " + v0 + " elemento(s)"); jQuery("#cx70_0").val(""); fechaabinha(70); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_pc() {
    var v0 = jQuery("#cx71_0").val(); calcula2("pc(" + v0 + ")", "Permutação circular de " + v0 + " elemento(s)"); jQuery("#cx71_0").val("");
    fechaabinha(71); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_abs() { var v0 = jQuery("#cx73_0").val(); calcula2("abs(" + v0 + ")", "Módulo de " + v0 + ""); jQuery("#cx73_0").val(""); fechaabinha(73); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_piso() {
    var v0 = jQuery("#cx74_0").val(); calcula2("piso(" + v0 + ")", "Arredondamento para baixo de " + v0 + ""); jQuery("#cx74_0").val(""); fechaabinha(74); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_teto() { var v0 = jQuery("#cx75_0").val(); calcula2("teto(" + v0 + ")", "Arredondamento para cima de " + v0 + ""); jQuery("#cx75_0").val(""); fechaabinha(75); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_delta() {
    var v0 = jQuery("#cx76_0").val(); var v1 = jQuery("#cx76_1").val(); var v2 = jQuery("#cx76_2").val(); calcula2("delta(" + v0 + ";" + v1 + ";" + v2 + ")", "Delta da equação do 2º grau: a = " + v0 + ", b = " + v1 + " e c = " + v2 + ""); jQuery("#cx76_0").val(""); jQuery("#cx76_1").val(""); jQuery("#cx76_2").val("");
    fechaabinha(76); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jcmontante() { var v0 = jQuery("#cx81_0").val(); var v1 = jQuery("#cx81_1").val(); var v2 = jQuery("#cx81_2").val(); calcula2("jcmontante(" + v0 + ";" + v1 + ";" + v2 + ")", "Montante resultante de juro composto de " + v1 + "% sobre " + v0 + " por " + v2 + " período(s)"); jQuery("#cx81_0").val(""); jQuery("#cx81_1").val(""); jQuery("#cx81_2").val(""); fechaabinha(81); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_jc() {
    var v0 = jQuery("#cx82_0").val();
    var v1 = jQuery("#cx82_1").val(); var v2 = jQuery("#cx82_2").val(); calcula2("jc(" + v0 + ";" + v1 + ";" + v2 + ")", "Juro composto resultante de " + v1 + "% sobre " + v0 + " por " + v2 + " período(s)"); jQuery("#cx82_0").val(""); jQuery("#cx82_1").val(""); jQuery("#cx82_2").val(""); fechaabinha(82); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jcvp() {
    var v0 = jQuery("#cx83_0").val(); var v1 = jQuery("#cx83_1").val(); var v2 = jQuery("#cx83_2").val(); calcula2("jcvp(" + v0 + ";" + v1 + ";" + v2 + ")", "Valor presente cujo montante é " + v0 + ", juro composto igual a " + v1 + "% e período igual a " + v2 + "");
    jQuery("#cx83_0").val(""); jQuery("#cx83_1").val(""); jQuery("#cx83_2").val(""); fechaabinha(83); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jcn() {
    var v0 = jQuery("#cx84_0").val(); var v1 = jQuery("#cx84_1").val(); var v2 = jQuery("#cx84_2").val(); calcula2("jcn(" + v0 + ";" + v1 + ";" + v2 + ")", "Número de períodos cujo valor presente é " + v0 + ", juro composto igual a " + v1 + "% e o montante igual a " + v2 + ""); jQuery("#cx84_0").val(""); jQuery("#cx84_1").val(""); jQuery("#cx84_2").val(""); fechaabinha(84);
    if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jci() { var v0 = jQuery("#cx85_0").val(); var v1 = jQuery("#cx85_1").val(); var v2 = jQuery("#cx85_2").val(); calcula2("jci(" + v0 + ";" + v1 + ";" + v2 + ")", "Taxa de juro cujo valor presente é " + v0 + ", período igual a " + v1 + " e montante igual a " + v2 + ""); jQuery("#cx85_0").val(""); jQuery("#cx85_1").val(""); jQuery("#cx85_2").val(""); fechaabinha(85); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_jciam() {
    var v0 = jQuery("#cx86_0").val();
    calcula2("jciam(" + v0 + ")", "Taxa anual para mensal"); jQuery("#cx86_0").val(""); fechaabinha(86); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jcima() { var v0 = jQuery("#cx87_0").val(); calcula2("jcima(" + v0 + ")", "Taxa mensal para anual"); jQuery("#cx87_0").val(""); fechaabinha(87); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_valoravista() {
    var v0 = jQuery("#cx88_0").val(); var v1 = jQuery("#cx88_1").val(); var v2 = jQuery("#cx88_2").val(); calcula2("valoravista(" + v0 + ";" + v1 + ";" + v2 + ")", "Valor à vista cuja prestação é " + v0 + ", taxa de juros igual a " + v1 + "% e período igual a " + v2 + "");
    jQuery("#cx88_0").val(""); jQuery("#cx88_1").val(""); jQuery("#cx88_2").val(""); fechaabinha(88); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_montante() {
    var v0 = jQuery("#cx89_0").val(); var v1 = jQuery("#cx89_1").val(); var v2 = jQuery("#cx89_2").val(); var v3 = jQuery("#cx89_3").val(); calcula2("montante(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ")", "Valor futuro resultante de juro composto de " + v2 + "% sobre " + v0 + " com aporte de " + v1 + " por período durante " + v3 + " período(s)"); jQuery("#cx89_0").val("");
    jQuery("#cx89_1").val(""); jQuery("#cx89_2").val(""); jQuery("#cx89_3").val(""); fechaabinha(89); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_montante2() {
    var v0 = jQuery("#cx90_0").val(); var v1 = jQuery("#cx90_1").val(); var v2 = jQuery("#cx90_2").val(); var v3 = jQuery("#cx90_3").val(); var v4 = jQuery("#cx90_4").val(); calcula2("montante2(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ";" + v4 + ")", "Valor futuro resultante de juro composto de " + v2 + "% sobre " + v0 + " com aporte de " + v1 + " e saque de " + v4 + " por período durante " + v3 + " período(s)");
    jQuery("#cx90_0").val(""); jQuery("#cx90_1").val(""); jQuery("#cx90_2").val(""); jQuery("#cx90_3").val(""); jQuery("#cx90_4").val(""); fechaabinha(90); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_montante3() {
    var v0 = jQuery("#cx91_0").val(); var v1 = jQuery("#cx91_1").val(); var v2 = jQuery("#cx91_2").val(); var v3 = jQuery("#cx91_3").val(); var v4 = jQuery("#cx91_4").val(); var v5 = jQuery("#cx91_5").val(); calcula2("montante3(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ";" + v4 + ";" + v5 + ")", "Valor futuro resultante de juro composto de " + v2 + "% sobre " + v0 + " com aporte de " + v1 + ", saque de " + v4 + " e inflação de " + v5 + "% por período durante " + v3 + " período(s)");
    jQuery("#cx91_0").val(""); jQuery("#cx91_1").val(""); jQuery("#cx91_2").val(""); jQuery("#cx91_3").val(""); jQuery("#cx91_4").val(""); jQuery("#cx91_5").val(""); fechaabinha(91); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_objt() {
    var v0 = jQuery("#cx92_0").val(); var v1 = jQuery("#cx92_1").val(); var v2 = jQuery("#cx92_2").val(); var v3 = jQuery("#cx92_3").val(); calcula2("objt(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ")", "Tempo até objetivo de " + v0 + " com aporte inicial de " + v1 + ", aporte por período de " + v2 + " e juro composto de " + v3 + "%");
    jQuery("#cx92_0").val(""); jQuery("#cx92_1").val(""); jQuery("#cx92_2").val(""); jQuery("#cx92_3").val(""); fechaabinha(92); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_objp() {
    var v0 = jQuery("#cx93_0").val(); var v1 = jQuery("#cx93_1").val(); var v2 = jQuery("#cx93_2").val(); var v3 = jQuery("#cx93_3").val(); calcula2("objp(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ")", "Aporte por período até objetivo de " + v0 + ", aporte inicial de " + v1 + ", tempo (períodos) de " + v2 + " e juro composto de " + v3 + "%"); jQuery("#cx93_0").val("");
    jQuery("#cx93_1").val(""); jQuery("#cx93_2").val(""); jQuery("#cx93_3").val(""); fechaabinha(93); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_obja() {
    var v0 = jQuery("#cx94_0").val(); var v1 = jQuery("#cx94_1").val(); var v2 = jQuery("#cx94_2").val(); var v3 = jQuery("#cx94_3").val(); calcula2("obja(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ")", "Aporte inicial para objetivo de " + v0 + ", aporte periódico de " + v2 + ", " + v1 + " período(s) e juro composto de " + v3 + "%"); jQuery("#cx94_0").val(""); jQuery("#cx94_1").val("");
    jQuery("#cx94_2").val(""); jQuery("#cx94_3").val(""); fechaabinha(94); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_akk() {
    var v0 = jQuery("#cx95_0").val(); var v1 = jQuery("#cx95_1").val(); var v2 = jQuery("#cx95_2").val(); calcula2("akk(" + v0 + ";" + v1 + ";" + v2 + ")", "Aporte para 1 milhão com aporte inicial de " + v0 + ", " + v1 + " período(s) e " + v2 + "% de juro composto por período"); jQuery("#cx95_0").val(""); jQuery("#cx95_1").val(""); jQuery("#cx95_2").val(""); fechaabinha(95); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_tkk() { var v0 = jQuery("#cx96_0").val(); var v1 = jQuery("#cx96_1").val(); var v2 = jQuery("#cx96_2").val(); calcula2("tkk(" + v0 + ";" + v1 + ";" + v2 + ")", "Tempo até 1 milhão com " + v0 + " de aporte inicial, " + v1 + " de aportes por período e juro composto de " + v2 + "%"); jQuery("#cx96_0").val(""); jQuery("#cx96_1").val(""); jQuery("#cx96_2").val(""); fechaabinha(96); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_jsmontante() {
    var v0 = jQuery("#cx97_0").val(); var v1 = jQuery("#cx97_1").val();
    var v2 = jQuery("#cx97_2").val(); calcula2("jsmontante(" + v0 + ";" + v1 + ";" + v2 + ")", "Montante resultante de juro simples de " + v1 + "% sobre " + v0 + " por " + v2 + " período(s)"); jQuery("#cx97_0").val(""); jQuery("#cx97_1").val(""); jQuery("#cx97_2").val(""); fechaabinha(97); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_js() {
    var v0 = jQuery("#cx98_0").val(); var v1 = jQuery("#cx98_1").val(); var v2 = jQuery("#cx98_2").val(); calcula2("js(" + v0 + ";" + v1 + ";" + v2 + ")", "Juro simples sobre " + v0 + " a " + v1 + "% por " + v2 + " período(s)");
    jQuery("#cx98_0").val(""); jQuery("#cx98_1").val(""); jQuery("#cx98_2").val(""); fechaabinha(98); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jsvp() {
    var v0 = jQuery("#cx99_0").val(); var v1 = jQuery("#cx99_1").val(); var v2 = jQuery("#cx99_2").val(); calcula2("jsvp(" + v0 + ";" + v1 + ";" + v2 + ")", "Valor presente cujo montante é " + v0 + ", juro simples de " + v1 + "% e total de " + v2 + " período(s)"); jQuery("#cx99_0").val(""); jQuery("#cx99_1").val(""); jQuery("#cx99_2").val(""); fechaabinha(99); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_jsn() { var v0 = jQuery("#cx100_0").val(); var v1 = jQuery("#cx100_1").val(); var v2 = jQuery("#cx100_2").val(); calcula2("jsn(" + v0 + ";" + v1 + ";" + v2 + ")", "Número de períodos cujo valor presente é " + v0 + ", juro simples de " + v1 + "% e o montante igual a " + v2 + ""); jQuery("#cx100_0").val(""); jQuery("#cx100_1").val(""); jQuery("#cx100_2").val(""); fechaabinha(100); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_jsi() {
    var v0 = jQuery("#cx101_0").val(); var v1 = jQuery("#cx101_1").val();
    var v2 = jQuery("#cx101_2").val(); calcula2("jsi(" + v0 + ";" + v1 + ";" + v2 + ")", "Taxa de juro cujo valor presente é " + v0 + ", período igual a " + v1 + " e montante igual a " + v2 + ""); jQuery("#cx101_0").val(""); jQuery("#cx101_1").val(""); jQuery("#cx101_2").val(""); fechaabinha(101); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_jsiam() {
    var v0 = jQuery("#cx102_0").val(); calcula2("jsiam(" + v0 + ")", "Taxa anual para mensal"); jQuery("#cx102_0").val(""); fechaabinha(102); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_jsima() { var v0 = jQuery("#cx103_0").val(); calcula2("jsima(" + v0 + ")", "Taxa mensal para anual"); jQuery("#cx103_0").val(""); fechaabinha(103); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_fpv() {
    var v0 = jQuery("#cx104_0").val(); var v1 = jQuery("#cx104_1").val(); calcula2("fpv(" + v0 + ";" + v1 + ")", "Fator do valor presente em que a taxa de juros é " + v0 + "% e número de prestações é " + v1 + ""); jQuery("#cx104_0").val(""); jQuery("#cx104_1").val(""); fechaabinha(104); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_gpa() { var v0 = jQuery("#cx105_0").val(); var v1 = jQuery("#cx105_1").val(); var v2 = jQuery("#cx105_2").val(); calcula2("gpa(" + v0 + ";" + v1 + ";" + v2 + ")", "Termo de número " + v2 + " de uma PA de razão " + v1 + " e primero termo igual a " + v0 + ""); jQuery("#cx105_0").val(""); jQuery("#cx105_1").val(""); jQuery("#cx105_2").val(""); fechaabinha(105); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_spa() {
    var v0 = jQuery("#cx106_0").val(); var v1 = jQuery("#cx106_1").val(); var v2 = jQuery("#cx106_2").val();
    calcula2("spa(" + v0 + ";" + v1 + ";" + v2 + ")", "Soma dos " + v2 + " termos de uma PA"); jQuery("#cx106_0").val(""); jQuery("#cx106_1").val(""); jQuery("#cx106_2").val(""); fechaabinha(106); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_gpg() {
    var v0 = jQuery("#cx107_0").val(); var v1 = jQuery("#cx107_1").val(); var v2 = jQuery("#cx107_2").val(); calcula2("gpg(" + v0 + ";" + v1 + ";" + v2 + ")", "Termo de número " + v2 + " de uma PG de razão " + v1 + " e primeiro termo igual a " + v0 + ""); jQuery("#cx107_0").val(""); jQuery("#cx107_1").val("");
    jQuery("#cx107_2").val(""); fechaabinha(107); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_ppg() { var v0 = jQuery("#cx108_0").val(); var v1 = jQuery("#cx108_1").val(); var v2 = jQuery("#cx108_2").val(); calcula2("ppg(" + v0 + ";" + v1 + ";" + v2 + ")", "Produtos dos " + v2 + " termos de uma PG"); jQuery("#cx108_0").val(""); jQuery("#cx108_1").val(""); jQuery("#cx108_2").val(""); fechaabinha(108); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_spg() {
    var v0 = jQuery("#cx109_0").val();
    var v1 = jQuery("#cx109_1").val(); var v2 = jQuery("#cx109_2").val(); calcula2("spg(" + v0 + ";" + v1 + ";" + v2 + ")", "Soma dos " + v2 + " termos de uma PG"); jQuery("#cx109_0").val(""); jQuery("#cx109_1").val(""); jQuery("#cx109_2").val(""); fechaabinha(109); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_nb() {
    var v0 = jQuery("#cx110_0").val(); var v1 = jQuery("#cx110_1").val(); calcula2("nb(" + v0 + ";" + v1 + ")", "Número binomial"); jQuery("#cx110_0").val(""); jQuery("#cx110_1").val(""); fechaabinha(110); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_pkn() { var v0 = jQuery("#cx111_0").val(); var v1 = jQuery("#cx111_1").val(); var v2 = jQuery("#cx111_2").val(); calcula2("pkn(" + v0 + ";" + v1 + ";" + v2 + ")", "Probabilidade de " + v0 + " acontecimentos em " + v1 + " com probabilidade de " + v2 + ""); jQuery("#cx111_0").val(""); jQuery("#cx111_1").val(""); jQuery("#cx111_2").val(""); fechaabinha(111); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_dpr() {
    var v0 = jQuery("#cx112_0").val(); var v1 = jQuery("#cx112_1").val(); var v2 = jQuery("#cx112_2").val();
    var v3 = jQuery("#cx112_3").val(); var v4 = jQuery("#cx112_4").val(); calcula2("dpr(" + v0 + ";" + v1 + ";" + v2 + ";" + v3 + ";" + v4 + ")", "Distância entre ponto e reta"); jQuery("#cx112_0").val(""); jQuery("#cx112_1").val(""); jQuery("#cx112_2").val(""); jQuery("#cx112_3").val(""); jQuery("#cx112_4").val(""); fechaabinha(112); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_mediaaritmetica() {
    var v0 = jQuery("#cx113_0").val(); calcula2('med("' + v0 + '")', "Média aritmética"); jQuery("#cx113_0").val(""); fechaabinha(113);
    if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_mediageometrica() { var v0 = jQuery("#cx114_0").val(); calcula2('medg("' + v0 + '")', "Média geométrica"); jQuery("#cx114_0").val(""); fechaabinha(114); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_mediaharmonica() {
    var v0 = jQuery("#cx115_0").val(); calcula2('medh("' + v0 + '")', "Média harmônica"); jQuery("#cx115_0").val(""); fechaabinha(115); if (jQuery("#painelcalcdesk").is(":visible") == true) {
        jQuery("#TIExp").focus();
    }
} function c_mediaponderada() { var v0 = jQuery("#cx116_0").val(); calcula2('medp("' + v0 + '")', "Média ponderada"); jQuery("#cx116_0").val(""); fechaabinha(116); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_mediana() { var v0 = jQuery("#cx117_0").val(); calcula2('mediana("' + v0 + '")', "Mediana"); jQuery("#cx117_0").val(""); fechaabinha(117); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_perc() {
    var v0 = jQuery("#cx118_0").val(); var v1 = jQuery("#cx118_1").val();
    calcula2("perc(" + v0 + ";" + v1 + ")", "A em relação a B"); jQuery("#cx118_0").val(""); jQuery("#cx118_1").val(""); fechaabinha(118); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
} function c_mmc() { var v0 = jQuery("#cx119_0").val(); calcula2('mmc("' + v0 + '")', "Mínimo múltiplo comum"); jQuery("#cx119_0").val(""); fechaabinha(119); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); } } function c_mdc() {
    var v0 = jQuery("#cx120_0").val(); calcula2('mdc("' + v0 + '")', "Máximo divisor comum");
    jQuery("#cx120_0").val(""); fechaabinha(120); if (jQuery("#painelcalcdesk").is(":visible") == true) { jQuery("#TIExp").focus(); }
}*/