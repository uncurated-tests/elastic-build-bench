'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10351<T> = T extends (infer U)[]
  ? DeepReadonlyArray10351<U>
  : T extends object
  ? DeepReadonlyObject10351<T>
  : T;

interface DeepReadonlyArray10351<T> extends ReadonlyArray<DeepReadonly10351<T>> {}

type DeepReadonlyObject10351<T> = {
  readonly [P in keyof T]: DeepReadonly10351<T[P]>;
};

type UnionToIntersection10351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10351<T> = UnionToIntersection10351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10351<T extends unknown[], V> = [...T, V];

type TuplifyUnion10351<T, L = LastOf10351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10351<TuplifyUnion10351<Exclude<T, L>>, L>;

type DeepPartial10351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10351<T[P]> }
  : T;

type Paths10351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10351<K, Paths10351<T[K], Prev10351[D]>> : never }[keyof T]
  : never;

type Prev10351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10351 {
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

type ConfigPaths10351 = Paths10351<NestedConfig10351>;

interface HeavyProps10351 {
  config: DeepPartial10351<NestedConfig10351>;
  path?: ConfigPaths10351;
}

const HeavyComponent10351 = memo(function HeavyComponent10351({ config }: HeavyProps10351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10351.displayName = 'HeavyComponent10351';
export default HeavyComponent10351;
