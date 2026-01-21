'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10513<T> = T extends (infer U)[]
  ? DeepReadonlyArray10513<U>
  : T extends object
  ? DeepReadonlyObject10513<T>
  : T;

interface DeepReadonlyArray10513<T> extends ReadonlyArray<DeepReadonly10513<T>> {}

type DeepReadonlyObject10513<T> = {
  readonly [P in keyof T]: DeepReadonly10513<T[P]>;
};

type UnionToIntersection10513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10513<T> = UnionToIntersection10513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10513<T extends unknown[], V> = [...T, V];

type TuplifyUnion10513<T, L = LastOf10513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10513<TuplifyUnion10513<Exclude<T, L>>, L>;

type DeepPartial10513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10513<T[P]> }
  : T;

type Paths10513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10513<K, Paths10513<T[K], Prev10513[D]>> : never }[keyof T]
  : never;

type Prev10513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10513 {
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

type ConfigPaths10513 = Paths10513<NestedConfig10513>;

interface HeavyProps10513 {
  config: DeepPartial10513<NestedConfig10513>;
  path?: ConfigPaths10513;
}

const HeavyComponent10513 = memo(function HeavyComponent10513({ config }: HeavyProps10513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10513.displayName = 'HeavyComponent10513';
export default HeavyComponent10513;
