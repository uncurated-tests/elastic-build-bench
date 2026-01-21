'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10473<T> = T extends (infer U)[]
  ? DeepReadonlyArray10473<U>
  : T extends object
  ? DeepReadonlyObject10473<T>
  : T;

interface DeepReadonlyArray10473<T> extends ReadonlyArray<DeepReadonly10473<T>> {}

type DeepReadonlyObject10473<T> = {
  readonly [P in keyof T]: DeepReadonly10473<T[P]>;
};

type UnionToIntersection10473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10473<T> = UnionToIntersection10473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10473<T extends unknown[], V> = [...T, V];

type TuplifyUnion10473<T, L = LastOf10473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10473<TuplifyUnion10473<Exclude<T, L>>, L>;

type DeepPartial10473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10473<T[P]> }
  : T;

type Paths10473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10473<K, Paths10473<T[K], Prev10473[D]>> : never }[keyof T]
  : never;

type Prev10473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10473 {
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

type ConfigPaths10473 = Paths10473<NestedConfig10473>;

interface HeavyProps10473 {
  config: DeepPartial10473<NestedConfig10473>;
  path?: ConfigPaths10473;
}

const HeavyComponent10473 = memo(function HeavyComponent10473({ config }: HeavyProps10473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10473.displayName = 'HeavyComponent10473';
export default HeavyComponent10473;
