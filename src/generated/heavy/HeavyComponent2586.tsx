'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2586<T> = T extends (infer U)[]
  ? DeepReadonlyArray2586<U>
  : T extends object
  ? DeepReadonlyObject2586<T>
  : T;

interface DeepReadonlyArray2586<T> extends ReadonlyArray<DeepReadonly2586<T>> {}

type DeepReadonlyObject2586<T> = {
  readonly [P in keyof T]: DeepReadonly2586<T[P]>;
};

type UnionToIntersection2586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2586<T> = UnionToIntersection2586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2586<T extends unknown[], V> = [...T, V];

type TuplifyUnion2586<T, L = LastOf2586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2586<TuplifyUnion2586<Exclude<T, L>>, L>;

type DeepPartial2586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2586<T[P]> }
  : T;

type Paths2586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2586<K, Paths2586<T[K], Prev2586[D]>> : never }[keyof T]
  : never;

type Prev2586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2586 {
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

type ConfigPaths2586 = Paths2586<NestedConfig2586>;

interface HeavyProps2586 {
  config: DeepPartial2586<NestedConfig2586>;
  path?: ConfigPaths2586;
}

const HeavyComponent2586 = memo(function HeavyComponent2586({ config }: HeavyProps2586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2586.displayName = 'HeavyComponent2586';
export default HeavyComponent2586;
