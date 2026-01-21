'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11255<T> = T extends (infer U)[]
  ? DeepReadonlyArray11255<U>
  : T extends object
  ? DeepReadonlyObject11255<T>
  : T;

interface DeepReadonlyArray11255<T> extends ReadonlyArray<DeepReadonly11255<T>> {}

type DeepReadonlyObject11255<T> = {
  readonly [P in keyof T]: DeepReadonly11255<T[P]>;
};

type UnionToIntersection11255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11255<T> = UnionToIntersection11255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11255<T extends unknown[], V> = [...T, V];

type TuplifyUnion11255<T, L = LastOf11255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11255<TuplifyUnion11255<Exclude<T, L>>, L>;

type DeepPartial11255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11255<T[P]> }
  : T;

type Paths11255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11255<K, Paths11255<T[K], Prev11255[D]>> : never }[keyof T]
  : never;

type Prev11255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11255 {
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

type ConfigPaths11255 = Paths11255<NestedConfig11255>;

interface HeavyProps11255 {
  config: DeepPartial11255<NestedConfig11255>;
  path?: ConfigPaths11255;
}

const HeavyComponent11255 = memo(function HeavyComponent11255({ config }: HeavyProps11255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11255.displayName = 'HeavyComponent11255';
export default HeavyComponent11255;
