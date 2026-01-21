'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11132<T> = T extends (infer U)[]
  ? DeepReadonlyArray11132<U>
  : T extends object
  ? DeepReadonlyObject11132<T>
  : T;

interface DeepReadonlyArray11132<T> extends ReadonlyArray<DeepReadonly11132<T>> {}

type DeepReadonlyObject11132<T> = {
  readonly [P in keyof T]: DeepReadonly11132<T[P]>;
};

type UnionToIntersection11132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11132<T> = UnionToIntersection11132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11132<T extends unknown[], V> = [...T, V];

type TuplifyUnion11132<T, L = LastOf11132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11132<TuplifyUnion11132<Exclude<T, L>>, L>;

type DeepPartial11132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11132<T[P]> }
  : T;

type Paths11132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11132<K, Paths11132<T[K], Prev11132[D]>> : never }[keyof T]
  : never;

type Prev11132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11132 {
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

type ConfigPaths11132 = Paths11132<NestedConfig11132>;

interface HeavyProps11132 {
  config: DeepPartial11132<NestedConfig11132>;
  path?: ConfigPaths11132;
}

const HeavyComponent11132 = memo(function HeavyComponent11132({ config }: HeavyProps11132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11132.displayName = 'HeavyComponent11132';
export default HeavyComponent11132;
