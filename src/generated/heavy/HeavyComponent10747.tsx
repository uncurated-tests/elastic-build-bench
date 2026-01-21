'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10747<T> = T extends (infer U)[]
  ? DeepReadonlyArray10747<U>
  : T extends object
  ? DeepReadonlyObject10747<T>
  : T;

interface DeepReadonlyArray10747<T> extends ReadonlyArray<DeepReadonly10747<T>> {}

type DeepReadonlyObject10747<T> = {
  readonly [P in keyof T]: DeepReadonly10747<T[P]>;
};

type UnionToIntersection10747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10747<T> = UnionToIntersection10747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10747<T extends unknown[], V> = [...T, V];

type TuplifyUnion10747<T, L = LastOf10747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10747<TuplifyUnion10747<Exclude<T, L>>, L>;

type DeepPartial10747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10747<T[P]> }
  : T;

type Paths10747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10747<K, Paths10747<T[K], Prev10747[D]>> : never }[keyof T]
  : never;

type Prev10747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10747 {
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

type ConfigPaths10747 = Paths10747<NestedConfig10747>;

interface HeavyProps10747 {
  config: DeepPartial10747<NestedConfig10747>;
  path?: ConfigPaths10747;
}

const HeavyComponent10747 = memo(function HeavyComponent10747({ config }: HeavyProps10747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10747.displayName = 'HeavyComponent10747';
export default HeavyComponent10747;
