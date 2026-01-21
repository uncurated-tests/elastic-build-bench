'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11944<T> = T extends (infer U)[]
  ? DeepReadonlyArray11944<U>
  : T extends object
  ? DeepReadonlyObject11944<T>
  : T;

interface DeepReadonlyArray11944<T> extends ReadonlyArray<DeepReadonly11944<T>> {}

type DeepReadonlyObject11944<T> = {
  readonly [P in keyof T]: DeepReadonly11944<T[P]>;
};

type UnionToIntersection11944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11944<T> = UnionToIntersection11944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11944<T extends unknown[], V> = [...T, V];

type TuplifyUnion11944<T, L = LastOf11944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11944<TuplifyUnion11944<Exclude<T, L>>, L>;

type DeepPartial11944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11944<T[P]> }
  : T;

type Paths11944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11944<K, Paths11944<T[K], Prev11944[D]>> : never }[keyof T]
  : never;

type Prev11944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11944 {
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

type ConfigPaths11944 = Paths11944<NestedConfig11944>;

interface HeavyProps11944 {
  config: DeepPartial11944<NestedConfig11944>;
  path?: ConfigPaths11944;
}

const HeavyComponent11944 = memo(function HeavyComponent11944({ config }: HeavyProps11944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11944.displayName = 'HeavyComponent11944';
export default HeavyComponent11944;
