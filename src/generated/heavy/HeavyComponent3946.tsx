'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3946<T> = T extends (infer U)[]
  ? DeepReadonlyArray3946<U>
  : T extends object
  ? DeepReadonlyObject3946<T>
  : T;

interface DeepReadonlyArray3946<T> extends ReadonlyArray<DeepReadonly3946<T>> {}

type DeepReadonlyObject3946<T> = {
  readonly [P in keyof T]: DeepReadonly3946<T[P]>;
};

type UnionToIntersection3946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3946<T> = UnionToIntersection3946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3946<T extends unknown[], V> = [...T, V];

type TuplifyUnion3946<T, L = LastOf3946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3946<TuplifyUnion3946<Exclude<T, L>>, L>;

type DeepPartial3946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3946<T[P]> }
  : T;

type Paths3946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3946<K, Paths3946<T[K], Prev3946[D]>> : never }[keyof T]
  : never;

type Prev3946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3946 {
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

type ConfigPaths3946 = Paths3946<NestedConfig3946>;

interface HeavyProps3946 {
  config: DeepPartial3946<NestedConfig3946>;
  path?: ConfigPaths3946;
}

const HeavyComponent3946 = memo(function HeavyComponent3946({ config }: HeavyProps3946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3946.displayName = 'HeavyComponent3946';
export default HeavyComponent3946;
