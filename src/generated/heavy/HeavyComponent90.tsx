'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly90<T> = T extends (infer U)[]
  ? DeepReadonlyArray90<U>
  : T extends object
  ? DeepReadonlyObject90<T>
  : T;

interface DeepReadonlyArray90<T> extends ReadonlyArray<DeepReadonly90<T>> {}

type DeepReadonlyObject90<T> = {
  readonly [P in keyof T]: DeepReadonly90<T[P]>;
};

type UnionToIntersection90<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf90<T> = UnionToIntersection90<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push90<T extends unknown[], V> = [...T, V];

type TuplifyUnion90<T, L = LastOf90<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push90<TuplifyUnion90<Exclude<T, L>>, L>;

type DeepPartial90<T> = T extends object
  ? { [P in keyof T]?: DeepPartial90<T[P]> }
  : T;

type Paths90<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join90<K, Paths90<T[K], Prev90[D]>> : never }[keyof T]
  : never;

type Prev90 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join90<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig90 {
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

type ConfigPaths90 = Paths90<NestedConfig90>;

interface HeavyProps90 {
  config: DeepPartial90<NestedConfig90>;
  path?: ConfigPaths90;
}

const HeavyComponent90 = memo(function HeavyComponent90({ config }: HeavyProps90) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 90) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-90 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H90: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent90.displayName = 'HeavyComponent90';
export default HeavyComponent90;
