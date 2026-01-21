'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1495<T> = T extends (infer U)[]
  ? DeepReadonlyArray1495<U>
  : T extends object
  ? DeepReadonlyObject1495<T>
  : T;

interface DeepReadonlyArray1495<T> extends ReadonlyArray<DeepReadonly1495<T>> {}

type DeepReadonlyObject1495<T> = {
  readonly [P in keyof T]: DeepReadonly1495<T[P]>;
};

type UnionToIntersection1495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1495<T> = UnionToIntersection1495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1495<T extends unknown[], V> = [...T, V];

type TuplifyUnion1495<T, L = LastOf1495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1495<TuplifyUnion1495<Exclude<T, L>>, L>;

type DeepPartial1495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1495<T[P]> }
  : T;

type Paths1495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1495<K, Paths1495<T[K], Prev1495[D]>> : never }[keyof T]
  : never;

type Prev1495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1495 {
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

type ConfigPaths1495 = Paths1495<NestedConfig1495>;

interface HeavyProps1495 {
  config: DeepPartial1495<NestedConfig1495>;
  path?: ConfigPaths1495;
}

const HeavyComponent1495 = memo(function HeavyComponent1495({ config }: HeavyProps1495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1495.displayName = 'HeavyComponent1495';
export default HeavyComponent1495;
