'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10117<T> = T extends (infer U)[]
  ? DeepReadonlyArray10117<U>
  : T extends object
  ? DeepReadonlyObject10117<T>
  : T;

interface DeepReadonlyArray10117<T> extends ReadonlyArray<DeepReadonly10117<T>> {}

type DeepReadonlyObject10117<T> = {
  readonly [P in keyof T]: DeepReadonly10117<T[P]>;
};

type UnionToIntersection10117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10117<T> = UnionToIntersection10117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10117<T extends unknown[], V> = [...T, V];

type TuplifyUnion10117<T, L = LastOf10117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10117<TuplifyUnion10117<Exclude<T, L>>, L>;

type DeepPartial10117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10117<T[P]> }
  : T;

type Paths10117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10117<K, Paths10117<T[K], Prev10117[D]>> : never }[keyof T]
  : never;

type Prev10117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10117 {
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

type ConfigPaths10117 = Paths10117<NestedConfig10117>;

interface HeavyProps10117 {
  config: DeepPartial10117<NestedConfig10117>;
  path?: ConfigPaths10117;
}

const HeavyComponent10117 = memo(function HeavyComponent10117({ config }: HeavyProps10117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10117.displayName = 'HeavyComponent10117';
export default HeavyComponent10117;
