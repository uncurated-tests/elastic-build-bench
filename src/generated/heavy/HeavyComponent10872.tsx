'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10872<T> = T extends (infer U)[]
  ? DeepReadonlyArray10872<U>
  : T extends object
  ? DeepReadonlyObject10872<T>
  : T;

interface DeepReadonlyArray10872<T> extends ReadonlyArray<DeepReadonly10872<T>> {}

type DeepReadonlyObject10872<T> = {
  readonly [P in keyof T]: DeepReadonly10872<T[P]>;
};

type UnionToIntersection10872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10872<T> = UnionToIntersection10872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10872<T extends unknown[], V> = [...T, V];

type TuplifyUnion10872<T, L = LastOf10872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10872<TuplifyUnion10872<Exclude<T, L>>, L>;

type DeepPartial10872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10872<T[P]> }
  : T;

type Paths10872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10872<K, Paths10872<T[K], Prev10872[D]>> : never }[keyof T]
  : never;

type Prev10872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10872 {
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

type ConfigPaths10872 = Paths10872<NestedConfig10872>;

interface HeavyProps10872 {
  config: DeepPartial10872<NestedConfig10872>;
  path?: ConfigPaths10872;
}

const HeavyComponent10872 = memo(function HeavyComponent10872({ config }: HeavyProps10872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10872.displayName = 'HeavyComponent10872';
export default HeavyComponent10872;
