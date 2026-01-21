'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10281<T> = T extends (infer U)[]
  ? DeepReadonlyArray10281<U>
  : T extends object
  ? DeepReadonlyObject10281<T>
  : T;

interface DeepReadonlyArray10281<T> extends ReadonlyArray<DeepReadonly10281<T>> {}

type DeepReadonlyObject10281<T> = {
  readonly [P in keyof T]: DeepReadonly10281<T[P]>;
};

type UnionToIntersection10281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10281<T> = UnionToIntersection10281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10281<T extends unknown[], V> = [...T, V];

type TuplifyUnion10281<T, L = LastOf10281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10281<TuplifyUnion10281<Exclude<T, L>>, L>;

type DeepPartial10281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10281<T[P]> }
  : T;

type Paths10281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10281<K, Paths10281<T[K], Prev10281[D]>> : never }[keyof T]
  : never;

type Prev10281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10281 {
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

type ConfigPaths10281 = Paths10281<NestedConfig10281>;

interface HeavyProps10281 {
  config: DeepPartial10281<NestedConfig10281>;
  path?: ConfigPaths10281;
}

const HeavyComponent10281 = memo(function HeavyComponent10281({ config }: HeavyProps10281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10281.displayName = 'HeavyComponent10281';
export default HeavyComponent10281;
