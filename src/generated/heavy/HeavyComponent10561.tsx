'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10561<T> = T extends (infer U)[]
  ? DeepReadonlyArray10561<U>
  : T extends object
  ? DeepReadonlyObject10561<T>
  : T;

interface DeepReadonlyArray10561<T> extends ReadonlyArray<DeepReadonly10561<T>> {}

type DeepReadonlyObject10561<T> = {
  readonly [P in keyof T]: DeepReadonly10561<T[P]>;
};

type UnionToIntersection10561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10561<T> = UnionToIntersection10561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10561<T extends unknown[], V> = [...T, V];

type TuplifyUnion10561<T, L = LastOf10561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10561<TuplifyUnion10561<Exclude<T, L>>, L>;

type DeepPartial10561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10561<T[P]> }
  : T;

type Paths10561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10561<K, Paths10561<T[K], Prev10561[D]>> : never }[keyof T]
  : never;

type Prev10561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10561 {
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

type ConfigPaths10561 = Paths10561<NestedConfig10561>;

interface HeavyProps10561 {
  config: DeepPartial10561<NestedConfig10561>;
  path?: ConfigPaths10561;
}

const HeavyComponent10561 = memo(function HeavyComponent10561({ config }: HeavyProps10561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10561.displayName = 'HeavyComponent10561';
export default HeavyComponent10561;
