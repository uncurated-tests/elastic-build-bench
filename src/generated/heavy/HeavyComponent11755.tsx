'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11755<T> = T extends (infer U)[]
  ? DeepReadonlyArray11755<U>
  : T extends object
  ? DeepReadonlyObject11755<T>
  : T;

interface DeepReadonlyArray11755<T> extends ReadonlyArray<DeepReadonly11755<T>> {}

type DeepReadonlyObject11755<T> = {
  readonly [P in keyof T]: DeepReadonly11755<T[P]>;
};

type UnionToIntersection11755<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11755<T> = UnionToIntersection11755<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11755<T extends unknown[], V> = [...T, V];

type TuplifyUnion11755<T, L = LastOf11755<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11755<TuplifyUnion11755<Exclude<T, L>>, L>;

type DeepPartial11755<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11755<T[P]> }
  : T;

type Paths11755<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11755<K, Paths11755<T[K], Prev11755[D]>> : never }[keyof T]
  : never;

type Prev11755 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11755<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11755 {
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

type ConfigPaths11755 = Paths11755<NestedConfig11755>;

interface HeavyProps11755 {
  config: DeepPartial11755<NestedConfig11755>;
  path?: ConfigPaths11755;
}

const HeavyComponent11755 = memo(function HeavyComponent11755({ config }: HeavyProps11755) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11755) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11755 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11755: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11755.displayName = 'HeavyComponent11755';
export default HeavyComponent11755;
