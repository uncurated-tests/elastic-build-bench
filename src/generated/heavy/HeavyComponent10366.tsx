'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10366<T> = T extends (infer U)[]
  ? DeepReadonlyArray10366<U>
  : T extends object
  ? DeepReadonlyObject10366<T>
  : T;

interface DeepReadonlyArray10366<T> extends ReadonlyArray<DeepReadonly10366<T>> {}

type DeepReadonlyObject10366<T> = {
  readonly [P in keyof T]: DeepReadonly10366<T[P]>;
};

type UnionToIntersection10366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10366<T> = UnionToIntersection10366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10366<T extends unknown[], V> = [...T, V];

type TuplifyUnion10366<T, L = LastOf10366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10366<TuplifyUnion10366<Exclude<T, L>>, L>;

type DeepPartial10366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10366<T[P]> }
  : T;

type Paths10366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10366<K, Paths10366<T[K], Prev10366[D]>> : never }[keyof T]
  : never;

type Prev10366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10366 {
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

type ConfigPaths10366 = Paths10366<NestedConfig10366>;

interface HeavyProps10366 {
  config: DeepPartial10366<NestedConfig10366>;
  path?: ConfigPaths10366;
}

const HeavyComponent10366 = memo(function HeavyComponent10366({ config }: HeavyProps10366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10366.displayName = 'HeavyComponent10366';
export default HeavyComponent10366;
