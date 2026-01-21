'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10262<T> = T extends (infer U)[]
  ? DeepReadonlyArray10262<U>
  : T extends object
  ? DeepReadonlyObject10262<T>
  : T;

interface DeepReadonlyArray10262<T> extends ReadonlyArray<DeepReadonly10262<T>> {}

type DeepReadonlyObject10262<T> = {
  readonly [P in keyof T]: DeepReadonly10262<T[P]>;
};

type UnionToIntersection10262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10262<T> = UnionToIntersection10262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10262<T extends unknown[], V> = [...T, V];

type TuplifyUnion10262<T, L = LastOf10262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10262<TuplifyUnion10262<Exclude<T, L>>, L>;

type DeepPartial10262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10262<T[P]> }
  : T;

type Paths10262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10262<K, Paths10262<T[K], Prev10262[D]>> : never }[keyof T]
  : never;

type Prev10262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10262 {
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

type ConfigPaths10262 = Paths10262<NestedConfig10262>;

interface HeavyProps10262 {
  config: DeepPartial10262<NestedConfig10262>;
  path?: ConfigPaths10262;
}

const HeavyComponent10262 = memo(function HeavyComponent10262({ config }: HeavyProps10262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10262.displayName = 'HeavyComponent10262';
export default HeavyComponent10262;
