'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10530<T> = T extends (infer U)[]
  ? DeepReadonlyArray10530<U>
  : T extends object
  ? DeepReadonlyObject10530<T>
  : T;

interface DeepReadonlyArray10530<T> extends ReadonlyArray<DeepReadonly10530<T>> {}

type DeepReadonlyObject10530<T> = {
  readonly [P in keyof T]: DeepReadonly10530<T[P]>;
};

type UnionToIntersection10530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10530<T> = UnionToIntersection10530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10530<T extends unknown[], V> = [...T, V];

type TuplifyUnion10530<T, L = LastOf10530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10530<TuplifyUnion10530<Exclude<T, L>>, L>;

type DeepPartial10530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10530<T[P]> }
  : T;

type Paths10530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10530<K, Paths10530<T[K], Prev10530[D]>> : never }[keyof T]
  : never;

type Prev10530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10530 {
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

type ConfigPaths10530 = Paths10530<NestedConfig10530>;

interface HeavyProps10530 {
  config: DeepPartial10530<NestedConfig10530>;
  path?: ConfigPaths10530;
}

const HeavyComponent10530 = memo(function HeavyComponent10530({ config }: HeavyProps10530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10530.displayName = 'HeavyComponent10530';
export default HeavyComponent10530;
