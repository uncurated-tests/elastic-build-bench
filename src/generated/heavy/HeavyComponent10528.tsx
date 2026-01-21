'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10528<T> = T extends (infer U)[]
  ? DeepReadonlyArray10528<U>
  : T extends object
  ? DeepReadonlyObject10528<T>
  : T;

interface DeepReadonlyArray10528<T> extends ReadonlyArray<DeepReadonly10528<T>> {}

type DeepReadonlyObject10528<T> = {
  readonly [P in keyof T]: DeepReadonly10528<T[P]>;
};

type UnionToIntersection10528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10528<T> = UnionToIntersection10528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10528<T extends unknown[], V> = [...T, V];

type TuplifyUnion10528<T, L = LastOf10528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10528<TuplifyUnion10528<Exclude<T, L>>, L>;

type DeepPartial10528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10528<T[P]> }
  : T;

type Paths10528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10528<K, Paths10528<T[K], Prev10528[D]>> : never }[keyof T]
  : never;

type Prev10528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10528 {
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

type ConfigPaths10528 = Paths10528<NestedConfig10528>;

interface HeavyProps10528 {
  config: DeepPartial10528<NestedConfig10528>;
  path?: ConfigPaths10528;
}

const HeavyComponent10528 = memo(function HeavyComponent10528({ config }: HeavyProps10528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10528.displayName = 'HeavyComponent10528';
export default HeavyComponent10528;
