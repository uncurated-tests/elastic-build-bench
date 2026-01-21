'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2926<T> = T extends (infer U)[]
  ? DeepReadonlyArray2926<U>
  : T extends object
  ? DeepReadonlyObject2926<T>
  : T;

interface DeepReadonlyArray2926<T> extends ReadonlyArray<DeepReadonly2926<T>> {}

type DeepReadonlyObject2926<T> = {
  readonly [P in keyof T]: DeepReadonly2926<T[P]>;
};

type UnionToIntersection2926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2926<T> = UnionToIntersection2926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2926<T extends unknown[], V> = [...T, V];

type TuplifyUnion2926<T, L = LastOf2926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2926<TuplifyUnion2926<Exclude<T, L>>, L>;

type DeepPartial2926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2926<T[P]> }
  : T;

type Paths2926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2926<K, Paths2926<T[K], Prev2926[D]>> : never }[keyof T]
  : never;

type Prev2926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2926 {
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

type ConfigPaths2926 = Paths2926<NestedConfig2926>;

interface HeavyProps2926 {
  config: DeepPartial2926<NestedConfig2926>;
  path?: ConfigPaths2926;
}

const HeavyComponent2926 = memo(function HeavyComponent2926({ config }: HeavyProps2926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2926.displayName = 'HeavyComponent2926';
export default HeavyComponent2926;
