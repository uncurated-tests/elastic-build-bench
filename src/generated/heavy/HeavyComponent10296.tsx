'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10296<T> = T extends (infer U)[]
  ? DeepReadonlyArray10296<U>
  : T extends object
  ? DeepReadonlyObject10296<T>
  : T;

interface DeepReadonlyArray10296<T> extends ReadonlyArray<DeepReadonly10296<T>> {}

type DeepReadonlyObject10296<T> = {
  readonly [P in keyof T]: DeepReadonly10296<T[P]>;
};

type UnionToIntersection10296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10296<T> = UnionToIntersection10296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10296<T extends unknown[], V> = [...T, V];

type TuplifyUnion10296<T, L = LastOf10296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10296<TuplifyUnion10296<Exclude<T, L>>, L>;

type DeepPartial10296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10296<T[P]> }
  : T;

type Paths10296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10296<K, Paths10296<T[K], Prev10296[D]>> : never }[keyof T]
  : never;

type Prev10296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10296 {
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

type ConfigPaths10296 = Paths10296<NestedConfig10296>;

interface HeavyProps10296 {
  config: DeepPartial10296<NestedConfig10296>;
  path?: ConfigPaths10296;
}

const HeavyComponent10296 = memo(function HeavyComponent10296({ config }: HeavyProps10296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10296.displayName = 'HeavyComponent10296';
export default HeavyComponent10296;
