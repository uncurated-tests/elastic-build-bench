'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3771<T> = T extends (infer U)[]
  ? DeepReadonlyArray3771<U>
  : T extends object
  ? DeepReadonlyObject3771<T>
  : T;

interface DeepReadonlyArray3771<T> extends ReadonlyArray<DeepReadonly3771<T>> {}

type DeepReadonlyObject3771<T> = {
  readonly [P in keyof T]: DeepReadonly3771<T[P]>;
};

type UnionToIntersection3771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3771<T> = UnionToIntersection3771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3771<T extends unknown[], V> = [...T, V];

type TuplifyUnion3771<T, L = LastOf3771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3771<TuplifyUnion3771<Exclude<T, L>>, L>;

type DeepPartial3771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3771<T[P]> }
  : T;

type Paths3771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3771<K, Paths3771<T[K], Prev3771[D]>> : never }[keyof T]
  : never;

type Prev3771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3771 {
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

type ConfigPaths3771 = Paths3771<NestedConfig3771>;

interface HeavyProps3771 {
  config: DeepPartial3771<NestedConfig3771>;
  path?: ConfigPaths3771;
}

const HeavyComponent3771 = memo(function HeavyComponent3771({ config }: HeavyProps3771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3771.displayName = 'HeavyComponent3771';
export default HeavyComponent3771;
