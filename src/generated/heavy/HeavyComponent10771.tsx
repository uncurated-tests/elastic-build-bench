'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10771<T> = T extends (infer U)[]
  ? DeepReadonlyArray10771<U>
  : T extends object
  ? DeepReadonlyObject10771<T>
  : T;

interface DeepReadonlyArray10771<T> extends ReadonlyArray<DeepReadonly10771<T>> {}

type DeepReadonlyObject10771<T> = {
  readonly [P in keyof T]: DeepReadonly10771<T[P]>;
};

type UnionToIntersection10771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10771<T> = UnionToIntersection10771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10771<T extends unknown[], V> = [...T, V];

type TuplifyUnion10771<T, L = LastOf10771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10771<TuplifyUnion10771<Exclude<T, L>>, L>;

type DeepPartial10771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10771<T[P]> }
  : T;

type Paths10771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10771<K, Paths10771<T[K], Prev10771[D]>> : never }[keyof T]
  : never;

type Prev10771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10771 {
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

type ConfigPaths10771 = Paths10771<NestedConfig10771>;

interface HeavyProps10771 {
  config: DeepPartial10771<NestedConfig10771>;
  path?: ConfigPaths10771;
}

const HeavyComponent10771 = memo(function HeavyComponent10771({ config }: HeavyProps10771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10771.displayName = 'HeavyComponent10771';
export default HeavyComponent10771;
