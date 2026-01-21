'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3137<T> = T extends (infer U)[]
  ? DeepReadonlyArray3137<U>
  : T extends object
  ? DeepReadonlyObject3137<T>
  : T;

interface DeepReadonlyArray3137<T> extends ReadonlyArray<DeepReadonly3137<T>> {}

type DeepReadonlyObject3137<T> = {
  readonly [P in keyof T]: DeepReadonly3137<T[P]>;
};

type UnionToIntersection3137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3137<T> = UnionToIntersection3137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3137<T extends unknown[], V> = [...T, V];

type TuplifyUnion3137<T, L = LastOf3137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3137<TuplifyUnion3137<Exclude<T, L>>, L>;

type DeepPartial3137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3137<T[P]> }
  : T;

type Paths3137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3137<K, Paths3137<T[K], Prev3137[D]>> : never }[keyof T]
  : never;

type Prev3137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3137 {
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

type ConfigPaths3137 = Paths3137<NestedConfig3137>;

interface HeavyProps3137 {
  config: DeepPartial3137<NestedConfig3137>;
  path?: ConfigPaths3137;
}

const HeavyComponent3137 = memo(function HeavyComponent3137({ config }: HeavyProps3137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3137.displayName = 'HeavyComponent3137';
export default HeavyComponent3137;
