'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10556<T> = T extends (infer U)[]
  ? DeepReadonlyArray10556<U>
  : T extends object
  ? DeepReadonlyObject10556<T>
  : T;

interface DeepReadonlyArray10556<T> extends ReadonlyArray<DeepReadonly10556<T>> {}

type DeepReadonlyObject10556<T> = {
  readonly [P in keyof T]: DeepReadonly10556<T[P]>;
};

type UnionToIntersection10556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10556<T> = UnionToIntersection10556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10556<T extends unknown[], V> = [...T, V];

type TuplifyUnion10556<T, L = LastOf10556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10556<TuplifyUnion10556<Exclude<T, L>>, L>;

type DeepPartial10556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10556<T[P]> }
  : T;

type Paths10556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10556<K, Paths10556<T[K], Prev10556[D]>> : never }[keyof T]
  : never;

type Prev10556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10556 {
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

type ConfigPaths10556 = Paths10556<NestedConfig10556>;

interface HeavyProps10556 {
  config: DeepPartial10556<NestedConfig10556>;
  path?: ConfigPaths10556;
}

const HeavyComponent10556 = memo(function HeavyComponent10556({ config }: HeavyProps10556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10556.displayName = 'HeavyComponent10556';
export default HeavyComponent10556;
