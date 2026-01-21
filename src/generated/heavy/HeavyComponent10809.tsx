'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10809<T> = T extends (infer U)[]
  ? DeepReadonlyArray10809<U>
  : T extends object
  ? DeepReadonlyObject10809<T>
  : T;

interface DeepReadonlyArray10809<T> extends ReadonlyArray<DeepReadonly10809<T>> {}

type DeepReadonlyObject10809<T> = {
  readonly [P in keyof T]: DeepReadonly10809<T[P]>;
};

type UnionToIntersection10809<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10809<T> = UnionToIntersection10809<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10809<T extends unknown[], V> = [...T, V];

type TuplifyUnion10809<T, L = LastOf10809<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10809<TuplifyUnion10809<Exclude<T, L>>, L>;

type DeepPartial10809<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10809<T[P]> }
  : T;

type Paths10809<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10809<K, Paths10809<T[K], Prev10809[D]>> : never }[keyof T]
  : never;

type Prev10809 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10809<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10809 {
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

type ConfigPaths10809 = Paths10809<NestedConfig10809>;

interface HeavyProps10809 {
  config: DeepPartial10809<NestedConfig10809>;
  path?: ConfigPaths10809;
}

const HeavyComponent10809 = memo(function HeavyComponent10809({ config }: HeavyProps10809) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10809) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10809 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10809: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10809.displayName = 'HeavyComponent10809';
export default HeavyComponent10809;
