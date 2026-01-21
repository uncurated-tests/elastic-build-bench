'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10625<T> = T extends (infer U)[]
  ? DeepReadonlyArray10625<U>
  : T extends object
  ? DeepReadonlyObject10625<T>
  : T;

interface DeepReadonlyArray10625<T> extends ReadonlyArray<DeepReadonly10625<T>> {}

type DeepReadonlyObject10625<T> = {
  readonly [P in keyof T]: DeepReadonly10625<T[P]>;
};

type UnionToIntersection10625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10625<T> = UnionToIntersection10625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10625<T extends unknown[], V> = [...T, V];

type TuplifyUnion10625<T, L = LastOf10625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10625<TuplifyUnion10625<Exclude<T, L>>, L>;

type DeepPartial10625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10625<T[P]> }
  : T;

type Paths10625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10625<K, Paths10625<T[K], Prev10625[D]>> : never }[keyof T]
  : never;

type Prev10625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10625 {
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

type ConfigPaths10625 = Paths10625<NestedConfig10625>;

interface HeavyProps10625 {
  config: DeepPartial10625<NestedConfig10625>;
  path?: ConfigPaths10625;
}

const HeavyComponent10625 = memo(function HeavyComponent10625({ config }: HeavyProps10625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10625.displayName = 'HeavyComponent10625';
export default HeavyComponent10625;
