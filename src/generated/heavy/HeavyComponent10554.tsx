'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10554<T> = T extends (infer U)[]
  ? DeepReadonlyArray10554<U>
  : T extends object
  ? DeepReadonlyObject10554<T>
  : T;

interface DeepReadonlyArray10554<T> extends ReadonlyArray<DeepReadonly10554<T>> {}

type DeepReadonlyObject10554<T> = {
  readonly [P in keyof T]: DeepReadonly10554<T[P]>;
};

type UnionToIntersection10554<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10554<T> = UnionToIntersection10554<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10554<T extends unknown[], V> = [...T, V];

type TuplifyUnion10554<T, L = LastOf10554<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10554<TuplifyUnion10554<Exclude<T, L>>, L>;

type DeepPartial10554<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10554<T[P]> }
  : T;

type Paths10554<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10554<K, Paths10554<T[K], Prev10554[D]>> : never }[keyof T]
  : never;

type Prev10554 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10554<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10554 {
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

type ConfigPaths10554 = Paths10554<NestedConfig10554>;

interface HeavyProps10554 {
  config: DeepPartial10554<NestedConfig10554>;
  path?: ConfigPaths10554;
}

const HeavyComponent10554 = memo(function HeavyComponent10554({ config }: HeavyProps10554) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10554) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10554 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10554: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10554.displayName = 'HeavyComponent10554';
export default HeavyComponent10554;
