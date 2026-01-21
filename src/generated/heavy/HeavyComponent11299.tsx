'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11299<T> = T extends (infer U)[]
  ? DeepReadonlyArray11299<U>
  : T extends object
  ? DeepReadonlyObject11299<T>
  : T;

interface DeepReadonlyArray11299<T> extends ReadonlyArray<DeepReadonly11299<T>> {}

type DeepReadonlyObject11299<T> = {
  readonly [P in keyof T]: DeepReadonly11299<T[P]>;
};

type UnionToIntersection11299<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11299<T> = UnionToIntersection11299<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11299<T extends unknown[], V> = [...T, V];

type TuplifyUnion11299<T, L = LastOf11299<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11299<TuplifyUnion11299<Exclude<T, L>>, L>;

type DeepPartial11299<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11299<T[P]> }
  : T;

type Paths11299<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11299<K, Paths11299<T[K], Prev11299[D]>> : never }[keyof T]
  : never;

type Prev11299 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11299<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11299 {
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

type ConfigPaths11299 = Paths11299<NestedConfig11299>;

interface HeavyProps11299 {
  config: DeepPartial11299<NestedConfig11299>;
  path?: ConfigPaths11299;
}

const HeavyComponent11299 = memo(function HeavyComponent11299({ config }: HeavyProps11299) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11299) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11299 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11299: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11299.displayName = 'HeavyComponent11299';
export default HeavyComponent11299;
