'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1272<T> = T extends (infer U)[]
  ? DeepReadonlyArray1272<U>
  : T extends object
  ? DeepReadonlyObject1272<T>
  : T;

interface DeepReadonlyArray1272<T> extends ReadonlyArray<DeepReadonly1272<T>> {}

type DeepReadonlyObject1272<T> = {
  readonly [P in keyof T]: DeepReadonly1272<T[P]>;
};

type UnionToIntersection1272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1272<T> = UnionToIntersection1272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1272<T extends unknown[], V> = [...T, V];

type TuplifyUnion1272<T, L = LastOf1272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1272<TuplifyUnion1272<Exclude<T, L>>, L>;

type DeepPartial1272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1272<T[P]> }
  : T;

type Paths1272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1272<K, Paths1272<T[K], Prev1272[D]>> : never }[keyof T]
  : never;

type Prev1272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1272 {
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

type ConfigPaths1272 = Paths1272<NestedConfig1272>;

interface HeavyProps1272 {
  config: DeepPartial1272<NestedConfig1272>;
  path?: ConfigPaths1272;
}

const HeavyComponent1272 = memo(function HeavyComponent1272({ config }: HeavyProps1272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1272.displayName = 'HeavyComponent1272';
export default HeavyComponent1272;
