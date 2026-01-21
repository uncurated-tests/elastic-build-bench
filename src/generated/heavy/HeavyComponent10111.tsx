'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10111<T> = T extends (infer U)[]
  ? DeepReadonlyArray10111<U>
  : T extends object
  ? DeepReadonlyObject10111<T>
  : T;

interface DeepReadonlyArray10111<T> extends ReadonlyArray<DeepReadonly10111<T>> {}

type DeepReadonlyObject10111<T> = {
  readonly [P in keyof T]: DeepReadonly10111<T[P]>;
};

type UnionToIntersection10111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10111<T> = UnionToIntersection10111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10111<T extends unknown[], V> = [...T, V];

type TuplifyUnion10111<T, L = LastOf10111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10111<TuplifyUnion10111<Exclude<T, L>>, L>;

type DeepPartial10111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10111<T[P]> }
  : T;

type Paths10111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10111<K, Paths10111<T[K], Prev10111[D]>> : never }[keyof T]
  : never;

type Prev10111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10111 {
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

type ConfigPaths10111 = Paths10111<NestedConfig10111>;

interface HeavyProps10111 {
  config: DeepPartial10111<NestedConfig10111>;
  path?: ConfigPaths10111;
}

const HeavyComponent10111 = memo(function HeavyComponent10111({ config }: HeavyProps10111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10111.displayName = 'HeavyComponent10111';
export default HeavyComponent10111;
