'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10696<T> = T extends (infer U)[]
  ? DeepReadonlyArray10696<U>
  : T extends object
  ? DeepReadonlyObject10696<T>
  : T;

interface DeepReadonlyArray10696<T> extends ReadonlyArray<DeepReadonly10696<T>> {}

type DeepReadonlyObject10696<T> = {
  readonly [P in keyof T]: DeepReadonly10696<T[P]>;
};

type UnionToIntersection10696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10696<T> = UnionToIntersection10696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10696<T extends unknown[], V> = [...T, V];

type TuplifyUnion10696<T, L = LastOf10696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10696<TuplifyUnion10696<Exclude<T, L>>, L>;

type DeepPartial10696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10696<T[P]> }
  : T;

type Paths10696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10696<K, Paths10696<T[K], Prev10696[D]>> : never }[keyof T]
  : never;

type Prev10696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10696 {
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

type ConfigPaths10696 = Paths10696<NestedConfig10696>;

interface HeavyProps10696 {
  config: DeepPartial10696<NestedConfig10696>;
  path?: ConfigPaths10696;
}

const HeavyComponent10696 = memo(function HeavyComponent10696({ config }: HeavyProps10696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10696.displayName = 'HeavyComponent10696';
export default HeavyComponent10696;
