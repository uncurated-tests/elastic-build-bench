'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11920<T> = T extends (infer U)[]
  ? DeepReadonlyArray11920<U>
  : T extends object
  ? DeepReadonlyObject11920<T>
  : T;

interface DeepReadonlyArray11920<T> extends ReadonlyArray<DeepReadonly11920<T>> {}

type DeepReadonlyObject11920<T> = {
  readonly [P in keyof T]: DeepReadonly11920<T[P]>;
};

type UnionToIntersection11920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11920<T> = UnionToIntersection11920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11920<T extends unknown[], V> = [...T, V];

type TuplifyUnion11920<T, L = LastOf11920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11920<TuplifyUnion11920<Exclude<T, L>>, L>;

type DeepPartial11920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11920<T[P]> }
  : T;

type Paths11920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11920<K, Paths11920<T[K], Prev11920[D]>> : never }[keyof T]
  : never;

type Prev11920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11920 {
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

type ConfigPaths11920 = Paths11920<NestedConfig11920>;

interface HeavyProps11920 {
  config: DeepPartial11920<NestedConfig11920>;
  path?: ConfigPaths11920;
}

const HeavyComponent11920 = memo(function HeavyComponent11920({ config }: HeavyProps11920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11920.displayName = 'HeavyComponent11920';
export default HeavyComponent11920;
