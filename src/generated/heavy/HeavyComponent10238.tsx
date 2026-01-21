'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10238<T> = T extends (infer U)[]
  ? DeepReadonlyArray10238<U>
  : T extends object
  ? DeepReadonlyObject10238<T>
  : T;

interface DeepReadonlyArray10238<T> extends ReadonlyArray<DeepReadonly10238<T>> {}

type DeepReadonlyObject10238<T> = {
  readonly [P in keyof T]: DeepReadonly10238<T[P]>;
};

type UnionToIntersection10238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10238<T> = UnionToIntersection10238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10238<T extends unknown[], V> = [...T, V];

type TuplifyUnion10238<T, L = LastOf10238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10238<TuplifyUnion10238<Exclude<T, L>>, L>;

type DeepPartial10238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10238<T[P]> }
  : T;

type Paths10238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10238<K, Paths10238<T[K], Prev10238[D]>> : never }[keyof T]
  : never;

type Prev10238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10238 {
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

type ConfigPaths10238 = Paths10238<NestedConfig10238>;

interface HeavyProps10238 {
  config: DeepPartial10238<NestedConfig10238>;
  path?: ConfigPaths10238;
}

const HeavyComponent10238 = memo(function HeavyComponent10238({ config }: HeavyProps10238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10238.displayName = 'HeavyComponent10238';
export default HeavyComponent10238;
