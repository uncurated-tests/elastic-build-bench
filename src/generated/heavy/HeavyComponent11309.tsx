'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11309<T> = T extends (infer U)[]
  ? DeepReadonlyArray11309<U>
  : T extends object
  ? DeepReadonlyObject11309<T>
  : T;

interface DeepReadonlyArray11309<T> extends ReadonlyArray<DeepReadonly11309<T>> {}

type DeepReadonlyObject11309<T> = {
  readonly [P in keyof T]: DeepReadonly11309<T[P]>;
};

type UnionToIntersection11309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11309<T> = UnionToIntersection11309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11309<T extends unknown[], V> = [...T, V];

type TuplifyUnion11309<T, L = LastOf11309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11309<TuplifyUnion11309<Exclude<T, L>>, L>;

type DeepPartial11309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11309<T[P]> }
  : T;

type Paths11309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11309<K, Paths11309<T[K], Prev11309[D]>> : never }[keyof T]
  : never;

type Prev11309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11309 {
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

type ConfigPaths11309 = Paths11309<NestedConfig11309>;

interface HeavyProps11309 {
  config: DeepPartial11309<NestedConfig11309>;
  path?: ConfigPaths11309;
}

const HeavyComponent11309 = memo(function HeavyComponent11309({ config }: HeavyProps11309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11309.displayName = 'HeavyComponent11309';
export default HeavyComponent11309;
