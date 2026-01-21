'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10098<T> = T extends (infer U)[]
  ? DeepReadonlyArray10098<U>
  : T extends object
  ? DeepReadonlyObject10098<T>
  : T;

interface DeepReadonlyArray10098<T> extends ReadonlyArray<DeepReadonly10098<T>> {}

type DeepReadonlyObject10098<T> = {
  readonly [P in keyof T]: DeepReadonly10098<T[P]>;
};

type UnionToIntersection10098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10098<T> = UnionToIntersection10098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10098<T extends unknown[], V> = [...T, V];

type TuplifyUnion10098<T, L = LastOf10098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10098<TuplifyUnion10098<Exclude<T, L>>, L>;

type DeepPartial10098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10098<T[P]> }
  : T;

type Paths10098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10098<K, Paths10098<T[K], Prev10098[D]>> : never }[keyof T]
  : never;

type Prev10098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10098 {
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

type ConfigPaths10098 = Paths10098<NestedConfig10098>;

interface HeavyProps10098 {
  config: DeepPartial10098<NestedConfig10098>;
  path?: ConfigPaths10098;
}

const HeavyComponent10098 = memo(function HeavyComponent10098({ config }: HeavyProps10098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10098.displayName = 'HeavyComponent10098';
export default HeavyComponent10098;
