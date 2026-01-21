'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10778<T> = T extends (infer U)[]
  ? DeepReadonlyArray10778<U>
  : T extends object
  ? DeepReadonlyObject10778<T>
  : T;

interface DeepReadonlyArray10778<T> extends ReadonlyArray<DeepReadonly10778<T>> {}

type DeepReadonlyObject10778<T> = {
  readonly [P in keyof T]: DeepReadonly10778<T[P]>;
};

type UnionToIntersection10778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10778<T> = UnionToIntersection10778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10778<T extends unknown[], V> = [...T, V];

type TuplifyUnion10778<T, L = LastOf10778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10778<TuplifyUnion10778<Exclude<T, L>>, L>;

type DeepPartial10778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10778<T[P]> }
  : T;

type Paths10778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10778<K, Paths10778<T[K], Prev10778[D]>> : never }[keyof T]
  : never;

type Prev10778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10778 {
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

type ConfigPaths10778 = Paths10778<NestedConfig10778>;

interface HeavyProps10778 {
  config: DeepPartial10778<NestedConfig10778>;
  path?: ConfigPaths10778;
}

const HeavyComponent10778 = memo(function HeavyComponent10778({ config }: HeavyProps10778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10778.displayName = 'HeavyComponent10778';
export default HeavyComponent10778;
