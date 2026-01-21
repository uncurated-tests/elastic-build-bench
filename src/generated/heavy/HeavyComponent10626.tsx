'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10626<T> = T extends (infer U)[]
  ? DeepReadonlyArray10626<U>
  : T extends object
  ? DeepReadonlyObject10626<T>
  : T;

interface DeepReadonlyArray10626<T> extends ReadonlyArray<DeepReadonly10626<T>> {}

type DeepReadonlyObject10626<T> = {
  readonly [P in keyof T]: DeepReadonly10626<T[P]>;
};

type UnionToIntersection10626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10626<T> = UnionToIntersection10626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10626<T extends unknown[], V> = [...T, V];

type TuplifyUnion10626<T, L = LastOf10626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10626<TuplifyUnion10626<Exclude<T, L>>, L>;

type DeepPartial10626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10626<T[P]> }
  : T;

type Paths10626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10626<K, Paths10626<T[K], Prev10626[D]>> : never }[keyof T]
  : never;

type Prev10626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10626 {
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

type ConfigPaths10626 = Paths10626<NestedConfig10626>;

interface HeavyProps10626 {
  config: DeepPartial10626<NestedConfig10626>;
  path?: ConfigPaths10626;
}

const HeavyComponent10626 = memo(function HeavyComponent10626({ config }: HeavyProps10626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10626.displayName = 'HeavyComponent10626';
export default HeavyComponent10626;
