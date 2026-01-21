'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1567<T> = T extends (infer U)[]
  ? DeepReadonlyArray1567<U>
  : T extends object
  ? DeepReadonlyObject1567<T>
  : T;

interface DeepReadonlyArray1567<T> extends ReadonlyArray<DeepReadonly1567<T>> {}

type DeepReadonlyObject1567<T> = {
  readonly [P in keyof T]: DeepReadonly1567<T[P]>;
};

type UnionToIntersection1567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1567<T> = UnionToIntersection1567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1567<T extends unknown[], V> = [...T, V];

type TuplifyUnion1567<T, L = LastOf1567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1567<TuplifyUnion1567<Exclude<T, L>>, L>;

type DeepPartial1567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1567<T[P]> }
  : T;

type Paths1567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1567<K, Paths1567<T[K], Prev1567[D]>> : never }[keyof T]
  : never;

type Prev1567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1567 {
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

type ConfigPaths1567 = Paths1567<NestedConfig1567>;

interface HeavyProps1567 {
  config: DeepPartial1567<NestedConfig1567>;
  path?: ConfigPaths1567;
}

const HeavyComponent1567 = memo(function HeavyComponent1567({ config }: HeavyProps1567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1567.displayName = 'HeavyComponent1567';
export default HeavyComponent1567;
