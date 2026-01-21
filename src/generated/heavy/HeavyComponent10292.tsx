'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10292<T> = T extends (infer U)[]
  ? DeepReadonlyArray10292<U>
  : T extends object
  ? DeepReadonlyObject10292<T>
  : T;

interface DeepReadonlyArray10292<T> extends ReadonlyArray<DeepReadonly10292<T>> {}

type DeepReadonlyObject10292<T> = {
  readonly [P in keyof T]: DeepReadonly10292<T[P]>;
};

type UnionToIntersection10292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10292<T> = UnionToIntersection10292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10292<T extends unknown[], V> = [...T, V];

type TuplifyUnion10292<T, L = LastOf10292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10292<TuplifyUnion10292<Exclude<T, L>>, L>;

type DeepPartial10292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10292<T[P]> }
  : T;

type Paths10292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10292<K, Paths10292<T[K], Prev10292[D]>> : never }[keyof T]
  : never;

type Prev10292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10292 {
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

type ConfigPaths10292 = Paths10292<NestedConfig10292>;

interface HeavyProps10292 {
  config: DeepPartial10292<NestedConfig10292>;
  path?: ConfigPaths10292;
}

const HeavyComponent10292 = memo(function HeavyComponent10292({ config }: HeavyProps10292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10292.displayName = 'HeavyComponent10292';
export default HeavyComponent10292;
