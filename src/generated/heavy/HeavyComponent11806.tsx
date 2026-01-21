'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11806<T> = T extends (infer U)[]
  ? DeepReadonlyArray11806<U>
  : T extends object
  ? DeepReadonlyObject11806<T>
  : T;

interface DeepReadonlyArray11806<T> extends ReadonlyArray<DeepReadonly11806<T>> {}

type DeepReadonlyObject11806<T> = {
  readonly [P in keyof T]: DeepReadonly11806<T[P]>;
};

type UnionToIntersection11806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11806<T> = UnionToIntersection11806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11806<T extends unknown[], V> = [...T, V];

type TuplifyUnion11806<T, L = LastOf11806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11806<TuplifyUnion11806<Exclude<T, L>>, L>;

type DeepPartial11806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11806<T[P]> }
  : T;

type Paths11806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11806<K, Paths11806<T[K], Prev11806[D]>> : never }[keyof T]
  : never;

type Prev11806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11806 {
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

type ConfigPaths11806 = Paths11806<NestedConfig11806>;

interface HeavyProps11806 {
  config: DeepPartial11806<NestedConfig11806>;
  path?: ConfigPaths11806;
}

const HeavyComponent11806 = memo(function HeavyComponent11806({ config }: HeavyProps11806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11806.displayName = 'HeavyComponent11806';
export default HeavyComponent11806;
