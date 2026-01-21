'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10856<T> = T extends (infer U)[]
  ? DeepReadonlyArray10856<U>
  : T extends object
  ? DeepReadonlyObject10856<T>
  : T;

interface DeepReadonlyArray10856<T> extends ReadonlyArray<DeepReadonly10856<T>> {}

type DeepReadonlyObject10856<T> = {
  readonly [P in keyof T]: DeepReadonly10856<T[P]>;
};

type UnionToIntersection10856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10856<T> = UnionToIntersection10856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10856<T extends unknown[], V> = [...T, V];

type TuplifyUnion10856<T, L = LastOf10856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10856<TuplifyUnion10856<Exclude<T, L>>, L>;

type DeepPartial10856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10856<T[P]> }
  : T;

type Paths10856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10856<K, Paths10856<T[K], Prev10856[D]>> : never }[keyof T]
  : never;

type Prev10856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10856 {
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

type ConfigPaths10856 = Paths10856<NestedConfig10856>;

interface HeavyProps10856 {
  config: DeepPartial10856<NestedConfig10856>;
  path?: ConfigPaths10856;
}

const HeavyComponent10856 = memo(function HeavyComponent10856({ config }: HeavyProps10856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10856.displayName = 'HeavyComponent10856';
export default HeavyComponent10856;
