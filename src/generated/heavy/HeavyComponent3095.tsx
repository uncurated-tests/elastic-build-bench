'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3095<T> = T extends (infer U)[]
  ? DeepReadonlyArray3095<U>
  : T extends object
  ? DeepReadonlyObject3095<T>
  : T;

interface DeepReadonlyArray3095<T> extends ReadonlyArray<DeepReadonly3095<T>> {}

type DeepReadonlyObject3095<T> = {
  readonly [P in keyof T]: DeepReadonly3095<T[P]>;
};

type UnionToIntersection3095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3095<T> = UnionToIntersection3095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3095<T extends unknown[], V> = [...T, V];

type TuplifyUnion3095<T, L = LastOf3095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3095<TuplifyUnion3095<Exclude<T, L>>, L>;

type DeepPartial3095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3095<T[P]> }
  : T;

type Paths3095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3095<K, Paths3095<T[K], Prev3095[D]>> : never }[keyof T]
  : never;

type Prev3095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3095 {
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

type ConfigPaths3095 = Paths3095<NestedConfig3095>;

interface HeavyProps3095 {
  config: DeepPartial3095<NestedConfig3095>;
  path?: ConfigPaths3095;
}

const HeavyComponent3095 = memo(function HeavyComponent3095({ config }: HeavyProps3095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3095.displayName = 'HeavyComponent3095';
export default HeavyComponent3095;
