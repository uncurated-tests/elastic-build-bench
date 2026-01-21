'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11232<T> = T extends (infer U)[]
  ? DeepReadonlyArray11232<U>
  : T extends object
  ? DeepReadonlyObject11232<T>
  : T;

interface DeepReadonlyArray11232<T> extends ReadonlyArray<DeepReadonly11232<T>> {}

type DeepReadonlyObject11232<T> = {
  readonly [P in keyof T]: DeepReadonly11232<T[P]>;
};

type UnionToIntersection11232<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11232<T> = UnionToIntersection11232<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11232<T extends unknown[], V> = [...T, V];

type TuplifyUnion11232<T, L = LastOf11232<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11232<TuplifyUnion11232<Exclude<T, L>>, L>;

type DeepPartial11232<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11232<T[P]> }
  : T;

type Paths11232<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11232<K, Paths11232<T[K], Prev11232[D]>> : never }[keyof T]
  : never;

type Prev11232 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11232<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11232 {
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

type ConfigPaths11232 = Paths11232<NestedConfig11232>;

interface HeavyProps11232 {
  config: DeepPartial11232<NestedConfig11232>;
  path?: ConfigPaths11232;
}

const HeavyComponent11232 = memo(function HeavyComponent11232({ config }: HeavyProps11232) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11232) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11232 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11232: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11232.displayName = 'HeavyComponent11232';
export default HeavyComponent11232;
