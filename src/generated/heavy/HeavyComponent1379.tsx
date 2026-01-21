'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1379<T> = T extends (infer U)[]
  ? DeepReadonlyArray1379<U>
  : T extends object
  ? DeepReadonlyObject1379<T>
  : T;

interface DeepReadonlyArray1379<T> extends ReadonlyArray<DeepReadonly1379<T>> {}

type DeepReadonlyObject1379<T> = {
  readonly [P in keyof T]: DeepReadonly1379<T[P]>;
};

type UnionToIntersection1379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1379<T> = UnionToIntersection1379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1379<T extends unknown[], V> = [...T, V];

type TuplifyUnion1379<T, L = LastOf1379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1379<TuplifyUnion1379<Exclude<T, L>>, L>;

type DeepPartial1379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1379<T[P]> }
  : T;

type Paths1379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1379<K, Paths1379<T[K], Prev1379[D]>> : never }[keyof T]
  : never;

type Prev1379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1379 {
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

type ConfigPaths1379 = Paths1379<NestedConfig1379>;

interface HeavyProps1379 {
  config: DeepPartial1379<NestedConfig1379>;
  path?: ConfigPaths1379;
}

const HeavyComponent1379 = memo(function HeavyComponent1379({ config }: HeavyProps1379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1379.displayName = 'HeavyComponent1379';
export default HeavyComponent1379;
