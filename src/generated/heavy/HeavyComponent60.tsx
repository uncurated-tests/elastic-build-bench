'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly60<T> = T extends (infer U)[]
  ? DeepReadonlyArray60<U>
  : T extends object
  ? DeepReadonlyObject60<T>
  : T;

interface DeepReadonlyArray60<T> extends ReadonlyArray<DeepReadonly60<T>> {}

type DeepReadonlyObject60<T> = {
  readonly [P in keyof T]: DeepReadonly60<T[P]>;
};

type UnionToIntersection60<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf60<T> = UnionToIntersection60<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push60<T extends unknown[], V> = [...T, V];

type TuplifyUnion60<T, L = LastOf60<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push60<TuplifyUnion60<Exclude<T, L>>, L>;

type DeepPartial60<T> = T extends object
  ? { [P in keyof T]?: DeepPartial60<T[P]> }
  : T;

type Paths60<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join60<K, Paths60<T[K], Prev60[D]>> : never }[keyof T]
  : never;

type Prev60 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join60<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig60 {
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

type ConfigPaths60 = Paths60<NestedConfig60>;

interface HeavyProps60 {
  config: DeepPartial60<NestedConfig60>;
  path?: ConfigPaths60;
}

const HeavyComponent60 = memo(function HeavyComponent60({ config }: HeavyProps60) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 60) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-60 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H60: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent60.displayName = 'HeavyComponent60';
export default HeavyComponent60;
