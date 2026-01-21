'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11514<T> = T extends (infer U)[]
  ? DeepReadonlyArray11514<U>
  : T extends object
  ? DeepReadonlyObject11514<T>
  : T;

interface DeepReadonlyArray11514<T> extends ReadonlyArray<DeepReadonly11514<T>> {}

type DeepReadonlyObject11514<T> = {
  readonly [P in keyof T]: DeepReadonly11514<T[P]>;
};

type UnionToIntersection11514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11514<T> = UnionToIntersection11514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11514<T extends unknown[], V> = [...T, V];

type TuplifyUnion11514<T, L = LastOf11514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11514<TuplifyUnion11514<Exclude<T, L>>, L>;

type DeepPartial11514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11514<T[P]> }
  : T;

type Paths11514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11514<K, Paths11514<T[K], Prev11514[D]>> : never }[keyof T]
  : never;

type Prev11514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11514 {
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

type ConfigPaths11514 = Paths11514<NestedConfig11514>;

interface HeavyProps11514 {
  config: DeepPartial11514<NestedConfig11514>;
  path?: ConfigPaths11514;
}

const HeavyComponent11514 = memo(function HeavyComponent11514({ config }: HeavyProps11514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11514.displayName = 'HeavyComponent11514';
export default HeavyComponent11514;
