'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10451<T> = T extends (infer U)[]
  ? DeepReadonlyArray10451<U>
  : T extends object
  ? DeepReadonlyObject10451<T>
  : T;

interface DeepReadonlyArray10451<T> extends ReadonlyArray<DeepReadonly10451<T>> {}

type DeepReadonlyObject10451<T> = {
  readonly [P in keyof T]: DeepReadonly10451<T[P]>;
};

type UnionToIntersection10451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10451<T> = UnionToIntersection10451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10451<T extends unknown[], V> = [...T, V];

type TuplifyUnion10451<T, L = LastOf10451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10451<TuplifyUnion10451<Exclude<T, L>>, L>;

type DeepPartial10451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10451<T[P]> }
  : T;

type Paths10451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10451<K, Paths10451<T[K], Prev10451[D]>> : never }[keyof T]
  : never;

type Prev10451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10451 {
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

type ConfigPaths10451 = Paths10451<NestedConfig10451>;

interface HeavyProps10451 {
  config: DeepPartial10451<NestedConfig10451>;
  path?: ConfigPaths10451;
}

const HeavyComponent10451 = memo(function HeavyComponent10451({ config }: HeavyProps10451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10451.displayName = 'HeavyComponent10451';
export default HeavyComponent10451;
