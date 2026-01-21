'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2796<T> = T extends (infer U)[]
  ? DeepReadonlyArray2796<U>
  : T extends object
  ? DeepReadonlyObject2796<T>
  : T;

interface DeepReadonlyArray2796<T> extends ReadonlyArray<DeepReadonly2796<T>> {}

type DeepReadonlyObject2796<T> = {
  readonly [P in keyof T]: DeepReadonly2796<T[P]>;
};

type UnionToIntersection2796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2796<T> = UnionToIntersection2796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2796<T extends unknown[], V> = [...T, V];

type TuplifyUnion2796<T, L = LastOf2796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2796<TuplifyUnion2796<Exclude<T, L>>, L>;

type DeepPartial2796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2796<T[P]> }
  : T;

type Paths2796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2796<K, Paths2796<T[K], Prev2796[D]>> : never }[keyof T]
  : never;

type Prev2796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2796 {
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

type ConfigPaths2796 = Paths2796<NestedConfig2796>;

interface HeavyProps2796 {
  config: DeepPartial2796<NestedConfig2796>;
  path?: ConfigPaths2796;
}

const HeavyComponent2796 = memo(function HeavyComponent2796({ config }: HeavyProps2796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2796.displayName = 'HeavyComponent2796';
export default HeavyComponent2796;
