'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3388<T> = T extends (infer U)[]
  ? DeepReadonlyArray3388<U>
  : T extends object
  ? DeepReadonlyObject3388<T>
  : T;

interface DeepReadonlyArray3388<T> extends ReadonlyArray<DeepReadonly3388<T>> {}

type DeepReadonlyObject3388<T> = {
  readonly [P in keyof T]: DeepReadonly3388<T[P]>;
};

type UnionToIntersection3388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3388<T> = UnionToIntersection3388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3388<T extends unknown[], V> = [...T, V];

type TuplifyUnion3388<T, L = LastOf3388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3388<TuplifyUnion3388<Exclude<T, L>>, L>;

type DeepPartial3388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3388<T[P]> }
  : T;

type Paths3388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3388<K, Paths3388<T[K], Prev3388[D]>> : never }[keyof T]
  : never;

type Prev3388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3388 {
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

type ConfigPaths3388 = Paths3388<NestedConfig3388>;

interface HeavyProps3388 {
  config: DeepPartial3388<NestedConfig3388>;
  path?: ConfigPaths3388;
}

const HeavyComponent3388 = memo(function HeavyComponent3388({ config }: HeavyProps3388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3388.displayName = 'HeavyComponent3388';
export default HeavyComponent3388;
