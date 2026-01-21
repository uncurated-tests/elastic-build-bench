'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10756<T> = T extends (infer U)[]
  ? DeepReadonlyArray10756<U>
  : T extends object
  ? DeepReadonlyObject10756<T>
  : T;

interface DeepReadonlyArray10756<T> extends ReadonlyArray<DeepReadonly10756<T>> {}

type DeepReadonlyObject10756<T> = {
  readonly [P in keyof T]: DeepReadonly10756<T[P]>;
};

type UnionToIntersection10756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10756<T> = UnionToIntersection10756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10756<T extends unknown[], V> = [...T, V];

type TuplifyUnion10756<T, L = LastOf10756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10756<TuplifyUnion10756<Exclude<T, L>>, L>;

type DeepPartial10756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10756<T[P]> }
  : T;

type Paths10756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10756<K, Paths10756<T[K], Prev10756[D]>> : never }[keyof T]
  : never;

type Prev10756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10756 {
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

type ConfigPaths10756 = Paths10756<NestedConfig10756>;

interface HeavyProps10756 {
  config: DeepPartial10756<NestedConfig10756>;
  path?: ConfigPaths10756;
}

const HeavyComponent10756 = memo(function HeavyComponent10756({ config }: HeavyProps10756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10756.displayName = 'HeavyComponent10756';
export default HeavyComponent10756;
