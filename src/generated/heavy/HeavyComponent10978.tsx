'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10978<T> = T extends (infer U)[]
  ? DeepReadonlyArray10978<U>
  : T extends object
  ? DeepReadonlyObject10978<T>
  : T;

interface DeepReadonlyArray10978<T> extends ReadonlyArray<DeepReadonly10978<T>> {}

type DeepReadonlyObject10978<T> = {
  readonly [P in keyof T]: DeepReadonly10978<T[P]>;
};

type UnionToIntersection10978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10978<T> = UnionToIntersection10978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10978<T extends unknown[], V> = [...T, V];

type TuplifyUnion10978<T, L = LastOf10978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10978<TuplifyUnion10978<Exclude<T, L>>, L>;

type DeepPartial10978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10978<T[P]> }
  : T;

type Paths10978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10978<K, Paths10978<T[K], Prev10978[D]>> : never }[keyof T]
  : never;

type Prev10978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10978 {
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

type ConfigPaths10978 = Paths10978<NestedConfig10978>;

interface HeavyProps10978 {
  config: DeepPartial10978<NestedConfig10978>;
  path?: ConfigPaths10978;
}

const HeavyComponent10978 = memo(function HeavyComponent10978({ config }: HeavyProps10978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10978.displayName = 'HeavyComponent10978';
export default HeavyComponent10978;
