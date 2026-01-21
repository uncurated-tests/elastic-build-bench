'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11466<T> = T extends (infer U)[]
  ? DeepReadonlyArray11466<U>
  : T extends object
  ? DeepReadonlyObject11466<T>
  : T;

interface DeepReadonlyArray11466<T> extends ReadonlyArray<DeepReadonly11466<T>> {}

type DeepReadonlyObject11466<T> = {
  readonly [P in keyof T]: DeepReadonly11466<T[P]>;
};

type UnionToIntersection11466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11466<T> = UnionToIntersection11466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11466<T extends unknown[], V> = [...T, V];

type TuplifyUnion11466<T, L = LastOf11466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11466<TuplifyUnion11466<Exclude<T, L>>, L>;

type DeepPartial11466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11466<T[P]> }
  : T;

type Paths11466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11466<K, Paths11466<T[K], Prev11466[D]>> : never }[keyof T]
  : never;

type Prev11466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11466 {
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

type ConfigPaths11466 = Paths11466<NestedConfig11466>;

interface HeavyProps11466 {
  config: DeepPartial11466<NestedConfig11466>;
  path?: ConfigPaths11466;
}

const HeavyComponent11466 = memo(function HeavyComponent11466({ config }: HeavyProps11466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11466.displayName = 'HeavyComponent11466';
export default HeavyComponent11466;
