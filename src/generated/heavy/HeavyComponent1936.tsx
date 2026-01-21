'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1936<T> = T extends (infer U)[]
  ? DeepReadonlyArray1936<U>
  : T extends object
  ? DeepReadonlyObject1936<T>
  : T;

interface DeepReadonlyArray1936<T> extends ReadonlyArray<DeepReadonly1936<T>> {}

type DeepReadonlyObject1936<T> = {
  readonly [P in keyof T]: DeepReadonly1936<T[P]>;
};

type UnionToIntersection1936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1936<T> = UnionToIntersection1936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1936<T extends unknown[], V> = [...T, V];

type TuplifyUnion1936<T, L = LastOf1936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1936<TuplifyUnion1936<Exclude<T, L>>, L>;

type DeepPartial1936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1936<T[P]> }
  : T;

type Paths1936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1936<K, Paths1936<T[K], Prev1936[D]>> : never }[keyof T]
  : never;

type Prev1936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1936 {
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

type ConfigPaths1936 = Paths1936<NestedConfig1936>;

interface HeavyProps1936 {
  config: DeepPartial1936<NestedConfig1936>;
  path?: ConfigPaths1936;
}

const HeavyComponent1936 = memo(function HeavyComponent1936({ config }: HeavyProps1936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1936.displayName = 'HeavyComponent1936';
export default HeavyComponent1936;
