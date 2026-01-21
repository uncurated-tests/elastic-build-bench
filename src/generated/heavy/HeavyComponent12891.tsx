'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12891<T> = T extends (infer U)[]
  ? DeepReadonlyArray12891<U>
  : T extends object
  ? DeepReadonlyObject12891<T>
  : T;

interface DeepReadonlyArray12891<T> extends ReadonlyArray<DeepReadonly12891<T>> {}

type DeepReadonlyObject12891<T> = {
  readonly [P in keyof T]: DeepReadonly12891<T[P]>;
};

type UnionToIntersection12891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12891<T> = UnionToIntersection12891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12891<T extends unknown[], V> = [...T, V];

type TuplifyUnion12891<T, L = LastOf12891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12891<TuplifyUnion12891<Exclude<T, L>>, L>;

type DeepPartial12891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12891<T[P]> }
  : T;

type Paths12891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12891<K, Paths12891<T[K], Prev12891[D]>> : never }[keyof T]
  : never;

type Prev12891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12891 {
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

type ConfigPaths12891 = Paths12891<NestedConfig12891>;

interface HeavyProps12891 {
  config: DeepPartial12891<NestedConfig12891>;
  path?: ConfigPaths12891;
}

const HeavyComponent12891 = memo(function HeavyComponent12891({ config }: HeavyProps12891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12891.displayName = 'HeavyComponent12891';
export default HeavyComponent12891;
