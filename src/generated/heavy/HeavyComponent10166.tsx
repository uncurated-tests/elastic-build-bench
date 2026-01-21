'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10166<T> = T extends (infer U)[]
  ? DeepReadonlyArray10166<U>
  : T extends object
  ? DeepReadonlyObject10166<T>
  : T;

interface DeepReadonlyArray10166<T> extends ReadonlyArray<DeepReadonly10166<T>> {}

type DeepReadonlyObject10166<T> = {
  readonly [P in keyof T]: DeepReadonly10166<T[P]>;
};

type UnionToIntersection10166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10166<T> = UnionToIntersection10166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10166<T extends unknown[], V> = [...T, V];

type TuplifyUnion10166<T, L = LastOf10166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10166<TuplifyUnion10166<Exclude<T, L>>, L>;

type DeepPartial10166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10166<T[P]> }
  : T;

type Paths10166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10166<K, Paths10166<T[K], Prev10166[D]>> : never }[keyof T]
  : never;

type Prev10166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10166 {
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

type ConfigPaths10166 = Paths10166<NestedConfig10166>;

interface HeavyProps10166 {
  config: DeepPartial10166<NestedConfig10166>;
  path?: ConfigPaths10166;
}

const HeavyComponent10166 = memo(function HeavyComponent10166({ config }: HeavyProps10166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10166.displayName = 'HeavyComponent10166';
export default HeavyComponent10166;
