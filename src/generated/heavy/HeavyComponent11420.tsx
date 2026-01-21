'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11420<T> = T extends (infer U)[]
  ? DeepReadonlyArray11420<U>
  : T extends object
  ? DeepReadonlyObject11420<T>
  : T;

interface DeepReadonlyArray11420<T> extends ReadonlyArray<DeepReadonly11420<T>> {}

type DeepReadonlyObject11420<T> = {
  readonly [P in keyof T]: DeepReadonly11420<T[P]>;
};

type UnionToIntersection11420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11420<T> = UnionToIntersection11420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11420<T extends unknown[], V> = [...T, V];

type TuplifyUnion11420<T, L = LastOf11420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11420<TuplifyUnion11420<Exclude<T, L>>, L>;

type DeepPartial11420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11420<T[P]> }
  : T;

type Paths11420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11420<K, Paths11420<T[K], Prev11420[D]>> : never }[keyof T]
  : never;

type Prev11420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11420 {
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

type ConfigPaths11420 = Paths11420<NestedConfig11420>;

interface HeavyProps11420 {
  config: DeepPartial11420<NestedConfig11420>;
  path?: ConfigPaths11420;
}

const HeavyComponent11420 = memo(function HeavyComponent11420({ config }: HeavyProps11420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11420.displayName = 'HeavyComponent11420';
export default HeavyComponent11420;
