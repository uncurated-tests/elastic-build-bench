'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10300<T> = T extends (infer U)[]
  ? DeepReadonlyArray10300<U>
  : T extends object
  ? DeepReadonlyObject10300<T>
  : T;

interface DeepReadonlyArray10300<T> extends ReadonlyArray<DeepReadonly10300<T>> {}

type DeepReadonlyObject10300<T> = {
  readonly [P in keyof T]: DeepReadonly10300<T[P]>;
};

type UnionToIntersection10300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10300<T> = UnionToIntersection10300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10300<T extends unknown[], V> = [...T, V];

type TuplifyUnion10300<T, L = LastOf10300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10300<TuplifyUnion10300<Exclude<T, L>>, L>;

type DeepPartial10300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10300<T[P]> }
  : T;

type Paths10300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10300<K, Paths10300<T[K], Prev10300[D]>> : never }[keyof T]
  : never;

type Prev10300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10300 {
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

type ConfigPaths10300 = Paths10300<NestedConfig10300>;

interface HeavyProps10300 {
  config: DeepPartial10300<NestedConfig10300>;
  path?: ConfigPaths10300;
}

const HeavyComponent10300 = memo(function HeavyComponent10300({ config }: HeavyProps10300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10300.displayName = 'HeavyComponent10300';
export default HeavyComponent10300;
