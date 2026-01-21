'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11464<T> = T extends (infer U)[]
  ? DeepReadonlyArray11464<U>
  : T extends object
  ? DeepReadonlyObject11464<T>
  : T;

interface DeepReadonlyArray11464<T> extends ReadonlyArray<DeepReadonly11464<T>> {}

type DeepReadonlyObject11464<T> = {
  readonly [P in keyof T]: DeepReadonly11464<T[P]>;
};

type UnionToIntersection11464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11464<T> = UnionToIntersection11464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11464<T extends unknown[], V> = [...T, V];

type TuplifyUnion11464<T, L = LastOf11464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11464<TuplifyUnion11464<Exclude<T, L>>, L>;

type DeepPartial11464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11464<T[P]> }
  : T;

type Paths11464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11464<K, Paths11464<T[K], Prev11464[D]>> : never }[keyof T]
  : never;

type Prev11464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11464 {
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

type ConfigPaths11464 = Paths11464<NestedConfig11464>;

interface HeavyProps11464 {
  config: DeepPartial11464<NestedConfig11464>;
  path?: ConfigPaths11464;
}

const HeavyComponent11464 = memo(function HeavyComponent11464({ config }: HeavyProps11464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11464.displayName = 'HeavyComponent11464';
export default HeavyComponent11464;
