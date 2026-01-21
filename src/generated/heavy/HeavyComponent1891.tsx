'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1891<T> = T extends (infer U)[]
  ? DeepReadonlyArray1891<U>
  : T extends object
  ? DeepReadonlyObject1891<T>
  : T;

interface DeepReadonlyArray1891<T> extends ReadonlyArray<DeepReadonly1891<T>> {}

type DeepReadonlyObject1891<T> = {
  readonly [P in keyof T]: DeepReadonly1891<T[P]>;
};

type UnionToIntersection1891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1891<T> = UnionToIntersection1891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1891<T extends unknown[], V> = [...T, V];

type TuplifyUnion1891<T, L = LastOf1891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1891<TuplifyUnion1891<Exclude<T, L>>, L>;

type DeepPartial1891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1891<T[P]> }
  : T;

type Paths1891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1891<K, Paths1891<T[K], Prev1891[D]>> : never }[keyof T]
  : never;

type Prev1891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1891 {
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

type ConfigPaths1891 = Paths1891<NestedConfig1891>;

interface HeavyProps1891 {
  config: DeepPartial1891<NestedConfig1891>;
  path?: ConfigPaths1891;
}

const HeavyComponent1891 = memo(function HeavyComponent1891({ config }: HeavyProps1891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1891.displayName = 'HeavyComponent1891';
export default HeavyComponent1891;
