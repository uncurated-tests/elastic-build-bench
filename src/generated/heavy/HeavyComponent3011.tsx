'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3011<T> = T extends (infer U)[]
  ? DeepReadonlyArray3011<U>
  : T extends object
  ? DeepReadonlyObject3011<T>
  : T;

interface DeepReadonlyArray3011<T> extends ReadonlyArray<DeepReadonly3011<T>> {}

type DeepReadonlyObject3011<T> = {
  readonly [P in keyof T]: DeepReadonly3011<T[P]>;
};

type UnionToIntersection3011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3011<T> = UnionToIntersection3011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3011<T extends unknown[], V> = [...T, V];

type TuplifyUnion3011<T, L = LastOf3011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3011<TuplifyUnion3011<Exclude<T, L>>, L>;

type DeepPartial3011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3011<T[P]> }
  : T;

type Paths3011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3011<K, Paths3011<T[K], Prev3011[D]>> : never }[keyof T]
  : never;

type Prev3011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3011 {
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

type ConfigPaths3011 = Paths3011<NestedConfig3011>;

interface HeavyProps3011 {
  config: DeepPartial3011<NestedConfig3011>;
  path?: ConfigPaths3011;
}

const HeavyComponent3011 = memo(function HeavyComponent3011({ config }: HeavyProps3011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3011.displayName = 'HeavyComponent3011';
export default HeavyComponent3011;
