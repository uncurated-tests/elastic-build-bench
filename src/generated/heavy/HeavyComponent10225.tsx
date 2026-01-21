'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10225<T> = T extends (infer U)[]
  ? DeepReadonlyArray10225<U>
  : T extends object
  ? DeepReadonlyObject10225<T>
  : T;

interface DeepReadonlyArray10225<T> extends ReadonlyArray<DeepReadonly10225<T>> {}

type DeepReadonlyObject10225<T> = {
  readonly [P in keyof T]: DeepReadonly10225<T[P]>;
};

type UnionToIntersection10225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10225<T> = UnionToIntersection10225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10225<T extends unknown[], V> = [...T, V];

type TuplifyUnion10225<T, L = LastOf10225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10225<TuplifyUnion10225<Exclude<T, L>>, L>;

type DeepPartial10225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10225<T[P]> }
  : T;

type Paths10225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10225<K, Paths10225<T[K], Prev10225[D]>> : never }[keyof T]
  : never;

type Prev10225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10225 {
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

type ConfigPaths10225 = Paths10225<NestedConfig10225>;

interface HeavyProps10225 {
  config: DeepPartial10225<NestedConfig10225>;
  path?: ConfigPaths10225;
}

const HeavyComponent10225 = memo(function HeavyComponent10225({ config }: HeavyProps10225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10225.displayName = 'HeavyComponent10225';
export default HeavyComponent10225;
