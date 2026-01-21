'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3756<T> = T extends (infer U)[]
  ? DeepReadonlyArray3756<U>
  : T extends object
  ? DeepReadonlyObject3756<T>
  : T;

interface DeepReadonlyArray3756<T> extends ReadonlyArray<DeepReadonly3756<T>> {}

type DeepReadonlyObject3756<T> = {
  readonly [P in keyof T]: DeepReadonly3756<T[P]>;
};

type UnionToIntersection3756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3756<T> = UnionToIntersection3756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3756<T extends unknown[], V> = [...T, V];

type TuplifyUnion3756<T, L = LastOf3756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3756<TuplifyUnion3756<Exclude<T, L>>, L>;

type DeepPartial3756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3756<T[P]> }
  : T;

type Paths3756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3756<K, Paths3756<T[K], Prev3756[D]>> : never }[keyof T]
  : never;

type Prev3756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3756 {
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

type ConfigPaths3756 = Paths3756<NestedConfig3756>;

interface HeavyProps3756 {
  config: DeepPartial3756<NestedConfig3756>;
  path?: ConfigPaths3756;
}

const HeavyComponent3756 = memo(function HeavyComponent3756({ config }: HeavyProps3756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3756.displayName = 'HeavyComponent3756';
export default HeavyComponent3756;
