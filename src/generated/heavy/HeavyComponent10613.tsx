'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10613<T> = T extends (infer U)[]
  ? DeepReadonlyArray10613<U>
  : T extends object
  ? DeepReadonlyObject10613<T>
  : T;

interface DeepReadonlyArray10613<T> extends ReadonlyArray<DeepReadonly10613<T>> {}

type DeepReadonlyObject10613<T> = {
  readonly [P in keyof T]: DeepReadonly10613<T[P]>;
};

type UnionToIntersection10613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10613<T> = UnionToIntersection10613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10613<T extends unknown[], V> = [...T, V];

type TuplifyUnion10613<T, L = LastOf10613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10613<TuplifyUnion10613<Exclude<T, L>>, L>;

type DeepPartial10613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10613<T[P]> }
  : T;

type Paths10613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10613<K, Paths10613<T[K], Prev10613[D]>> : never }[keyof T]
  : never;

type Prev10613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10613 {
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

type ConfigPaths10613 = Paths10613<NestedConfig10613>;

interface HeavyProps10613 {
  config: DeepPartial10613<NestedConfig10613>;
  path?: ConfigPaths10613;
}

const HeavyComponent10613 = memo(function HeavyComponent10613({ config }: HeavyProps10613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10613.displayName = 'HeavyComponent10613';
export default HeavyComponent10613;
