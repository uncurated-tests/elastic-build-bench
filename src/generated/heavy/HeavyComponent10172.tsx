'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10172<T> = T extends (infer U)[]
  ? DeepReadonlyArray10172<U>
  : T extends object
  ? DeepReadonlyObject10172<T>
  : T;

interface DeepReadonlyArray10172<T> extends ReadonlyArray<DeepReadonly10172<T>> {}

type DeepReadonlyObject10172<T> = {
  readonly [P in keyof T]: DeepReadonly10172<T[P]>;
};

type UnionToIntersection10172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10172<T> = UnionToIntersection10172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10172<T extends unknown[], V> = [...T, V];

type TuplifyUnion10172<T, L = LastOf10172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10172<TuplifyUnion10172<Exclude<T, L>>, L>;

type DeepPartial10172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10172<T[P]> }
  : T;

type Paths10172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10172<K, Paths10172<T[K], Prev10172[D]>> : never }[keyof T]
  : never;

type Prev10172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10172 {
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

type ConfigPaths10172 = Paths10172<NestedConfig10172>;

interface HeavyProps10172 {
  config: DeepPartial10172<NestedConfig10172>;
  path?: ConfigPaths10172;
}

const HeavyComponent10172 = memo(function HeavyComponent10172({ config }: HeavyProps10172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10172.displayName = 'HeavyComponent10172';
export default HeavyComponent10172;
