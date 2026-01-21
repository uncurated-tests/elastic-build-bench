'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10416<T> = T extends (infer U)[]
  ? DeepReadonlyArray10416<U>
  : T extends object
  ? DeepReadonlyObject10416<T>
  : T;

interface DeepReadonlyArray10416<T> extends ReadonlyArray<DeepReadonly10416<T>> {}

type DeepReadonlyObject10416<T> = {
  readonly [P in keyof T]: DeepReadonly10416<T[P]>;
};

type UnionToIntersection10416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10416<T> = UnionToIntersection10416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10416<T extends unknown[], V> = [...T, V];

type TuplifyUnion10416<T, L = LastOf10416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10416<TuplifyUnion10416<Exclude<T, L>>, L>;

type DeepPartial10416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10416<T[P]> }
  : T;

type Paths10416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10416<K, Paths10416<T[K], Prev10416[D]>> : never }[keyof T]
  : never;

type Prev10416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10416 {
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

type ConfigPaths10416 = Paths10416<NestedConfig10416>;

interface HeavyProps10416 {
  config: DeepPartial10416<NestedConfig10416>;
  path?: ConfigPaths10416;
}

const HeavyComponent10416 = memo(function HeavyComponent10416({ config }: HeavyProps10416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10416.displayName = 'HeavyComponent10416';
export default HeavyComponent10416;
