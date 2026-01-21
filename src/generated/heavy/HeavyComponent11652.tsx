'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11652<T> = T extends (infer U)[]
  ? DeepReadonlyArray11652<U>
  : T extends object
  ? DeepReadonlyObject11652<T>
  : T;

interface DeepReadonlyArray11652<T> extends ReadonlyArray<DeepReadonly11652<T>> {}

type DeepReadonlyObject11652<T> = {
  readonly [P in keyof T]: DeepReadonly11652<T[P]>;
};

type UnionToIntersection11652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11652<T> = UnionToIntersection11652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11652<T extends unknown[], V> = [...T, V];

type TuplifyUnion11652<T, L = LastOf11652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11652<TuplifyUnion11652<Exclude<T, L>>, L>;

type DeepPartial11652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11652<T[P]> }
  : T;

type Paths11652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11652<K, Paths11652<T[K], Prev11652[D]>> : never }[keyof T]
  : never;

type Prev11652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11652 {
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

type ConfigPaths11652 = Paths11652<NestedConfig11652>;

interface HeavyProps11652 {
  config: DeepPartial11652<NestedConfig11652>;
  path?: ConfigPaths11652;
}

const HeavyComponent11652 = memo(function HeavyComponent11652({ config }: HeavyProps11652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11652.displayName = 'HeavyComponent11652';
export default HeavyComponent11652;
