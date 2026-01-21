'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11151<T> = T extends (infer U)[]
  ? DeepReadonlyArray11151<U>
  : T extends object
  ? DeepReadonlyObject11151<T>
  : T;

interface DeepReadonlyArray11151<T> extends ReadonlyArray<DeepReadonly11151<T>> {}

type DeepReadonlyObject11151<T> = {
  readonly [P in keyof T]: DeepReadonly11151<T[P]>;
};

type UnionToIntersection11151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11151<T> = UnionToIntersection11151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11151<T extends unknown[], V> = [...T, V];

type TuplifyUnion11151<T, L = LastOf11151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11151<TuplifyUnion11151<Exclude<T, L>>, L>;

type DeepPartial11151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11151<T[P]> }
  : T;

type Paths11151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11151<K, Paths11151<T[K], Prev11151[D]>> : never }[keyof T]
  : never;

type Prev11151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11151 {
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

type ConfigPaths11151 = Paths11151<NestedConfig11151>;

interface HeavyProps11151 {
  config: DeepPartial11151<NestedConfig11151>;
  path?: ConfigPaths11151;
}

const HeavyComponent11151 = memo(function HeavyComponent11151({ config }: HeavyProps11151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11151.displayName = 'HeavyComponent11151';
export default HeavyComponent11151;
