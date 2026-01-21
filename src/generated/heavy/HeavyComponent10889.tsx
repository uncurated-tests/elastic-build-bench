'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10889<T> = T extends (infer U)[]
  ? DeepReadonlyArray10889<U>
  : T extends object
  ? DeepReadonlyObject10889<T>
  : T;

interface DeepReadonlyArray10889<T> extends ReadonlyArray<DeepReadonly10889<T>> {}

type DeepReadonlyObject10889<T> = {
  readonly [P in keyof T]: DeepReadonly10889<T[P]>;
};

type UnionToIntersection10889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10889<T> = UnionToIntersection10889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10889<T extends unknown[], V> = [...T, V];

type TuplifyUnion10889<T, L = LastOf10889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10889<TuplifyUnion10889<Exclude<T, L>>, L>;

type DeepPartial10889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10889<T[P]> }
  : T;

type Paths10889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10889<K, Paths10889<T[K], Prev10889[D]>> : never }[keyof T]
  : never;

type Prev10889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10889 {
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

type ConfigPaths10889 = Paths10889<NestedConfig10889>;

interface HeavyProps10889 {
  config: DeepPartial10889<NestedConfig10889>;
  path?: ConfigPaths10889;
}

const HeavyComponent10889 = memo(function HeavyComponent10889({ config }: HeavyProps10889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10889.displayName = 'HeavyComponent10889';
export default HeavyComponent10889;
