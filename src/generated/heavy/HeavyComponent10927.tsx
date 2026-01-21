'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10927<T> = T extends (infer U)[]
  ? DeepReadonlyArray10927<U>
  : T extends object
  ? DeepReadonlyObject10927<T>
  : T;

interface DeepReadonlyArray10927<T> extends ReadonlyArray<DeepReadonly10927<T>> {}

type DeepReadonlyObject10927<T> = {
  readonly [P in keyof T]: DeepReadonly10927<T[P]>;
};

type UnionToIntersection10927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10927<T> = UnionToIntersection10927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10927<T extends unknown[], V> = [...T, V];

type TuplifyUnion10927<T, L = LastOf10927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10927<TuplifyUnion10927<Exclude<T, L>>, L>;

type DeepPartial10927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10927<T[P]> }
  : T;

type Paths10927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10927<K, Paths10927<T[K], Prev10927[D]>> : never }[keyof T]
  : never;

type Prev10927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10927 {
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

type ConfigPaths10927 = Paths10927<NestedConfig10927>;

interface HeavyProps10927 {
  config: DeepPartial10927<NestedConfig10927>;
  path?: ConfigPaths10927;
}

const HeavyComponent10927 = memo(function HeavyComponent10927({ config }: HeavyProps10927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10927.displayName = 'HeavyComponent10927';
export default HeavyComponent10927;
