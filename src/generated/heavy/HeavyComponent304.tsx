'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly304<T> = T extends (infer U)[]
  ? DeepReadonlyArray304<U>
  : T extends object
  ? DeepReadonlyObject304<T>
  : T;

interface DeepReadonlyArray304<T> extends ReadonlyArray<DeepReadonly304<T>> {}

type DeepReadonlyObject304<T> = {
  readonly [P in keyof T]: DeepReadonly304<T[P]>;
};

type UnionToIntersection304<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf304<T> = UnionToIntersection304<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push304<T extends unknown[], V> = [...T, V];

type TuplifyUnion304<T, L = LastOf304<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push304<TuplifyUnion304<Exclude<T, L>>, L>;

type DeepPartial304<T> = T extends object
  ? { [P in keyof T]?: DeepPartial304<T[P]> }
  : T;

type Paths304<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join304<K, Paths304<T[K], Prev304[D]>> : never }[keyof T]
  : never;

type Prev304 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join304<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig304 {
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

type ConfigPaths304 = Paths304<NestedConfig304>;

interface HeavyProps304 {
  config: DeepPartial304<NestedConfig304>;
  path?: ConfigPaths304;
}

const HeavyComponent304 = memo(function HeavyComponent304({ config }: HeavyProps304) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 304) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-304 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H304: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent304.displayName = 'HeavyComponent304';
export default HeavyComponent304;
