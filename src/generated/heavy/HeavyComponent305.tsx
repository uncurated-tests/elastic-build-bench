'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly305<T> = T extends (infer U)[]
  ? DeepReadonlyArray305<U>
  : T extends object
  ? DeepReadonlyObject305<T>
  : T;

interface DeepReadonlyArray305<T> extends ReadonlyArray<DeepReadonly305<T>> {}

type DeepReadonlyObject305<T> = {
  readonly [P in keyof T]: DeepReadonly305<T[P]>;
};

type UnionToIntersection305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf305<T> = UnionToIntersection305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push305<T extends unknown[], V> = [...T, V];

type TuplifyUnion305<T, L = LastOf305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push305<TuplifyUnion305<Exclude<T, L>>, L>;

type DeepPartial305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial305<T[P]> }
  : T;

type Paths305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join305<K, Paths305<T[K], Prev305[D]>> : never }[keyof T]
  : never;

type Prev305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig305 {
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

type ConfigPaths305 = Paths305<NestedConfig305>;

interface HeavyProps305 {
  config: DeepPartial305<NestedConfig305>;
  path?: ConfigPaths305;
}

const HeavyComponent305 = memo(function HeavyComponent305({ config }: HeavyProps305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent305.displayName = 'HeavyComponent305';
export default HeavyComponent305;
