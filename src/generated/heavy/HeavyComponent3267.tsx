'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3267<T> = T extends (infer U)[]
  ? DeepReadonlyArray3267<U>
  : T extends object
  ? DeepReadonlyObject3267<T>
  : T;

interface DeepReadonlyArray3267<T> extends ReadonlyArray<DeepReadonly3267<T>> {}

type DeepReadonlyObject3267<T> = {
  readonly [P in keyof T]: DeepReadonly3267<T[P]>;
};

type UnionToIntersection3267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3267<T> = UnionToIntersection3267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3267<T extends unknown[], V> = [...T, V];

type TuplifyUnion3267<T, L = LastOf3267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3267<TuplifyUnion3267<Exclude<T, L>>, L>;

type DeepPartial3267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3267<T[P]> }
  : T;

type Paths3267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3267<K, Paths3267<T[K], Prev3267[D]>> : never }[keyof T]
  : never;

type Prev3267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3267 {
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

type ConfigPaths3267 = Paths3267<NestedConfig3267>;

interface HeavyProps3267 {
  config: DeepPartial3267<NestedConfig3267>;
  path?: ConfigPaths3267;
}

const HeavyComponent3267 = memo(function HeavyComponent3267({ config }: HeavyProps3267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3267.displayName = 'HeavyComponent3267';
export default HeavyComponent3267;
