'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2370<T> = T extends (infer U)[]
  ? DeepReadonlyArray2370<U>
  : T extends object
  ? DeepReadonlyObject2370<T>
  : T;

interface DeepReadonlyArray2370<T> extends ReadonlyArray<DeepReadonly2370<T>> {}

type DeepReadonlyObject2370<T> = {
  readonly [P in keyof T]: DeepReadonly2370<T[P]>;
};

type UnionToIntersection2370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2370<T> = UnionToIntersection2370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2370<T extends unknown[], V> = [...T, V];

type TuplifyUnion2370<T, L = LastOf2370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2370<TuplifyUnion2370<Exclude<T, L>>, L>;

type DeepPartial2370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2370<T[P]> }
  : T;

type Paths2370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2370<K, Paths2370<T[K], Prev2370[D]>> : never }[keyof T]
  : never;

type Prev2370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2370 {
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

type ConfigPaths2370 = Paths2370<NestedConfig2370>;

interface HeavyProps2370 {
  config: DeepPartial2370<NestedConfig2370>;
  path?: ConfigPaths2370;
}

const HeavyComponent2370 = memo(function HeavyComponent2370({ config }: HeavyProps2370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2370.displayName = 'HeavyComponent2370';
export default HeavyComponent2370;
