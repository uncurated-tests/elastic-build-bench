'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3637<T> = T extends (infer U)[]
  ? DeepReadonlyArray3637<U>
  : T extends object
  ? DeepReadonlyObject3637<T>
  : T;

interface DeepReadonlyArray3637<T> extends ReadonlyArray<DeepReadonly3637<T>> {}

type DeepReadonlyObject3637<T> = {
  readonly [P in keyof T]: DeepReadonly3637<T[P]>;
};

type UnionToIntersection3637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3637<T> = UnionToIntersection3637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3637<T extends unknown[], V> = [...T, V];

type TuplifyUnion3637<T, L = LastOf3637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3637<TuplifyUnion3637<Exclude<T, L>>, L>;

type DeepPartial3637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3637<T[P]> }
  : T;

type Paths3637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3637<K, Paths3637<T[K], Prev3637[D]>> : never }[keyof T]
  : never;

type Prev3637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3637 {
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

type ConfigPaths3637 = Paths3637<NestedConfig3637>;

interface HeavyProps3637 {
  config: DeepPartial3637<NestedConfig3637>;
  path?: ConfigPaths3637;
}

const HeavyComponent3637 = memo(function HeavyComponent3637({ config }: HeavyProps3637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3637.displayName = 'HeavyComponent3637';
export default HeavyComponent3637;
