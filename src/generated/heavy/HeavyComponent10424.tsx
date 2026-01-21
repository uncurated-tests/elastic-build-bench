'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10424<T> = T extends (infer U)[]
  ? DeepReadonlyArray10424<U>
  : T extends object
  ? DeepReadonlyObject10424<T>
  : T;

interface DeepReadonlyArray10424<T> extends ReadonlyArray<DeepReadonly10424<T>> {}

type DeepReadonlyObject10424<T> = {
  readonly [P in keyof T]: DeepReadonly10424<T[P]>;
};

type UnionToIntersection10424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10424<T> = UnionToIntersection10424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10424<T extends unknown[], V> = [...T, V];

type TuplifyUnion10424<T, L = LastOf10424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10424<TuplifyUnion10424<Exclude<T, L>>, L>;

type DeepPartial10424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10424<T[P]> }
  : T;

type Paths10424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10424<K, Paths10424<T[K], Prev10424[D]>> : never }[keyof T]
  : never;

type Prev10424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10424 {
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

type ConfigPaths10424 = Paths10424<NestedConfig10424>;

interface HeavyProps10424 {
  config: DeepPartial10424<NestedConfig10424>;
  path?: ConfigPaths10424;
}

const HeavyComponent10424 = memo(function HeavyComponent10424({ config }: HeavyProps10424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10424.displayName = 'HeavyComponent10424';
export default HeavyComponent10424;
