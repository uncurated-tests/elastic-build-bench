'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3375<T> = T extends (infer U)[]
  ? DeepReadonlyArray3375<U>
  : T extends object
  ? DeepReadonlyObject3375<T>
  : T;

interface DeepReadonlyArray3375<T> extends ReadonlyArray<DeepReadonly3375<T>> {}

type DeepReadonlyObject3375<T> = {
  readonly [P in keyof T]: DeepReadonly3375<T[P]>;
};

type UnionToIntersection3375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3375<T> = UnionToIntersection3375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3375<T extends unknown[], V> = [...T, V];

type TuplifyUnion3375<T, L = LastOf3375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3375<TuplifyUnion3375<Exclude<T, L>>, L>;

type DeepPartial3375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3375<T[P]> }
  : T;

type Paths3375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3375<K, Paths3375<T[K], Prev3375[D]>> : never }[keyof T]
  : never;

type Prev3375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3375 {
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

type ConfigPaths3375 = Paths3375<NestedConfig3375>;

interface HeavyProps3375 {
  config: DeepPartial3375<NestedConfig3375>;
  path?: ConfigPaths3375;
}

const HeavyComponent3375 = memo(function HeavyComponent3375({ config }: HeavyProps3375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3375.displayName = 'HeavyComponent3375';
export default HeavyComponent3375;
