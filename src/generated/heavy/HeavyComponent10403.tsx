'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10403<T> = T extends (infer U)[]
  ? DeepReadonlyArray10403<U>
  : T extends object
  ? DeepReadonlyObject10403<T>
  : T;

interface DeepReadonlyArray10403<T> extends ReadonlyArray<DeepReadonly10403<T>> {}

type DeepReadonlyObject10403<T> = {
  readonly [P in keyof T]: DeepReadonly10403<T[P]>;
};

type UnionToIntersection10403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10403<T> = UnionToIntersection10403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10403<T extends unknown[], V> = [...T, V];

type TuplifyUnion10403<T, L = LastOf10403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10403<TuplifyUnion10403<Exclude<T, L>>, L>;

type DeepPartial10403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10403<T[P]> }
  : T;

type Paths10403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10403<K, Paths10403<T[K], Prev10403[D]>> : never }[keyof T]
  : never;

type Prev10403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10403 {
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

type ConfigPaths10403 = Paths10403<NestedConfig10403>;

interface HeavyProps10403 {
  config: DeepPartial10403<NestedConfig10403>;
  path?: ConfigPaths10403;
}

const HeavyComponent10403 = memo(function HeavyComponent10403({ config }: HeavyProps10403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10403.displayName = 'HeavyComponent10403';
export default HeavyComponent10403;
