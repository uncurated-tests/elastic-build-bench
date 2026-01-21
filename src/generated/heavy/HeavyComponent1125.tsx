'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1125<T> = T extends (infer U)[]
  ? DeepReadonlyArray1125<U>
  : T extends object
  ? DeepReadonlyObject1125<T>
  : T;

interface DeepReadonlyArray1125<T> extends ReadonlyArray<DeepReadonly1125<T>> {}

type DeepReadonlyObject1125<T> = {
  readonly [P in keyof T]: DeepReadonly1125<T[P]>;
};

type UnionToIntersection1125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1125<T> = UnionToIntersection1125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1125<T extends unknown[], V> = [...T, V];

type TuplifyUnion1125<T, L = LastOf1125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1125<TuplifyUnion1125<Exclude<T, L>>, L>;

type DeepPartial1125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1125<T[P]> }
  : T;

type Paths1125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1125<K, Paths1125<T[K], Prev1125[D]>> : never }[keyof T]
  : never;

type Prev1125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1125 {
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

type ConfigPaths1125 = Paths1125<NestedConfig1125>;

interface HeavyProps1125 {
  config: DeepPartial1125<NestedConfig1125>;
  path?: ConfigPaths1125;
}

const HeavyComponent1125 = memo(function HeavyComponent1125({ config }: HeavyProps1125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1125.displayName = 'HeavyComponent1125';
export default HeavyComponent1125;
