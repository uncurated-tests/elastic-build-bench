'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10790<T> = T extends (infer U)[]
  ? DeepReadonlyArray10790<U>
  : T extends object
  ? DeepReadonlyObject10790<T>
  : T;

interface DeepReadonlyArray10790<T> extends ReadonlyArray<DeepReadonly10790<T>> {}

type DeepReadonlyObject10790<T> = {
  readonly [P in keyof T]: DeepReadonly10790<T[P]>;
};

type UnionToIntersection10790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10790<T> = UnionToIntersection10790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10790<T extends unknown[], V> = [...T, V];

type TuplifyUnion10790<T, L = LastOf10790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10790<TuplifyUnion10790<Exclude<T, L>>, L>;

type DeepPartial10790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10790<T[P]> }
  : T;

type Paths10790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10790<K, Paths10790<T[K], Prev10790[D]>> : never }[keyof T]
  : never;

type Prev10790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10790 {
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

type ConfigPaths10790 = Paths10790<NestedConfig10790>;

interface HeavyProps10790 {
  config: DeepPartial10790<NestedConfig10790>;
  path?: ConfigPaths10790;
}

const HeavyComponent10790 = memo(function HeavyComponent10790({ config }: HeavyProps10790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10790.displayName = 'HeavyComponent10790';
export default HeavyComponent10790;
