'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10287<T> = T extends (infer U)[]
  ? DeepReadonlyArray10287<U>
  : T extends object
  ? DeepReadonlyObject10287<T>
  : T;

interface DeepReadonlyArray10287<T> extends ReadonlyArray<DeepReadonly10287<T>> {}

type DeepReadonlyObject10287<T> = {
  readonly [P in keyof T]: DeepReadonly10287<T[P]>;
};

type UnionToIntersection10287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10287<T> = UnionToIntersection10287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10287<T extends unknown[], V> = [...T, V];

type TuplifyUnion10287<T, L = LastOf10287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10287<TuplifyUnion10287<Exclude<T, L>>, L>;

type DeepPartial10287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10287<T[P]> }
  : T;

type Paths10287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10287<K, Paths10287<T[K], Prev10287[D]>> : never }[keyof T]
  : never;

type Prev10287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10287 {
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

type ConfigPaths10287 = Paths10287<NestedConfig10287>;

interface HeavyProps10287 {
  config: DeepPartial10287<NestedConfig10287>;
  path?: ConfigPaths10287;
}

const HeavyComponent10287 = memo(function HeavyComponent10287({ config }: HeavyProps10287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10287.displayName = 'HeavyComponent10287';
export default HeavyComponent10287;
