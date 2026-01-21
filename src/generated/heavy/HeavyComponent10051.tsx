'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10051<T> = T extends (infer U)[]
  ? DeepReadonlyArray10051<U>
  : T extends object
  ? DeepReadonlyObject10051<T>
  : T;

interface DeepReadonlyArray10051<T> extends ReadonlyArray<DeepReadonly10051<T>> {}

type DeepReadonlyObject10051<T> = {
  readonly [P in keyof T]: DeepReadonly10051<T[P]>;
};

type UnionToIntersection10051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10051<T> = UnionToIntersection10051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10051<T extends unknown[], V> = [...T, V];

type TuplifyUnion10051<T, L = LastOf10051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10051<TuplifyUnion10051<Exclude<T, L>>, L>;

type DeepPartial10051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10051<T[P]> }
  : T;

type Paths10051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10051<K, Paths10051<T[K], Prev10051[D]>> : never }[keyof T]
  : never;

type Prev10051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10051 {
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

type ConfigPaths10051 = Paths10051<NestedConfig10051>;

interface HeavyProps10051 {
  config: DeepPartial10051<NestedConfig10051>;
  path?: ConfigPaths10051;
}

const HeavyComponent10051 = memo(function HeavyComponent10051({ config }: HeavyProps10051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10051.displayName = 'HeavyComponent10051';
export default HeavyComponent10051;
