'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3480<T> = T extends (infer U)[]
  ? DeepReadonlyArray3480<U>
  : T extends object
  ? DeepReadonlyObject3480<T>
  : T;

interface DeepReadonlyArray3480<T> extends ReadonlyArray<DeepReadonly3480<T>> {}

type DeepReadonlyObject3480<T> = {
  readonly [P in keyof T]: DeepReadonly3480<T[P]>;
};

type UnionToIntersection3480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3480<T> = UnionToIntersection3480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3480<T extends unknown[], V> = [...T, V];

type TuplifyUnion3480<T, L = LastOf3480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3480<TuplifyUnion3480<Exclude<T, L>>, L>;

type DeepPartial3480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3480<T[P]> }
  : T;

type Paths3480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3480<K, Paths3480<T[K], Prev3480[D]>> : never }[keyof T]
  : never;

type Prev3480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3480 {
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

type ConfigPaths3480 = Paths3480<NestedConfig3480>;

interface HeavyProps3480 {
  config: DeepPartial3480<NestedConfig3480>;
  path?: ConfigPaths3480;
}

const HeavyComponent3480 = memo(function HeavyComponent3480({ config }: HeavyProps3480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3480.displayName = 'HeavyComponent3480';
export default HeavyComponent3480;
