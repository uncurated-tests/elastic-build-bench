'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1149<T> = T extends (infer U)[]
  ? DeepReadonlyArray1149<U>
  : T extends object
  ? DeepReadonlyObject1149<T>
  : T;

interface DeepReadonlyArray1149<T> extends ReadonlyArray<DeepReadonly1149<T>> {}

type DeepReadonlyObject1149<T> = {
  readonly [P in keyof T]: DeepReadonly1149<T[P]>;
};

type UnionToIntersection1149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1149<T> = UnionToIntersection1149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1149<T extends unknown[], V> = [...T, V];

type TuplifyUnion1149<T, L = LastOf1149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1149<TuplifyUnion1149<Exclude<T, L>>, L>;

type DeepPartial1149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1149<T[P]> }
  : T;

type Paths1149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1149<K, Paths1149<T[K], Prev1149[D]>> : never }[keyof T]
  : never;

type Prev1149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1149 {
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

type ConfigPaths1149 = Paths1149<NestedConfig1149>;

interface HeavyProps1149 {
  config: DeepPartial1149<NestedConfig1149>;
  path?: ConfigPaths1149;
}

const HeavyComponent1149 = memo(function HeavyComponent1149({ config }: HeavyProps1149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1149.displayName = 'HeavyComponent1149';
export default HeavyComponent1149;
