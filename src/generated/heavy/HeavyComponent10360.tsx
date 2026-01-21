'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10360<T> = T extends (infer U)[]
  ? DeepReadonlyArray10360<U>
  : T extends object
  ? DeepReadonlyObject10360<T>
  : T;

interface DeepReadonlyArray10360<T> extends ReadonlyArray<DeepReadonly10360<T>> {}

type DeepReadonlyObject10360<T> = {
  readonly [P in keyof T]: DeepReadonly10360<T[P]>;
};

type UnionToIntersection10360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10360<T> = UnionToIntersection10360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10360<T extends unknown[], V> = [...T, V];

type TuplifyUnion10360<T, L = LastOf10360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10360<TuplifyUnion10360<Exclude<T, L>>, L>;

type DeepPartial10360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10360<T[P]> }
  : T;

type Paths10360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10360<K, Paths10360<T[K], Prev10360[D]>> : never }[keyof T]
  : never;

type Prev10360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10360 {
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

type ConfigPaths10360 = Paths10360<NestedConfig10360>;

interface HeavyProps10360 {
  config: DeepPartial10360<NestedConfig10360>;
  path?: ConfigPaths10360;
}

const HeavyComponent10360 = memo(function HeavyComponent10360({ config }: HeavyProps10360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10360.displayName = 'HeavyComponent10360';
export default HeavyComponent10360;
