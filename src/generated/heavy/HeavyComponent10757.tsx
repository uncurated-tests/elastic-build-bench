'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10757<T> = T extends (infer U)[]
  ? DeepReadonlyArray10757<U>
  : T extends object
  ? DeepReadonlyObject10757<T>
  : T;

interface DeepReadonlyArray10757<T> extends ReadonlyArray<DeepReadonly10757<T>> {}

type DeepReadonlyObject10757<T> = {
  readonly [P in keyof T]: DeepReadonly10757<T[P]>;
};

type UnionToIntersection10757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10757<T> = UnionToIntersection10757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10757<T extends unknown[], V> = [...T, V];

type TuplifyUnion10757<T, L = LastOf10757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10757<TuplifyUnion10757<Exclude<T, L>>, L>;

type DeepPartial10757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10757<T[P]> }
  : T;

type Paths10757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10757<K, Paths10757<T[K], Prev10757[D]>> : never }[keyof T]
  : never;

type Prev10757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10757 {
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

type ConfigPaths10757 = Paths10757<NestedConfig10757>;

interface HeavyProps10757 {
  config: DeepPartial10757<NestedConfig10757>;
  path?: ConfigPaths10757;
}

const HeavyComponent10757 = memo(function HeavyComponent10757({ config }: HeavyProps10757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10757.displayName = 'HeavyComponent10757';
export default HeavyComponent10757;
