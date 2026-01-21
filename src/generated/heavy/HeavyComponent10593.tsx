'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10593<T> = T extends (infer U)[]
  ? DeepReadonlyArray10593<U>
  : T extends object
  ? DeepReadonlyObject10593<T>
  : T;

interface DeepReadonlyArray10593<T> extends ReadonlyArray<DeepReadonly10593<T>> {}

type DeepReadonlyObject10593<T> = {
  readonly [P in keyof T]: DeepReadonly10593<T[P]>;
};

type UnionToIntersection10593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10593<T> = UnionToIntersection10593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10593<T extends unknown[], V> = [...T, V];

type TuplifyUnion10593<T, L = LastOf10593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10593<TuplifyUnion10593<Exclude<T, L>>, L>;

type DeepPartial10593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10593<T[P]> }
  : T;

type Paths10593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10593<K, Paths10593<T[K], Prev10593[D]>> : never }[keyof T]
  : never;

type Prev10593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10593 {
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

type ConfigPaths10593 = Paths10593<NestedConfig10593>;

interface HeavyProps10593 {
  config: DeepPartial10593<NestedConfig10593>;
  path?: ConfigPaths10593;
}

const HeavyComponent10593 = memo(function HeavyComponent10593({ config }: HeavyProps10593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10593.displayName = 'HeavyComponent10593';
export default HeavyComponent10593;
