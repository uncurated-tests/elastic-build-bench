'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3237<T> = T extends (infer U)[]
  ? DeepReadonlyArray3237<U>
  : T extends object
  ? DeepReadonlyObject3237<T>
  : T;

interface DeepReadonlyArray3237<T> extends ReadonlyArray<DeepReadonly3237<T>> {}

type DeepReadonlyObject3237<T> = {
  readonly [P in keyof T]: DeepReadonly3237<T[P]>;
};

type UnionToIntersection3237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3237<T> = UnionToIntersection3237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3237<T extends unknown[], V> = [...T, V];

type TuplifyUnion3237<T, L = LastOf3237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3237<TuplifyUnion3237<Exclude<T, L>>, L>;

type DeepPartial3237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3237<T[P]> }
  : T;

type Paths3237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3237<K, Paths3237<T[K], Prev3237[D]>> : never }[keyof T]
  : never;

type Prev3237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3237 {
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

type ConfigPaths3237 = Paths3237<NestedConfig3237>;

interface HeavyProps3237 {
  config: DeepPartial3237<NestedConfig3237>;
  path?: ConfigPaths3237;
}

const HeavyComponent3237 = memo(function HeavyComponent3237({ config }: HeavyProps3237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3237.displayName = 'HeavyComponent3237';
export default HeavyComponent3237;
