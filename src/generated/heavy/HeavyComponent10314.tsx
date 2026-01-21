'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10314<T> = T extends (infer U)[]
  ? DeepReadonlyArray10314<U>
  : T extends object
  ? DeepReadonlyObject10314<T>
  : T;

interface DeepReadonlyArray10314<T> extends ReadonlyArray<DeepReadonly10314<T>> {}

type DeepReadonlyObject10314<T> = {
  readonly [P in keyof T]: DeepReadonly10314<T[P]>;
};

type UnionToIntersection10314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10314<T> = UnionToIntersection10314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10314<T extends unknown[], V> = [...T, V];

type TuplifyUnion10314<T, L = LastOf10314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10314<TuplifyUnion10314<Exclude<T, L>>, L>;

type DeepPartial10314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10314<T[P]> }
  : T;

type Paths10314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10314<K, Paths10314<T[K], Prev10314[D]>> : never }[keyof T]
  : never;

type Prev10314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10314 {
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

type ConfigPaths10314 = Paths10314<NestedConfig10314>;

interface HeavyProps10314 {
  config: DeepPartial10314<NestedConfig10314>;
  path?: ConfigPaths10314;
}

const HeavyComponent10314 = memo(function HeavyComponent10314({ config }: HeavyProps10314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10314.displayName = 'HeavyComponent10314';
export default HeavyComponent10314;
