'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11694<T> = T extends (infer U)[]
  ? DeepReadonlyArray11694<U>
  : T extends object
  ? DeepReadonlyObject11694<T>
  : T;

interface DeepReadonlyArray11694<T> extends ReadonlyArray<DeepReadonly11694<T>> {}

type DeepReadonlyObject11694<T> = {
  readonly [P in keyof T]: DeepReadonly11694<T[P]>;
};

type UnionToIntersection11694<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11694<T> = UnionToIntersection11694<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11694<T extends unknown[], V> = [...T, V];

type TuplifyUnion11694<T, L = LastOf11694<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11694<TuplifyUnion11694<Exclude<T, L>>, L>;

type DeepPartial11694<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11694<T[P]> }
  : T;

type Paths11694<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11694<K, Paths11694<T[K], Prev11694[D]>> : never }[keyof T]
  : never;

type Prev11694 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11694<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11694 {
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

type ConfigPaths11694 = Paths11694<NestedConfig11694>;

interface HeavyProps11694 {
  config: DeepPartial11694<NestedConfig11694>;
  path?: ConfigPaths11694;
}

const HeavyComponent11694 = memo(function HeavyComponent11694({ config }: HeavyProps11694) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11694) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11694 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11694: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11694.displayName = 'HeavyComponent11694';
export default HeavyComponent11694;
