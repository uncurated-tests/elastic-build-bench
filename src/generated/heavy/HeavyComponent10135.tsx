'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10135<T> = T extends (infer U)[]
  ? DeepReadonlyArray10135<U>
  : T extends object
  ? DeepReadonlyObject10135<T>
  : T;

interface DeepReadonlyArray10135<T> extends ReadonlyArray<DeepReadonly10135<T>> {}

type DeepReadonlyObject10135<T> = {
  readonly [P in keyof T]: DeepReadonly10135<T[P]>;
};

type UnionToIntersection10135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10135<T> = UnionToIntersection10135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10135<T extends unknown[], V> = [...T, V];

type TuplifyUnion10135<T, L = LastOf10135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10135<TuplifyUnion10135<Exclude<T, L>>, L>;

type DeepPartial10135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10135<T[P]> }
  : T;

type Paths10135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10135<K, Paths10135<T[K], Prev10135[D]>> : never }[keyof T]
  : never;

type Prev10135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10135 {
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

type ConfigPaths10135 = Paths10135<NestedConfig10135>;

interface HeavyProps10135 {
  config: DeepPartial10135<NestedConfig10135>;
  path?: ConfigPaths10135;
}

const HeavyComponent10135 = memo(function HeavyComponent10135({ config }: HeavyProps10135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10135.displayName = 'HeavyComponent10135';
export default HeavyComponent10135;
