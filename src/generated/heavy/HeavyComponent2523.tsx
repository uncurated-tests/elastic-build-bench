'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2523<T> = T extends (infer U)[]
  ? DeepReadonlyArray2523<U>
  : T extends object
  ? DeepReadonlyObject2523<T>
  : T;

interface DeepReadonlyArray2523<T> extends ReadonlyArray<DeepReadonly2523<T>> {}

type DeepReadonlyObject2523<T> = {
  readonly [P in keyof T]: DeepReadonly2523<T[P]>;
};

type UnionToIntersection2523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2523<T> = UnionToIntersection2523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2523<T extends unknown[], V> = [...T, V];

type TuplifyUnion2523<T, L = LastOf2523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2523<TuplifyUnion2523<Exclude<T, L>>, L>;

type DeepPartial2523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2523<T[P]> }
  : T;

type Paths2523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2523<K, Paths2523<T[K], Prev2523[D]>> : never }[keyof T]
  : never;

type Prev2523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2523 {
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

type ConfigPaths2523 = Paths2523<NestedConfig2523>;

interface HeavyProps2523 {
  config: DeepPartial2523<NestedConfig2523>;
  path?: ConfigPaths2523;
}

const HeavyComponent2523 = memo(function HeavyComponent2523({ config }: HeavyProps2523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2523.displayName = 'HeavyComponent2523';
export default HeavyComponent2523;
