'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10588<T> = T extends (infer U)[]
  ? DeepReadonlyArray10588<U>
  : T extends object
  ? DeepReadonlyObject10588<T>
  : T;

interface DeepReadonlyArray10588<T> extends ReadonlyArray<DeepReadonly10588<T>> {}

type DeepReadonlyObject10588<T> = {
  readonly [P in keyof T]: DeepReadonly10588<T[P]>;
};

type UnionToIntersection10588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10588<T> = UnionToIntersection10588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10588<T extends unknown[], V> = [...T, V];

type TuplifyUnion10588<T, L = LastOf10588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10588<TuplifyUnion10588<Exclude<T, L>>, L>;

type DeepPartial10588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10588<T[P]> }
  : T;

type Paths10588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10588<K, Paths10588<T[K], Prev10588[D]>> : never }[keyof T]
  : never;

type Prev10588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10588 {
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

type ConfigPaths10588 = Paths10588<NestedConfig10588>;

interface HeavyProps10588 {
  config: DeepPartial10588<NestedConfig10588>;
  path?: ConfigPaths10588;
}

const HeavyComponent10588 = memo(function HeavyComponent10588({ config }: HeavyProps10588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10588.displayName = 'HeavyComponent10588';
export default HeavyComponent10588;
