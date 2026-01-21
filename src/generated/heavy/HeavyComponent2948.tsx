'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2948<T> = T extends (infer U)[]
  ? DeepReadonlyArray2948<U>
  : T extends object
  ? DeepReadonlyObject2948<T>
  : T;

interface DeepReadonlyArray2948<T> extends ReadonlyArray<DeepReadonly2948<T>> {}

type DeepReadonlyObject2948<T> = {
  readonly [P in keyof T]: DeepReadonly2948<T[P]>;
};

type UnionToIntersection2948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2948<T> = UnionToIntersection2948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2948<T extends unknown[], V> = [...T, V];

type TuplifyUnion2948<T, L = LastOf2948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2948<TuplifyUnion2948<Exclude<T, L>>, L>;

type DeepPartial2948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2948<T[P]> }
  : T;

type Paths2948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2948<K, Paths2948<T[K], Prev2948[D]>> : never }[keyof T]
  : never;

type Prev2948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2948 {
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

type ConfigPaths2948 = Paths2948<NestedConfig2948>;

interface HeavyProps2948 {
  config: DeepPartial2948<NestedConfig2948>;
  path?: ConfigPaths2948;
}

const HeavyComponent2948 = memo(function HeavyComponent2948({ config }: HeavyProps2948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2948.displayName = 'HeavyComponent2948';
export default HeavyComponent2948;
