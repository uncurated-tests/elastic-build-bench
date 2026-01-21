'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3004<T> = T extends (infer U)[]
  ? DeepReadonlyArray3004<U>
  : T extends object
  ? DeepReadonlyObject3004<T>
  : T;

interface DeepReadonlyArray3004<T> extends ReadonlyArray<DeepReadonly3004<T>> {}

type DeepReadonlyObject3004<T> = {
  readonly [P in keyof T]: DeepReadonly3004<T[P]>;
};

type UnionToIntersection3004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3004<T> = UnionToIntersection3004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3004<T extends unknown[], V> = [...T, V];

type TuplifyUnion3004<T, L = LastOf3004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3004<TuplifyUnion3004<Exclude<T, L>>, L>;

type DeepPartial3004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3004<T[P]> }
  : T;

type Paths3004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3004<K, Paths3004<T[K], Prev3004[D]>> : never }[keyof T]
  : never;

type Prev3004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3004 {
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

type ConfigPaths3004 = Paths3004<NestedConfig3004>;

interface HeavyProps3004 {
  config: DeepPartial3004<NestedConfig3004>;
  path?: ConfigPaths3004;
}

const HeavyComponent3004 = memo(function HeavyComponent3004({ config }: HeavyProps3004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3004.displayName = 'HeavyComponent3004';
export default HeavyComponent3004;
