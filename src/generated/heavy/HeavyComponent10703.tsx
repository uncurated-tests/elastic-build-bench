'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10703<T> = T extends (infer U)[]
  ? DeepReadonlyArray10703<U>
  : T extends object
  ? DeepReadonlyObject10703<T>
  : T;

interface DeepReadonlyArray10703<T> extends ReadonlyArray<DeepReadonly10703<T>> {}

type DeepReadonlyObject10703<T> = {
  readonly [P in keyof T]: DeepReadonly10703<T[P]>;
};

type UnionToIntersection10703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10703<T> = UnionToIntersection10703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10703<T extends unknown[], V> = [...T, V];

type TuplifyUnion10703<T, L = LastOf10703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10703<TuplifyUnion10703<Exclude<T, L>>, L>;

type DeepPartial10703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10703<T[P]> }
  : T;

type Paths10703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10703<K, Paths10703<T[K], Prev10703[D]>> : never }[keyof T]
  : never;

type Prev10703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10703 {
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

type ConfigPaths10703 = Paths10703<NestedConfig10703>;

interface HeavyProps10703 {
  config: DeepPartial10703<NestedConfig10703>;
  path?: ConfigPaths10703;
}

const HeavyComponent10703 = memo(function HeavyComponent10703({ config }: HeavyProps10703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10703.displayName = 'HeavyComponent10703';
export default HeavyComponent10703;
