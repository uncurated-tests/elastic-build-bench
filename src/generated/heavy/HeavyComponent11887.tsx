'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11887<T> = T extends (infer U)[]
  ? DeepReadonlyArray11887<U>
  : T extends object
  ? DeepReadonlyObject11887<T>
  : T;

interface DeepReadonlyArray11887<T> extends ReadonlyArray<DeepReadonly11887<T>> {}

type DeepReadonlyObject11887<T> = {
  readonly [P in keyof T]: DeepReadonly11887<T[P]>;
};

type UnionToIntersection11887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11887<T> = UnionToIntersection11887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11887<T extends unknown[], V> = [...T, V];

type TuplifyUnion11887<T, L = LastOf11887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11887<TuplifyUnion11887<Exclude<T, L>>, L>;

type DeepPartial11887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11887<T[P]> }
  : T;

type Paths11887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11887<K, Paths11887<T[K], Prev11887[D]>> : never }[keyof T]
  : never;

type Prev11887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11887 {
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

type ConfigPaths11887 = Paths11887<NestedConfig11887>;

interface HeavyProps11887 {
  config: DeepPartial11887<NestedConfig11887>;
  path?: ConfigPaths11887;
}

const HeavyComponent11887 = memo(function HeavyComponent11887({ config }: HeavyProps11887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11887.displayName = 'HeavyComponent11887';
export default HeavyComponent11887;
