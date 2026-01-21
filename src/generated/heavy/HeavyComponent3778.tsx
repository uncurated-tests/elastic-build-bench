'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3778<T> = T extends (infer U)[]
  ? DeepReadonlyArray3778<U>
  : T extends object
  ? DeepReadonlyObject3778<T>
  : T;

interface DeepReadonlyArray3778<T> extends ReadonlyArray<DeepReadonly3778<T>> {}

type DeepReadonlyObject3778<T> = {
  readonly [P in keyof T]: DeepReadonly3778<T[P]>;
};

type UnionToIntersection3778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3778<T> = UnionToIntersection3778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3778<T extends unknown[], V> = [...T, V];

type TuplifyUnion3778<T, L = LastOf3778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3778<TuplifyUnion3778<Exclude<T, L>>, L>;

type DeepPartial3778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3778<T[P]> }
  : T;

type Paths3778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3778<K, Paths3778<T[K], Prev3778[D]>> : never }[keyof T]
  : never;

type Prev3778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3778 {
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

type ConfigPaths3778 = Paths3778<NestedConfig3778>;

interface HeavyProps3778 {
  config: DeepPartial3778<NestedConfig3778>;
  path?: ConfigPaths3778;
}

const HeavyComponent3778 = memo(function HeavyComponent3778({ config }: HeavyProps3778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3778.displayName = 'HeavyComponent3778';
export default HeavyComponent3778;
