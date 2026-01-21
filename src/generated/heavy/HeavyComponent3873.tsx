'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3873<T> = T extends (infer U)[]
  ? DeepReadonlyArray3873<U>
  : T extends object
  ? DeepReadonlyObject3873<T>
  : T;

interface DeepReadonlyArray3873<T> extends ReadonlyArray<DeepReadonly3873<T>> {}

type DeepReadonlyObject3873<T> = {
  readonly [P in keyof T]: DeepReadonly3873<T[P]>;
};

type UnionToIntersection3873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3873<T> = UnionToIntersection3873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3873<T extends unknown[], V> = [...T, V];

type TuplifyUnion3873<T, L = LastOf3873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3873<TuplifyUnion3873<Exclude<T, L>>, L>;

type DeepPartial3873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3873<T[P]> }
  : T;

type Paths3873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3873<K, Paths3873<T[K], Prev3873[D]>> : never }[keyof T]
  : never;

type Prev3873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3873 {
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

type ConfigPaths3873 = Paths3873<NestedConfig3873>;

interface HeavyProps3873 {
  config: DeepPartial3873<NestedConfig3873>;
  path?: ConfigPaths3873;
}

const HeavyComponent3873 = memo(function HeavyComponent3873({ config }: HeavyProps3873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3873.displayName = 'HeavyComponent3873';
export default HeavyComponent3873;
