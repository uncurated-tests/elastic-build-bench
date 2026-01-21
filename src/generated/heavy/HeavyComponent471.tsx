'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly471<T> = T extends (infer U)[]
  ? DeepReadonlyArray471<U>
  : T extends object
  ? DeepReadonlyObject471<T>
  : T;

interface DeepReadonlyArray471<T> extends ReadonlyArray<DeepReadonly471<T>> {}

type DeepReadonlyObject471<T> = {
  readonly [P in keyof T]: DeepReadonly471<T[P]>;
};

type UnionToIntersection471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf471<T> = UnionToIntersection471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push471<T extends unknown[], V> = [...T, V];

type TuplifyUnion471<T, L = LastOf471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push471<TuplifyUnion471<Exclude<T, L>>, L>;

type DeepPartial471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial471<T[P]> }
  : T;

type Paths471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join471<K, Paths471<T[K], Prev471[D]>> : never }[keyof T]
  : never;

type Prev471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig471 {
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

type ConfigPaths471 = Paths471<NestedConfig471>;

interface HeavyProps471 {
  config: DeepPartial471<NestedConfig471>;
  path?: ConfigPaths471;
}

const HeavyComponent471 = memo(function HeavyComponent471({ config }: HeavyProps471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent471.displayName = 'HeavyComponent471';
export default HeavyComponent471;
