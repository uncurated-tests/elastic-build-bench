'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3775<T> = T extends (infer U)[]
  ? DeepReadonlyArray3775<U>
  : T extends object
  ? DeepReadonlyObject3775<T>
  : T;

interface DeepReadonlyArray3775<T> extends ReadonlyArray<DeepReadonly3775<T>> {}

type DeepReadonlyObject3775<T> = {
  readonly [P in keyof T]: DeepReadonly3775<T[P]>;
};

type UnionToIntersection3775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3775<T> = UnionToIntersection3775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3775<T extends unknown[], V> = [...T, V];

type TuplifyUnion3775<T, L = LastOf3775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3775<TuplifyUnion3775<Exclude<T, L>>, L>;

type DeepPartial3775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3775<T[P]> }
  : T;

type Paths3775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3775<K, Paths3775<T[K], Prev3775[D]>> : never }[keyof T]
  : never;

type Prev3775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3775 {
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

type ConfigPaths3775 = Paths3775<NestedConfig3775>;

interface HeavyProps3775 {
  config: DeepPartial3775<NestedConfig3775>;
  path?: ConfigPaths3775;
}

const HeavyComponent3775 = memo(function HeavyComponent3775({ config }: HeavyProps3775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3775.displayName = 'HeavyComponent3775';
export default HeavyComponent3775;
