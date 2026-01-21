'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10104<T> = T extends (infer U)[]
  ? DeepReadonlyArray10104<U>
  : T extends object
  ? DeepReadonlyObject10104<T>
  : T;

interface DeepReadonlyArray10104<T> extends ReadonlyArray<DeepReadonly10104<T>> {}

type DeepReadonlyObject10104<T> = {
  readonly [P in keyof T]: DeepReadonly10104<T[P]>;
};

type UnionToIntersection10104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10104<T> = UnionToIntersection10104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10104<T extends unknown[], V> = [...T, V];

type TuplifyUnion10104<T, L = LastOf10104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10104<TuplifyUnion10104<Exclude<T, L>>, L>;

type DeepPartial10104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10104<T[P]> }
  : T;

type Paths10104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10104<K, Paths10104<T[K], Prev10104[D]>> : never }[keyof T]
  : never;

type Prev10104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10104 {
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

type ConfigPaths10104 = Paths10104<NestedConfig10104>;

interface HeavyProps10104 {
  config: DeepPartial10104<NestedConfig10104>;
  path?: ConfigPaths10104;
}

const HeavyComponent10104 = memo(function HeavyComponent10104({ config }: HeavyProps10104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10104.displayName = 'HeavyComponent10104';
export default HeavyComponent10104;
