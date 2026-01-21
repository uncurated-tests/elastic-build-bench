'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly70<T> = T extends (infer U)[]
  ? DeepReadonlyArray70<U>
  : T extends object
  ? DeepReadonlyObject70<T>
  : T;

interface DeepReadonlyArray70<T> extends ReadonlyArray<DeepReadonly70<T>> {}

type DeepReadonlyObject70<T> = {
  readonly [P in keyof T]: DeepReadonly70<T[P]>;
};

type UnionToIntersection70<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf70<T> = UnionToIntersection70<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push70<T extends unknown[], V> = [...T, V];

type TuplifyUnion70<T, L = LastOf70<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push70<TuplifyUnion70<Exclude<T, L>>, L>;

type DeepPartial70<T> = T extends object
  ? { [P in keyof T]?: DeepPartial70<T[P]> }
  : T;

type Paths70<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join70<K, Paths70<T[K], Prev70[D]>> : never }[keyof T]
  : never;

type Prev70 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join70<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig70 {
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

type ConfigPaths70 = Paths70<NestedConfig70>;

interface HeavyProps70 {
  config: DeepPartial70<NestedConfig70>;
  path?: ConfigPaths70;
}

const HeavyComponent70 = memo(function HeavyComponent70({ config }: HeavyProps70) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 70) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-70 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H70: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent70.displayName = 'HeavyComponent70';
export default HeavyComponent70;
