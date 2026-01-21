'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2375<T> = T extends (infer U)[]
  ? DeepReadonlyArray2375<U>
  : T extends object
  ? DeepReadonlyObject2375<T>
  : T;

interface DeepReadonlyArray2375<T> extends ReadonlyArray<DeepReadonly2375<T>> {}

type DeepReadonlyObject2375<T> = {
  readonly [P in keyof T]: DeepReadonly2375<T[P]>;
};

type UnionToIntersection2375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2375<T> = UnionToIntersection2375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2375<T extends unknown[], V> = [...T, V];

type TuplifyUnion2375<T, L = LastOf2375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2375<TuplifyUnion2375<Exclude<T, L>>, L>;

type DeepPartial2375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2375<T[P]> }
  : T;

type Paths2375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2375<K, Paths2375<T[K], Prev2375[D]>> : never }[keyof T]
  : never;

type Prev2375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2375 {
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

type ConfigPaths2375 = Paths2375<NestedConfig2375>;

interface HeavyProps2375 {
  config: DeepPartial2375<NestedConfig2375>;
  path?: ConfigPaths2375;
}

const HeavyComponent2375 = memo(function HeavyComponent2375({ config }: HeavyProps2375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2375.displayName = 'HeavyComponent2375';
export default HeavyComponent2375;
