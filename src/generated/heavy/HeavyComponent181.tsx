'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly181<T> = T extends (infer U)[]
  ? DeepReadonlyArray181<U>
  : T extends object
  ? DeepReadonlyObject181<T>
  : T;

interface DeepReadonlyArray181<T> extends ReadonlyArray<DeepReadonly181<T>> {}

type DeepReadonlyObject181<T> = {
  readonly [P in keyof T]: DeepReadonly181<T[P]>;
};

type UnionToIntersection181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf181<T> = UnionToIntersection181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push181<T extends unknown[], V> = [...T, V];

type TuplifyUnion181<T, L = LastOf181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push181<TuplifyUnion181<Exclude<T, L>>, L>;

type DeepPartial181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial181<T[P]> }
  : T;

type Paths181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join181<K, Paths181<T[K], Prev181[D]>> : never }[keyof T]
  : never;

type Prev181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig181 {
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

type ConfigPaths181 = Paths181<NestedConfig181>;

interface HeavyProps181 {
  config: DeepPartial181<NestedConfig181>;
  path?: ConfigPaths181;
}

const HeavyComponent181 = memo(function HeavyComponent181({ config }: HeavyProps181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent181.displayName = 'HeavyComponent181';
export default HeavyComponent181;
