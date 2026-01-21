'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3410<T> = T extends (infer U)[]
  ? DeepReadonlyArray3410<U>
  : T extends object
  ? DeepReadonlyObject3410<T>
  : T;

interface DeepReadonlyArray3410<T> extends ReadonlyArray<DeepReadonly3410<T>> {}

type DeepReadonlyObject3410<T> = {
  readonly [P in keyof T]: DeepReadonly3410<T[P]>;
};

type UnionToIntersection3410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3410<T> = UnionToIntersection3410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3410<T extends unknown[], V> = [...T, V];

type TuplifyUnion3410<T, L = LastOf3410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3410<TuplifyUnion3410<Exclude<T, L>>, L>;

type DeepPartial3410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3410<T[P]> }
  : T;

type Paths3410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3410<K, Paths3410<T[K], Prev3410[D]>> : never }[keyof T]
  : never;

type Prev3410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3410 {
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

type ConfigPaths3410 = Paths3410<NestedConfig3410>;

interface HeavyProps3410 {
  config: DeepPartial3410<NestedConfig3410>;
  path?: ConfigPaths3410;
}

const HeavyComponent3410 = memo(function HeavyComponent3410({ config }: HeavyProps3410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3410.displayName = 'HeavyComponent3410';
export default HeavyComponent3410;
