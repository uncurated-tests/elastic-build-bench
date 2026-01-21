'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10791<T> = T extends (infer U)[]
  ? DeepReadonlyArray10791<U>
  : T extends object
  ? DeepReadonlyObject10791<T>
  : T;

interface DeepReadonlyArray10791<T> extends ReadonlyArray<DeepReadonly10791<T>> {}

type DeepReadonlyObject10791<T> = {
  readonly [P in keyof T]: DeepReadonly10791<T[P]>;
};

type UnionToIntersection10791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10791<T> = UnionToIntersection10791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10791<T extends unknown[], V> = [...T, V];

type TuplifyUnion10791<T, L = LastOf10791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10791<TuplifyUnion10791<Exclude<T, L>>, L>;

type DeepPartial10791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10791<T[P]> }
  : T;

type Paths10791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10791<K, Paths10791<T[K], Prev10791[D]>> : never }[keyof T]
  : never;

type Prev10791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10791 {
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

type ConfigPaths10791 = Paths10791<NestedConfig10791>;

interface HeavyProps10791 {
  config: DeepPartial10791<NestedConfig10791>;
  path?: ConfigPaths10791;
}

const HeavyComponent10791 = memo(function HeavyComponent10791({ config }: HeavyProps10791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10791.displayName = 'HeavyComponent10791';
export default HeavyComponent10791;
