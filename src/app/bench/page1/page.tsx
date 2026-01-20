import Component116 from '@/generated/components/Component116';
import Component117 from '@/generated/components/Component117';
import Component118 from '@/generated/components/Component118';
import Component119 from '@/generated/components/Component119';
import Component120 from '@/generated/components/Component120';
import Component121 from '@/generated/components/Component121';
import Component122 from '@/generated/components/Component122';
import Component123 from '@/generated/components/Component123';
import Component124 from '@/generated/components/Component124';
import Component125 from '@/generated/components/Component125';
import Component126 from '@/generated/components/Component126';
import Component127 from '@/generated/components/Component127';
import Component128 from '@/generated/components/Component128';
import Component129 from '@/generated/components/Component129';
import Component130 from '@/generated/components/Component130';
import Component131 from '@/generated/components/Component131';
import Component132 from '@/generated/components/Component132';
import Component133 from '@/generated/components/Component133';
import Component134 from '@/generated/components/Component134';
import Component135 from '@/generated/components/Component135';
import Component136 from '@/generated/components/Component136';
import Component137 from '@/generated/components/Component137';
import Component138 from '@/generated/components/Component138';
import Component139 from '@/generated/components/Component139';
import Component140 from '@/generated/components/Component140';
import Component141 from '@/generated/components/Component141';
import Component142 from '@/generated/components/Component142';
import Component143 from '@/generated/components/Component143';
import Component144 from '@/generated/components/Component144';
import Component145 from '@/generated/components/Component145';
import Component146 from '@/generated/components/Component146';
import Component147 from '@/generated/components/Component147';
import Component148 from '@/generated/components/Component148';
import Component149 from '@/generated/components/Component149';
import Component150 from '@/generated/components/Component150';
import Component151 from '@/generated/components/Component151';
import Component152 from '@/generated/components/Component152';
import Component153 from '@/generated/components/Component153';
import Component154 from '@/generated/components/Component154';
import Component155 from '@/generated/components/Component155';
import Component156 from '@/generated/components/Component156';
import Component157 from '@/generated/components/Component157';
import Component158 from '@/generated/components/Component158';
import Component159 from '@/generated/components/Component159';
import Component160 from '@/generated/components/Component160';
import Component161 from '@/generated/components/Component161';
import Component162 from '@/generated/components/Component162';
import Component163 from '@/generated/components/Component163';
import Component164 from '@/generated/components/Component164';
import Component165 from '@/generated/components/Component165';
import Component166 from '@/generated/components/Component166';
import Component167 from '@/generated/components/Component167';
import Component168 from '@/generated/components/Component168';
import Component169 from '@/generated/components/Component169';
import Component170 from '@/generated/components/Component170';
import Component171 from '@/generated/components/Component171';
import Component172 from '@/generated/components/Component172';
import Component173 from '@/generated/components/Component173';
import Component174 from '@/generated/components/Component174';
import Component175 from '@/generated/components/Component175';
import Component176 from '@/generated/components/Component176';
import Component177 from '@/generated/components/Component177';
import Component178 from '@/generated/components/Component178';
import Component179 from '@/generated/components/Component179';
import Component180 from '@/generated/components/Component180';
import Component181 from '@/generated/components/Component181';
import Component182 from '@/generated/components/Component182';
import Component183 from '@/generated/components/Component183';
import Component184 from '@/generated/components/Component184';
import Component185 from '@/generated/components/Component185';
import Component186 from '@/generated/components/Component186';
import Component187 from '@/generated/components/Component187';
import Component188 from '@/generated/components/Component188';
import Component189 from '@/generated/components/Component189';
import Component190 from '@/generated/components/Component190';
import Component191 from '@/generated/components/Component191';
import Component192 from '@/generated/components/Component192';
import Component193 from '@/generated/components/Component193';
import Component194 from '@/generated/components/Component194';
import Component195 from '@/generated/components/Component195';
import Component196 from '@/generated/components/Component196';
import Component197 from '@/generated/components/Component197';
import Component198 from '@/generated/components/Component198';
import Component199 from '@/generated/components/Component199';
import Component200 from '@/generated/components/Component200';
import Component201 from '@/generated/components/Component201';
import Component202 from '@/generated/components/Component202';
import Component203 from '@/generated/components/Component203';
import Component204 from '@/generated/components/Component204';
import Component205 from '@/generated/components/Component205';
import Component206 from '@/generated/components/Component206';
import Component207 from '@/generated/components/Component207';
import Component208 from '@/generated/components/Component208';
import Component209 from '@/generated/components/Component209';
import Component210 from '@/generated/components/Component210';
import Component211 from '@/generated/components/Component211';
import Component212 from '@/generated/components/Component212';
import Component213 from '@/generated/components/Component213';
import Component214 from '@/generated/components/Component214';
import Component215 from '@/generated/components/Component215';
import Component216 from '@/generated/components/Component216';
import Component217 from '@/generated/components/Component217';
import Component218 from '@/generated/components/Component218';
import Component219 from '@/generated/components/Component219';
import Component220 from '@/generated/components/Component220';
import Component221 from '@/generated/components/Component221';
import Component222 from '@/generated/components/Component222';
import Component223 from '@/generated/components/Component223';
import Component224 from '@/generated/components/Component224';
import Component225 from '@/generated/components/Component225';
import Component226 from '@/generated/components/Component226';
import Component227 from '@/generated/components/Component227';
import Component228 from '@/generated/components/Component228';
import Component229 from '@/generated/components/Component229';
import Component230 from '@/generated/components/Component230';
import Component231 from '@/generated/components/Component231';

const sampleData = {
  id: 'page-1',
  name: 'Benchmark Page 1',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-1',
          computed: 1.5,
          metadata: { page: 1 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.1 },
    },
  },
};

export default function BenchPage1() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 1
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 116 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component116, Component117, Component118, Component119, Component120, Component121, Component122, Component123, Component124, Component125, Component126, Component127, Component128, Component129, Component130, Component131, Component132, Component133, Component134, Component135, Component136, Component137, Component138, Component139, Component140, Component141, Component142, Component143, Component144, Component145, Component146, Component147, Component148, Component149, Component150, Component151, Component152, Component153, Component154, Component155, Component156, Component157, Component158, Component159, Component160, Component161, Component162, Component163, Component164, Component165, Component166, Component167, Component168, Component169, Component170, Component171, Component172, Component173, Component174, Component175, Component176, Component177, Component178, Component179, Component180, Component181, Component182, Component183, Component184, Component185, Component186, Component187, Component188, Component189, Component190, Component191, Component192, Component193, Component194, Component195, Component196, Component197, Component198, Component199, Component200, Component201, Component202, Component203, Component204, Component205, Component206, Component207, Component208, Component209, Component210, Component211, Component212, Component213, Component214, Component215, Component216, Component217, Component218, Component219, Component220, Component221, Component222, Component223, Component224, Component225, Component226, Component227, Component228, Component229, Component230, Component231].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
