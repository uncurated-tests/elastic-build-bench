'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10887<T> = T extends (infer U)[]
  ? DeepReadonlyArray10887<U>
  : T extends object
  ? DeepReadonlyObject10887<T>
  : T;

interface DeepReadonlyArray10887<T> extends ReadonlyArray<DeepReadonly10887<T>> {}

type DeepReadonlyObject10887<T> = {
  readonly [P in keyof T]: DeepReadonly10887<T[P]>;
};

type UnionToIntersection10887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10887<T> = UnionToIntersection10887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10887<T extends unknown[], V> = [...T, V];

type TuplifyUnion10887<T, L = LastOf10887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10887<TuplifyUnion10887<Exclude<T, L>>, L>;

type DeepPartial10887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10887<T[P]> }
  : T;

type Paths10887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10887<K, Paths10887<T[K], Prev10887[D]>> : never }[keyof T]
  : never;

type Prev10887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10887 {
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

type ConfigPaths10887 = Paths10887<NestedConfig10887>;

interface HeavyProps10887 {
  config: DeepPartial10887<NestedConfig10887>;
  path?: ConfigPaths10887;
}

const HeavyComponent10887 = memo(function HeavyComponent10887({ config }: HeavyProps10887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10887.displayName = 'HeavyComponent10887';
export default HeavyComponent10887;
