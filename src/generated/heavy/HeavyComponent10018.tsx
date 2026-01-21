'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10018<T> = T extends (infer U)[]
  ? DeepReadonlyArray10018<U>
  : T extends object
  ? DeepReadonlyObject10018<T>
  : T;

interface DeepReadonlyArray10018<T> extends ReadonlyArray<DeepReadonly10018<T>> {}

type DeepReadonlyObject10018<T> = {
  readonly [P in keyof T]: DeepReadonly10018<T[P]>;
};

type UnionToIntersection10018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10018<T> = UnionToIntersection10018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10018<T extends unknown[], V> = [...T, V];

type TuplifyUnion10018<T, L = LastOf10018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10018<TuplifyUnion10018<Exclude<T, L>>, L>;

type DeepPartial10018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10018<T[P]> }
  : T;

type Paths10018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10018<K, Paths10018<T[K], Prev10018[D]>> : never }[keyof T]
  : never;

type Prev10018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10018 {
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

type ConfigPaths10018 = Paths10018<NestedConfig10018>;

interface HeavyProps10018 {
  config: DeepPartial10018<NestedConfig10018>;
  path?: ConfigPaths10018;
}

const HeavyComponent10018 = memo(function HeavyComponent10018({ config }: HeavyProps10018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10018.displayName = 'HeavyComponent10018';
export default HeavyComponent10018;
