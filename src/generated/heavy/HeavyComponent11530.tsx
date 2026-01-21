'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11530<T> = T extends (infer U)[]
  ? DeepReadonlyArray11530<U>
  : T extends object
  ? DeepReadonlyObject11530<T>
  : T;

interface DeepReadonlyArray11530<T> extends ReadonlyArray<DeepReadonly11530<T>> {}

type DeepReadonlyObject11530<T> = {
  readonly [P in keyof T]: DeepReadonly11530<T[P]>;
};

type UnionToIntersection11530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11530<T> = UnionToIntersection11530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11530<T extends unknown[], V> = [...T, V];

type TuplifyUnion11530<T, L = LastOf11530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11530<TuplifyUnion11530<Exclude<T, L>>, L>;

type DeepPartial11530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11530<T[P]> }
  : T;

type Paths11530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11530<K, Paths11530<T[K], Prev11530[D]>> : never }[keyof T]
  : never;

type Prev11530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11530 {
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

type ConfigPaths11530 = Paths11530<NestedConfig11530>;

interface HeavyProps11530 {
  config: DeepPartial11530<NestedConfig11530>;
  path?: ConfigPaths11530;
}

const HeavyComponent11530 = memo(function HeavyComponent11530({ config }: HeavyProps11530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11530.displayName = 'HeavyComponent11530';
export default HeavyComponent11530;
