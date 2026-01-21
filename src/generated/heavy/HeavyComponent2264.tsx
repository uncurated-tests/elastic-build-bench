'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2264<T> = T extends (infer U)[]
  ? DeepReadonlyArray2264<U>
  : T extends object
  ? DeepReadonlyObject2264<T>
  : T;

interface DeepReadonlyArray2264<T> extends ReadonlyArray<DeepReadonly2264<T>> {}

type DeepReadonlyObject2264<T> = {
  readonly [P in keyof T]: DeepReadonly2264<T[P]>;
};

type UnionToIntersection2264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2264<T> = UnionToIntersection2264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2264<T extends unknown[], V> = [...T, V];

type TuplifyUnion2264<T, L = LastOf2264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2264<TuplifyUnion2264<Exclude<T, L>>, L>;

type DeepPartial2264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2264<T[P]> }
  : T;

type Paths2264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2264<K, Paths2264<T[K], Prev2264[D]>> : never }[keyof T]
  : never;

type Prev2264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2264 {
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

type ConfigPaths2264 = Paths2264<NestedConfig2264>;

interface HeavyProps2264 {
  config: DeepPartial2264<NestedConfig2264>;
  path?: ConfigPaths2264;
}

const HeavyComponent2264 = memo(function HeavyComponent2264({ config }: HeavyProps2264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2264.displayName = 'HeavyComponent2264';
export default HeavyComponent2264;
