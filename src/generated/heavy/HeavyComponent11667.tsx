'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11667<T> = T extends (infer U)[]
  ? DeepReadonlyArray11667<U>
  : T extends object
  ? DeepReadonlyObject11667<T>
  : T;

interface DeepReadonlyArray11667<T> extends ReadonlyArray<DeepReadonly11667<T>> {}

type DeepReadonlyObject11667<T> = {
  readonly [P in keyof T]: DeepReadonly11667<T[P]>;
};

type UnionToIntersection11667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11667<T> = UnionToIntersection11667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11667<T extends unknown[], V> = [...T, V];

type TuplifyUnion11667<T, L = LastOf11667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11667<TuplifyUnion11667<Exclude<T, L>>, L>;

type DeepPartial11667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11667<T[P]> }
  : T;

type Paths11667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11667<K, Paths11667<T[K], Prev11667[D]>> : never }[keyof T]
  : never;

type Prev11667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11667 {
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

type ConfigPaths11667 = Paths11667<NestedConfig11667>;

interface HeavyProps11667 {
  config: DeepPartial11667<NestedConfig11667>;
  path?: ConfigPaths11667;
}

const HeavyComponent11667 = memo(function HeavyComponent11667({ config }: HeavyProps11667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11667.displayName = 'HeavyComponent11667';
export default HeavyComponent11667;
