'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10241<T> = T extends (infer U)[]
  ? DeepReadonlyArray10241<U>
  : T extends object
  ? DeepReadonlyObject10241<T>
  : T;

interface DeepReadonlyArray10241<T> extends ReadonlyArray<DeepReadonly10241<T>> {}

type DeepReadonlyObject10241<T> = {
  readonly [P in keyof T]: DeepReadonly10241<T[P]>;
};

type UnionToIntersection10241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10241<T> = UnionToIntersection10241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10241<T extends unknown[], V> = [...T, V];

type TuplifyUnion10241<T, L = LastOf10241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10241<TuplifyUnion10241<Exclude<T, L>>, L>;

type DeepPartial10241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10241<T[P]> }
  : T;

type Paths10241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10241<K, Paths10241<T[K], Prev10241[D]>> : never }[keyof T]
  : never;

type Prev10241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10241 {
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

type ConfigPaths10241 = Paths10241<NestedConfig10241>;

interface HeavyProps10241 {
  config: DeepPartial10241<NestedConfig10241>;
  path?: ConfigPaths10241;
}

const HeavyComponent10241 = memo(function HeavyComponent10241({ config }: HeavyProps10241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10241.displayName = 'HeavyComponent10241';
export default HeavyComponent10241;
