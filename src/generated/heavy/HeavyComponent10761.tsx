'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10761<T> = T extends (infer U)[]
  ? DeepReadonlyArray10761<U>
  : T extends object
  ? DeepReadonlyObject10761<T>
  : T;

interface DeepReadonlyArray10761<T> extends ReadonlyArray<DeepReadonly10761<T>> {}

type DeepReadonlyObject10761<T> = {
  readonly [P in keyof T]: DeepReadonly10761<T[P]>;
};

type UnionToIntersection10761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10761<T> = UnionToIntersection10761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10761<T extends unknown[], V> = [...T, V];

type TuplifyUnion10761<T, L = LastOf10761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10761<TuplifyUnion10761<Exclude<T, L>>, L>;

type DeepPartial10761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10761<T[P]> }
  : T;

type Paths10761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10761<K, Paths10761<T[K], Prev10761[D]>> : never }[keyof T]
  : never;

type Prev10761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10761 {
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

type ConfigPaths10761 = Paths10761<NestedConfig10761>;

interface HeavyProps10761 {
  config: DeepPartial10761<NestedConfig10761>;
  path?: ConfigPaths10761;
}

const HeavyComponent10761 = memo(function HeavyComponent10761({ config }: HeavyProps10761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10761.displayName = 'HeavyComponent10761';
export default HeavyComponent10761;
