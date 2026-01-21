'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10213<T> = T extends (infer U)[]
  ? DeepReadonlyArray10213<U>
  : T extends object
  ? DeepReadonlyObject10213<T>
  : T;

interface DeepReadonlyArray10213<T> extends ReadonlyArray<DeepReadonly10213<T>> {}

type DeepReadonlyObject10213<T> = {
  readonly [P in keyof T]: DeepReadonly10213<T[P]>;
};

type UnionToIntersection10213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10213<T> = UnionToIntersection10213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10213<T extends unknown[], V> = [...T, V];

type TuplifyUnion10213<T, L = LastOf10213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10213<TuplifyUnion10213<Exclude<T, L>>, L>;

type DeepPartial10213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10213<T[P]> }
  : T;

type Paths10213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10213<K, Paths10213<T[K], Prev10213[D]>> : never }[keyof T]
  : never;

type Prev10213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10213 {
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

type ConfigPaths10213 = Paths10213<NestedConfig10213>;

interface HeavyProps10213 {
  config: DeepPartial10213<NestedConfig10213>;
  path?: ConfigPaths10213;
}

const HeavyComponent10213 = memo(function HeavyComponent10213({ config }: HeavyProps10213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10213.displayName = 'HeavyComponent10213';
export default HeavyComponent10213;
