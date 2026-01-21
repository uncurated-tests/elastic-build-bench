'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11044<T> = T extends (infer U)[]
  ? DeepReadonlyArray11044<U>
  : T extends object
  ? DeepReadonlyObject11044<T>
  : T;

interface DeepReadonlyArray11044<T> extends ReadonlyArray<DeepReadonly11044<T>> {}

type DeepReadonlyObject11044<T> = {
  readonly [P in keyof T]: DeepReadonly11044<T[P]>;
};

type UnionToIntersection11044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11044<T> = UnionToIntersection11044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11044<T extends unknown[], V> = [...T, V];

type TuplifyUnion11044<T, L = LastOf11044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11044<TuplifyUnion11044<Exclude<T, L>>, L>;

type DeepPartial11044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11044<T[P]> }
  : T;

type Paths11044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11044<K, Paths11044<T[K], Prev11044[D]>> : never }[keyof T]
  : never;

type Prev11044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11044 {
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

type ConfigPaths11044 = Paths11044<NestedConfig11044>;

interface HeavyProps11044 {
  config: DeepPartial11044<NestedConfig11044>;
  path?: ConfigPaths11044;
}

const HeavyComponent11044 = memo(function HeavyComponent11044({ config }: HeavyProps11044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11044.displayName = 'HeavyComponent11044';
export default HeavyComponent11044;
