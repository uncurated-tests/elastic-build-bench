'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10706<T> = T extends (infer U)[]
  ? DeepReadonlyArray10706<U>
  : T extends object
  ? DeepReadonlyObject10706<T>
  : T;

interface DeepReadonlyArray10706<T> extends ReadonlyArray<DeepReadonly10706<T>> {}

type DeepReadonlyObject10706<T> = {
  readonly [P in keyof T]: DeepReadonly10706<T[P]>;
};

type UnionToIntersection10706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10706<T> = UnionToIntersection10706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10706<T extends unknown[], V> = [...T, V];

type TuplifyUnion10706<T, L = LastOf10706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10706<TuplifyUnion10706<Exclude<T, L>>, L>;

type DeepPartial10706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10706<T[P]> }
  : T;

type Paths10706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10706<K, Paths10706<T[K], Prev10706[D]>> : never }[keyof T]
  : never;

type Prev10706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10706 {
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

type ConfigPaths10706 = Paths10706<NestedConfig10706>;

interface HeavyProps10706 {
  config: DeepPartial10706<NestedConfig10706>;
  path?: ConfigPaths10706;
}

const HeavyComponent10706 = memo(function HeavyComponent10706({ config }: HeavyProps10706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10706.displayName = 'HeavyComponent10706';
export default HeavyComponent10706;
