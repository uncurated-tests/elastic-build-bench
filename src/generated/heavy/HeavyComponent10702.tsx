'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10702<T> = T extends (infer U)[]
  ? DeepReadonlyArray10702<U>
  : T extends object
  ? DeepReadonlyObject10702<T>
  : T;

interface DeepReadonlyArray10702<T> extends ReadonlyArray<DeepReadonly10702<T>> {}

type DeepReadonlyObject10702<T> = {
  readonly [P in keyof T]: DeepReadonly10702<T[P]>;
};

type UnionToIntersection10702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10702<T> = UnionToIntersection10702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10702<T extends unknown[], V> = [...T, V];

type TuplifyUnion10702<T, L = LastOf10702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10702<TuplifyUnion10702<Exclude<T, L>>, L>;

type DeepPartial10702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10702<T[P]> }
  : T;

type Paths10702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10702<K, Paths10702<T[K], Prev10702[D]>> : never }[keyof T]
  : never;

type Prev10702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10702 {
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

type ConfigPaths10702 = Paths10702<NestedConfig10702>;

interface HeavyProps10702 {
  config: DeepPartial10702<NestedConfig10702>;
  path?: ConfigPaths10702;
}

const HeavyComponent10702 = memo(function HeavyComponent10702({ config }: HeavyProps10702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10702.displayName = 'HeavyComponent10702';
export default HeavyComponent10702;
