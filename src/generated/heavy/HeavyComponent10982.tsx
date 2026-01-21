'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10982<T> = T extends (infer U)[]
  ? DeepReadonlyArray10982<U>
  : T extends object
  ? DeepReadonlyObject10982<T>
  : T;

interface DeepReadonlyArray10982<T> extends ReadonlyArray<DeepReadonly10982<T>> {}

type DeepReadonlyObject10982<T> = {
  readonly [P in keyof T]: DeepReadonly10982<T[P]>;
};

type UnionToIntersection10982<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10982<T> = UnionToIntersection10982<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10982<T extends unknown[], V> = [...T, V];

type TuplifyUnion10982<T, L = LastOf10982<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10982<TuplifyUnion10982<Exclude<T, L>>, L>;

type DeepPartial10982<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10982<T[P]> }
  : T;

type Paths10982<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10982<K, Paths10982<T[K], Prev10982[D]>> : never }[keyof T]
  : never;

type Prev10982 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10982<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10982 {
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

type ConfigPaths10982 = Paths10982<NestedConfig10982>;

interface HeavyProps10982 {
  config: DeepPartial10982<NestedConfig10982>;
  path?: ConfigPaths10982;
}

const HeavyComponent10982 = memo(function HeavyComponent10982({ config }: HeavyProps10982) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10982) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10982 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10982: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10982.displayName = 'HeavyComponent10982';
export default HeavyComponent10982;
