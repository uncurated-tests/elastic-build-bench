'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2104<T> = T extends (infer U)[]
  ? DeepReadonlyArray2104<U>
  : T extends object
  ? DeepReadonlyObject2104<T>
  : T;

interface DeepReadonlyArray2104<T> extends ReadonlyArray<DeepReadonly2104<T>> {}

type DeepReadonlyObject2104<T> = {
  readonly [P in keyof T]: DeepReadonly2104<T[P]>;
};

type UnionToIntersection2104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2104<T> = UnionToIntersection2104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2104<T extends unknown[], V> = [...T, V];

type TuplifyUnion2104<T, L = LastOf2104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2104<TuplifyUnion2104<Exclude<T, L>>, L>;

type DeepPartial2104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2104<T[P]> }
  : T;

type Paths2104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2104<K, Paths2104<T[K], Prev2104[D]>> : never }[keyof T]
  : never;

type Prev2104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2104 {
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

type ConfigPaths2104 = Paths2104<NestedConfig2104>;

interface HeavyProps2104 {
  config: DeepPartial2104<NestedConfig2104>;
  path?: ConfigPaths2104;
}

const HeavyComponent2104 = memo(function HeavyComponent2104({ config }: HeavyProps2104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2104.displayName = 'HeavyComponent2104';
export default HeavyComponent2104;
