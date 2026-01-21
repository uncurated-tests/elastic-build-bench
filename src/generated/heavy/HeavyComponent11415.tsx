'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11415<T> = T extends (infer U)[]
  ? DeepReadonlyArray11415<U>
  : T extends object
  ? DeepReadonlyObject11415<T>
  : T;

interface DeepReadonlyArray11415<T> extends ReadonlyArray<DeepReadonly11415<T>> {}

type DeepReadonlyObject11415<T> = {
  readonly [P in keyof T]: DeepReadonly11415<T[P]>;
};

type UnionToIntersection11415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11415<T> = UnionToIntersection11415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11415<T extends unknown[], V> = [...T, V];

type TuplifyUnion11415<T, L = LastOf11415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11415<TuplifyUnion11415<Exclude<T, L>>, L>;

type DeepPartial11415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11415<T[P]> }
  : T;

type Paths11415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11415<K, Paths11415<T[K], Prev11415[D]>> : never }[keyof T]
  : never;

type Prev11415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11415 {
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

type ConfigPaths11415 = Paths11415<NestedConfig11415>;

interface HeavyProps11415 {
  config: DeepPartial11415<NestedConfig11415>;
  path?: ConfigPaths11415;
}

const HeavyComponent11415 = memo(function HeavyComponent11415({ config }: HeavyProps11415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11415.displayName = 'HeavyComponent11415';
export default HeavyComponent11415;
