'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10652<T> = T extends (infer U)[]
  ? DeepReadonlyArray10652<U>
  : T extends object
  ? DeepReadonlyObject10652<T>
  : T;

interface DeepReadonlyArray10652<T> extends ReadonlyArray<DeepReadonly10652<T>> {}

type DeepReadonlyObject10652<T> = {
  readonly [P in keyof T]: DeepReadonly10652<T[P]>;
};

type UnionToIntersection10652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10652<T> = UnionToIntersection10652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10652<T extends unknown[], V> = [...T, V];

type TuplifyUnion10652<T, L = LastOf10652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10652<TuplifyUnion10652<Exclude<T, L>>, L>;

type DeepPartial10652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10652<T[P]> }
  : T;

type Paths10652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10652<K, Paths10652<T[K], Prev10652[D]>> : never }[keyof T]
  : never;

type Prev10652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10652 {
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

type ConfigPaths10652 = Paths10652<NestedConfig10652>;

interface HeavyProps10652 {
  config: DeepPartial10652<NestedConfig10652>;
  path?: ConfigPaths10652;
}

const HeavyComponent10652 = memo(function HeavyComponent10652({ config }: HeavyProps10652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10652.displayName = 'HeavyComponent10652';
export default HeavyComponent10652;
