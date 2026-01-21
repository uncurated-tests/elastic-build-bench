'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10802<T> = T extends (infer U)[]
  ? DeepReadonlyArray10802<U>
  : T extends object
  ? DeepReadonlyObject10802<T>
  : T;

interface DeepReadonlyArray10802<T> extends ReadonlyArray<DeepReadonly10802<T>> {}

type DeepReadonlyObject10802<T> = {
  readonly [P in keyof T]: DeepReadonly10802<T[P]>;
};

type UnionToIntersection10802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10802<T> = UnionToIntersection10802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10802<T extends unknown[], V> = [...T, V];

type TuplifyUnion10802<T, L = LastOf10802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10802<TuplifyUnion10802<Exclude<T, L>>, L>;

type DeepPartial10802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10802<T[P]> }
  : T;

type Paths10802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10802<K, Paths10802<T[K], Prev10802[D]>> : never }[keyof T]
  : never;

type Prev10802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10802 {
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

type ConfigPaths10802 = Paths10802<NestedConfig10802>;

interface HeavyProps10802 {
  config: DeepPartial10802<NestedConfig10802>;
  path?: ConfigPaths10802;
}

const HeavyComponent10802 = memo(function HeavyComponent10802({ config }: HeavyProps10802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10802.displayName = 'HeavyComponent10802';
export default HeavyComponent10802;
