'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10393<T> = T extends (infer U)[]
  ? DeepReadonlyArray10393<U>
  : T extends object
  ? DeepReadonlyObject10393<T>
  : T;

interface DeepReadonlyArray10393<T> extends ReadonlyArray<DeepReadonly10393<T>> {}

type DeepReadonlyObject10393<T> = {
  readonly [P in keyof T]: DeepReadonly10393<T[P]>;
};

type UnionToIntersection10393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10393<T> = UnionToIntersection10393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10393<T extends unknown[], V> = [...T, V];

type TuplifyUnion10393<T, L = LastOf10393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10393<TuplifyUnion10393<Exclude<T, L>>, L>;

type DeepPartial10393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10393<T[P]> }
  : T;

type Paths10393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10393<K, Paths10393<T[K], Prev10393[D]>> : never }[keyof T]
  : never;

type Prev10393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10393 {
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

type ConfigPaths10393 = Paths10393<NestedConfig10393>;

interface HeavyProps10393 {
  config: DeepPartial10393<NestedConfig10393>;
  path?: ConfigPaths10393;
}

const HeavyComponent10393 = memo(function HeavyComponent10393({ config }: HeavyProps10393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10393.displayName = 'HeavyComponent10393';
export default HeavyComponent10393;
