'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10100<T> = T extends (infer U)[]
  ? DeepReadonlyArray10100<U>
  : T extends object
  ? DeepReadonlyObject10100<T>
  : T;

interface DeepReadonlyArray10100<T> extends ReadonlyArray<DeepReadonly10100<T>> {}

type DeepReadonlyObject10100<T> = {
  readonly [P in keyof T]: DeepReadonly10100<T[P]>;
};

type UnionToIntersection10100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10100<T> = UnionToIntersection10100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10100<T extends unknown[], V> = [...T, V];

type TuplifyUnion10100<T, L = LastOf10100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10100<TuplifyUnion10100<Exclude<T, L>>, L>;

type DeepPartial10100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10100<T[P]> }
  : T;

type Paths10100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10100<K, Paths10100<T[K], Prev10100[D]>> : never }[keyof T]
  : never;

type Prev10100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10100 {
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

type ConfigPaths10100 = Paths10100<NestedConfig10100>;

interface HeavyProps10100 {
  config: DeepPartial10100<NestedConfig10100>;
  path?: ConfigPaths10100;
}

const HeavyComponent10100 = memo(function HeavyComponent10100({ config }: HeavyProps10100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10100.displayName = 'HeavyComponent10100';
export default HeavyComponent10100;
