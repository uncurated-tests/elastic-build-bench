'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11440<T> = T extends (infer U)[]
  ? DeepReadonlyArray11440<U>
  : T extends object
  ? DeepReadonlyObject11440<T>
  : T;

interface DeepReadonlyArray11440<T> extends ReadonlyArray<DeepReadonly11440<T>> {}

type DeepReadonlyObject11440<T> = {
  readonly [P in keyof T]: DeepReadonly11440<T[P]>;
};

type UnionToIntersection11440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11440<T> = UnionToIntersection11440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11440<T extends unknown[], V> = [...T, V];

type TuplifyUnion11440<T, L = LastOf11440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11440<TuplifyUnion11440<Exclude<T, L>>, L>;

type DeepPartial11440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11440<T[P]> }
  : T;

type Paths11440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11440<K, Paths11440<T[K], Prev11440[D]>> : never }[keyof T]
  : never;

type Prev11440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11440 {
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

type ConfigPaths11440 = Paths11440<NestedConfig11440>;

interface HeavyProps11440 {
  config: DeepPartial11440<NestedConfig11440>;
  path?: ConfigPaths11440;
}

const HeavyComponent11440 = memo(function HeavyComponent11440({ config }: HeavyProps11440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11440.displayName = 'HeavyComponent11440';
export default HeavyComponent11440;
