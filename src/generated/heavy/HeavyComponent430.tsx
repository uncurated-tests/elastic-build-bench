'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly430<T> = T extends (infer U)[]
  ? DeepReadonlyArray430<U>
  : T extends object
  ? DeepReadonlyObject430<T>
  : T;

interface DeepReadonlyArray430<T> extends ReadonlyArray<DeepReadonly430<T>> {}

type DeepReadonlyObject430<T> = {
  readonly [P in keyof T]: DeepReadonly430<T[P]>;
};

type UnionToIntersection430<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf430<T> = UnionToIntersection430<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push430<T extends unknown[], V> = [...T, V];

type TuplifyUnion430<T, L = LastOf430<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push430<TuplifyUnion430<Exclude<T, L>>, L>;

type DeepPartial430<T> = T extends object
  ? { [P in keyof T]?: DeepPartial430<T[P]> }
  : T;

type Paths430<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join430<K, Paths430<T[K], Prev430[D]>> : never }[keyof T]
  : never;

type Prev430 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join430<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig430 {
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

type ConfigPaths430 = Paths430<NestedConfig430>;

interface HeavyProps430 {
  config: DeepPartial430<NestedConfig430>;
  path?: ConfigPaths430;
}

const HeavyComponent430 = memo(function HeavyComponent430({ config }: HeavyProps430) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 430) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-430 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H430: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent430.displayName = 'HeavyComponent430';
export default HeavyComponent430;
