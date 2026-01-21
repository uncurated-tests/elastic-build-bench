'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11076<T> = T extends (infer U)[]
  ? DeepReadonlyArray11076<U>
  : T extends object
  ? DeepReadonlyObject11076<T>
  : T;

interface DeepReadonlyArray11076<T> extends ReadonlyArray<DeepReadonly11076<T>> {}

type DeepReadonlyObject11076<T> = {
  readonly [P in keyof T]: DeepReadonly11076<T[P]>;
};

type UnionToIntersection11076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11076<T> = UnionToIntersection11076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11076<T extends unknown[], V> = [...T, V];

type TuplifyUnion11076<T, L = LastOf11076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11076<TuplifyUnion11076<Exclude<T, L>>, L>;

type DeepPartial11076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11076<T[P]> }
  : T;

type Paths11076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11076<K, Paths11076<T[K], Prev11076[D]>> : never }[keyof T]
  : never;

type Prev11076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11076 {
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

type ConfigPaths11076 = Paths11076<NestedConfig11076>;

interface HeavyProps11076 {
  config: DeepPartial11076<NestedConfig11076>;
  path?: ConfigPaths11076;
}

const HeavyComponent11076 = memo(function HeavyComponent11076({ config }: HeavyProps11076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11076.displayName = 'HeavyComponent11076';
export default HeavyComponent11076;
