'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10037<T> = T extends (infer U)[]
  ? DeepReadonlyArray10037<U>
  : T extends object
  ? DeepReadonlyObject10037<T>
  : T;

interface DeepReadonlyArray10037<T> extends ReadonlyArray<DeepReadonly10037<T>> {}

type DeepReadonlyObject10037<T> = {
  readonly [P in keyof T]: DeepReadonly10037<T[P]>;
};

type UnionToIntersection10037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10037<T> = UnionToIntersection10037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10037<T extends unknown[], V> = [...T, V];

type TuplifyUnion10037<T, L = LastOf10037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10037<TuplifyUnion10037<Exclude<T, L>>, L>;

type DeepPartial10037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10037<T[P]> }
  : T;

type Paths10037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10037<K, Paths10037<T[K], Prev10037[D]>> : never }[keyof T]
  : never;

type Prev10037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10037 {
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

type ConfigPaths10037 = Paths10037<NestedConfig10037>;

interface HeavyProps10037 {
  config: DeepPartial10037<NestedConfig10037>;
  path?: ConfigPaths10037;
}

const HeavyComponent10037 = memo(function HeavyComponent10037({ config }: HeavyProps10037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10037.displayName = 'HeavyComponent10037';
export default HeavyComponent10037;
