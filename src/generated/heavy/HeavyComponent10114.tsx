'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10114<T> = T extends (infer U)[]
  ? DeepReadonlyArray10114<U>
  : T extends object
  ? DeepReadonlyObject10114<T>
  : T;

interface DeepReadonlyArray10114<T> extends ReadonlyArray<DeepReadonly10114<T>> {}

type DeepReadonlyObject10114<T> = {
  readonly [P in keyof T]: DeepReadonly10114<T[P]>;
};

type UnionToIntersection10114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10114<T> = UnionToIntersection10114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10114<T extends unknown[], V> = [...T, V];

type TuplifyUnion10114<T, L = LastOf10114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10114<TuplifyUnion10114<Exclude<T, L>>, L>;

type DeepPartial10114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10114<T[P]> }
  : T;

type Paths10114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10114<K, Paths10114<T[K], Prev10114[D]>> : never }[keyof T]
  : never;

type Prev10114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10114 {
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

type ConfigPaths10114 = Paths10114<NestedConfig10114>;

interface HeavyProps10114 {
  config: DeepPartial10114<NestedConfig10114>;
  path?: ConfigPaths10114;
}

const HeavyComponent10114 = memo(function HeavyComponent10114({ config }: HeavyProps10114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10114.displayName = 'HeavyComponent10114';
export default HeavyComponent10114;
