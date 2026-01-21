'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11005<T> = T extends (infer U)[]
  ? DeepReadonlyArray11005<U>
  : T extends object
  ? DeepReadonlyObject11005<T>
  : T;

interface DeepReadonlyArray11005<T> extends ReadonlyArray<DeepReadonly11005<T>> {}

type DeepReadonlyObject11005<T> = {
  readonly [P in keyof T]: DeepReadonly11005<T[P]>;
};

type UnionToIntersection11005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11005<T> = UnionToIntersection11005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11005<T extends unknown[], V> = [...T, V];

type TuplifyUnion11005<T, L = LastOf11005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11005<TuplifyUnion11005<Exclude<T, L>>, L>;

type DeepPartial11005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11005<T[P]> }
  : T;

type Paths11005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11005<K, Paths11005<T[K], Prev11005[D]>> : never }[keyof T]
  : never;

type Prev11005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11005 {
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

type ConfigPaths11005 = Paths11005<NestedConfig11005>;

interface HeavyProps11005 {
  config: DeepPartial11005<NestedConfig11005>;
  path?: ConfigPaths11005;
}

const HeavyComponent11005 = memo(function HeavyComponent11005({ config }: HeavyProps11005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11005.displayName = 'HeavyComponent11005';
export default HeavyComponent11005;
