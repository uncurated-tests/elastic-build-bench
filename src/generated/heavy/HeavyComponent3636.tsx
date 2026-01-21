'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3636<T> = T extends (infer U)[]
  ? DeepReadonlyArray3636<U>
  : T extends object
  ? DeepReadonlyObject3636<T>
  : T;

interface DeepReadonlyArray3636<T> extends ReadonlyArray<DeepReadonly3636<T>> {}

type DeepReadonlyObject3636<T> = {
  readonly [P in keyof T]: DeepReadonly3636<T[P]>;
};

type UnionToIntersection3636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3636<T> = UnionToIntersection3636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3636<T extends unknown[], V> = [...T, V];

type TuplifyUnion3636<T, L = LastOf3636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3636<TuplifyUnion3636<Exclude<T, L>>, L>;

type DeepPartial3636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3636<T[P]> }
  : T;

type Paths3636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3636<K, Paths3636<T[K], Prev3636[D]>> : never }[keyof T]
  : never;

type Prev3636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3636 {
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

type ConfigPaths3636 = Paths3636<NestedConfig3636>;

interface HeavyProps3636 {
  config: DeepPartial3636<NestedConfig3636>;
  path?: ConfigPaths3636;
}

const HeavyComponent3636 = memo(function HeavyComponent3636({ config }: HeavyProps3636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3636.displayName = 'HeavyComponent3636';
export default HeavyComponent3636;
