'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10598<T> = T extends (infer U)[]
  ? DeepReadonlyArray10598<U>
  : T extends object
  ? DeepReadonlyObject10598<T>
  : T;

interface DeepReadonlyArray10598<T> extends ReadonlyArray<DeepReadonly10598<T>> {}

type DeepReadonlyObject10598<T> = {
  readonly [P in keyof T]: DeepReadonly10598<T[P]>;
};

type UnionToIntersection10598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10598<T> = UnionToIntersection10598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10598<T extends unknown[], V> = [...T, V];

type TuplifyUnion10598<T, L = LastOf10598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10598<TuplifyUnion10598<Exclude<T, L>>, L>;

type DeepPartial10598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10598<T[P]> }
  : T;

type Paths10598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10598<K, Paths10598<T[K], Prev10598[D]>> : never }[keyof T]
  : never;

type Prev10598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10598 {
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

type ConfigPaths10598 = Paths10598<NestedConfig10598>;

interface HeavyProps10598 {
  config: DeepPartial10598<NestedConfig10598>;
  path?: ConfigPaths10598;
}

const HeavyComponent10598 = memo(function HeavyComponent10598({ config }: HeavyProps10598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10598.displayName = 'HeavyComponent10598';
export default HeavyComponent10598;
