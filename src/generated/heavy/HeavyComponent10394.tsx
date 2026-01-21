'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10394<T> = T extends (infer U)[]
  ? DeepReadonlyArray10394<U>
  : T extends object
  ? DeepReadonlyObject10394<T>
  : T;

interface DeepReadonlyArray10394<T> extends ReadonlyArray<DeepReadonly10394<T>> {}

type DeepReadonlyObject10394<T> = {
  readonly [P in keyof T]: DeepReadonly10394<T[P]>;
};

type UnionToIntersection10394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10394<T> = UnionToIntersection10394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10394<T extends unknown[], V> = [...T, V];

type TuplifyUnion10394<T, L = LastOf10394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10394<TuplifyUnion10394<Exclude<T, L>>, L>;

type DeepPartial10394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10394<T[P]> }
  : T;

type Paths10394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10394<K, Paths10394<T[K], Prev10394[D]>> : never }[keyof T]
  : never;

type Prev10394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10394 {
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

type ConfigPaths10394 = Paths10394<NestedConfig10394>;

interface HeavyProps10394 {
  config: DeepPartial10394<NestedConfig10394>;
  path?: ConfigPaths10394;
}

const HeavyComponent10394 = memo(function HeavyComponent10394({ config }: HeavyProps10394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10394.displayName = 'HeavyComponent10394';
export default HeavyComponent10394;
