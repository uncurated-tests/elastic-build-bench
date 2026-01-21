'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3862<T> = T extends (infer U)[]
  ? DeepReadonlyArray3862<U>
  : T extends object
  ? DeepReadonlyObject3862<T>
  : T;

interface DeepReadonlyArray3862<T> extends ReadonlyArray<DeepReadonly3862<T>> {}

type DeepReadonlyObject3862<T> = {
  readonly [P in keyof T]: DeepReadonly3862<T[P]>;
};

type UnionToIntersection3862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3862<T> = UnionToIntersection3862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3862<T extends unknown[], V> = [...T, V];

type TuplifyUnion3862<T, L = LastOf3862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3862<TuplifyUnion3862<Exclude<T, L>>, L>;

type DeepPartial3862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3862<T[P]> }
  : T;

type Paths3862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3862<K, Paths3862<T[K], Prev3862[D]>> : never }[keyof T]
  : never;

type Prev3862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3862 {
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

type ConfigPaths3862 = Paths3862<NestedConfig3862>;

interface HeavyProps3862 {
  config: DeepPartial3862<NestedConfig3862>;
  path?: ConfigPaths3862;
}

const HeavyComponent3862 = memo(function HeavyComponent3862({ config }: HeavyProps3862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3862.displayName = 'HeavyComponent3862';
export default HeavyComponent3862;
