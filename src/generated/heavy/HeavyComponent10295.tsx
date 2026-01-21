'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10295<T> = T extends (infer U)[]
  ? DeepReadonlyArray10295<U>
  : T extends object
  ? DeepReadonlyObject10295<T>
  : T;

interface DeepReadonlyArray10295<T> extends ReadonlyArray<DeepReadonly10295<T>> {}

type DeepReadonlyObject10295<T> = {
  readonly [P in keyof T]: DeepReadonly10295<T[P]>;
};

type UnionToIntersection10295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10295<T> = UnionToIntersection10295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10295<T extends unknown[], V> = [...T, V];

type TuplifyUnion10295<T, L = LastOf10295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10295<TuplifyUnion10295<Exclude<T, L>>, L>;

type DeepPartial10295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10295<T[P]> }
  : T;

type Paths10295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10295<K, Paths10295<T[K], Prev10295[D]>> : never }[keyof T]
  : never;

type Prev10295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10295 {
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

type ConfigPaths10295 = Paths10295<NestedConfig10295>;

interface HeavyProps10295 {
  config: DeepPartial10295<NestedConfig10295>;
  path?: ConfigPaths10295;
}

const HeavyComponent10295 = memo(function HeavyComponent10295({ config }: HeavyProps10295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10295.displayName = 'HeavyComponent10295';
export default HeavyComponent10295;
