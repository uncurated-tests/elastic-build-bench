'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10056<T> = T extends (infer U)[]
  ? DeepReadonlyArray10056<U>
  : T extends object
  ? DeepReadonlyObject10056<T>
  : T;

interface DeepReadonlyArray10056<T> extends ReadonlyArray<DeepReadonly10056<T>> {}

type DeepReadonlyObject10056<T> = {
  readonly [P in keyof T]: DeepReadonly10056<T[P]>;
};

type UnionToIntersection10056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10056<T> = UnionToIntersection10056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10056<T extends unknown[], V> = [...T, V];

type TuplifyUnion10056<T, L = LastOf10056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10056<TuplifyUnion10056<Exclude<T, L>>, L>;

type DeepPartial10056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10056<T[P]> }
  : T;

type Paths10056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10056<K, Paths10056<T[K], Prev10056[D]>> : never }[keyof T]
  : never;

type Prev10056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10056 {
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

type ConfigPaths10056 = Paths10056<NestedConfig10056>;

interface HeavyProps10056 {
  config: DeepPartial10056<NestedConfig10056>;
  path?: ConfigPaths10056;
}

const HeavyComponent10056 = memo(function HeavyComponent10056({ config }: HeavyProps10056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10056.displayName = 'HeavyComponent10056';
export default HeavyComponent10056;
