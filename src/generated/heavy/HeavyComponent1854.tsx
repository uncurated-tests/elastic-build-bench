'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1854<T> = T extends (infer U)[]
  ? DeepReadonlyArray1854<U>
  : T extends object
  ? DeepReadonlyObject1854<T>
  : T;

interface DeepReadonlyArray1854<T> extends ReadonlyArray<DeepReadonly1854<T>> {}

type DeepReadonlyObject1854<T> = {
  readonly [P in keyof T]: DeepReadonly1854<T[P]>;
};

type UnionToIntersection1854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1854<T> = UnionToIntersection1854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1854<T extends unknown[], V> = [...T, V];

type TuplifyUnion1854<T, L = LastOf1854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1854<TuplifyUnion1854<Exclude<T, L>>, L>;

type DeepPartial1854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1854<T[P]> }
  : T;

type Paths1854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1854<K, Paths1854<T[K], Prev1854[D]>> : never }[keyof T]
  : never;

type Prev1854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1854 {
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

type ConfigPaths1854 = Paths1854<NestedConfig1854>;

interface HeavyProps1854 {
  config: DeepPartial1854<NestedConfig1854>;
  path?: ConfigPaths1854;
}

const HeavyComponent1854 = memo(function HeavyComponent1854({ config }: HeavyProps1854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1854.displayName = 'HeavyComponent1854';
export default HeavyComponent1854;
