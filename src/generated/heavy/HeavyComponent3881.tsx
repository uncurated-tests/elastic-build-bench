'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3881<T> = T extends (infer U)[]
  ? DeepReadonlyArray3881<U>
  : T extends object
  ? DeepReadonlyObject3881<T>
  : T;

interface DeepReadonlyArray3881<T> extends ReadonlyArray<DeepReadonly3881<T>> {}

type DeepReadonlyObject3881<T> = {
  readonly [P in keyof T]: DeepReadonly3881<T[P]>;
};

type UnionToIntersection3881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3881<T> = UnionToIntersection3881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3881<T extends unknown[], V> = [...T, V];

type TuplifyUnion3881<T, L = LastOf3881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3881<TuplifyUnion3881<Exclude<T, L>>, L>;

type DeepPartial3881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3881<T[P]> }
  : T;

type Paths3881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3881<K, Paths3881<T[K], Prev3881[D]>> : never }[keyof T]
  : never;

type Prev3881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3881 {
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

type ConfigPaths3881 = Paths3881<NestedConfig3881>;

interface HeavyProps3881 {
  config: DeepPartial3881<NestedConfig3881>;
  path?: ConfigPaths3881;
}

const HeavyComponent3881 = memo(function HeavyComponent3881({ config }: HeavyProps3881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3881.displayName = 'HeavyComponent3881';
export default HeavyComponent3881;
