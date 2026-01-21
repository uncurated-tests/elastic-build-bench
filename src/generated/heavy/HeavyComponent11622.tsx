'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11622<T> = T extends (infer U)[]
  ? DeepReadonlyArray11622<U>
  : T extends object
  ? DeepReadonlyObject11622<T>
  : T;

interface DeepReadonlyArray11622<T> extends ReadonlyArray<DeepReadonly11622<T>> {}

type DeepReadonlyObject11622<T> = {
  readonly [P in keyof T]: DeepReadonly11622<T[P]>;
};

type UnionToIntersection11622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11622<T> = UnionToIntersection11622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11622<T extends unknown[], V> = [...T, V];

type TuplifyUnion11622<T, L = LastOf11622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11622<TuplifyUnion11622<Exclude<T, L>>, L>;

type DeepPartial11622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11622<T[P]> }
  : T;

type Paths11622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11622<K, Paths11622<T[K], Prev11622[D]>> : never }[keyof T]
  : never;

type Prev11622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11622 {
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

type ConfigPaths11622 = Paths11622<NestedConfig11622>;

interface HeavyProps11622 {
  config: DeepPartial11622<NestedConfig11622>;
  path?: ConfigPaths11622;
}

const HeavyComponent11622 = memo(function HeavyComponent11622({ config }: HeavyProps11622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11622.displayName = 'HeavyComponent11622';
export default HeavyComponent11622;
