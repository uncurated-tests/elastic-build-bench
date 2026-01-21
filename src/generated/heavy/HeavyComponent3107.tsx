'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3107<T> = T extends (infer U)[]
  ? DeepReadonlyArray3107<U>
  : T extends object
  ? DeepReadonlyObject3107<T>
  : T;

interface DeepReadonlyArray3107<T> extends ReadonlyArray<DeepReadonly3107<T>> {}

type DeepReadonlyObject3107<T> = {
  readonly [P in keyof T]: DeepReadonly3107<T[P]>;
};

type UnionToIntersection3107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3107<T> = UnionToIntersection3107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3107<T extends unknown[], V> = [...T, V];

type TuplifyUnion3107<T, L = LastOf3107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3107<TuplifyUnion3107<Exclude<T, L>>, L>;

type DeepPartial3107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3107<T[P]> }
  : T;

type Paths3107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3107<K, Paths3107<T[K], Prev3107[D]>> : never }[keyof T]
  : never;

type Prev3107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3107 {
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

type ConfigPaths3107 = Paths3107<NestedConfig3107>;

interface HeavyProps3107 {
  config: DeepPartial3107<NestedConfig3107>;
  path?: ConfigPaths3107;
}

const HeavyComponent3107 = memo(function HeavyComponent3107({ config }: HeavyProps3107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3107.displayName = 'HeavyComponent3107';
export default HeavyComponent3107;
