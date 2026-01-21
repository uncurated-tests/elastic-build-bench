'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10723<T> = T extends (infer U)[]
  ? DeepReadonlyArray10723<U>
  : T extends object
  ? DeepReadonlyObject10723<T>
  : T;

interface DeepReadonlyArray10723<T> extends ReadonlyArray<DeepReadonly10723<T>> {}

type DeepReadonlyObject10723<T> = {
  readonly [P in keyof T]: DeepReadonly10723<T[P]>;
};

type UnionToIntersection10723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10723<T> = UnionToIntersection10723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10723<T extends unknown[], V> = [...T, V];

type TuplifyUnion10723<T, L = LastOf10723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10723<TuplifyUnion10723<Exclude<T, L>>, L>;

type DeepPartial10723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10723<T[P]> }
  : T;

type Paths10723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10723<K, Paths10723<T[K], Prev10723[D]>> : never }[keyof T]
  : never;

type Prev10723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10723 {
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

type ConfigPaths10723 = Paths10723<NestedConfig10723>;

interface HeavyProps10723 {
  config: DeepPartial10723<NestedConfig10723>;
  path?: ConfigPaths10723;
}

const HeavyComponent10723 = memo(function HeavyComponent10723({ config }: HeavyProps10723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10723.displayName = 'HeavyComponent10723';
export default HeavyComponent10723;
