'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3742<T> = T extends (infer U)[]
  ? DeepReadonlyArray3742<U>
  : T extends object
  ? DeepReadonlyObject3742<T>
  : T;

interface DeepReadonlyArray3742<T> extends ReadonlyArray<DeepReadonly3742<T>> {}

type DeepReadonlyObject3742<T> = {
  readonly [P in keyof T]: DeepReadonly3742<T[P]>;
};

type UnionToIntersection3742<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3742<T> = UnionToIntersection3742<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3742<T extends unknown[], V> = [...T, V];

type TuplifyUnion3742<T, L = LastOf3742<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3742<TuplifyUnion3742<Exclude<T, L>>, L>;

type DeepPartial3742<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3742<T[P]> }
  : T;

type Paths3742<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3742<K, Paths3742<T[K], Prev3742[D]>> : never }[keyof T]
  : never;

type Prev3742 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3742<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3742 {
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

type ConfigPaths3742 = Paths3742<NestedConfig3742>;

interface HeavyProps3742 {
  config: DeepPartial3742<NestedConfig3742>;
  path?: ConfigPaths3742;
}

const HeavyComponent3742 = memo(function HeavyComponent3742({ config }: HeavyProps3742) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3742) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3742 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3742: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3742.displayName = 'HeavyComponent3742';
export default HeavyComponent3742;
