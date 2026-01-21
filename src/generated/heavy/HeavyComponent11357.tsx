'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11357<T> = T extends (infer U)[]
  ? DeepReadonlyArray11357<U>
  : T extends object
  ? DeepReadonlyObject11357<T>
  : T;

interface DeepReadonlyArray11357<T> extends ReadonlyArray<DeepReadonly11357<T>> {}

type DeepReadonlyObject11357<T> = {
  readonly [P in keyof T]: DeepReadonly11357<T[P]>;
};

type UnionToIntersection11357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11357<T> = UnionToIntersection11357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11357<T extends unknown[], V> = [...T, V];

type TuplifyUnion11357<T, L = LastOf11357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11357<TuplifyUnion11357<Exclude<T, L>>, L>;

type DeepPartial11357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11357<T[P]> }
  : T;

type Paths11357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11357<K, Paths11357<T[K], Prev11357[D]>> : never }[keyof T]
  : never;

type Prev11357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11357 {
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

type ConfigPaths11357 = Paths11357<NestedConfig11357>;

interface HeavyProps11357 {
  config: DeepPartial11357<NestedConfig11357>;
  path?: ConfigPaths11357;
}

const HeavyComponent11357 = memo(function HeavyComponent11357({ config }: HeavyProps11357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11357.displayName = 'HeavyComponent11357';
export default HeavyComponent11357;
