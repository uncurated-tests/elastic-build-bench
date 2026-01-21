'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2296<T> = T extends (infer U)[]
  ? DeepReadonlyArray2296<U>
  : T extends object
  ? DeepReadonlyObject2296<T>
  : T;

interface DeepReadonlyArray2296<T> extends ReadonlyArray<DeepReadonly2296<T>> {}

type DeepReadonlyObject2296<T> = {
  readonly [P in keyof T]: DeepReadonly2296<T[P]>;
};

type UnionToIntersection2296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2296<T> = UnionToIntersection2296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2296<T extends unknown[], V> = [...T, V];

type TuplifyUnion2296<T, L = LastOf2296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2296<TuplifyUnion2296<Exclude<T, L>>, L>;

type DeepPartial2296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2296<T[P]> }
  : T;

type Paths2296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2296<K, Paths2296<T[K], Prev2296[D]>> : never }[keyof T]
  : never;

type Prev2296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2296 {
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

type ConfigPaths2296 = Paths2296<NestedConfig2296>;

interface HeavyProps2296 {
  config: DeepPartial2296<NestedConfig2296>;
  path?: ConfigPaths2296;
}

const HeavyComponent2296 = memo(function HeavyComponent2296({ config }: HeavyProps2296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2296.displayName = 'HeavyComponent2296';
export default HeavyComponent2296;
