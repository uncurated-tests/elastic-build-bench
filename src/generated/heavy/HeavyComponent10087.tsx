'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10087<T> = T extends (infer U)[]
  ? DeepReadonlyArray10087<U>
  : T extends object
  ? DeepReadonlyObject10087<T>
  : T;

interface DeepReadonlyArray10087<T> extends ReadonlyArray<DeepReadonly10087<T>> {}

type DeepReadonlyObject10087<T> = {
  readonly [P in keyof T]: DeepReadonly10087<T[P]>;
};

type UnionToIntersection10087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10087<T> = UnionToIntersection10087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10087<T extends unknown[], V> = [...T, V];

type TuplifyUnion10087<T, L = LastOf10087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10087<TuplifyUnion10087<Exclude<T, L>>, L>;

type DeepPartial10087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10087<T[P]> }
  : T;

type Paths10087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10087<K, Paths10087<T[K], Prev10087[D]>> : never }[keyof T]
  : never;

type Prev10087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10087 {
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

type ConfigPaths10087 = Paths10087<NestedConfig10087>;

interface HeavyProps10087 {
  config: DeepPartial10087<NestedConfig10087>;
  path?: ConfigPaths10087;
}

const HeavyComponent10087 = memo(function HeavyComponent10087({ config }: HeavyProps10087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10087.displayName = 'HeavyComponent10087';
export default HeavyComponent10087;
