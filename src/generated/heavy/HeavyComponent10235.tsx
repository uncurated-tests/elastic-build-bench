'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10235<T> = T extends (infer U)[]
  ? DeepReadonlyArray10235<U>
  : T extends object
  ? DeepReadonlyObject10235<T>
  : T;

interface DeepReadonlyArray10235<T> extends ReadonlyArray<DeepReadonly10235<T>> {}

type DeepReadonlyObject10235<T> = {
  readonly [P in keyof T]: DeepReadonly10235<T[P]>;
};

type UnionToIntersection10235<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10235<T> = UnionToIntersection10235<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10235<T extends unknown[], V> = [...T, V];

type TuplifyUnion10235<T, L = LastOf10235<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10235<TuplifyUnion10235<Exclude<T, L>>, L>;

type DeepPartial10235<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10235<T[P]> }
  : T;

type Paths10235<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10235<K, Paths10235<T[K], Prev10235[D]>> : never }[keyof T]
  : never;

type Prev10235 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10235<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10235 {
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

type ConfigPaths10235 = Paths10235<NestedConfig10235>;

interface HeavyProps10235 {
  config: DeepPartial10235<NestedConfig10235>;
  path?: ConfigPaths10235;
}

const HeavyComponent10235 = memo(function HeavyComponent10235({ config }: HeavyProps10235) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10235) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10235 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10235: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10235.displayName = 'HeavyComponent10235';
export default HeavyComponent10235;
