'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3722<T> = T extends (infer U)[]
  ? DeepReadonlyArray3722<U>
  : T extends object
  ? DeepReadonlyObject3722<T>
  : T;

interface DeepReadonlyArray3722<T> extends ReadonlyArray<DeepReadonly3722<T>> {}

type DeepReadonlyObject3722<T> = {
  readonly [P in keyof T]: DeepReadonly3722<T[P]>;
};

type UnionToIntersection3722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3722<T> = UnionToIntersection3722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3722<T extends unknown[], V> = [...T, V];

type TuplifyUnion3722<T, L = LastOf3722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3722<TuplifyUnion3722<Exclude<T, L>>, L>;

type DeepPartial3722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3722<T[P]> }
  : T;

type Paths3722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3722<K, Paths3722<T[K], Prev3722[D]>> : never }[keyof T]
  : never;

type Prev3722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3722 {
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

type ConfigPaths3722 = Paths3722<NestedConfig3722>;

interface HeavyProps3722 {
  config: DeepPartial3722<NestedConfig3722>;
  path?: ConfigPaths3722;
}

const HeavyComponent3722 = memo(function HeavyComponent3722({ config }: HeavyProps3722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3722.displayName = 'HeavyComponent3722';
export default HeavyComponent3722;
