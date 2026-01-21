'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10413<T> = T extends (infer U)[]
  ? DeepReadonlyArray10413<U>
  : T extends object
  ? DeepReadonlyObject10413<T>
  : T;

interface DeepReadonlyArray10413<T> extends ReadonlyArray<DeepReadonly10413<T>> {}

type DeepReadonlyObject10413<T> = {
  readonly [P in keyof T]: DeepReadonly10413<T[P]>;
};

type UnionToIntersection10413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10413<T> = UnionToIntersection10413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10413<T extends unknown[], V> = [...T, V];

type TuplifyUnion10413<T, L = LastOf10413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10413<TuplifyUnion10413<Exclude<T, L>>, L>;

type DeepPartial10413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10413<T[P]> }
  : T;

type Paths10413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10413<K, Paths10413<T[K], Prev10413[D]>> : never }[keyof T]
  : never;

type Prev10413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10413 {
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

type ConfigPaths10413 = Paths10413<NestedConfig10413>;

interface HeavyProps10413 {
  config: DeepPartial10413<NestedConfig10413>;
  path?: ConfigPaths10413;
}

const HeavyComponent10413 = memo(function HeavyComponent10413({ config }: HeavyProps10413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10413.displayName = 'HeavyComponent10413';
export default HeavyComponent10413;
