'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3905<T> = T extends (infer U)[]
  ? DeepReadonlyArray3905<U>
  : T extends object
  ? DeepReadonlyObject3905<T>
  : T;

interface DeepReadonlyArray3905<T> extends ReadonlyArray<DeepReadonly3905<T>> {}

type DeepReadonlyObject3905<T> = {
  readonly [P in keyof T]: DeepReadonly3905<T[P]>;
};

type UnionToIntersection3905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3905<T> = UnionToIntersection3905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3905<T extends unknown[], V> = [...T, V];

type TuplifyUnion3905<T, L = LastOf3905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3905<TuplifyUnion3905<Exclude<T, L>>, L>;

type DeepPartial3905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3905<T[P]> }
  : T;

type Paths3905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3905<K, Paths3905<T[K], Prev3905[D]>> : never }[keyof T]
  : never;

type Prev3905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3905 {
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

type ConfigPaths3905 = Paths3905<NestedConfig3905>;

interface HeavyProps3905 {
  config: DeepPartial3905<NestedConfig3905>;
  path?: ConfigPaths3905;
}

const HeavyComponent3905 = memo(function HeavyComponent3905({ config }: HeavyProps3905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3905.displayName = 'HeavyComponent3905';
export default HeavyComponent3905;
