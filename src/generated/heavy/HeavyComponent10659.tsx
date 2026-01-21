'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10659<T> = T extends (infer U)[]
  ? DeepReadonlyArray10659<U>
  : T extends object
  ? DeepReadonlyObject10659<T>
  : T;

interface DeepReadonlyArray10659<T> extends ReadonlyArray<DeepReadonly10659<T>> {}

type DeepReadonlyObject10659<T> = {
  readonly [P in keyof T]: DeepReadonly10659<T[P]>;
};

type UnionToIntersection10659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10659<T> = UnionToIntersection10659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10659<T extends unknown[], V> = [...T, V];

type TuplifyUnion10659<T, L = LastOf10659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10659<TuplifyUnion10659<Exclude<T, L>>, L>;

type DeepPartial10659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10659<T[P]> }
  : T;

type Paths10659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10659<K, Paths10659<T[K], Prev10659[D]>> : never }[keyof T]
  : never;

type Prev10659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10659 {
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

type ConfigPaths10659 = Paths10659<NestedConfig10659>;

interface HeavyProps10659 {
  config: DeepPartial10659<NestedConfig10659>;
  path?: ConfigPaths10659;
}

const HeavyComponent10659 = memo(function HeavyComponent10659({ config }: HeavyProps10659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10659.displayName = 'HeavyComponent10659';
export default HeavyComponent10659;
