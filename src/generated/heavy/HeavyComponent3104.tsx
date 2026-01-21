'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3104<T> = T extends (infer U)[]
  ? DeepReadonlyArray3104<U>
  : T extends object
  ? DeepReadonlyObject3104<T>
  : T;

interface DeepReadonlyArray3104<T> extends ReadonlyArray<DeepReadonly3104<T>> {}

type DeepReadonlyObject3104<T> = {
  readonly [P in keyof T]: DeepReadonly3104<T[P]>;
};

type UnionToIntersection3104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3104<T> = UnionToIntersection3104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3104<T extends unknown[], V> = [...T, V];

type TuplifyUnion3104<T, L = LastOf3104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3104<TuplifyUnion3104<Exclude<T, L>>, L>;

type DeepPartial3104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3104<T[P]> }
  : T;

type Paths3104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3104<K, Paths3104<T[K], Prev3104[D]>> : never }[keyof T]
  : never;

type Prev3104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3104 {
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

type ConfigPaths3104 = Paths3104<NestedConfig3104>;

interface HeavyProps3104 {
  config: DeepPartial3104<NestedConfig3104>;
  path?: ConfigPaths3104;
}

const HeavyComponent3104 = memo(function HeavyComponent3104({ config }: HeavyProps3104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3104.displayName = 'HeavyComponent3104';
export default HeavyComponent3104;
