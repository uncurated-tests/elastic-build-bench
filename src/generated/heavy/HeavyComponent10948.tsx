'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10948<T> = T extends (infer U)[]
  ? DeepReadonlyArray10948<U>
  : T extends object
  ? DeepReadonlyObject10948<T>
  : T;

interface DeepReadonlyArray10948<T> extends ReadonlyArray<DeepReadonly10948<T>> {}

type DeepReadonlyObject10948<T> = {
  readonly [P in keyof T]: DeepReadonly10948<T[P]>;
};

type UnionToIntersection10948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10948<T> = UnionToIntersection10948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10948<T extends unknown[], V> = [...T, V];

type TuplifyUnion10948<T, L = LastOf10948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10948<TuplifyUnion10948<Exclude<T, L>>, L>;

type DeepPartial10948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10948<T[P]> }
  : T;

type Paths10948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10948<K, Paths10948<T[K], Prev10948[D]>> : never }[keyof T]
  : never;

type Prev10948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10948 {
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

type ConfigPaths10948 = Paths10948<NestedConfig10948>;

interface HeavyProps10948 {
  config: DeepPartial10948<NestedConfig10948>;
  path?: ConfigPaths10948;
}

const HeavyComponent10948 = memo(function HeavyComponent10948({ config }: HeavyProps10948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10948.displayName = 'HeavyComponent10948';
export default HeavyComponent10948;
