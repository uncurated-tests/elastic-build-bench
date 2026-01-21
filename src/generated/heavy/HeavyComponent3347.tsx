'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3347<T> = T extends (infer U)[]
  ? DeepReadonlyArray3347<U>
  : T extends object
  ? DeepReadonlyObject3347<T>
  : T;

interface DeepReadonlyArray3347<T> extends ReadonlyArray<DeepReadonly3347<T>> {}

type DeepReadonlyObject3347<T> = {
  readonly [P in keyof T]: DeepReadonly3347<T[P]>;
};

type UnionToIntersection3347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3347<T> = UnionToIntersection3347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3347<T extends unknown[], V> = [...T, V];

type TuplifyUnion3347<T, L = LastOf3347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3347<TuplifyUnion3347<Exclude<T, L>>, L>;

type DeepPartial3347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3347<T[P]> }
  : T;

type Paths3347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3347<K, Paths3347<T[K], Prev3347[D]>> : never }[keyof T]
  : never;

type Prev3347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3347 {
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

type ConfigPaths3347 = Paths3347<NestedConfig3347>;

interface HeavyProps3347 {
  config: DeepPartial3347<NestedConfig3347>;
  path?: ConfigPaths3347;
}

const HeavyComponent3347 = memo(function HeavyComponent3347({ config }: HeavyProps3347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3347.displayName = 'HeavyComponent3347';
export default HeavyComponent3347;
