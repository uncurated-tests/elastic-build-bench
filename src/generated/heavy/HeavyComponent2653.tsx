'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2653<T> = T extends (infer U)[]
  ? DeepReadonlyArray2653<U>
  : T extends object
  ? DeepReadonlyObject2653<T>
  : T;

interface DeepReadonlyArray2653<T> extends ReadonlyArray<DeepReadonly2653<T>> {}

type DeepReadonlyObject2653<T> = {
  readonly [P in keyof T]: DeepReadonly2653<T[P]>;
};

type UnionToIntersection2653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2653<T> = UnionToIntersection2653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2653<T extends unknown[], V> = [...T, V];

type TuplifyUnion2653<T, L = LastOf2653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2653<TuplifyUnion2653<Exclude<T, L>>, L>;

type DeepPartial2653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2653<T[P]> }
  : T;

type Paths2653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2653<K, Paths2653<T[K], Prev2653[D]>> : never }[keyof T]
  : never;

type Prev2653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2653 {
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

type ConfigPaths2653 = Paths2653<NestedConfig2653>;

interface HeavyProps2653 {
  config: DeepPartial2653<NestedConfig2653>;
  path?: ConfigPaths2653;
}

const HeavyComponent2653 = memo(function HeavyComponent2653({ config }: HeavyProps2653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2653.displayName = 'HeavyComponent2653';
export default HeavyComponent2653;
