'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10220<T> = T extends (infer U)[]
  ? DeepReadonlyArray10220<U>
  : T extends object
  ? DeepReadonlyObject10220<T>
  : T;

interface DeepReadonlyArray10220<T> extends ReadonlyArray<DeepReadonly10220<T>> {}

type DeepReadonlyObject10220<T> = {
  readonly [P in keyof T]: DeepReadonly10220<T[P]>;
};

type UnionToIntersection10220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10220<T> = UnionToIntersection10220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10220<T extends unknown[], V> = [...T, V];

type TuplifyUnion10220<T, L = LastOf10220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10220<TuplifyUnion10220<Exclude<T, L>>, L>;

type DeepPartial10220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10220<T[P]> }
  : T;

type Paths10220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10220<K, Paths10220<T[K], Prev10220[D]>> : never }[keyof T]
  : never;

type Prev10220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10220 {
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

type ConfigPaths10220 = Paths10220<NestedConfig10220>;

interface HeavyProps10220 {
  config: DeepPartial10220<NestedConfig10220>;
  path?: ConfigPaths10220;
}

const HeavyComponent10220 = memo(function HeavyComponent10220({ config }: HeavyProps10220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10220.displayName = 'HeavyComponent10220';
export default HeavyComponent10220;
