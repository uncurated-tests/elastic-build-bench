'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10103<T> = T extends (infer U)[]
  ? DeepReadonlyArray10103<U>
  : T extends object
  ? DeepReadonlyObject10103<T>
  : T;

interface DeepReadonlyArray10103<T> extends ReadonlyArray<DeepReadonly10103<T>> {}

type DeepReadonlyObject10103<T> = {
  readonly [P in keyof T]: DeepReadonly10103<T[P]>;
};

type UnionToIntersection10103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10103<T> = UnionToIntersection10103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10103<T extends unknown[], V> = [...T, V];

type TuplifyUnion10103<T, L = LastOf10103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10103<TuplifyUnion10103<Exclude<T, L>>, L>;

type DeepPartial10103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10103<T[P]> }
  : T;

type Paths10103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10103<K, Paths10103<T[K], Prev10103[D]>> : never }[keyof T]
  : never;

type Prev10103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10103 {
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

type ConfigPaths10103 = Paths10103<NestedConfig10103>;

interface HeavyProps10103 {
  config: DeepPartial10103<NestedConfig10103>;
  path?: ConfigPaths10103;
}

const HeavyComponent10103 = memo(function HeavyComponent10103({ config }: HeavyProps10103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10103.displayName = 'HeavyComponent10103';
export default HeavyComponent10103;
