'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11261<T> = T extends (infer U)[]
  ? DeepReadonlyArray11261<U>
  : T extends object
  ? DeepReadonlyObject11261<T>
  : T;

interface DeepReadonlyArray11261<T> extends ReadonlyArray<DeepReadonly11261<T>> {}

type DeepReadonlyObject11261<T> = {
  readonly [P in keyof T]: DeepReadonly11261<T[P]>;
};

type UnionToIntersection11261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11261<T> = UnionToIntersection11261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11261<T extends unknown[], V> = [...T, V];

type TuplifyUnion11261<T, L = LastOf11261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11261<TuplifyUnion11261<Exclude<T, L>>, L>;

type DeepPartial11261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11261<T[P]> }
  : T;

type Paths11261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11261<K, Paths11261<T[K], Prev11261[D]>> : never }[keyof T]
  : never;

type Prev11261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11261 {
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

type ConfigPaths11261 = Paths11261<NestedConfig11261>;

interface HeavyProps11261 {
  config: DeepPartial11261<NestedConfig11261>;
  path?: ConfigPaths11261;
}

const HeavyComponent11261 = memo(function HeavyComponent11261({ config }: HeavyProps11261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11261.displayName = 'HeavyComponent11261';
export default HeavyComponent11261;
