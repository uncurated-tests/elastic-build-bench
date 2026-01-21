'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10088<T> = T extends (infer U)[]
  ? DeepReadonlyArray10088<U>
  : T extends object
  ? DeepReadonlyObject10088<T>
  : T;

interface DeepReadonlyArray10088<T> extends ReadonlyArray<DeepReadonly10088<T>> {}

type DeepReadonlyObject10088<T> = {
  readonly [P in keyof T]: DeepReadonly10088<T[P]>;
};

type UnionToIntersection10088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10088<T> = UnionToIntersection10088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10088<T extends unknown[], V> = [...T, V];

type TuplifyUnion10088<T, L = LastOf10088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10088<TuplifyUnion10088<Exclude<T, L>>, L>;

type DeepPartial10088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10088<T[P]> }
  : T;

type Paths10088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10088<K, Paths10088<T[K], Prev10088[D]>> : never }[keyof T]
  : never;

type Prev10088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10088 {
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

type ConfigPaths10088 = Paths10088<NestedConfig10088>;

interface HeavyProps10088 {
  config: DeepPartial10088<NestedConfig10088>;
  path?: ConfigPaths10088;
}

const HeavyComponent10088 = memo(function HeavyComponent10088({ config }: HeavyProps10088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10088.displayName = 'HeavyComponent10088';
export default HeavyComponent10088;
