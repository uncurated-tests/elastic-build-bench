'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10780<T> = T extends (infer U)[]
  ? DeepReadonlyArray10780<U>
  : T extends object
  ? DeepReadonlyObject10780<T>
  : T;

interface DeepReadonlyArray10780<T> extends ReadonlyArray<DeepReadonly10780<T>> {}

type DeepReadonlyObject10780<T> = {
  readonly [P in keyof T]: DeepReadonly10780<T[P]>;
};

type UnionToIntersection10780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10780<T> = UnionToIntersection10780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10780<T extends unknown[], V> = [...T, V];

type TuplifyUnion10780<T, L = LastOf10780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10780<TuplifyUnion10780<Exclude<T, L>>, L>;

type DeepPartial10780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10780<T[P]> }
  : T;

type Paths10780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10780<K, Paths10780<T[K], Prev10780[D]>> : never }[keyof T]
  : never;

type Prev10780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10780 {
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

type ConfigPaths10780 = Paths10780<NestedConfig10780>;

interface HeavyProps10780 {
  config: DeepPartial10780<NestedConfig10780>;
  path?: ConfigPaths10780;
}

const HeavyComponent10780 = memo(function HeavyComponent10780({ config }: HeavyProps10780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10780.displayName = 'HeavyComponent10780';
export default HeavyComponent10780;
