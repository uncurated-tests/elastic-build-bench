'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10524<T> = T extends (infer U)[]
  ? DeepReadonlyArray10524<U>
  : T extends object
  ? DeepReadonlyObject10524<T>
  : T;

interface DeepReadonlyArray10524<T> extends ReadonlyArray<DeepReadonly10524<T>> {}

type DeepReadonlyObject10524<T> = {
  readonly [P in keyof T]: DeepReadonly10524<T[P]>;
};

type UnionToIntersection10524<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10524<T> = UnionToIntersection10524<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10524<T extends unknown[], V> = [...T, V];

type TuplifyUnion10524<T, L = LastOf10524<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10524<TuplifyUnion10524<Exclude<T, L>>, L>;

type DeepPartial10524<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10524<T[P]> }
  : T;

type Paths10524<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10524<K, Paths10524<T[K], Prev10524[D]>> : never }[keyof T]
  : never;

type Prev10524 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10524<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10524 {
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

type ConfigPaths10524 = Paths10524<NestedConfig10524>;

interface HeavyProps10524 {
  config: DeepPartial10524<NestedConfig10524>;
  path?: ConfigPaths10524;
}

const HeavyComponent10524 = memo(function HeavyComponent10524({ config }: HeavyProps10524) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10524) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10524 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10524: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10524.displayName = 'HeavyComponent10524';
export default HeavyComponent10524;
