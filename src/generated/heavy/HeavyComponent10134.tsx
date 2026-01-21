'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10134<T> = T extends (infer U)[]
  ? DeepReadonlyArray10134<U>
  : T extends object
  ? DeepReadonlyObject10134<T>
  : T;

interface DeepReadonlyArray10134<T> extends ReadonlyArray<DeepReadonly10134<T>> {}

type DeepReadonlyObject10134<T> = {
  readonly [P in keyof T]: DeepReadonly10134<T[P]>;
};

type UnionToIntersection10134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10134<T> = UnionToIntersection10134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10134<T extends unknown[], V> = [...T, V];

type TuplifyUnion10134<T, L = LastOf10134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10134<TuplifyUnion10134<Exclude<T, L>>, L>;

type DeepPartial10134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10134<T[P]> }
  : T;

type Paths10134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10134<K, Paths10134<T[K], Prev10134[D]>> : never }[keyof T]
  : never;

type Prev10134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10134 {
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

type ConfigPaths10134 = Paths10134<NestedConfig10134>;

interface HeavyProps10134 {
  config: DeepPartial10134<NestedConfig10134>;
  path?: ConfigPaths10134;
}

const HeavyComponent10134 = memo(function HeavyComponent10134({ config }: HeavyProps10134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10134.displayName = 'HeavyComponent10134';
export default HeavyComponent10134;
