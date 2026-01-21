'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3498<T> = T extends (infer U)[]
  ? DeepReadonlyArray3498<U>
  : T extends object
  ? DeepReadonlyObject3498<T>
  : T;

interface DeepReadonlyArray3498<T> extends ReadonlyArray<DeepReadonly3498<T>> {}

type DeepReadonlyObject3498<T> = {
  readonly [P in keyof T]: DeepReadonly3498<T[P]>;
};

type UnionToIntersection3498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3498<T> = UnionToIntersection3498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3498<T extends unknown[], V> = [...T, V];

type TuplifyUnion3498<T, L = LastOf3498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3498<TuplifyUnion3498<Exclude<T, L>>, L>;

type DeepPartial3498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3498<T[P]> }
  : T;

type Paths3498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3498<K, Paths3498<T[K], Prev3498[D]>> : never }[keyof T]
  : never;

type Prev3498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3498 {
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

type ConfigPaths3498 = Paths3498<NestedConfig3498>;

interface HeavyProps3498 {
  config: DeepPartial3498<NestedConfig3498>;
  path?: ConfigPaths3498;
}

const HeavyComponent3498 = memo(function HeavyComponent3498({ config }: HeavyProps3498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3498.displayName = 'HeavyComponent3498';
export default HeavyComponent3498;
