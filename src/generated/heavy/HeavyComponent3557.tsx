'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3557<T> = T extends (infer U)[]
  ? DeepReadonlyArray3557<U>
  : T extends object
  ? DeepReadonlyObject3557<T>
  : T;

interface DeepReadonlyArray3557<T> extends ReadonlyArray<DeepReadonly3557<T>> {}

type DeepReadonlyObject3557<T> = {
  readonly [P in keyof T]: DeepReadonly3557<T[P]>;
};

type UnionToIntersection3557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3557<T> = UnionToIntersection3557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3557<T extends unknown[], V> = [...T, V];

type TuplifyUnion3557<T, L = LastOf3557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3557<TuplifyUnion3557<Exclude<T, L>>, L>;

type DeepPartial3557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3557<T[P]> }
  : T;

type Paths3557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3557<K, Paths3557<T[K], Prev3557[D]>> : never }[keyof T]
  : never;

type Prev3557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3557 {
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

type ConfigPaths3557 = Paths3557<NestedConfig3557>;

interface HeavyProps3557 {
  config: DeepPartial3557<NestedConfig3557>;
  path?: ConfigPaths3557;
}

const HeavyComponent3557 = memo(function HeavyComponent3557({ config }: HeavyProps3557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3557.displayName = 'HeavyComponent3557';
export default HeavyComponent3557;
