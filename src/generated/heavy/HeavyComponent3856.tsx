'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3856<T> = T extends (infer U)[]
  ? DeepReadonlyArray3856<U>
  : T extends object
  ? DeepReadonlyObject3856<T>
  : T;

interface DeepReadonlyArray3856<T> extends ReadonlyArray<DeepReadonly3856<T>> {}

type DeepReadonlyObject3856<T> = {
  readonly [P in keyof T]: DeepReadonly3856<T[P]>;
};

type UnionToIntersection3856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3856<T> = UnionToIntersection3856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3856<T extends unknown[], V> = [...T, V];

type TuplifyUnion3856<T, L = LastOf3856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3856<TuplifyUnion3856<Exclude<T, L>>, L>;

type DeepPartial3856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3856<T[P]> }
  : T;

type Paths3856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3856<K, Paths3856<T[K], Prev3856[D]>> : never }[keyof T]
  : never;

type Prev3856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3856 {
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

type ConfigPaths3856 = Paths3856<NestedConfig3856>;

interface HeavyProps3856 {
  config: DeepPartial3856<NestedConfig3856>;
  path?: ConfigPaths3856;
}

const HeavyComponent3856 = memo(function HeavyComponent3856({ config }: HeavyProps3856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3856.displayName = 'HeavyComponent3856';
export default HeavyComponent3856;
