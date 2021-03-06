'use strict';

[{
  zoneRegex: {
    en: /^Malikah's Well$/,
    ko: /^말리카 큰우물$/,
  },
  timelineFile: 'malikahs_well.txt',
  triggers: [
    {
      id: 'Malikah Stone Flail',
      regex: Regexes.startsUsing({ id: '3CE5', source: 'Greater Armadillo' }),
      regexDe: Regexes.startsUsing({ id: '3CE5', source: 'Riesengürteltier' }),
      regexFr: Regexes.startsUsing({ id: '3CE5', source: 'Grand Tatou' }),
      regexJa: Regexes.startsUsing({ id: '3CE5', source: 'グレーター・アルマジロ' }),
      regexCn: Regexes.startsUsing({ id: '3CE5', source: '大犰狳' }),
      regexKo: Regexes.startsUsing({ id: '3CE5', source: '거대 아르마딜로' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
            ko: '나에게 탱크버스터',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches.target),
            de: 'Tankbuster auf ' + data.ShortName(matches.target),
            fr: 'Tankbuster sur ' + data.ShortName(matches.target),
            ko: data.ShortName(matches.target) + '에게 탱크버스터',
          };
        }
      },
    },
    {
      id: 'Malikah Head Toss Stack',
      regex: Regexes.headMarker({ id: '003E' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Stack on YOU',
            de: 'Auf DIR sammeln',
            ko: '나에게 모이기',
          };
        }
        return {
          en: 'Stack on ' + data.ShortName(matches.target),
          de: 'Auf ' + data.ShortName(matches.target) + ' sammeln',
          ko: data.ShortName(matches.target) + '에게 모이기',
        };
      },
    },
    {
      id: 'Malikah Right Round',
      regex: Regexes.startsUsing({ id: '3CE7', source: 'Greater Armadillo', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CE7', source: 'Riesengürteltier', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CE7', source: 'Grand Tatou', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CE7', source: 'グレーター・アルマジロ', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CE7', source: '大犰狳', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CE7', source: '거대 아르마딜로', capture: false }),
      infoText: {
        en: 'Melee Knockback',
        de: 'Nahkämpfer Rückstoß',
        ko: '근거리 넉백',
      },
    },
    {
      id: 'Malikah Deep Draught',
      regex: Regexes.startsUsing({ id: '4188', source: 'Pack Armadillo', capture: false }),
      regexDe: Regexes.startsUsing({ id: '4188', source: 'Rudel-Gürteltier', capture: false }),
      regexFr: Regexes.startsUsing({ id: '4188', source: 'Tatou Grégaire', capture: false }),
      regexJa: Regexes.startsUsing({ id: '4188', source: 'パック・アルマジロ', capture: false }),
      regexCn: Regexes.startsUsing({ id: '4188', source: '群落犰狳', capture: false }),
      regexKo: Regexes.startsUsing({ id: '4188', source: '무리 아르마딜로', capture: false }),
      condition: function(data) {
        return data.CanSilence();
      },
      infoText: {
        en: 'Silence Add',
        de: 'Add stummen',
        fr: 'Silence Add',
        ko: '방해하기 → 추가 쫄',
      },
    },
    {
      id: 'Malikah Efface',
      regex: Regexes.startsUsing({ id: '3CEB', source: 'Amphibious Talos' }),
      regexDe: Regexes.startsUsing({ id: '3CEB', source: 'Wasserträger-Talos' }),
      regexFr: Regexes.startsUsing({ id: '3CEB', source: 'Talos Amphibie' }),
      regexJa: Regexes.startsUsing({ id: '3CEB', source: 'ハイドロタロース' }),
      regexCn: Regexes.startsUsing({ id: '3CEB', source: '水陆两用塔罗斯' }),
      regexKo: Regexes.startsUsing({ id: '3CEB', source: '수력 탈로스' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
            ko: '나에게 탱크버스터',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches.target),
            de: 'Tankbuster auf ' + data.ShortName(matches.target),
            fr: 'Tankbuster sur ' + data.ShortName(matches.target),
            ko: data.ShortName(matches.target) + '에게 탱크버스터',
          };
        }
      },
    },
    {
      id: 'Malikah High Pressure',
      regex: Regexes.startsUsing({ id: '3CEC', source: 'Amphibious Talos', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CEC', source: 'Wasserträger-Talos', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CEC', source: 'Talos Amphibie', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CEC', source: 'ハイドロタロース', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CEC', source: '水陆两用塔罗斯', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CEC', source: '수력 탈로스', capture: false }),
      infoText: {
        en: 'Knockback',
        de: 'Rückstoß',
        ko: '넉백',
      },
    },
    {
      id: 'Malikah Swift Spill',
      regex: Regexes.startsUsing({ id: '3CEF', source: 'Amphibious Talos', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CEF', source: 'Wasserträger-Talos', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CEF', source: 'Talos Amphibie', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CEF', source: 'ハイドロタロース', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CEF', source: '水陆两用塔罗斯', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CEF', source: '수력 탈로스', capture: false }),
      infoText: {
        en: 'Get Behind',
        de: 'Hinter ihn',
        ko: '보스 뒷쪽으로',
      },
    },
    {
      id: 'Malikah Intestinal Crank',
      regex: Regexes.startsUsing({ id: '3CF1', source: 'Storge', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CF1', source: 'Storge', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CF1', source: 'Storgê', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CF1', source: 'ストルゲー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CF1', source: '斯托尔戈', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CF1', source: '스토르게', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        ko: '전체 공격',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Terminus': 'Drehscheibe',
        'Greater Armadillo': 'Riesengürteltier',
        'Malikah\'s Gift': 'Malikahs Quelle',
        'Amphibious Talos': 'Wasserträger-Talos',
        'Unquestioned Acceptance': 'Residenz der Großherzigkeit',
        'Storge': 'Storge',
        'Rhapsodic': 'Keil der Liebe',
      },
      'replaceText': {
        'Stone Flail': 'Steindresche',
        'Head Toss': 'Kopfwurf',
        'Right Round': 'Rotation',
        'Flail Smash': 'Dresche',
        'Earthshake': 'Bodenbeber',
        'Efface': 'Zerstören',
        'Wellbore': 'Brunnenbohrer',
        'Geyser Eruption': 'Geysir',
        'High Pressure': 'Überdruck',
        'Swift Spill': 'Schneller Abfluss',
        'Intestinal Crank': 'Geweiderupfer',
        'Heretic\'s Fork': 'Ketzerspieß',
        'Breaking Wheel': 'Radbruch',
        'Crystal Nail': 'Kristallnagel',
        'Censure': 'Tadel',
        'Armadillo': 'Armadillo',
      },
    },
  ],
}];
