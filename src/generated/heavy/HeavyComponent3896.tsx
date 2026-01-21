'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3896<T> = T extends (infer U)[]
  ? DeepReadonlyArray3896<U>
  : T extends object
  ? DeepReadonlyObject3896<T>
  : T;

interface DeepReadonlyArray3896<T> extends ReadonlyArray<DeepReadonly3896<T>> {}

type DeepReadonlyObject3896<T> = {
  readonly [P in keyof T]: DeepReadonly3896<T[P]>;
};

type UnionToIntersection3896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3896<T> = UnionToIntersection3896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3896<T extends unknown[], V> = [...T, V];

type TuplifyUnion3896<T, L = LastOf3896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3896<TuplifyUnion3896<Exclude<T, L>>, L>;

type DeepPartial3896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3896<T[P]> }
  : T;

type Paths3896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3896<K, Paths3896<T[K], Prev3896[D]>> : never }[keyof T]
  : never;

type Prev3896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3896 {
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

type ConfigPaths3896 = Paths3896<NestedConfig3896>;

interface HeavyProps3896 {
  config: DeepPartial3896<NestedConfig3896>;
  path?: ConfigPaths3896;
}

const HeavyComponent3896 = memo(function HeavyComponent3896({ config }: HeavyProps3896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3896.displayName = 'HeavyComponent3896';
export default HeavyComponent3896;
