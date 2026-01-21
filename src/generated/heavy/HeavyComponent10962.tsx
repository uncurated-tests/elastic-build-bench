'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10962<T> = T extends (infer U)[]
  ? DeepReadonlyArray10962<U>
  : T extends object
  ? DeepReadonlyObject10962<T>
  : T;

interface DeepReadonlyArray10962<T> extends ReadonlyArray<DeepReadonly10962<T>> {}

type DeepReadonlyObject10962<T> = {
  readonly [P in keyof T]: DeepReadonly10962<T[P]>;
};

type UnionToIntersection10962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10962<T> = UnionToIntersection10962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10962<T extends unknown[], V> = [...T, V];

type TuplifyUnion10962<T, L = LastOf10962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10962<TuplifyUnion10962<Exclude<T, L>>, L>;

type DeepPartial10962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10962<T[P]> }
  : T;

type Paths10962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10962<K, Paths10962<T[K], Prev10962[D]>> : never }[keyof T]
  : never;

type Prev10962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10962 {
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

type ConfigPaths10962 = Paths10962<NestedConfig10962>;

interface HeavyProps10962 {
  config: DeepPartial10962<NestedConfig10962>;
  path?: ConfigPaths10962;
}

const HeavyComponent10962 = memo(function HeavyComponent10962({ config }: HeavyProps10962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10962.displayName = 'HeavyComponent10962';
export default HeavyComponent10962;
