'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10377<T> = T extends (infer U)[]
  ? DeepReadonlyArray10377<U>
  : T extends object
  ? DeepReadonlyObject10377<T>
  : T;

interface DeepReadonlyArray10377<T> extends ReadonlyArray<DeepReadonly10377<T>> {}

type DeepReadonlyObject10377<T> = {
  readonly [P in keyof T]: DeepReadonly10377<T[P]>;
};

type UnionToIntersection10377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10377<T> = UnionToIntersection10377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10377<T extends unknown[], V> = [...T, V];

type TuplifyUnion10377<T, L = LastOf10377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10377<TuplifyUnion10377<Exclude<T, L>>, L>;

type DeepPartial10377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10377<T[P]> }
  : T;

type Paths10377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10377<K, Paths10377<T[K], Prev10377[D]>> : never }[keyof T]
  : never;

type Prev10377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10377 {
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

type ConfigPaths10377 = Paths10377<NestedConfig10377>;

interface HeavyProps10377 {
  config: DeepPartial10377<NestedConfig10377>;
  path?: ConfigPaths10377;
}

const HeavyComponent10377 = memo(function HeavyComponent10377({ config }: HeavyProps10377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10377.displayName = 'HeavyComponent10377';
export default HeavyComponent10377;
