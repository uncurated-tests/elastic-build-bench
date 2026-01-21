'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10586<T> = T extends (infer U)[]
  ? DeepReadonlyArray10586<U>
  : T extends object
  ? DeepReadonlyObject10586<T>
  : T;

interface DeepReadonlyArray10586<T> extends ReadonlyArray<DeepReadonly10586<T>> {}

type DeepReadonlyObject10586<T> = {
  readonly [P in keyof T]: DeepReadonly10586<T[P]>;
};

type UnionToIntersection10586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10586<T> = UnionToIntersection10586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10586<T extends unknown[], V> = [...T, V];

type TuplifyUnion10586<T, L = LastOf10586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10586<TuplifyUnion10586<Exclude<T, L>>, L>;

type DeepPartial10586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10586<T[P]> }
  : T;

type Paths10586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10586<K, Paths10586<T[K], Prev10586[D]>> : never }[keyof T]
  : never;

type Prev10586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10586 {
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

type ConfigPaths10586 = Paths10586<NestedConfig10586>;

interface HeavyProps10586 {
  config: DeepPartial10586<NestedConfig10586>;
  path?: ConfigPaths10586;
}

const HeavyComponent10586 = memo(function HeavyComponent10586({ config }: HeavyProps10586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10586.displayName = 'HeavyComponent10586';
export default HeavyComponent10586;
