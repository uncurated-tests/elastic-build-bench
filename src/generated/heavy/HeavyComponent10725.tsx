'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10725<T> = T extends (infer U)[]
  ? DeepReadonlyArray10725<U>
  : T extends object
  ? DeepReadonlyObject10725<T>
  : T;

interface DeepReadonlyArray10725<T> extends ReadonlyArray<DeepReadonly10725<T>> {}

type DeepReadonlyObject10725<T> = {
  readonly [P in keyof T]: DeepReadonly10725<T[P]>;
};

type UnionToIntersection10725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10725<T> = UnionToIntersection10725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10725<T extends unknown[], V> = [...T, V];

type TuplifyUnion10725<T, L = LastOf10725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10725<TuplifyUnion10725<Exclude<T, L>>, L>;

type DeepPartial10725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10725<T[P]> }
  : T;

type Paths10725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10725<K, Paths10725<T[K], Prev10725[D]>> : never }[keyof T]
  : never;

type Prev10725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10725 {
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

type ConfigPaths10725 = Paths10725<NestedConfig10725>;

interface HeavyProps10725 {
  config: DeepPartial10725<NestedConfig10725>;
  path?: ConfigPaths10725;
}

const HeavyComponent10725 = memo(function HeavyComponent10725({ config }: HeavyProps10725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10725.displayName = 'HeavyComponent10725';
export default HeavyComponent10725;
