'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11361<T> = T extends (infer U)[]
  ? DeepReadonlyArray11361<U>
  : T extends object
  ? DeepReadonlyObject11361<T>
  : T;

interface DeepReadonlyArray11361<T> extends ReadonlyArray<DeepReadonly11361<T>> {}

type DeepReadonlyObject11361<T> = {
  readonly [P in keyof T]: DeepReadonly11361<T[P]>;
};

type UnionToIntersection11361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11361<T> = UnionToIntersection11361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11361<T extends unknown[], V> = [...T, V];

type TuplifyUnion11361<T, L = LastOf11361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11361<TuplifyUnion11361<Exclude<T, L>>, L>;

type DeepPartial11361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11361<T[P]> }
  : T;

type Paths11361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11361<K, Paths11361<T[K], Prev11361[D]>> : never }[keyof T]
  : never;

type Prev11361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11361 {
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

type ConfigPaths11361 = Paths11361<NestedConfig11361>;

interface HeavyProps11361 {
  config: DeepPartial11361<NestedConfig11361>;
  path?: ConfigPaths11361;
}

const HeavyComponent11361 = memo(function HeavyComponent11361({ config }: HeavyProps11361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11361.displayName = 'HeavyComponent11361';
export default HeavyComponent11361;
