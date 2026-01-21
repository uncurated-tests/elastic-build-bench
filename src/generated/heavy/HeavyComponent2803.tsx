'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2803<T> = T extends (infer U)[]
  ? DeepReadonlyArray2803<U>
  : T extends object
  ? DeepReadonlyObject2803<T>
  : T;

interface DeepReadonlyArray2803<T> extends ReadonlyArray<DeepReadonly2803<T>> {}

type DeepReadonlyObject2803<T> = {
  readonly [P in keyof T]: DeepReadonly2803<T[P]>;
};

type UnionToIntersection2803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2803<T> = UnionToIntersection2803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2803<T extends unknown[], V> = [...T, V];

type TuplifyUnion2803<T, L = LastOf2803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2803<TuplifyUnion2803<Exclude<T, L>>, L>;

type DeepPartial2803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2803<T[P]> }
  : T;

type Paths2803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2803<K, Paths2803<T[K], Prev2803[D]>> : never }[keyof T]
  : never;

type Prev2803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2803 {
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

type ConfigPaths2803 = Paths2803<NestedConfig2803>;

interface HeavyProps2803 {
  config: DeepPartial2803<NestedConfig2803>;
  path?: ConfigPaths2803;
}

const HeavyComponent2803 = memo(function HeavyComponent2803({ config }: HeavyProps2803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2803.displayName = 'HeavyComponent2803';
export default HeavyComponent2803;
