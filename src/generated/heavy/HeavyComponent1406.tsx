'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1406<T> = T extends (infer U)[]
  ? DeepReadonlyArray1406<U>
  : T extends object
  ? DeepReadonlyObject1406<T>
  : T;

interface DeepReadonlyArray1406<T> extends ReadonlyArray<DeepReadonly1406<T>> {}

type DeepReadonlyObject1406<T> = {
  readonly [P in keyof T]: DeepReadonly1406<T[P]>;
};

type UnionToIntersection1406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1406<T> = UnionToIntersection1406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1406<T extends unknown[], V> = [...T, V];

type TuplifyUnion1406<T, L = LastOf1406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1406<TuplifyUnion1406<Exclude<T, L>>, L>;

type DeepPartial1406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1406<T[P]> }
  : T;

type Paths1406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1406<K, Paths1406<T[K], Prev1406[D]>> : never }[keyof T]
  : never;

type Prev1406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1406 {
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

type ConfigPaths1406 = Paths1406<NestedConfig1406>;

interface HeavyProps1406 {
  config: DeepPartial1406<NestedConfig1406>;
  path?: ConfigPaths1406;
}

const HeavyComponent1406 = memo(function HeavyComponent1406({ config }: HeavyProps1406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1406.displayName = 'HeavyComponent1406';
export default HeavyComponent1406;
