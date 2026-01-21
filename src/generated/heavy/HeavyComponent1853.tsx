'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1853<T> = T extends (infer U)[]
  ? DeepReadonlyArray1853<U>
  : T extends object
  ? DeepReadonlyObject1853<T>
  : T;

interface DeepReadonlyArray1853<T> extends ReadonlyArray<DeepReadonly1853<T>> {}

type DeepReadonlyObject1853<T> = {
  readonly [P in keyof T]: DeepReadonly1853<T[P]>;
};

type UnionToIntersection1853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1853<T> = UnionToIntersection1853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1853<T extends unknown[], V> = [...T, V];

type TuplifyUnion1853<T, L = LastOf1853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1853<TuplifyUnion1853<Exclude<T, L>>, L>;

type DeepPartial1853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1853<T[P]> }
  : T;

type Paths1853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1853<K, Paths1853<T[K], Prev1853[D]>> : never }[keyof T]
  : never;

type Prev1853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1853 {
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

type ConfigPaths1853 = Paths1853<NestedConfig1853>;

interface HeavyProps1853 {
  config: DeepPartial1853<NestedConfig1853>;
  path?: ConfigPaths1853;
}

const HeavyComponent1853 = memo(function HeavyComponent1853({ config }: HeavyProps1853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1853.displayName = 'HeavyComponent1853';
export default HeavyComponent1853;
