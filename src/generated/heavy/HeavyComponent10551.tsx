'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10551<T> = T extends (infer U)[]
  ? DeepReadonlyArray10551<U>
  : T extends object
  ? DeepReadonlyObject10551<T>
  : T;

interface DeepReadonlyArray10551<T> extends ReadonlyArray<DeepReadonly10551<T>> {}

type DeepReadonlyObject10551<T> = {
  readonly [P in keyof T]: DeepReadonly10551<T[P]>;
};

type UnionToIntersection10551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10551<T> = UnionToIntersection10551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10551<T extends unknown[], V> = [...T, V];

type TuplifyUnion10551<T, L = LastOf10551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10551<TuplifyUnion10551<Exclude<T, L>>, L>;

type DeepPartial10551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10551<T[P]> }
  : T;

type Paths10551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10551<K, Paths10551<T[K], Prev10551[D]>> : never }[keyof T]
  : never;

type Prev10551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10551 {
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

type ConfigPaths10551 = Paths10551<NestedConfig10551>;

interface HeavyProps10551 {
  config: DeepPartial10551<NestedConfig10551>;
  path?: ConfigPaths10551;
}

const HeavyComponent10551 = memo(function HeavyComponent10551({ config }: HeavyProps10551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10551.displayName = 'HeavyComponent10551';
export default HeavyComponent10551;
