'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10096<T> = T extends (infer U)[]
  ? DeepReadonlyArray10096<U>
  : T extends object
  ? DeepReadonlyObject10096<T>
  : T;

interface DeepReadonlyArray10096<T> extends ReadonlyArray<DeepReadonly10096<T>> {}

type DeepReadonlyObject10096<T> = {
  readonly [P in keyof T]: DeepReadonly10096<T[P]>;
};

type UnionToIntersection10096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10096<T> = UnionToIntersection10096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10096<T extends unknown[], V> = [...T, V];

type TuplifyUnion10096<T, L = LastOf10096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10096<TuplifyUnion10096<Exclude<T, L>>, L>;

type DeepPartial10096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10096<T[P]> }
  : T;

type Paths10096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10096<K, Paths10096<T[K], Prev10096[D]>> : never }[keyof T]
  : never;

type Prev10096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10096 {
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

type ConfigPaths10096 = Paths10096<NestedConfig10096>;

interface HeavyProps10096 {
  config: DeepPartial10096<NestedConfig10096>;
  path?: ConfigPaths10096;
}

const HeavyComponent10096 = memo(function HeavyComponent10096({ config }: HeavyProps10096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10096.displayName = 'HeavyComponent10096';
export default HeavyComponent10096;
