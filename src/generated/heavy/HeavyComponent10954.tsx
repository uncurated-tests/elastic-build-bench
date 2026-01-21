'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10954<T> = T extends (infer U)[]
  ? DeepReadonlyArray10954<U>
  : T extends object
  ? DeepReadonlyObject10954<T>
  : T;

interface DeepReadonlyArray10954<T> extends ReadonlyArray<DeepReadonly10954<T>> {}

type DeepReadonlyObject10954<T> = {
  readonly [P in keyof T]: DeepReadonly10954<T[P]>;
};

type UnionToIntersection10954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10954<T> = UnionToIntersection10954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10954<T extends unknown[], V> = [...T, V];

type TuplifyUnion10954<T, L = LastOf10954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10954<TuplifyUnion10954<Exclude<T, L>>, L>;

type DeepPartial10954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10954<T[P]> }
  : T;

type Paths10954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10954<K, Paths10954<T[K], Prev10954[D]>> : never }[keyof T]
  : never;

type Prev10954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10954 {
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

type ConfigPaths10954 = Paths10954<NestedConfig10954>;

interface HeavyProps10954 {
  config: DeepPartial10954<NestedConfig10954>;
  path?: ConfigPaths10954;
}

const HeavyComponent10954 = memo(function HeavyComponent10954({ config }: HeavyProps10954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10954.displayName = 'HeavyComponent10954';
export default HeavyComponent10954;
