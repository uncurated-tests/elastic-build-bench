'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10930<T> = T extends (infer U)[]
  ? DeepReadonlyArray10930<U>
  : T extends object
  ? DeepReadonlyObject10930<T>
  : T;

interface DeepReadonlyArray10930<T> extends ReadonlyArray<DeepReadonly10930<T>> {}

type DeepReadonlyObject10930<T> = {
  readonly [P in keyof T]: DeepReadonly10930<T[P]>;
};

type UnionToIntersection10930<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10930<T> = UnionToIntersection10930<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10930<T extends unknown[], V> = [...T, V];

type TuplifyUnion10930<T, L = LastOf10930<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10930<TuplifyUnion10930<Exclude<T, L>>, L>;

type DeepPartial10930<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10930<T[P]> }
  : T;

type Paths10930<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10930<K, Paths10930<T[K], Prev10930[D]>> : never }[keyof T]
  : never;

type Prev10930 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10930<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10930 {
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

type ConfigPaths10930 = Paths10930<NestedConfig10930>;

interface HeavyProps10930 {
  config: DeepPartial10930<NestedConfig10930>;
  path?: ConfigPaths10930;
}

const HeavyComponent10930 = memo(function HeavyComponent10930({ config }: HeavyProps10930) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10930) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10930 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10930: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10930.displayName = 'HeavyComponent10930';
export default HeavyComponent10930;
