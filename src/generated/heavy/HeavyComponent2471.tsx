'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2471<T> = T extends (infer U)[]
  ? DeepReadonlyArray2471<U>
  : T extends object
  ? DeepReadonlyObject2471<T>
  : T;

interface DeepReadonlyArray2471<T> extends ReadonlyArray<DeepReadonly2471<T>> {}

type DeepReadonlyObject2471<T> = {
  readonly [P in keyof T]: DeepReadonly2471<T[P]>;
};

type UnionToIntersection2471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2471<T> = UnionToIntersection2471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2471<T extends unknown[], V> = [...T, V];

type TuplifyUnion2471<T, L = LastOf2471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2471<TuplifyUnion2471<Exclude<T, L>>, L>;

type DeepPartial2471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2471<T[P]> }
  : T;

type Paths2471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2471<K, Paths2471<T[K], Prev2471[D]>> : never }[keyof T]
  : never;

type Prev2471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2471 {
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

type ConfigPaths2471 = Paths2471<NestedConfig2471>;

interface HeavyProps2471 {
  config: DeepPartial2471<NestedConfig2471>;
  path?: ConfigPaths2471;
}

const HeavyComponent2471 = memo(function HeavyComponent2471({ config }: HeavyProps2471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2471.displayName = 'HeavyComponent2471';
export default HeavyComponent2471;
