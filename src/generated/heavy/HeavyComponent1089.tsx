'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1089<T> = T extends (infer U)[]
  ? DeepReadonlyArray1089<U>
  : T extends object
  ? DeepReadonlyObject1089<T>
  : T;

interface DeepReadonlyArray1089<T> extends ReadonlyArray<DeepReadonly1089<T>> {}

type DeepReadonlyObject1089<T> = {
  readonly [P in keyof T]: DeepReadonly1089<T[P]>;
};

type UnionToIntersection1089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1089<T> = UnionToIntersection1089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1089<T extends unknown[], V> = [...T, V];

type TuplifyUnion1089<T, L = LastOf1089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1089<TuplifyUnion1089<Exclude<T, L>>, L>;

type DeepPartial1089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1089<T[P]> }
  : T;

type Paths1089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1089<K, Paths1089<T[K], Prev1089[D]>> : never }[keyof T]
  : never;

type Prev1089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1089 {
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

type ConfigPaths1089 = Paths1089<NestedConfig1089>;

interface HeavyProps1089 {
  config: DeepPartial1089<NestedConfig1089>;
  path?: ConfigPaths1089;
}

const HeavyComponent1089 = memo(function HeavyComponent1089({ config }: HeavyProps1089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1089.displayName = 'HeavyComponent1089';
export default HeavyComponent1089;
