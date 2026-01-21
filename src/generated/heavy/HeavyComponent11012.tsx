'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11012<T> = T extends (infer U)[]
  ? DeepReadonlyArray11012<U>
  : T extends object
  ? DeepReadonlyObject11012<T>
  : T;

interface DeepReadonlyArray11012<T> extends ReadonlyArray<DeepReadonly11012<T>> {}

type DeepReadonlyObject11012<T> = {
  readonly [P in keyof T]: DeepReadonly11012<T[P]>;
};

type UnionToIntersection11012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11012<T> = UnionToIntersection11012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11012<T extends unknown[], V> = [...T, V];

type TuplifyUnion11012<T, L = LastOf11012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11012<TuplifyUnion11012<Exclude<T, L>>, L>;

type DeepPartial11012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11012<T[P]> }
  : T;

type Paths11012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11012<K, Paths11012<T[K], Prev11012[D]>> : never }[keyof T]
  : never;

type Prev11012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11012 {
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

type ConfigPaths11012 = Paths11012<NestedConfig11012>;

interface HeavyProps11012 {
  config: DeepPartial11012<NestedConfig11012>;
  path?: ConfigPaths11012;
}

const HeavyComponent11012 = memo(function HeavyComponent11012({ config }: HeavyProps11012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11012.displayName = 'HeavyComponent11012';
export default HeavyComponent11012;
