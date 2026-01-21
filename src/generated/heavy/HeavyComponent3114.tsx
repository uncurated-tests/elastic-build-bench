'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3114<T> = T extends (infer U)[]
  ? DeepReadonlyArray3114<U>
  : T extends object
  ? DeepReadonlyObject3114<T>
  : T;

interface DeepReadonlyArray3114<T> extends ReadonlyArray<DeepReadonly3114<T>> {}

type DeepReadonlyObject3114<T> = {
  readonly [P in keyof T]: DeepReadonly3114<T[P]>;
};

type UnionToIntersection3114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3114<T> = UnionToIntersection3114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3114<T extends unknown[], V> = [...T, V];

type TuplifyUnion3114<T, L = LastOf3114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3114<TuplifyUnion3114<Exclude<T, L>>, L>;

type DeepPartial3114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3114<T[P]> }
  : T;

type Paths3114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3114<K, Paths3114<T[K], Prev3114[D]>> : never }[keyof T]
  : never;

type Prev3114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3114 {
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

type ConfigPaths3114 = Paths3114<NestedConfig3114>;

interface HeavyProps3114 {
  config: DeepPartial3114<NestedConfig3114>;
  path?: ConfigPaths3114;
}

const HeavyComponent3114 = memo(function HeavyComponent3114({ config }: HeavyProps3114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3114.displayName = 'HeavyComponent3114';
export default HeavyComponent3114;
