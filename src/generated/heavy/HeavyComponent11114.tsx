'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11114<T> = T extends (infer U)[]
  ? DeepReadonlyArray11114<U>
  : T extends object
  ? DeepReadonlyObject11114<T>
  : T;

interface DeepReadonlyArray11114<T> extends ReadonlyArray<DeepReadonly11114<T>> {}

type DeepReadonlyObject11114<T> = {
  readonly [P in keyof T]: DeepReadonly11114<T[P]>;
};

type UnionToIntersection11114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11114<T> = UnionToIntersection11114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11114<T extends unknown[], V> = [...T, V];

type TuplifyUnion11114<T, L = LastOf11114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11114<TuplifyUnion11114<Exclude<T, L>>, L>;

type DeepPartial11114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11114<T[P]> }
  : T;

type Paths11114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11114<K, Paths11114<T[K], Prev11114[D]>> : never }[keyof T]
  : never;

type Prev11114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11114 {
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

type ConfigPaths11114 = Paths11114<NestedConfig11114>;

interface HeavyProps11114 {
  config: DeepPartial11114<NestedConfig11114>;
  path?: ConfigPaths11114;
}

const HeavyComponent11114 = memo(function HeavyComponent11114({ config }: HeavyProps11114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11114.displayName = 'HeavyComponent11114';
export default HeavyComponent11114;
