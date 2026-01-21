'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1286<T> = T extends (infer U)[]
  ? DeepReadonlyArray1286<U>
  : T extends object
  ? DeepReadonlyObject1286<T>
  : T;

interface DeepReadonlyArray1286<T> extends ReadonlyArray<DeepReadonly1286<T>> {}

type DeepReadonlyObject1286<T> = {
  readonly [P in keyof T]: DeepReadonly1286<T[P]>;
};

type UnionToIntersection1286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1286<T> = UnionToIntersection1286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1286<T extends unknown[], V> = [...T, V];

type TuplifyUnion1286<T, L = LastOf1286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1286<TuplifyUnion1286<Exclude<T, L>>, L>;

type DeepPartial1286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1286<T[P]> }
  : T;

type Paths1286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1286<K, Paths1286<T[K], Prev1286[D]>> : never }[keyof T]
  : never;

type Prev1286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1286 {
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

type ConfigPaths1286 = Paths1286<NestedConfig1286>;

interface HeavyProps1286 {
  config: DeepPartial1286<NestedConfig1286>;
  path?: ConfigPaths1286;
}

const HeavyComponent1286 = memo(function HeavyComponent1286({ config }: HeavyProps1286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1286.displayName = 'HeavyComponent1286';
export default HeavyComponent1286;
