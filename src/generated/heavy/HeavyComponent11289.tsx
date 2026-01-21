'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11289<T> = T extends (infer U)[]
  ? DeepReadonlyArray11289<U>
  : T extends object
  ? DeepReadonlyObject11289<T>
  : T;

interface DeepReadonlyArray11289<T> extends ReadonlyArray<DeepReadonly11289<T>> {}

type DeepReadonlyObject11289<T> = {
  readonly [P in keyof T]: DeepReadonly11289<T[P]>;
};

type UnionToIntersection11289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11289<T> = UnionToIntersection11289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11289<T extends unknown[], V> = [...T, V];

type TuplifyUnion11289<T, L = LastOf11289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11289<TuplifyUnion11289<Exclude<T, L>>, L>;

type DeepPartial11289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11289<T[P]> }
  : T;

type Paths11289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11289<K, Paths11289<T[K], Prev11289[D]>> : never }[keyof T]
  : never;

type Prev11289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11289 {
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

type ConfigPaths11289 = Paths11289<NestedConfig11289>;

interface HeavyProps11289 {
  config: DeepPartial11289<NestedConfig11289>;
  path?: ConfigPaths11289;
}

const HeavyComponent11289 = memo(function HeavyComponent11289({ config }: HeavyProps11289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11289.displayName = 'HeavyComponent11289';
export default HeavyComponent11289;
