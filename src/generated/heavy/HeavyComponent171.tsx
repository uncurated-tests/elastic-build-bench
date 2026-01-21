'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly171<T> = T extends (infer U)[]
  ? DeepReadonlyArray171<U>
  : T extends object
  ? DeepReadonlyObject171<T>
  : T;

interface DeepReadonlyArray171<T> extends ReadonlyArray<DeepReadonly171<T>> {}

type DeepReadonlyObject171<T> = {
  readonly [P in keyof T]: DeepReadonly171<T[P]>;
};

type UnionToIntersection171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf171<T> = UnionToIntersection171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push171<T extends unknown[], V> = [...T, V];

type TuplifyUnion171<T, L = LastOf171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push171<TuplifyUnion171<Exclude<T, L>>, L>;

type DeepPartial171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial171<T[P]> }
  : T;

type Paths171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join171<K, Paths171<T[K], Prev171[D]>> : never }[keyof T]
  : never;

type Prev171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig171 {
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

type ConfigPaths171 = Paths171<NestedConfig171>;

interface HeavyProps171 {
  config: DeepPartial171<NestedConfig171>;
  path?: ConfigPaths171;
}

const HeavyComponent171 = memo(function HeavyComponent171({ config }: HeavyProps171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent171.displayName = 'HeavyComponent171';
export default HeavyComponent171;
