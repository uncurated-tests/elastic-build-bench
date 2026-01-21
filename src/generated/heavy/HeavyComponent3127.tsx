'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3127<T> = T extends (infer U)[]
  ? DeepReadonlyArray3127<U>
  : T extends object
  ? DeepReadonlyObject3127<T>
  : T;

interface DeepReadonlyArray3127<T> extends ReadonlyArray<DeepReadonly3127<T>> {}

type DeepReadonlyObject3127<T> = {
  readonly [P in keyof T]: DeepReadonly3127<T[P]>;
};

type UnionToIntersection3127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3127<T> = UnionToIntersection3127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3127<T extends unknown[], V> = [...T, V];

type TuplifyUnion3127<T, L = LastOf3127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3127<TuplifyUnion3127<Exclude<T, L>>, L>;

type DeepPartial3127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3127<T[P]> }
  : T;

type Paths3127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3127<K, Paths3127<T[K], Prev3127[D]>> : never }[keyof T]
  : never;

type Prev3127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3127 {
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

type ConfigPaths3127 = Paths3127<NestedConfig3127>;

interface HeavyProps3127 {
  config: DeepPartial3127<NestedConfig3127>;
  path?: ConfigPaths3127;
}

const HeavyComponent3127 = memo(function HeavyComponent3127({ config }: HeavyProps3127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3127.displayName = 'HeavyComponent3127';
export default HeavyComponent3127;
