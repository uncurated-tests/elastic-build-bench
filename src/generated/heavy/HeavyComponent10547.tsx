'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10547<T> = T extends (infer U)[]
  ? DeepReadonlyArray10547<U>
  : T extends object
  ? DeepReadonlyObject10547<T>
  : T;

interface DeepReadonlyArray10547<T> extends ReadonlyArray<DeepReadonly10547<T>> {}

type DeepReadonlyObject10547<T> = {
  readonly [P in keyof T]: DeepReadonly10547<T[P]>;
};

type UnionToIntersection10547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10547<T> = UnionToIntersection10547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10547<T extends unknown[], V> = [...T, V];

type TuplifyUnion10547<T, L = LastOf10547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10547<TuplifyUnion10547<Exclude<T, L>>, L>;

type DeepPartial10547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10547<T[P]> }
  : T;

type Paths10547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10547<K, Paths10547<T[K], Prev10547[D]>> : never }[keyof T]
  : never;

type Prev10547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10547 {
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

type ConfigPaths10547 = Paths10547<NestedConfig10547>;

interface HeavyProps10547 {
  config: DeepPartial10547<NestedConfig10547>;
  path?: ConfigPaths10547;
}

const HeavyComponent10547 = memo(function HeavyComponent10547({ config }: HeavyProps10547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10547.displayName = 'HeavyComponent10547';
export default HeavyComponent10547;
