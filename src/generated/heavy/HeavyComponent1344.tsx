'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1344<T> = T extends (infer U)[]
  ? DeepReadonlyArray1344<U>
  : T extends object
  ? DeepReadonlyObject1344<T>
  : T;

interface DeepReadonlyArray1344<T> extends ReadonlyArray<DeepReadonly1344<T>> {}

type DeepReadonlyObject1344<T> = {
  readonly [P in keyof T]: DeepReadonly1344<T[P]>;
};

type UnionToIntersection1344<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1344<T> = UnionToIntersection1344<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1344<T extends unknown[], V> = [...T, V];

type TuplifyUnion1344<T, L = LastOf1344<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1344<TuplifyUnion1344<Exclude<T, L>>, L>;

type DeepPartial1344<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1344<T[P]> }
  : T;

type Paths1344<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1344<K, Paths1344<T[K], Prev1344[D]>> : never }[keyof T]
  : never;

type Prev1344 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1344<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1344 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths1344 = Paths1344<NestedConfig1344>;

interface HeavyProps1344 {
  config: DeepPartial1344<NestedConfig1344>;
  path?: ConfigPaths1344;
}

const HeavyComponent1344 = memo(function HeavyComponent1344({ config }: HeavyProps1344) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1344) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1344 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1344: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1344.displayName = 'HeavyComponent1344';
export default HeavyComponent1344;
