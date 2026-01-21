'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10285<T> = T extends (infer U)[]
  ? DeepReadonlyArray10285<U>
  : T extends object
  ? DeepReadonlyObject10285<T>
  : T;

interface DeepReadonlyArray10285<T> extends ReadonlyArray<DeepReadonly10285<T>> {}

type DeepReadonlyObject10285<T> = {
  readonly [P in keyof T]: DeepReadonly10285<T[P]>;
};

type UnionToIntersection10285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10285<T> = UnionToIntersection10285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10285<T extends unknown[], V> = [...T, V];

type TuplifyUnion10285<T, L = LastOf10285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10285<TuplifyUnion10285<Exclude<T, L>>, L>;

type DeepPartial10285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10285<T[P]> }
  : T;

type Paths10285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10285<K, Paths10285<T[K], Prev10285[D]>> : never }[keyof T]
  : never;

type Prev10285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10285 {
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

type ConfigPaths10285 = Paths10285<NestedConfig10285>;

interface HeavyProps10285 {
  config: DeepPartial10285<NestedConfig10285>;
  path?: ConfigPaths10285;
}

const HeavyComponent10285 = memo(function HeavyComponent10285({ config }: HeavyProps10285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10285.displayName = 'HeavyComponent10285';
export default HeavyComponent10285;
