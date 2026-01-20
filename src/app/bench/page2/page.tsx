import Component232 from '@/generated/components/Component232';
import Component233 from '@/generated/components/Component233';
import Component234 from '@/generated/components/Component234';
import Component235 from '@/generated/components/Component235';
import Component236 from '@/generated/components/Component236';
import Component237 from '@/generated/components/Component237';
import Component238 from '@/generated/components/Component238';
import Component239 from '@/generated/components/Component239';
import Component240 from '@/generated/components/Component240';
import Component241 from '@/generated/components/Component241';
import Component242 from '@/generated/components/Component242';
import Component243 from '@/generated/components/Component243';
import Component244 from '@/generated/components/Component244';
import Component245 from '@/generated/components/Component245';
import Component246 from '@/generated/components/Component246';
import Component247 from '@/generated/components/Component247';
import Component248 from '@/generated/components/Component248';
import Component249 from '@/generated/components/Component249';
import Component250 from '@/generated/components/Component250';
import Component251 from '@/generated/components/Component251';
import Component252 from '@/generated/components/Component252';
import Component253 from '@/generated/components/Component253';
import Component254 from '@/generated/components/Component254';
import Component255 from '@/generated/components/Component255';
import Component256 from '@/generated/components/Component256';
import Component257 from '@/generated/components/Component257';
import Component258 from '@/generated/components/Component258';
import Component259 from '@/generated/components/Component259';
import Component260 from '@/generated/components/Component260';
import Component261 from '@/generated/components/Component261';
import Component262 from '@/generated/components/Component262';
import Component263 from '@/generated/components/Component263';
import Component264 from '@/generated/components/Component264';
import Component265 from '@/generated/components/Component265';
import Component266 from '@/generated/components/Component266';
import Component267 from '@/generated/components/Component267';
import Component268 from '@/generated/components/Component268';
import Component269 from '@/generated/components/Component269';
import Component270 from '@/generated/components/Component270';
import Component271 from '@/generated/components/Component271';
import Component272 from '@/generated/components/Component272';
import Component273 from '@/generated/components/Component273';
import Component274 from '@/generated/components/Component274';
import Component275 from '@/generated/components/Component275';
import Component276 from '@/generated/components/Component276';
import Component277 from '@/generated/components/Component277';
import Component278 from '@/generated/components/Component278';
import Component279 from '@/generated/components/Component279';
import Component280 from '@/generated/components/Component280';
import Component281 from '@/generated/components/Component281';
import Component282 from '@/generated/components/Component282';
import Component283 from '@/generated/components/Component283';
import Component284 from '@/generated/components/Component284';
import Component285 from '@/generated/components/Component285';
import Component286 from '@/generated/components/Component286';
import Component287 from '@/generated/components/Component287';
import Component288 from '@/generated/components/Component288';
import Component289 from '@/generated/components/Component289';
import Component290 from '@/generated/components/Component290';
import Component291 from '@/generated/components/Component291';
import Component292 from '@/generated/components/Component292';
import Component293 from '@/generated/components/Component293';
import Component294 from '@/generated/components/Component294';
import Component295 from '@/generated/components/Component295';
import Component296 from '@/generated/components/Component296';
import Component297 from '@/generated/components/Component297';
import Component298 from '@/generated/components/Component298';
import Component299 from '@/generated/components/Component299';
import Component300 from '@/generated/components/Component300';
import Component301 from '@/generated/components/Component301';
import Component302 from '@/generated/components/Component302';
import Component303 from '@/generated/components/Component303';
import Component304 from '@/generated/components/Component304';
import Component305 from '@/generated/components/Component305';
import Component306 from '@/generated/components/Component306';
import Component307 from '@/generated/components/Component307';
import Component308 from '@/generated/components/Component308';
import Component309 from '@/generated/components/Component309';
import Component310 from '@/generated/components/Component310';
import Component311 from '@/generated/components/Component311';
import Component312 from '@/generated/components/Component312';
import Component313 from '@/generated/components/Component313';
import Component314 from '@/generated/components/Component314';
import Component315 from '@/generated/components/Component315';
import Component316 from '@/generated/components/Component316';
import Component317 from '@/generated/components/Component317';
import Component318 from '@/generated/components/Component318';
import Component319 from '@/generated/components/Component319';
import Component320 from '@/generated/components/Component320';
import Component321 from '@/generated/components/Component321';
import Component322 from '@/generated/components/Component322';
import Component323 from '@/generated/components/Component323';
import Component324 from '@/generated/components/Component324';
import Component325 from '@/generated/components/Component325';
import Component326 from '@/generated/components/Component326';
import Component327 from '@/generated/components/Component327';
import Component328 from '@/generated/components/Component328';
import Component329 from '@/generated/components/Component329';
import Component330 from '@/generated/components/Component330';
import Component331 from '@/generated/components/Component331';
import Component332 from '@/generated/components/Component332';
import Component333 from '@/generated/components/Component333';
import Component334 from '@/generated/components/Component334';
import Component335 from '@/generated/components/Component335';
import Component336 from '@/generated/components/Component336';
import Component337 from '@/generated/components/Component337';
import Component338 from '@/generated/components/Component338';
import Component339 from '@/generated/components/Component339';
import Component340 from '@/generated/components/Component340';
import Component341 from '@/generated/components/Component341';
import Component342 from '@/generated/components/Component342';
import Component343 from '@/generated/components/Component343';
import Component344 from '@/generated/components/Component344';
import Component345 from '@/generated/components/Component345';
import Component346 from '@/generated/components/Component346';
import Component347 from '@/generated/components/Component347';

const sampleData = {
  id: 'page-2',
  name: 'Benchmark Page 2',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-2',
          computed: 3,
          metadata: { page: 2 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.2 },
    },
  },
};

export default function BenchPage2() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 2
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 116 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component232, Component233, Component234, Component235, Component236, Component237, Component238, Component239, Component240, Component241, Component242, Component243, Component244, Component245, Component246, Component247, Component248, Component249, Component250, Component251, Component252, Component253, Component254, Component255, Component256, Component257, Component258, Component259, Component260, Component261, Component262, Component263, Component264, Component265, Component266, Component267, Component268, Component269, Component270, Component271, Component272, Component273, Component274, Component275, Component276, Component277, Component278, Component279, Component280, Component281, Component282, Component283, Component284, Component285, Component286, Component287, Component288, Component289, Component290, Component291, Component292, Component293, Component294, Component295, Component296, Component297, Component298, Component299, Component300, Component301, Component302, Component303, Component304, Component305, Component306, Component307, Component308, Component309, Component310, Component311, Component312, Component313, Component314, Component315, Component316, Component317, Component318, Component319, Component320, Component321, Component322, Component323, Component324, Component325, Component326, Component327, Component328, Component329, Component330, Component331, Component332, Component333, Component334, Component335, Component336, Component337, Component338, Component339, Component340, Component341, Component342, Component343, Component344, Component345, Component346, Component347].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
