'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10155<T> = T extends (infer U)[]
  ? DeepReadonlyArray10155<U>
  : T extends object
  ? DeepReadonlyObject10155<T>
  : T;

interface DeepReadonlyArray10155<T> extends ReadonlyArray<DeepReadonly10155<T>> {}

type DeepReadonlyObject10155<T> = {
  readonly [P in keyof T]: DeepReadonly10155<T[P]>;
};

type UnionToIntersection10155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10155<T> = UnionToIntersection10155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10155<T extends unknown[], V> = [...T, V];

type TuplifyUnion10155<T, L = LastOf10155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10155<TuplifyUnion10155<Exclude<T, L>>, L>;

type DeepPartial10155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10155<T[P]> }
  : T;

type Paths10155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10155<K, Paths10155<T[K], Prev10155[D]>> : never }[keyof T]
  : never;

type Prev10155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10155 {
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

type ConfigPaths10155 = Paths10155<NestedConfig10155>;

interface HeavyProps10155 {
  config: DeepPartial10155<NestedConfig10155>;
  path?: ConfigPaths10155;
}

const HeavyComponent10155 = memo(function HeavyComponent10155({ config }: HeavyProps10155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10155.displayName = 'HeavyComponent10155';
export default HeavyComponent10155;
