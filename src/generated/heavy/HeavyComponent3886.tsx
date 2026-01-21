'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3886<T> = T extends (infer U)[]
  ? DeepReadonlyArray3886<U>
  : T extends object
  ? DeepReadonlyObject3886<T>
  : T;

interface DeepReadonlyArray3886<T> extends ReadonlyArray<DeepReadonly3886<T>> {}

type DeepReadonlyObject3886<T> = {
  readonly [P in keyof T]: DeepReadonly3886<T[P]>;
};

type UnionToIntersection3886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3886<T> = UnionToIntersection3886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3886<T extends unknown[], V> = [...T, V];

type TuplifyUnion3886<T, L = LastOf3886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3886<TuplifyUnion3886<Exclude<T, L>>, L>;

type DeepPartial3886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3886<T[P]> }
  : T;

type Paths3886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3886<K, Paths3886<T[K], Prev3886[D]>> : never }[keyof T]
  : never;

type Prev3886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3886 {
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

type ConfigPaths3886 = Paths3886<NestedConfig3886>;

interface HeavyProps3886 {
  config: DeepPartial3886<NestedConfig3886>;
  path?: ConfigPaths3886;
}

const HeavyComponent3886 = memo(function HeavyComponent3886({ config }: HeavyProps3886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3886.displayName = 'HeavyComponent3886';
export default HeavyComponent3886;
