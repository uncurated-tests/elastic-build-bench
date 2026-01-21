'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10015<T> = T extends (infer U)[]
  ? DeepReadonlyArray10015<U>
  : T extends object
  ? DeepReadonlyObject10015<T>
  : T;

interface DeepReadonlyArray10015<T> extends ReadonlyArray<DeepReadonly10015<T>> {}

type DeepReadonlyObject10015<T> = {
  readonly [P in keyof T]: DeepReadonly10015<T[P]>;
};

type UnionToIntersection10015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10015<T> = UnionToIntersection10015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10015<T extends unknown[], V> = [...T, V];

type TuplifyUnion10015<T, L = LastOf10015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10015<TuplifyUnion10015<Exclude<T, L>>, L>;

type DeepPartial10015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10015<T[P]> }
  : T;

type Paths10015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10015<K, Paths10015<T[K], Prev10015[D]>> : never }[keyof T]
  : never;

type Prev10015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10015 {
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

type ConfigPaths10015 = Paths10015<NestedConfig10015>;

interface HeavyProps10015 {
  config: DeepPartial10015<NestedConfig10015>;
  path?: ConfigPaths10015;
}

const HeavyComponent10015 = memo(function HeavyComponent10015({ config }: HeavyProps10015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10015.displayName = 'HeavyComponent10015';
export default HeavyComponent10015;
