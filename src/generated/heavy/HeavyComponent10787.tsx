'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10787<T> = T extends (infer U)[]
  ? DeepReadonlyArray10787<U>
  : T extends object
  ? DeepReadonlyObject10787<T>
  : T;

interface DeepReadonlyArray10787<T> extends ReadonlyArray<DeepReadonly10787<T>> {}

type DeepReadonlyObject10787<T> = {
  readonly [P in keyof T]: DeepReadonly10787<T[P]>;
};

type UnionToIntersection10787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10787<T> = UnionToIntersection10787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10787<T extends unknown[], V> = [...T, V];

type TuplifyUnion10787<T, L = LastOf10787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10787<TuplifyUnion10787<Exclude<T, L>>, L>;

type DeepPartial10787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10787<T[P]> }
  : T;

type Paths10787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10787<K, Paths10787<T[K], Prev10787[D]>> : never }[keyof T]
  : never;

type Prev10787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10787 {
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

type ConfigPaths10787 = Paths10787<NestedConfig10787>;

interface HeavyProps10787 {
  config: DeepPartial10787<NestedConfig10787>;
  path?: ConfigPaths10787;
}

const HeavyComponent10787 = memo(function HeavyComponent10787({ config }: HeavyProps10787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10787.displayName = 'HeavyComponent10787';
export default HeavyComponent10787;
