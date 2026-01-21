'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11835<T> = T extends (infer U)[]
  ? DeepReadonlyArray11835<U>
  : T extends object
  ? DeepReadonlyObject11835<T>
  : T;

interface DeepReadonlyArray11835<T> extends ReadonlyArray<DeepReadonly11835<T>> {}

type DeepReadonlyObject11835<T> = {
  readonly [P in keyof T]: DeepReadonly11835<T[P]>;
};

type UnionToIntersection11835<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11835<T> = UnionToIntersection11835<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11835<T extends unknown[], V> = [...T, V];

type TuplifyUnion11835<T, L = LastOf11835<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11835<TuplifyUnion11835<Exclude<T, L>>, L>;

type DeepPartial11835<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11835<T[P]> }
  : T;

type Paths11835<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11835<K, Paths11835<T[K], Prev11835[D]>> : never }[keyof T]
  : never;

type Prev11835 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11835<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11835 {
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

type ConfigPaths11835 = Paths11835<NestedConfig11835>;

interface HeavyProps11835 {
  config: DeepPartial11835<NestedConfig11835>;
  path?: ConfigPaths11835;
}

const HeavyComponent11835 = memo(function HeavyComponent11835({ config }: HeavyProps11835) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11835) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11835 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11835: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11835.displayName = 'HeavyComponent11835';
export default HeavyComponent11835;
