'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11666<T> = T extends (infer U)[]
  ? DeepReadonlyArray11666<U>
  : T extends object
  ? DeepReadonlyObject11666<T>
  : T;

interface DeepReadonlyArray11666<T> extends ReadonlyArray<DeepReadonly11666<T>> {}

type DeepReadonlyObject11666<T> = {
  readonly [P in keyof T]: DeepReadonly11666<T[P]>;
};

type UnionToIntersection11666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11666<T> = UnionToIntersection11666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11666<T extends unknown[], V> = [...T, V];

type TuplifyUnion11666<T, L = LastOf11666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11666<TuplifyUnion11666<Exclude<T, L>>, L>;

type DeepPartial11666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11666<T[P]> }
  : T;

type Paths11666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11666<K, Paths11666<T[K], Prev11666[D]>> : never }[keyof T]
  : never;

type Prev11666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11666 {
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

type ConfigPaths11666 = Paths11666<NestedConfig11666>;

interface HeavyProps11666 {
  config: DeepPartial11666<NestedConfig11666>;
  path?: ConfigPaths11666;
}

const HeavyComponent11666 = memo(function HeavyComponent11666({ config }: HeavyProps11666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11666.displayName = 'HeavyComponent11666';
export default HeavyComponent11666;
