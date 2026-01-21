'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10826<T> = T extends (infer U)[]
  ? DeepReadonlyArray10826<U>
  : T extends object
  ? DeepReadonlyObject10826<T>
  : T;

interface DeepReadonlyArray10826<T> extends ReadonlyArray<DeepReadonly10826<T>> {}

type DeepReadonlyObject10826<T> = {
  readonly [P in keyof T]: DeepReadonly10826<T[P]>;
};

type UnionToIntersection10826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10826<T> = UnionToIntersection10826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10826<T extends unknown[], V> = [...T, V];

type TuplifyUnion10826<T, L = LastOf10826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10826<TuplifyUnion10826<Exclude<T, L>>, L>;

type DeepPartial10826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10826<T[P]> }
  : T;

type Paths10826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10826<K, Paths10826<T[K], Prev10826[D]>> : never }[keyof T]
  : never;

type Prev10826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10826 {
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

type ConfigPaths10826 = Paths10826<NestedConfig10826>;

interface HeavyProps10826 {
  config: DeepPartial10826<NestedConfig10826>;
  path?: ConfigPaths10826;
}

const HeavyComponent10826 = memo(function HeavyComponent10826({ config }: HeavyProps10826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10826.displayName = 'HeavyComponent10826';
export default HeavyComponent10826;
