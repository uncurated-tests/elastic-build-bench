'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11206<T> = T extends (infer U)[]
  ? DeepReadonlyArray11206<U>
  : T extends object
  ? DeepReadonlyObject11206<T>
  : T;

interface DeepReadonlyArray11206<T> extends ReadonlyArray<DeepReadonly11206<T>> {}

type DeepReadonlyObject11206<T> = {
  readonly [P in keyof T]: DeepReadonly11206<T[P]>;
};

type UnionToIntersection11206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11206<T> = UnionToIntersection11206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11206<T extends unknown[], V> = [...T, V];

type TuplifyUnion11206<T, L = LastOf11206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11206<TuplifyUnion11206<Exclude<T, L>>, L>;

type DeepPartial11206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11206<T[P]> }
  : T;

type Paths11206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11206<K, Paths11206<T[K], Prev11206[D]>> : never }[keyof T]
  : never;

type Prev11206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11206 {
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

type ConfigPaths11206 = Paths11206<NestedConfig11206>;

interface HeavyProps11206 {
  config: DeepPartial11206<NestedConfig11206>;
  path?: ConfigPaths11206;
}

const HeavyComponent11206 = memo(function HeavyComponent11206({ config }: HeavyProps11206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11206.displayName = 'HeavyComponent11206';
export default HeavyComponent11206;
