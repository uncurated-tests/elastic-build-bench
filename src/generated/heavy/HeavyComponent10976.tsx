'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10976<T> = T extends (infer U)[]
  ? DeepReadonlyArray10976<U>
  : T extends object
  ? DeepReadonlyObject10976<T>
  : T;

interface DeepReadonlyArray10976<T> extends ReadonlyArray<DeepReadonly10976<T>> {}

type DeepReadonlyObject10976<T> = {
  readonly [P in keyof T]: DeepReadonly10976<T[P]>;
};

type UnionToIntersection10976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10976<T> = UnionToIntersection10976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10976<T extends unknown[], V> = [...T, V];

type TuplifyUnion10976<T, L = LastOf10976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10976<TuplifyUnion10976<Exclude<T, L>>, L>;

type DeepPartial10976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10976<T[P]> }
  : T;

type Paths10976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10976<K, Paths10976<T[K], Prev10976[D]>> : never }[keyof T]
  : never;

type Prev10976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10976 {
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

type ConfigPaths10976 = Paths10976<NestedConfig10976>;

interface HeavyProps10976 {
  config: DeepPartial10976<NestedConfig10976>;
  path?: ConfigPaths10976;
}

const HeavyComponent10976 = memo(function HeavyComponent10976({ config }: HeavyProps10976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10976.displayName = 'HeavyComponent10976';
export default HeavyComponent10976;
