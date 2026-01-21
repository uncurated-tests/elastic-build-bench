'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3296<T> = T extends (infer U)[]
  ? DeepReadonlyArray3296<U>
  : T extends object
  ? DeepReadonlyObject3296<T>
  : T;

interface DeepReadonlyArray3296<T> extends ReadonlyArray<DeepReadonly3296<T>> {}

type DeepReadonlyObject3296<T> = {
  readonly [P in keyof T]: DeepReadonly3296<T[P]>;
};

type UnionToIntersection3296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3296<T> = UnionToIntersection3296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3296<T extends unknown[], V> = [...T, V];

type TuplifyUnion3296<T, L = LastOf3296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3296<TuplifyUnion3296<Exclude<T, L>>, L>;

type DeepPartial3296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3296<T[P]> }
  : T;

type Paths3296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3296<K, Paths3296<T[K], Prev3296[D]>> : never }[keyof T]
  : never;

type Prev3296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3296 {
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

type ConfigPaths3296 = Paths3296<NestedConfig3296>;

interface HeavyProps3296 {
  config: DeepPartial3296<NestedConfig3296>;
  path?: ConfigPaths3296;
}

const HeavyComponent3296 = memo(function HeavyComponent3296({ config }: HeavyProps3296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3296.displayName = 'HeavyComponent3296';
export default HeavyComponent3296;
