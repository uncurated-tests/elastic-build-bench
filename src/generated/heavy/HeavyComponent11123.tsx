'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11123<T> = T extends (infer U)[]
  ? DeepReadonlyArray11123<U>
  : T extends object
  ? DeepReadonlyObject11123<T>
  : T;

interface DeepReadonlyArray11123<T> extends ReadonlyArray<DeepReadonly11123<T>> {}

type DeepReadonlyObject11123<T> = {
  readonly [P in keyof T]: DeepReadonly11123<T[P]>;
};

type UnionToIntersection11123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11123<T> = UnionToIntersection11123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11123<T extends unknown[], V> = [...T, V];

type TuplifyUnion11123<T, L = LastOf11123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11123<TuplifyUnion11123<Exclude<T, L>>, L>;

type DeepPartial11123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11123<T[P]> }
  : T;

type Paths11123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11123<K, Paths11123<T[K], Prev11123[D]>> : never }[keyof T]
  : never;

type Prev11123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11123 {
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

type ConfigPaths11123 = Paths11123<NestedConfig11123>;

interface HeavyProps11123 {
  config: DeepPartial11123<NestedConfig11123>;
  path?: ConfigPaths11123;
}

const HeavyComponent11123 = memo(function HeavyComponent11123({ config }: HeavyProps11123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11123.displayName = 'HeavyComponent11123';
export default HeavyComponent11123;
