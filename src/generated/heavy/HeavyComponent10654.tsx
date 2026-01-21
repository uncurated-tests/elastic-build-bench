'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10654<T> = T extends (infer U)[]
  ? DeepReadonlyArray10654<U>
  : T extends object
  ? DeepReadonlyObject10654<T>
  : T;

interface DeepReadonlyArray10654<T> extends ReadonlyArray<DeepReadonly10654<T>> {}

type DeepReadonlyObject10654<T> = {
  readonly [P in keyof T]: DeepReadonly10654<T[P]>;
};

type UnionToIntersection10654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10654<T> = UnionToIntersection10654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10654<T extends unknown[], V> = [...T, V];

type TuplifyUnion10654<T, L = LastOf10654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10654<TuplifyUnion10654<Exclude<T, L>>, L>;

type DeepPartial10654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10654<T[P]> }
  : T;

type Paths10654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10654<K, Paths10654<T[K], Prev10654[D]>> : never }[keyof T]
  : never;

type Prev10654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10654 {
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

type ConfigPaths10654 = Paths10654<NestedConfig10654>;

interface HeavyProps10654 {
  config: DeepPartial10654<NestedConfig10654>;
  path?: ConfigPaths10654;
}

const HeavyComponent10654 = memo(function HeavyComponent10654({ config }: HeavyProps10654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10654.displayName = 'HeavyComponent10654';
export default HeavyComponent10654;
