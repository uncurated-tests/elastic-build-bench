'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11090<T> = T extends (infer U)[]
  ? DeepReadonlyArray11090<U>
  : T extends object
  ? DeepReadonlyObject11090<T>
  : T;

interface DeepReadonlyArray11090<T> extends ReadonlyArray<DeepReadonly11090<T>> {}

type DeepReadonlyObject11090<T> = {
  readonly [P in keyof T]: DeepReadonly11090<T[P]>;
};

type UnionToIntersection11090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11090<T> = UnionToIntersection11090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11090<T extends unknown[], V> = [...T, V];

type TuplifyUnion11090<T, L = LastOf11090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11090<TuplifyUnion11090<Exclude<T, L>>, L>;

type DeepPartial11090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11090<T[P]> }
  : T;

type Paths11090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11090<K, Paths11090<T[K], Prev11090[D]>> : never }[keyof T]
  : never;

type Prev11090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11090 {
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

type ConfigPaths11090 = Paths11090<NestedConfig11090>;

interface HeavyProps11090 {
  config: DeepPartial11090<NestedConfig11090>;
  path?: ConfigPaths11090;
}

const HeavyComponent11090 = memo(function HeavyComponent11090({ config }: HeavyProps11090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11090.displayName = 'HeavyComponent11090';
export default HeavyComponent11090;
